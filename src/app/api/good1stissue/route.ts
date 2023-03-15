export async function GET(request: Request) {
  const res = await fetch(`${process.env.GFI_BACKEND_URL}/good1stissue`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.GFI_BACKEND_ACCESS_TOKEN}`,
    },
  });
  const good1stissueData = await res.json();

  return new Response(JSON.stringify(good1stissueData.issues));
}
