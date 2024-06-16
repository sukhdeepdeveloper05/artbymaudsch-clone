"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Modal({ children, onClose, position }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted((prevState) => !prevState);
    document.body.classList.add("modal-open");

    return () => {
      setIsMounted((prevState) => !prevState);
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    isMounted &&
    createPortal(
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="backdrop"
          onClick={onClose}
        />
        <motion.dialog
          open
          initial={{ x: position === "left" ? "-100%" : "100%" }}
          animate={{ x: 0 }}
          exit={{ x: position === "left" ? "-100%" : "100%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          onClose={onClose}
          className={`modal-wrapper ${position}`}
        >
          {children}
        </motion.dialog>
      </>,
      document.getElementById("modal")
    )
  );
}
