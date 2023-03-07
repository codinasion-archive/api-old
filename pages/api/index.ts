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
      path: "/linkfree-og",
      description: "LinkFree default OG Image",
    },
    {
      path: "/linkfree-og/users",
      description: "List of LinkFree users",
    },
    {
      path: "/linkfree-og/[username]",
      description: "LinkFree User OG Image",
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
    {
      path: "/sponsors",
      description: "List of all sponsors",
    },
    {
      path: "/sponsors/active",
      description: "List of active sponsors",
    },
    {
      path: "/sponsors/featured",
      description: "List of featured sponsors",
    },
    {
      path: "/tools",
      description: "List of @codinasion/tools",
    },
    {
      path: "/tools/[slug]",
      description: "Detail of a tool",
    },
    {
      path: "/tools/tags",
      description: "List of tool tags",
    }
  ];

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json({
    message: "Welcome to the Codinasion API 🤗",
    routes: apiRoutes,
  });
}
