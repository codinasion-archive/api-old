import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get url from query
  const { image_url } = req.query;
  // await console.log(image_url);

  try {
    // Fetch image from github as buffer
    const buffer = await fetch(image_url as string, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.ARCHIVE_REPO_TOKEN}`,
      },
    }).then((res) => res.arrayBuffer());

    // Send image as buffer
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
    res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong :(",
      image_url,
    });
  }
}
