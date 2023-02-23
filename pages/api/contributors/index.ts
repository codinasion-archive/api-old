// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";

export type ContributorResponseType = {
  id: number;
  login: string;
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContributorResponseType[]>
) {
  // fetch contributors data from backend
  const contributors = await fetch(
    `${process.env.BACKEND_URL}/github/contributors`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
      },
    }
  ).then((res: any) => res.json());

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(contributors);
}
