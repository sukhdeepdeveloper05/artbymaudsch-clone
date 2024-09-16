"use server";

export default async function getProducts(collectionSlug) {
  const products = await require(`@/data/${collectionSlug}.json`);

  return products;
}
