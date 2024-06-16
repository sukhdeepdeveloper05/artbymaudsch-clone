export async function GET(request, context) {
  const data = await require(`@/data/${context.params.collection}.json`);
  
  const url = new URL(request.url);
  const page = +url.searchParams.get("page") || 1;

  const filteredData = data.slice((page - 1) * 24, page * 24);

  return new Response(JSON.stringify(filteredData));
}
