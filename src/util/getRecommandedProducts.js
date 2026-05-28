"use server";

export default async function getRecommandedProducts(productSlug) {
  try {
    const res = await fetch(
      `https://artbymaudsch.com/collections/trending/products.json`,
      {
        method: "GET",
      },
    );

    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch products");
    }

    const { products } = await res.json();
    const filteredProducts = await products.filter(
      (product) => product.handle !== productSlug,
    );

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
