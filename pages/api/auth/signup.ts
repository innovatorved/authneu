import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

import bcrypt from "bcryptjs";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method != "POST") {
    res.status(405).json({
      success: false,
      message: "Invalid Method",
    });
    return;
  }

  const { first_name, last_name, username, email, password } = _req.body;

  try {
    const HashPassword = await bcrypt.hash(password, 5);
    const user = await prisma.user.create({
      data: {
        first_name,
        last_name,
        username,
        email,
        password: HashPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "User is Created",
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
