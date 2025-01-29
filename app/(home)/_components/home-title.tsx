"use client";

import { motion } from "framer-motion";

const HomeTitle = () => {
  const title = "Olá, sou Erick Araujo".split(" ");
  const subtitle = "Desenvolvedor Front-end".split(" ");

  const titleAnimationDuration = (title.length - 1) / 10 + 0.25;

  return (
    <>
      <div>
        {title.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index / 10 }}
            className="font-light"
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
      <div>
        {subtitle.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: titleAnimationDuration + index / 10,
            }}
            className="text-pear-600"
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    </>
  );
};

export default HomeTitle;
