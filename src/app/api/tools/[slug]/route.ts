export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const res = await fetch(
    `https://raw.githubusercontent.com/codinasion/data/tools/${slug}.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REPO_TOKEN}`,
      },
    }
  );
  const toolData = await res.json();

  return new Response(JSON.stringify(toolData));
}
