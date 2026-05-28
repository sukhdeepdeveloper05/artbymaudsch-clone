"use server";

export default async function getProduct(productSlug) {
  try {
    const res = await fetch(
      `https://artbymaudsch.com/collections/all-pieces/products/${productSlug}.json`,
      {
        method: "GET",
      },
    );

    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch products");
    }

    const { product } = await res.json();
    console.log(product);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return [];
  }
}
