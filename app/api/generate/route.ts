export async function POST(req: Request) {
  const { prompt } = await req.json();

  const url = `https://picsum.photos/seed/${encodeURIComponent(prompt)}/600/600`;

  return Response.json({ url });
}
