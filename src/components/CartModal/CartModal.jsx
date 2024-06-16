"use client";

import Modal from "@/components/ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import classes from "./CartModal.module.css";
import { setCartItems, setIsCartOpen } from "@/store/cartSlice";

import CartItem from "./CartItem";
import Link from "next/link";
import { useEffect } from "react";
import CloseIcon from "../icons/Close";
import CartIcon from "../icons/Cart";

export default function CartModal() {
  const isCartModalOpen = useSelector((state) => state.isCartModalOpen);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce(
    (currentQuantity, item) => item.quantity + currentQuantity,
    0
  );

  useEffect(() => {
    const lsCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    dispatch(setCartItems(lsCartItems));
  }, []);

  return (
    <AnimatePresence>
      {isCartModalOpen && (
        <Modal
          onClose={() => dispatch(setIsCartOpen(false))}
          position={"right"}
        >
          <header className={classes["cart-header"]}>
            <div className={classes["header-title"]}>
              <CartIcon />
              Cart&nbsp;<span className="items-count">({totalQuantity})</span>
            </div>
            <button
              className={classes["cart-close-btn"]}
              onClick={() => dispatch(setIsCartOpen(false))}
            >
              <CloseIcon />
            </button>
          </header>
          <div className={classes["cart-content"]}>
            <div
              className={`${classes["cart-main"]} ${
                cartItems.length < 1 ? classes["cart-empty"] : ""
              }`}
            >
              <AnimatePresence mode="wait">
                {cartItems.length < 1 ? (
                  <motion.p
                    animate={{ opacity: [0, 1] }}
                    exit={{ opacity: [1, 0] }}
                    className="cart-empty-fallback"
                  >
                    Your cart is currently empty.
                  </motion.p>
                ) : (
                  <motion.ul layout className={classes["cart-list"]}>
                    <AnimatePresence>
                      {cartItems.map((item) => {
                        return (
                          <CartItem
                            key={`${item.product.title}-${item.variant.id}`}
                            item={item}
                            classes={classes}
                          />
                        );
                      })}
                    </AnimatePresence>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <div className={classes["cart-footer"]}>
              <AnimatePresence mode="wait">
                {cartItems.length < 1 ? (
                  <motion.div
                    className={classes.btn}
                    key="cart-empty-button"
                    animate={{ y: ["100%", 0], opacity: [0, 1] }}
                    exit={{ y: [0, "100%"], opacity: [1, 0] }}
                    transition={{ duration: 0.15 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => dispatch(setIsCartOpen(false))}
                  >
                    <Link href="/collections/bestsellers">
                      Continue browsing
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    className={classes.btn}
                    key="checkout-button"
                    animate={{ y: ["100%", 0], opacity: [0, 1] }}
                    exit={{ y: [0, "100%"], opacity: [1, 0] }}
                    transition={{ duration: 0.15 }}
                    whileHover={{ scale: 1.04 }}
                    onClick={() => dispatch(setIsCartOpen(false))}
                  >
                    <Link href="/collections/bestsellers">CHECKOUT</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
