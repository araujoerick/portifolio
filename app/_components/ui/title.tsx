import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <h1 className="text-5xl font-extralight">{children}</h1>
    </motion.div>
  );
};

export default Title;
