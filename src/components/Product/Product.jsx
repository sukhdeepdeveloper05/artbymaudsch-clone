"use client";

import { useRef } from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function Product({ classes, product }) {
  const sliderRef = useRef();
  return (
    <>
      <ProductGallery
        product={product}
        sliderRef={sliderRef}
        classes={classes}
      />
      <ProductInfo product={product} sliderRef={sliderRef} classes={classes} />
    </>
  );
}
