import { NextResponse } from "next/server";

import type { LanguageResponseType } from "@/types/program";

export async function GET() {
  const res = await fetch(`${process.env.BACKEND_URL}/program/languages/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
    },
    next: { revalidate: 60 },
  });
  const data: LanguageResponseType[] = await res.json();

  return NextResponse.json(data);
}
