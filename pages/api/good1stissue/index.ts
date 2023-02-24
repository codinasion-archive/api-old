// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";

export type Good1stIssueResponseType = {
  labels: {
    label: string;
    issue_count: number;
  };
  issues: {
    issue_title: string;
    issue_author: string;
    issue_url: string;
    issue_short_url: string;
    issue_labels: string[];
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Good1stIssueResponseType[]>
) {
  // fetch data from github
  const Good1stIssueData = await fetch(
    `${process.env.GFI_BACKEND_URL}/good1stissue`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.GFI_BACKEND_ACCESS_TOKEN}`,
      },
    }
  ).then((res: any) => res.json());

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(Good1stIssueData);
}
