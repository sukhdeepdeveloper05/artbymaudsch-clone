"use server";

export default async function getProducts(collectionSlug) {
  try {
    const res = await fetch(
      `https://artbymaudsch.com/collections/${collectionSlug}/products.json`,
      {
        method: "GET",
      },
    );

    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch products");
    }

    const { products } = await res.json();
    console.log(products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
