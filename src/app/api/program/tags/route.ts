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

  // Create tag list
  const tagList: any = [];
  programData.forEach((program: any) => {
    program.tags.forEach((tag: string) => {
      const tagIndex = tagList.findIndex((item: any) => item.name === tag);
      if (tagIndex === -1) {
        tagList.push({
          name: tag,
          count: 1,
        });
      } else {
        tagList[tagIndex].count += 1;
      }
    });
  });

  // Sort tag list
  tagList.sort((a: any, b: any) => {
    if (a.count > b.count) {
      return -1;
    } else if (a.count < b.count) {
      return 1;
    } else {
      return 0;
    }
  });

  return NextResponse.json(tagList);
}
