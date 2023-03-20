import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const res = await fetch(
    `https://raw.githubusercontent.com/codinasion/program/data/program/${slug}.json`,
    {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const programData = await res.json();

  return NextResponse.json(programData);
}
