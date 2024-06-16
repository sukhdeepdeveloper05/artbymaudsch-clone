"use client";

import Link from "next/link";

import classes from "./HeaderDrawer.module.css";
import Modal from "../ui/Modal";
import CloseIcon from "../icons/Close";

export default function HeaderDrawer({ setIsMenuOpen }) {
  return (
    <Modal onClose={() => setIsMenuOpen(false)} position={"left"}>
      <div className={classes["drawer-wrapper"]}>
        <header className={classes["drawer-header"]}>
          <h2 className={classes["drawer-heading"]}>Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <CloseIcon />
          </button>
        </header>
        <nav className={classes["drawer__nav"]}>
          <ul className={classes["drawer__nav-list"]}>
            <li>
              <Link
                href="/collections/all-pieces"
                onClick={() => setIsMenuOpen(false)}
              >
                All Art
              </Link>
            </li>
            <li>
              <Link
                href="/collections/new-pieces"
                onClick={() => setIsMenuOpen(false)}
              >
                New Pieces
              </Link>
            </li>
            <li>
              <Link
                href="/collections/bestsellers"
                onClick={() => setIsMenuOpen(false)}
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link href="/collections" onClick={() => setIsMenuOpen(false)}>
                Collections
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Modal>
  );
}
