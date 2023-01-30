import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

import jwt from "jsonwebtoken";

import { env } from "../../../constants/env";

const { JWT_TOKEN } = env;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method != "GET") {
    res.status(405).json({
      success: false,
    });
    return;
  }

  try {
    const { token } = _req.body;
    const data = jwt.verify(token, JWT_TOKEN);
    if (data) {
      res.status(201).json({
        success: true,
        message: data,
      });
    } else {
      res.status(201).json({
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
