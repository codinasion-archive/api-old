export async function GET(request: Request) {
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

  return new Response(JSON.stringify(programData));
}
