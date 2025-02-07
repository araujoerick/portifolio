"use client";

import { motion, MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

type EnterAnimationProps = PropsWithChildren<MotionProps> &
  React.HTMLAttributes<HTMLDivElement>;

const EnterAnimation = ({ children, ...props }: EnterAnimationProps) => {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default EnterAnimation;
