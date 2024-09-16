"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./CollectionsSection.module.css";
import getCollections from "@/util/getCollections";

export default function CollectionsSection({ preFetchedCollections }) {
  const [collections, setCollections] = useState(preFetchedCollections || []);

  useEffect(() => {
    if (!preFetchedCollections) {
      (async () => {
        setCollections(await getCollections());
      })();
    }
  }, []);

  return (
    <section
      className={classes["collection-list__section"] + " " + "text-center"}
    >
      <header className="section-header">
        <h3 className="section-SubHeading fs-18">Collections</h3>
      </header>
      <div className={classes["collections-list__wrapper"]}>
        {collections.map((collection) => {
          return (
            <div
              className={classes["collection-item"]}
              style={{ backgroundImage: `url(${collection.image})` }}
              key={collection.id}
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
