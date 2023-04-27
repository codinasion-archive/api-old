import { NextResponse } from "next/server";

import type { GithubUserListResponseType } from "@/types/github";

export async function GET() {
  const res = await fetch(`${process.env.BACKEND_URL}/github/user/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
    },
    next: { revalidate: 60 },
  });
  const data: GithubUserListResponseType[] = await res.json();

  return NextResponse.json(data);
}
