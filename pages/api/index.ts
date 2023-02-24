// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiRoutes = [
    {
      path: "/archive?image_url=[github_raw_url]",
      description: "Archive click image",
    },
    {
      path: "/archive/users",
      description: "List of archived users",
    },
    {
      path: "/archive/[username]",
      description: "Get user clicks",
    },
    {
      path: "/contributors",
      description: "List of all contributors",
    },
    {
      path: "/good1stissue",
      description: "List of good first issues",
    },
    {
      path: "/humans.txt",
      description: "Humans.txt file",
    },
    {
      path: "/programs",
      description: "List of programs",
    },
    {
      path: "/programs/[slug]",
      description: "Detail of a program",
    },
    {
      path: "/programs/tags",
      description: "List of program tags",
    },
  ];

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json({
    message: "Welcome to the Codinasion API 🤗",
    routes: apiRoutes,
  });
}
