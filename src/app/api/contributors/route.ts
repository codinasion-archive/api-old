import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // this line is just to make the api dynamic :(
  const { searchParams } = new URL(request.url);

  const res = await fetch(`${process.env.BACKEND_URL}/github/contributors`, {
    next: { revalidate: 60 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
    },
  });
  const contributors = await res.json();

  return NextResponse.json(contributors);
}
