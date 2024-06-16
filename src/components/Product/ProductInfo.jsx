import { useEffect, useState } from "react";
import SizesList from "./SizesList";
import FramesList from "./FramesList";
import { useDispatch } from "react-redux";
import { addItemToCart, setIsCartOpen } from "@/store/cartSlice";
import TagIcon from "@/components/icons/Tag";

export default function ProductInfo({ product, sliderRef, classes }) {
  const dispatch = useDispatch();

  const [sizeFormat, setSizeFormat] = useState("cm");
  const [activeSize, setActiveSize] = useState(product.options[0].values[0]);
  const [activeFrame, setActiveFrame] = useState(product.options[1].values[0]);
  const [activeVariant, setActiveVariant] = useState(product.variants[0]);

  useEffect(() => {
    const activeVariant = `${activeSize} / ${activeFrame}`;
    product.variants.map((variant) => {
      if (activeVariant === variant.title) {
        setActiveVariant(variant);
      }
    });
  }, [activeSize, activeFrame, product.variants]);

  return (
    <div className={classes["product-info__wrapper"]}>
      <div className="product-meta">
        <h1 className={classes["product-title"]}>{product.title}</h1>
        <div className={classes["product-price-wrapper"]}>
          <span className={classes["product-price"]}>
            ${(+activeVariant.price).toFixed(0)}USD
          </span>
          <span className={classes["product-price-compareAt"]}>
            ${(+activeVariant.compare_at_price).toFixed(0)}
          </span>
          <span className={classes["product-price-discount"]}>
            <TagIcon />
            save&nbsp;
            <span>
              $
              {(+activeVariant.compare_at_price).toFixed(0) -
                (+activeVariant.price).toFixed(0)}
            </span>
          </span>
        </div>
      </div>
      <div className={classes["product-variants"]}>
        <h1 className={classes["product-variants-heading"]}>Select Options</h1>
        <div
          className={`${classes["product-option-wrapper"]} ${classes["size-option-wrapper"]}`}
        >
          <span className={classes["product-option-label"]}>
            <div className={classes["select-size-chart"]}>
              Select Size:{" "}
              <span onClick={() => sliderRef.current.slickGoTo(7)}>
                Size Chart
              </span>
            </div>
            <div className={classes["size-btn__box"]}>
              <span
                className={`${classes["size-btn"]} ${classes["btn1"]} ${
                  sizeFormat === "in" ? classes["active"] : ""
                }`}
                onClick={() => setSizeFormat("in")}
              >
                in"
              </span>
              <span
                className={`${classes["size-btn"]} ${classes["btn2"]} ${
                  sizeFormat === "cm" ? classes["active"] : ""
                }`}
                onClick={() => setSizeFormat("cm")}
              >
                cm
              </span>
            </div>
          </span>
          <SizesList
            sizeFormat={sizeFormat}
            sizes={product.options[0].values}
            classes={classes}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        </div>
        <div
          className={`${classes["product-option-wrapper"]} ${classes["frame-option-wrapper"]}`}
        >
          <span className={classes["product-option-label"]}>
            <span>
              Frame:{" "}
              <span className={classes["selected-frame-title"]}>
                {activeFrame}
              </span>
            </span>
          </span>
          <FramesList
            frames={product.options[1].values}
            classes={classes}
            activeFrame={activeFrame}
            setActiveFrame={setActiveFrame}
          />
        </div>
      </div>
      <button
        className={classes["product-addToCart-btn"]}
        onClick={() => {
          dispatch(addItemToCart({ product, variant: activeVariant }));
          setTimeout(() => {
            dispatch(setIsCartOpen(true));
          }, 500);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
