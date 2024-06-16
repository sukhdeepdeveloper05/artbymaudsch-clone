"use client";

import { useState } from "react";
import classes from "./Footer.module.css";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = [
  {
    id: 0,
    question: "Are the paintings 100% handmade?",
    answer:
      "<span>Yes. All paintings are 100% handmade by our artists. There is no printing involved in the process. Our artists only use highest-grade oil and acrylic paints.</span>",
  },
  {
    id: 1,
    question: "Do the paintings arrive framed?",
    answer:
      "<span>Yes. If you buy your painting with a frame, it will arrived framed to your doorstep. The paintings are stretched and framed by professionals, and then shipped via insured express shipping. All for free.</span>",
  },
  {
    id: 2,
    question: "Do you ship to my country and how long is the delivery?",
    answer:
      "<span>We ship worldwide free of charge. So, yes, we ship to your country!<br/><br/>After you place your order, the artist will start the painting process. Please understand that this part usually takes up to 3 weeks due to the painting and drying process.<br/><br/>Shipping is done with DHL express and usually takes up to 5 business days.</span>",
  },
  {
    id: 3,
    question: "What if I am unsatisfied with my purchase?",
    answer:
      "<span>If you are in any way unsatisfied with your painting, contact us within 30 days of receiving the product, and we will offer you a full refund. Otherwise, you can request a redo completely free of charge.</span>",
  },
];

export default function Faqs() {
  const [expanded, setExpanded] = useState(null);

  function handleViewAnswer(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }
  return (
    <div className={classes["faq-col"]}>
      <AnimatePresence>
        {FAQs.map((faq) => {
          return (
            <div className={classes["faq_div"]} key={faq.id}>
              <div
                className={`${classes["faq_qt"]} ${
                  expanded === faq.id ? classes.open : ""
                }`}
                onClick={() => handleViewAnswer(faq.id)}
              >
                {faq.question}
              </div>
              <AnimatePresence>
                {expanded === faq.id && (
                  <motion.div
                    initial={{ marginBottom: 0, height: 0, opacity: 0 }}
                    animate={{
                      marginBottom: "16px",
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{ marginBottom: 0, height: 0, opacity: 0 }}
                    className={classes["faq_ans"]}
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
