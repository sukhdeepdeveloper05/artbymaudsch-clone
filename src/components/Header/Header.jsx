"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "@/store/cartSlice";
import LogoIcon from "../icons/Logo";
import CartIcon from "../icons/Cart";
import TabIndicator from "../ui/TabIndicator";
import HamburgerIcon from "../icons/Hamburger";
import { useState } from "react";
import HeaderDrawer from "./HeaderDrawer";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartItems);

  const totalCartQuantity = cartItems.reduce(
    (currentQuantity, item) => item.quantity + currentQuantity,
    0,
  );

  return (
    <div className={`${classes["header-wrapper"]} site-main-header-wrapper`}>
      <div className={classes["announcement-bar"] + " " + "text-center"}>
        All products are original artworks created by{" "}
        <a
          href="https://artbymaudsch.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes["announcement-link"]}
        >
          artbymaudsch.com
        </a>
        . This is a clone website created for learning purposes only.
      </div>
      <div className={classes["site-header-container"]}>
        <header className={classes["site-header"]}>
          <button
            className={classes["menu-btn"]}
            onClick={() => setIsMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>

          <AnimatePresence>
            {isMenuOpen && <HeaderDrawer setIsMenuOpen={setIsMenuOpen} />}
          </AnimatePresence>

          <Link href="/" className={classes["header-logo"]}>
            <LogoIcon />
          </Link>
          <div className={classes["nav-wrapper"]}>
            <nav>
              <ul className={classes["nav-list"]}>
                <li>
                  <Link href="/collections/all-pieces">All Art</Link>
                  {pathname === "/collections/all-pieces" && <TabIndicator />}
                </li>
                <li>
                  <Link href="/collections/new-pieces">New Pieces</Link>
                  {pathname === "/collections/new-pieces" && <TabIndicator />}
                </li>
                <li>
                  <Link href="/collections/bestsellers-1">Best Sellers</Link>
                  {pathname === "/collections/bestsellers-1" && (
                    <TabIndicator />
                  )}
                </li>
                <li>
                  <Link href="/collections">Collections</Link>
                  {pathname === "/collections" && <TabIndicator />}
                </li>
              </ul>
            </nav>
          </div>
          <div className={classes["cart-btn-wrapper"]}>
            <motion.button
              className={classes["cart-btn"]}
              whileHover={{ scale: 1.1 }}
              onClick={() => dispatch(setIsCartOpen(true))}
            >
              <CartIcon />
              <span className={classes["cart-count"]}>{totalCartQuantity}</span>
            </motion.button>
          </div>
        </header>
      </div>
    </div>
  );
}
