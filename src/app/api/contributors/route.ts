export async function GET(request: Request) {
  const res = await fetch(`${process.env.BACKEND_URL}/github/contributors`, {
    next: { revalidate: 60 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.BACKEND_ACCESS_TOKEN}`,
    },
  });
  const contributors = await res.json();

  return new Response(JSON.stringify(contributors));
}
