import React from "react";

export default function SizesList({
  sizeFormat,
  sizes,
  classes,
  activeSize,
  setActiveSize,
}) {
  return (
    <ul className={classes["size-list"]}>
      {sizes.map((size) => {
        return (
          <li
            key={size}
            className={`${classes["size-list-item"]} ${
              activeSize === size ? classes["active"] : ""
            }`}
            onClick={() => setActiveSize(size)}
          >
            {sizeFormat === "in" && size.split(" / ", 2)[0]}
            {sizeFormat === "cm" && size.split(" / ", 2)[1]}
          </li>
        );
      })}
    </ul>
  );
}
