import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // this line is just to make the api dynamic :(
  const { searchParams } = new URL(request.url);

  const res = await fetch(
    "https://raw.githubusercontent.com/codinasion/program/data/programList.json",
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
