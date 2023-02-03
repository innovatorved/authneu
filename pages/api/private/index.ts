import { NextApiRequest, NextApiResponse } from "next";
import { verifyJWTandCheckUser } from "../../../utils/userFromJWT";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { token } = _req.headers;
  const [error, user] = await verifyJWTandCheckUser(token);
  if (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
    return;
  }
  console.log(user);
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: "API is working!",
  });
};

export default handler;
