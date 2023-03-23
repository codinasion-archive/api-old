import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { tag: string } }
) {
  let tag: string = params.tag;

  // to find tags with '#'
  if (tag.includes("-sharp")) {
    tag = tag.replace("-sharp", "#");
  }

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

  // Filter program list
  const filteredProgramData = await programData.filter((program: any) =>
    program.tags.some((t: string) =>
      t.toLowerCase().includes(tag.toLowerCase())
    )
  );

  return NextResponse.json(filteredProgramData);
}
