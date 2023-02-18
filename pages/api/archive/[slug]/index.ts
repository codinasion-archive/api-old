import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  // fetch data from github
  const archiveJson = await fetch(
    `${process.env.BACKEND_URL}/archive/github/users/search/${slug}/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
      },
    }
  );

  if (archiveJson.status === 404) {
    res.status(404).json({ message: "User Not Found" });
    return;
  }

  const archiveData = await archiveJson.json();

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(archiveData);
}
