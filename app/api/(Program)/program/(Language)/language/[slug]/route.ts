import { NextResponse } from "next/server";

import type { ProgramListResponseType } from "@/types/program";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  let slug = params.slug;

  // Convert slug to lowercase, so that the comparison is not case-sensitive
  slug = slug.toLowerCase();

  // decode special characters
  slug = slug.replace(/\-sharp/g, "#");
  slug = slug.replace(/\-plus/g, "+");

  // Get all the programs
  const res = await fetch(`${process.env.BACKEND_URL}/program/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
    },
    next: { revalidate: 60 },
  });
  const data: ProgramListResponseType[] = await res.json();

  // Filter the programs, where the slug matches the language in the list of languages
  const filteredData = data.filter((program) =>
    program.languages.some((language) => language.toLowerCase() === slug)
  );

  return NextResponse.json(filteredData);
}
