"use client";

import ProductCard from "../ProductCard/ProductCard";
import classes from "./Products.module.css";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

async function fetchProducts(pageSlug, pageNo) {
  const url = `/api/collections/${pageSlug}${pageNo ? `?page=${pageNo}` : ""}`;

  try {
    const response = await fetch(url);
    const resData = await response.json();

    return resData;
  } catch (error) {
    throw new Error(error.message || "Couldn't fetch products.");
  }
}

export default function Products({ pageSlug }) {
  const searchParams = useSearchParams();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: [pageSlug],
    queryFn: () => fetchProducts(pageSlug, searchParams.get("page")),
  });

  return (
    <>
      {error && <p className="text-center error">{error}</p>}
      {!isLoading && (
        <div className={classes["products-container"]}>
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      )}
    </>
  );
}
