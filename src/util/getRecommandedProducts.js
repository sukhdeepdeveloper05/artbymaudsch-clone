"use server";

export default async function getRecommandedProducts(productSlug) {
  const products = await require(`@/data/trending.json`);

  const filteredProducts = await products.filter(
    (product) => product.handle !== productSlug
  );

  return filteredProducts;
}
