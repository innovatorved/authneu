import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { env } from "../../../environments/index";

const { JWT_KEY, ACCESS_COOKIE_EXPIRY } = env;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method != "GET") {
    res.status(401).json({
      success: false,
    });
    return;
  }

  try {
    const { email, password } = _req.body;

    if (!(email && password)) {
      res.status(400).json({
        success: false,
        error: "Compulsory fields are not filled!",
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user === null) {
      res.status(404).json({
        success: false,
        message: "User not available",
      });
      return;
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(402).json({
        success: false,
        error: "Password is not Correct",
      });
      return;
    }
    user.password = undefined;

    const token = jwt.sign(
      {
        id: user["id"],
        name: user["first_name"],
      },
      JWT_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.setHeader(
      "Set-Cookie",
      `token=${token}; path=/; expires=${new Date(
        Date.now() + ACCESS_COOKIE_EXPIRY
      ).toUTCString()}`
    );

    res.status(201).json({
      success: true,
      message: "Credetials Acceepted",
      token: token,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  return;
};

export default handler;
