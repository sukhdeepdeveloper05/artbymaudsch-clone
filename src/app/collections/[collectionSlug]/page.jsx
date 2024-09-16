import { Poppins } from "next/font/google";
import getProducts from "@/util/getProducts";
import collections from "@/data/collections.json";
import Products from "@/components/Products/Products";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default async function CollectionPage({ params }) {
  const collection = {
    ...collections.find(
      (collection) => collection.handle === params.collectionSlug
    ),
  };

  const products = await getProducts(collection.handle);

  return (
    <main>
      <header className="page-header">
        <h1 className={`page-heading ${poppins.className}`}>
          {collection.title}
        </h1>
        <p className="page-description">{collection.description}</p>
      </header>
      <Products products={products} />
    </main>
  );
}
