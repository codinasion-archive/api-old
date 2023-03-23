import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path } = req.query;
  await console.log(path);

  if (path) {
    if ((path as string).startsWith("/program/")) {
      const slug = (path as string).replace("/program/", "");

      try {
        // Fetch image from github as buffer
        const bufferResponse = await fetch(
          `https://raw.githubusercontent.com/codinasion/scripts/og-program/${slug}.png`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.REPO_TOKEN}`,
            },
          }
        );

        if (bufferResponse.status !== 404) {
          const buffer = await bufferResponse.arrayBuffer();

          // Send image as buffer
          res.setHeader("Content-Type", "image/png");
          res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
          res.status(200).send(Buffer.from(buffer));
        }
      } catch (error) {
        await console.log(error);
      }
    }
  }

  try {
    // Fetch image from github as buffer
    const buffer = await fetch(
      `https://raw.githubusercontent.com/codinasion/scripts/og-home/home.png`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REPO_TOKEN}`,
        },
      }
    ).then((res) => res.arrayBuffer());

    // Send image as buffer
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
    res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong :(",
      path,
    });
  }
}
