import Image from "next/image";
import Link from "next/link";
import classes from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className={classes["product-item"]}
    >
      <figure className={classes["product-item-image__wrapper"]}>
        <Image
          src={product.image.src}
          fill
          sizes="300px"
          alt={product.title}
          onLoad={(e) => e.target.classList.remove("image-lazy-load")}
          className="product-item-image image-lazy-load"
        />
        <span className="image__loader" />
      </figure>
      <div className={classes["product-item-details"]}>
        <h2 className={classes["product-item-title"]}>{product.title}</h2>
        <p className={classes["product-item-price"]}>
          FROM $<span>{(+product.variants[0].price).toFixed(0)}</span>
          USD
        </p>
      </div>
    </Link>
  );
}
