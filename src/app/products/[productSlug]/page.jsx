"use client";

import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import classes from "./page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Poppins } from "next/font/google";
import ProductSlider from "@/components/slider/ProductSlider";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/Product/ProductGallery";
import ProductInfo from "@/components/Product/ProductInfo";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const descTabsData = [
  {
    id: 0,
    title: "Frame and Materials Info",
    html: "<p>All our <strong>frames</strong> are made and inspected by professionals. <strong>Czech pine wood</strong> and <strong>finger joints </strong>are used to assure frames’ quality, and <strong>gesso coating </strong>is applied to guarantee stiffness and longevity.<br></p><p>All our paintings are made with non-toxic <strong>oil and acrylic paint</strong> and highest grade <strong>cotton canvas</strong>.&nbsp;</p><p></p><p><strong>The end result</strong> are paintings that <strong>tolerate</strong> increased humidity, are <strong>free</strong> from odor, and <strong>do NOT</strong> fade over time.</p>",
  },
  {
    id: 1,
    title: "Free Express Shipping",
    html: "<p>Express shipping is free for all paintings. The paintings are put in a protective package to insure no damage. Framed paintings are shipped using DHL Express, while rolled canvas paintings are shipped via FedEx and UPS Express.<br><br><strong>US, CA</strong>: 1-3 business days</p><p><strong>AU, NZ</strong>: 2-4 business days</p><p><strong>EU</strong>: 1-3 business days</p><p><strong>Rest of the world</strong>: 2-5 business days<br><br>All paintings are shipped after painting, framing, and quality inspection are completed. This process can take 20-30 business days. All paintings come with free 100% insurance coverage.</p>",
  },
  {
    id: 2,
    title: "Preview Before Shipment",
    html: "<p>After your painting is created, we’ll send you <strong>photos and videos</strong> of it. You will be able to <strong>see your painting before it is shipped</strong>. The painting will be shipped only after you <strong>confirm that you like it</strong>.</p>",
  },
  {
    id: 3,
    title: "60 Day Extended Returns",
    html: "<p><strong>100% Satisfaction Guaranteed<br></strong></p><p>Get a full refund or a painting re-do if you find that your art piece didn't meet your expectations, or you were anyhow dissatisfied with it.</p>",
  },
];

async function fetchProductData(productSlug) {
  const response = await fetch(`/api/products/${productSlug}`);
  const resData = await response.json();
  return resData;
}

async function fetchRecommandedProducts(id) {
  const response = await fetch(`/api/collections/trending`);
  const resData = await response.json();

  const filteredData = await resData.filter((data) => data.id !== id);
  return filteredData;
}

export default function ProductPage({ params }) {
  const sliderRef = useRef();
  const [expanded, setExpanded] = useState(null);

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", params.productSlug],
    queryFn: () => fetchProductData(params.productSlug),
    retry: false
  });

  if (isError) {
    notFound();
  }

  const { data: recommandedProducts, isLoading: isPorductsLoading } = useQuery({
    queryKey: ["recommandedProduct"],
    queryFn: () => fetchRecommandedProducts(product.id),
    enabled: !isLoading,
  });

  function handleViewAnswer(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }

  return (
    <main>
      {!isLoading && (
        <>
          <section className={classes["product-main__wrapper"]}>
            <ProductGallery product={product} sliderRef={sliderRef} classes={classes} />
            <ProductInfo product={product} sliderRef={sliderRef} classes={classes} />
          </section>
          <div className={classes["product-desc-wrapper"]}>
            <div
              className={classes["product-description"]}
              dangerouslySetInnerHTML={{ __html: product.body_html }}
            />
            <div className={classes["product-desc-tabs"]}>
              <AnimatePresence>
                {descTabsData.map((data) => {
                  return (
                    <div className={classes["card_div"]} key={data.id}>
                      <div
                        className={
                          classes["card_label"] +
                          " " +
                          `${expanded === data.id ? classes.open : ""}`
                        }
                        onClick={() => handleViewAnswer(data.id)}
                      >
                        {data.title}
                      </div>
                      <AnimatePresence>
                        {expanded === data.id && (
                          <motion.div
                            initial={{ marginBottom: 0, height: 0, opacity: 0 }}
                            animate={{
                              marginBottom: "16px",
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{ marginBottom: 0, height: 0, opacity: 0 }}
                            className={classes["card_desc"]}
                            dangerouslySetInnerHTML={{ __html: data.html }}
                          ></motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
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

        {!isPorductsLoading && !isLoading && (
          <ProductSlider products={recommandedProducts.slice(0, 15)} />
        )}
      </section>
    </main>
  );
}
