// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";

export type ToolResponseType = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ToolResponseType[]>
) {
  // fetch data from github
  const toolsListJson = await fetch(
    "https://raw.githubusercontent.com/codinasion/data/tools/tools.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REPO_TOKEN}`,
      },
    }
  ).then((res: any) => res.json());

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(toolsListJson);
}
