import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // this line is just to make the api dynamic :(
  const { searchParams } = new URL(request.url);

  const res = await fetch(`${process.env.GFI_BACKEND_URL}/good1stissue`, {
    next: { revalidate: 60 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.GFI_BACKEND_ACCESS_TOKEN}`,
    },
  });
  const good1stissueData = await res.json();

  return NextResponse.json(good1stissueData.labels);
}
