import { NextResponse } from "next/server";

import type { ProgramResponseType } from "@/types/program";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const res = await fetch(`${process.env.BACKEND_URL}/program/${slug}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
    },
    next: { revalidate: 60 },
  });
  const data: ProgramResponseType = await res.json();

  return NextResponse.json(data);
}
