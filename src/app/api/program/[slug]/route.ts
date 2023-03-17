export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const res = await fetch(
    `https://raw.githubusercontent.com/codinasion/program/data/program/${slug}.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const programData = await res.json();

  return new Response(JSON.stringify(programData));
}