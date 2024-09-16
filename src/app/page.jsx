"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import classes from "./page.module.css";
import ProductSlider from "@/components/slider/ProductSlider";
import { motion, AnimatePresence } from "framer-motion";
import CollectionsSection from "@/components/CollectionsSection/CollectionsSection";
import getProducts from "@/util/getProducts";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const [activeTab, setActiveTab] = useState("bright-colors");
  const [products, setProducts] = useState([]);
  const video = useRef();

  useEffect(() => {
    (async () => {
      setProducts(await getProducts(activeTab));
    })();
  }, []);

  function toggleActiveTab(value) {
    setActiveTab(value);
  }

  function playPause() {
    if (video.current.paused) {
      video.current.play();
    } else {
      video.current.pause();
    }
  }

  return (
    <main>
      <section className={`${classes["main-banner__section"]} text-center`}>
        <div className={classes["banner-bg"]}>
          <svg
            width="760"
            height="1027"
            viewBox="0 0 760 1027"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M192.438 962.008L247.774 1026.65L308.986 959.315L258.792 910.346L300.516 867.965L352.569 918.67L759.017 512.222L355.507 108.713L305.41 154.912L255.609 103.571L304.824 53.8666L247.774 0L190.479 52.3975L240.184 103.571L191.521 152.705L145.672 108.713L-262 506.836L145.672 918.67L198.467 866.63L243.122 910.346L192.438 962.008ZM206.363 858.846L250.957 902.51L292.589 860.243L248.509 817.303L206.363 858.846ZM300.343 852.371L248.509 801.878L198.572 851.218L-148.39 511.488L191.793 168.153L248.509 222.567L305.104 170.255L636.103 511.488L300.343 852.371ZM308.268 860.091L352.569 903.245L743.592 512.222L355.262 123.893L313.112 162.853L651.284 511.488L647.611 515.405L308.268 860.091ZM297.392 162.306L248.019 111.406L199.506 160.368L248.509 207.386L297.392 162.306ZM183.809 160.492L-164.061 511.733L190.684 859.012L145.917 903.245L-246.33 506.836L145.917 124.138L183.809 160.492ZM248.019 1010L207.374 962.498L251.202 917.936L293.805 959.56L248.019 1010ZM248.019 95.7356L206.395 52.8872L247.774 14.9357L289.398 54.1115L248.019 95.7356Z"
              fill="#F4EAE3"
            ></path>
          </svg>
        </div>
        <div className={classes["main-banner"]}>
          <h1 className={`${classes["banner-title"]} ${poppins.className}`}>
            Handmade Paintings For The Modern Home
          </h1>
          <p className={classes["banner-sub-title"]}>
            Complement Your Rooms With Vibrant Colors and Unique Style.
          </p>
          <div className={["banner-buttons"]}>
            <Link href="/collections/all-pieces" className="blue-button">
              Shop Now
            </Link>
          </div>
          <div className={classes["banner-trustpilot"]}>
            <Image
              src={
                "https://artbymaudsch.com/cdn/shop/files/3.01-1000x150-Vuki_Media-CKF-194138.png?v=1699277991"
              }
              fill
              alt="trustpilot"
            />
          </div>
        </div>
        <div className={classes["video-wrapper"]}>
          <div className={classes["video-play-button"]} onClick={playPause}>
            <span className={classes["video-play-button__inner"]}></span>
          </div>
          <video
            ref={video}
            onClick={playPause}
            preload="none"
            src="https://cdn.shopify.com/s/files/1/0379/6680/7179/files/3030133295_70462492-2afe-477f-ac17-ab01db322571.mp4?v=1641969847"
            poster="//artbymaudsch.com/cdn/shop/files/1273509938-1292c2695aa0a50859735ccc72297bb79e7db4d0b6e107f5d.jpg?v=1641963686"
          ></video>
        </div>
      </section>

      {/* Featured in section */}

      <section className={`${classes["featured-in__section"]} text-center`}>
        <h2 className="section-SubHeading">Recognized by</h2>
        <div className={classes["badges-wrapper"]}>
          <figure className={classes["badges-image__wrapper"]}>
            <Image
              src="https://artbymaudsch.com/cdn/shop/files/DAILY.png?v=1642141438"
              alt="Daily"
              width={140}
              height={0}
            />
          </figure>

          <figure className={classes["badges-image__wrapper"]}>
            <Image
              src="https://artbymaudsch.com/cdn/shop/files/HAUTE-2_copy.png?v=1642513090"
              alt="Daily"
              width={140}
              height={0}
            />
          </figure>

          <figure className={classes["badges-image__wrapper"]}>
            <Image
              src="https://artbymaudsch.com/cdn/shop/files/output-onlinepngtools.png?v=1642159423"
              alt="Daily"
              width={140}
              height={0}
            />
          </figure>

          <figure className={classes["badges-image__wrapper"]}>
            <Image
              src="https://artbymaudsch.com/cdn/shop/files/LA_Weekly_logo.png?v=1642141536"
              alt="Daily"
              width={140}
              height={0}
            />
          </figure>

          <figure className={classes["badges-image__wrapper"]}>
            <Image
              src="https://artbymaudsch.com/cdn/shop/files/image_2022_01_18T05_07_57_319Z_2.png?v=1642483814"
              alt="Daily"
              width={140}
              height={0}
            />
          </figure>

          <figure className={classes["badges-image__wrapper"]}>
            <Image
              src="https://artbymaudsch.com/cdn/shop/files/ODRV-1.png?v=1642141613"
              alt="Daily"
              width={140}
              height={0}
            />
          </figure>
        </div>
      </section>

      {/* Featured Collections Section  */}

      <section
        className={`${classes["featured-collections__section"]} text-center`}
      >
        <header className="section-header">
          <h3 className="section-SubHeading">Artworks in the spotlight</h3>
          <div className={classes["section-tab-list"]}>
            <button
              className={
                activeTab === "bright-colors"
                  ? `${classes["tabList-item"]} ${classes["active"]}`
                  : classes["tabList-item"]
              }
              onClick={() => toggleActiveTab("bright-colors")}
            >
              Colorful
            </button>
            <button
              className={
                activeTab === "trending"
                  ? `${classes["tabList-item"]} ${classes["active"]}`
                  : classes["tabList-item"]
              }
              onClick={() => toggleActiveTab("trending")}
            >
              Trending
            </button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div layout>
            <AnimatePresence mode="wait">
              {activeTab === "bright-colors" && (
                <ProductSlider
                  products={products.slice(0, 15)}
                  key="colorful"
                />
              )}
              {activeTab === "trending" && (
                <ProductSlider
                  products={products.slice(0, 15)}
                  key="trending"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </section>

      <CollectionsSection />
    </main>
  );
}
