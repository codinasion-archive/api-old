import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(
    "https://raw.githubusercontent.com/codinasion/scripts/program/program.json",
    {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REPO_TOKEN}`,
      },
    }
  );
  const programData = await res.json();

  return NextResponse.json(programData);
}
