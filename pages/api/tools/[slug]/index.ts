// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";

import { ToolResponseType } from "..";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ToolResponseType>
) {
  try {
    const { slug } = req.query;

    // fetch data from github
    const toolJson = await fetch(
      `https://raw.githubusercontent.com/codinasion/data/tools/${slug}.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REPO_TOKEN}`,
        },
      }
    ).then((res: any) => res.json());

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
    res.status(200).json(toolJson);
  } catch (error) {
    res.redirect(301, "/500");
  }
}
