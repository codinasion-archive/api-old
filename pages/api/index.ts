// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiRoutes = [
    {
      path: "/api/program",
      description: "List of programs",
    },
    {
      path: "/api/program/[slug]",
      description: "Detail of a program",
    },
  ];

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60");
  res.status(200).json(apiRoutes);
}
