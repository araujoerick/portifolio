"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const EnterAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default EnterAnimation;
