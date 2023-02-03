import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
import { env } from "../environments/index";

const { JWT_KEY } = env;
const verifyJWTandCheckUser = async (token) => {
  let error = null,
    user = null;
  try {
    const data = jwt.verify(token, JWT_KEY);
    if (!data || !data.id) throw new Error("Invalid JWT token");
    user = await prisma.user.findUnique({
      where: {
        id: data.id,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        username: true,
      },
    });
    return [null, user];
  } catch (err) {
    return [err.message, null];
  }
};

export { verifyJWTandCheckUser };
