import ProductCard from "../ProductCard/ProductCard";
import classes from "./Products.module.css";

export default function Products({ products }) {
  return (
    <>
      <div className={classes["products-container"]}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}
