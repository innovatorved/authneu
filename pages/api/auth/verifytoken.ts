import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

import jwt from "jsonwebtoken";

import { env } from "../../../environments/index";

const { JWT_KEY } = env;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method != "GET") {
    res.status(405).json({
      success: false,
    });
    return;
  }

  try {
    const { token } = _req.headers;
    const data = jwt.verify(token, JWT_KEY);
    if (data) {
      const user = await prisma.user.findUnique({
        where: {
          id: data.id,
        },
        select: {
          first_name: true,
          last_name: true,
          email: true,
          username: true,
        },
      });
      if (user === null) {
        res.status(400).json({
          success: false,
          message: "User not available",
        });
        return;
      }

      res.status(202).json({
        success: true,
        data: user,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Not find",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  return;
};

export default handler;
