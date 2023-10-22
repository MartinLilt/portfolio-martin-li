import { NextApiRequest, NextApiResponse } from "next";
import { staticOptions } from "@/static";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(staticOptions);
}
