"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import classes from "./CollectionsSection.module.css";
import { useQuery } from "@tanstack/react-query";

async function fetchCollections() {
  const response = await fetch(`/api/collections`);

  const resData = await response.json();
  return resData;
}

export default function CollectionsSection() {
  const { data: collections, isLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: () => fetchCollections(),
    staleTime: 24 * 60 * 60 * 1000,
  });

  return (
    <section
      className={classes["collection-list__section"] + " " + "text-center"}
    >
      <header className="section-header">
        <h3 className="section-SubHeading fs-18">Collections</h3>
      </header>
      <div className={classes["collections-list__wrapper"]}>
        {!isLoading &&
          collections.map((collection) => {
            return (
              <motion.div
                className={classes["collection-item"]}
                style={{ backgroundImage: `url(${collection.image})` }}
                key={collection.id}
                whileHover={{ backgroundSize: "120%" }}
              >
                <div className={classes["collection-item__content"]}>
                  <h2 className={classes["collection-item__title"]}>
                    {collection.title}
                  </h2>
                  <Link
                    href={`/collections/${collection.handle}`}
                    className={classes["collection-item__button"]}
                  >
                    See Artworks
                  </Link>
                </div>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}
