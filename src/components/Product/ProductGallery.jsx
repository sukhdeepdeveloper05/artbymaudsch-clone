"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/slider.css";

export default function ProductGallery({ product, sliderRef, classes }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const thumbsRef = useRef();

  useEffect(() => {
    setNav1(sliderRef.current);
    setNav2(thumbsRef.current);
  }, []);

  let settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <div className={classes["product-gallery__wrapper"]}>
      <div className={classes["product-gallery"]}>
        <Slider ref={sliderRef} asNavFor={nav2} {...settings}>
          {product.images.map((image) => {
            return (
              <figure
                key={image.id}
                className={classes["product-image__wrapper"]}
              >
                <Image
                  priority
                  src={image.src}
                  alt={product.title}
                  fill
                  sizes="600px"
                  className="image-lazy-load"
                  onLoad={(e) => e.target.classList.remove("image-lazy-load")}
                />
                <span className="image__loader" />
              </figure>
            );
          })}
        </Slider>
      </div>
      <div className={classes["product-gallery__nav"]}>
        <Slider
          ref={thumbsRef}
          asNavFor={nav1}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          infinite={false}
          arrows={false}
          className="slick-nav"
        >
          {product.images.map((image) => {
            return (
              <figure key={image.id}>
                <Image
                  src={image.src}
                  alt={product.title}
                  fill
                  sizes="150px"
                  className="image-lazy-load"
                  onLoad={(e) => e.target.classList.remove("image-lazy-load")}
                />
                <span className="image__loader" />
              </figure>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

function PrevButton({ onClick, className, style }) {
  return (
    <button
      className={`gallery-button gallery-button-prev ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
function NextButton({ onClick, className, style }) {
  return (
    <button
      className={`gallery-button gallery-button-next ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
