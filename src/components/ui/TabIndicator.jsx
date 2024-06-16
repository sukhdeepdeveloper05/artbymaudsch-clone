"use client";

import { motion } from "framer-motion";
import classes from "./TabIndicator.module.css";

export default function TabIndicator() {
  return (
    <motion.span
      layoutId="tab-indicator"
      transition={{ duration: 0.2 }}
      className={classes["active-tab-indicator"]}
    />
  );
}
