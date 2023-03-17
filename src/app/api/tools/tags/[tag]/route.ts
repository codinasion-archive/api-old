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
    "https://raw.githubusercontent.com/codinasion/data/tools/tools.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REPO_TOKEN}`,
      },
    }
  );
  const toolsData = await res.json();

  // Filter tool list
  const filteredtoolData = toolsData.filter((tool: any) =>
    tool.tags.some((t: string) => t.toLowerCase().includes(tag.toLowerCase()))
  );

  return new Response(JSON.stringify(filteredtoolData));
}
