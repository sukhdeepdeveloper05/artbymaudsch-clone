import Products from "@/components/Products/Products";
import { Poppins } from "next/font/google";

const CollectionData = [
  {
    id: 0,
    title: "Abstract",
    description:
      "Each piece features bold colors and unique designs, perfect for adding a touch of creativity to any space. Find the perfect handmade abstract painting for your space here.",
    handle: "abstract",
  },
  {
    id: 1,
    title: "All Pieces",
    description:
      "Vibrant colors, unique style, and an artistic texture. Our paintings will add a distinctive character to your space.",
    handle: "all-pieces",
  },
  {
    id: 2,
    title: "Best Sellers",
    description:
      "Discover the most popular handmade paintings for your home or office with our bestsellers collection. Browse our top-searched pieces and add some unique style to your space.",
    handle: "bestsellers",
  },
  {
    id: 3,
    title: "Colorful",
    description:
      "Browse our selection of colorful handmade paintings, featuring a range of shades and hues to add a pop of color to any space. Shop our selection of vibrant abstract art today.",
    handle: "bright-colors",
  },
  {
    id: 4,
    title: "New Pieces",
    description:
      "Stay up-to-date with the latest handmade paintings with our new arrivals collection. Shop our fresh and exciting paintings and add contemporary flair to your home or office.",
    handle: "new-pieces",
  },
  {
    id: 5,
    title: "Trending",
    description:
      "Most popular paintings right now. Each piece is carefully crafted by our talented artists, making them one-of-a-kind additions to any home or office space.",
    handle: "trending",
  },
];

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default async function Collection({ params }) {
  const collection = {...CollectionData.find(
    (collection) => collection.handle === params.collectionSlug
  )};


  return (
    <main>
      <header className="page-header">
        <h1 className={`page-heading ${poppins.className}`}>
          {collection.title}
        </h1>
        <p className="page-description">{collection.description}</p>
      </header>
      <Products pageSlug={collection.handle} />
    </main>
  );
}
