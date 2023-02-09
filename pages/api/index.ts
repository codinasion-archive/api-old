// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiRoutes = [
    {
      path: "/api/programs",
      description: "List of programs",
    },
    {
      path: "/api/programs/[slug]",
      description: "Detail of a program",
    },
    {
      path: "/api/programs/tags",
      description: "List of program tags",
    },
  ];

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(apiRoutes);
}
