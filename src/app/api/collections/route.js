export async function GET() {
  const COLLECTIONS = await require("@/data/collections.json");

  return new Response(JSON.stringify(COLLECTIONS));
}
