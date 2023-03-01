// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";

import type { SponsorResponseType } from "../index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SponsorResponseType[]>
) {
  // fetch featured sponsors data from backend
  const featuredSponsors = await fetch(
    `${process.env.BACKEND_URL}/github/sponsors/featured/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
      },
    }
  ).then((res: any) => res.json());

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(featuredSponsors);
}
