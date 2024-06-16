"use client";

import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/slider.css";

import classes from "./ProductSlider.module.css";
import ProductCard from "../ProductCard/ProductCard";

const sliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function ProductSlider({ products }) {
  return (
    <motion.div
      layout
      animate={{ y: [50, 0], opacity: [0, 1] }}
      exit={{ y: [0, 50], opacity: [1, 0] }}
      transition={{ duration: 0.15 }}
      className="slider-wrapper"
    >
      <Slider {...sliderSettings} className={[classes["product-list"]]}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </Slider>
    </motion.div>
  );
}

function PrevButton({ onClick, className, style }) {
  return (
    <button
      className={`slider-button-prev ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
function NextButton({ onClick, className, style }) {
  return (
    <button
      className={`slider-button-next ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
