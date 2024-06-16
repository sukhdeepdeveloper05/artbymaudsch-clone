import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  removeItemFromCart,
  setIsCartOpen,
  setItemQuantity,
} from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import BinIcon from "../icons/Bin";
import MinusIcon from "../icons/Minus";
import PlusIcon from "../icons/Plus";

export default function CartItem({ classes, item }) {
  const dispatch = useDispatch();
  const product = item.product;

  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <motion.li
      layout
      exit={{ opacity: [1, 0], x: [0, "100%"] }}
      transition={{ duration: 0.25 }}
      className={classes["cart-item"]}
    >
      <Link
        className={classes["cart-item-image__wrapper"]}
        href={`/products/${product.handle}`}
        onClick={() => dispatch(setIsCartOpen(false))}
      >
        <figure>
          <Image src={product.image.src} alt={product.title} fill sizes="110" />
          <span className="image__loader" />
        </figure>
      </Link>
      <div className={classes["cart-item-info"]}>
        <h2 className={classes["cart-item-title"]}>
          <Link
            href={`/products/${product.handle}`}
            onClick={() => dispatch(setIsCartOpen(false))}
          >
            {product.title}
          </Link>
          <button
            className={classes["remove-item-btn"]}
            onClick={() => dispatch(removeItemFromCart(item))}
          >
            <BinIcon />
          </button>
        </h2>
        <p className={classes["cart-item-variant"]}>{item.variant.title}</p>
        <div className={classes["cart-item-actions"]}>
          <div className={classes["cart-item__quantity-selecter"]}>
            <button
              className={classes["decrease-quantity-btn"]}
              disabled={item.quantity === 1}
              onClick={() => {
                setQuantity((prevQuantity) => prevQuantity - 1);
                dispatch(
                  setItemQuantity({ ...item, quantity: +item.quantity - 1 })
                );
              }}
            >
              <MinusIcon />
            </button>
            <input
              type="number"
              min={1}
              max={10}
              required
              autoComplete="false"
              name={`item-${product.id}-quantity`}
              className={classes["quantity-count"]}
              value={quantity}
              onChange={(e) => {
                setQuantity(+e.target.value);
              }}
              onBlur={(e) => {
                if (e.target.value <= 50 && e.target.value > 0) {
                  dispatch(
                    setItemQuantity({
                      ...item,
                      quantity: +e.target.value,
                    })
                  );
                } else {
                  setQuantity(+item.quantity);
                }
              }}
            />
            <button
              className={classes["increase-quantity-btn"]}
              disabled={item.quantity >= 50}
              onClick={() => {
                setQuantity((prevQuantity) => prevQuantity + 1);
                dispatch(
                  setItemQuantity({ ...item, quantity: +item.quantity + 1 })
                );
              }}
            >
              <PlusIcon />
            </button>
          </div>
          <div className={classes["cart-item__price-list"]}>
            <span className={classes["cart-item__price"]}>
              $
              {(
                (+item.variant.price).toFixed(0) * item.quantity
              ).toLocaleString("en-US")}
              USD
            </span>
            <span className={classes["cart-item__compareAtPrice"]}>
              $
              {(
                (+item.variant.compare_at_price).toFixed(0) * item.quantity
              ).toLocaleString("en-US")}
              USD
            </span>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
