import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: "API is working!",
  });
};

export default handler;
