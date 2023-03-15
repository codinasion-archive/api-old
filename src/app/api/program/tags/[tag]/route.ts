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
    "https://raw.githubusercontent.com/codinasion/program/data/programList.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const programData = await res.json();

  // Filter program list
  const filteredProgramData = programData.filter((program: any) =>
    program.tags.some((t: string) =>
      t.toLowerCase().includes(tag.toLowerCase())
    )
  );

  return new Response(JSON.stringify(filteredProgramData));
}
