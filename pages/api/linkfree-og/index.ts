import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Buffer>
) {
  // Fetch image from github as buffer
  const buffer = await fetch(
    `https://raw.githubusercontent.com/codinasion/LinkFree-OG/og/linkfree.png`,
    {
      method: "GET",
    }
  ).then((res) => res.arrayBuffer());

  // Send image as buffer
  res.setHeader("Content-Type", "image/png");
  res.setHeader(
    "Cache-Control",
    "public, max-age=300, s-maxage=300, stale-while-revalidate=300"
  );
  res.status(200).send(Buffer.from(buffer));
}
