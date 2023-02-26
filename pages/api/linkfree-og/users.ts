// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  // fetch all profile data from github
  const profilesData = await fetch(
    `https://api.github.com/repos/codinasion/LinkFree-OG/git/trees/og?recursive=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res: any) => res.json())
    .then((res) => res.tree);

  let profiles = [""];

  for (let profile of profilesData) {
    if (profile.path.startsWith("profile/") && profile.path.endsWith(".png")) {
      profiles.push(profile.path.replace("profile/", "").replace(".png", ""));
    }
  }

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(profiles);
}
