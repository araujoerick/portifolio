"use client";

import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

import ButtonDownloadCv from "./ui/button-cv";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-9">
          <span className="text-3xl font-bold">
            Araujo<span className="text-5xl leading-3 text-pear-600">.</span>
          </span>
          <div className="flex items-center gap-4">
            <ButtonDownloadCv variant="outline">Download CV</ButtonDownloadCv>
            {children}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
