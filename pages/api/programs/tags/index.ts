// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";

import type { ProgramResponseType } from "../index";

export type TagResponseType = {
  name: string;
  count: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TagResponseType[]>
) {
  // fetch programs data from github
  const programListJson = await fetch(
    "https://raw.githubusercontent.com/codinasion/program/data/programList.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res: any) => res.json());

  // Create tag list
  const tagList: TagResponseType[] = [];
  programListJson.forEach((program: ProgramResponseType) => {
    program.tags.forEach((tag: string) => {
      const tagIndex = tagList.findIndex((item) => item.name === tag);
      if (tagIndex === -1) {
        tagList.push({
          name: tag,
          count: 1,
        });
      } else {
        tagList[tagIndex].count += 1;
      }
    });
  });

  // Sort tag list
  tagList.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    } else if (a.count < b.count) {
      return 1;
    } else {
      return 0;
    }
  });

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(tagList);
}
