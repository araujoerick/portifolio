"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 flex justify-center transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-6 transition-all duration-300 md:py-9">
          <span className="text-3xl font-bold">
            Araujo<span className="text-5xl leading-3 text-pear-600">.</span>
          </span>
          <div className="flex items-center gap-4">{children}</div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
