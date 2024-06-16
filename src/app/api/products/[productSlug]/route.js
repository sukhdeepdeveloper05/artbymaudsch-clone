export async function GET(request, context) {
  const ALLPIECES = await require("@/data/all-pieces.json");

  const product = ALLPIECES.filter(
    (product) => context.params.productSlug === product.handle
  );

  return new Response(JSON.stringify(...product));
}
