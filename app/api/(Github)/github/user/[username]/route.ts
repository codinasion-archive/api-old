import { NextResponse } from "next/server";

import type { GithubUserResponseType } from "@/types/github";

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;

  const res = await fetch(
    `${process.env.BACKEND_URL}/github/user/${username}/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );
  const data: GithubUserResponseType = await res.json();

  return NextResponse.json(data);
}
