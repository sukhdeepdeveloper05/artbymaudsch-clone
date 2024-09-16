"use server";

export default async function getProduct(productSlug) {
  const products = await require(`@/data/all-pieces.json`);

  const product = products.find((product) => product.handle === productSlug);


  return product;
}
