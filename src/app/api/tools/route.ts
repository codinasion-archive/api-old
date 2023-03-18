export async function GET(request: Request) {
  const res = await fetch(
    "https://raw.githubusercontent.com/codinasion/data/tools/tools.json",
    {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REPO_TOKEN}`,
      },
    }
  );
  const toolsData = await res.json();

  return new Response(JSON.stringify(toolsData));
}
