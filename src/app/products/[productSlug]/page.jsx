import { Poppins } from "next/font/google";
import classes from "./page.module.css";

import ProductSlider from "@/components/slider/ProductSlider";
import getProduct from "@/util/getProduct";
import getRecommandedProducts from "@/util/getRecommandedProducts";
import ProductDescTabs from "@/components/Product/ProductDescTabs";
import Product from "@/components/Product/Product";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default async function ProductPage({ params }) {
  const product = await getProduct(params.productSlug);
  const recommandedProducts = await getRecommandedProducts(params.productSlug);

  return (
    <main>
      {product && (
        <>
          <section className={classes["product-main__wrapper"]}>
            <Product classes={classes} product={product} />
          </section>
          <ProductDescTabs classes={classes} product={product} />
        </>
      )}
      <section
        className={`${classes["product-recommendations-section"]} text-center`}
      >
        <header className="section-header">
          <h3 className={`section-SubHeading ${poppins.className}`}>
            You'll love these:
          </h3>
        </header>

        <ProductSlider products={recommandedProducts.slice(0, 15)} />
      </section>
    </main>
  );
}
