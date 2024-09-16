"use server";

export default async function getCollections() {
  const collections = await require(`@/data/collections.json`);

  return collections;
}
