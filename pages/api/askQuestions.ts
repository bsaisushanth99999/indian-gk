import query from "@/lib/queryapi";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await query();

  const message = {
    text: response || "I am not able to answer this, try another one...",
  };
  console.log(JSON.stringify(message.text));

  res.status(200).json({ answer: message.text });
}
