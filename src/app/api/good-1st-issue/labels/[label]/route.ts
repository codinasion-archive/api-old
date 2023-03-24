import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { label: string } }
) {
  let label: string = params.label;

  // to find tags with '#'
  if (label.includes("-sharp")) {
    label = label.replace("-sharp", "#");
  }

  const res = await fetch(`${process.env.GFI_BACKEND_URL}/good1stissue/`, {
    next: { revalidate: 60 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.GFI_BACKEND_ACCESS_TOKEN}`,
    },
  });
  const good1stissueData = await res.json();

  // Filter Good First Issue list
  const filteredGood1stissueData = await good1stissueData.issues.filter(
    (issue: any) =>
      issue.issue_labels.some(
        (l: string) => l.toLowerCase() === label.toLowerCase()
      )
  );

  return NextResponse.json(filteredGood1stissueData);
}
