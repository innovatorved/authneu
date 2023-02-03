import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

import jwt from "jsonwebtoken";

import { env } from "../../../environments/index";
import { verifyJWTandCheckUser } from "../../../utils/userFromJWT";

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
    if (!token) {
      throw new Error("Token not available");
    }
    const [error, user] = await verifyJWTandCheckUser(token);
    if (error) {
      res.status(401).json({
        success: false,
        message: error,
      });
      return;
    }

    res.status(202).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
  return;
};

export default handler;
