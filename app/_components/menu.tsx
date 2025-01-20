"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { Button } from "./ui/button";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portifolio", label: "Portifolio" },
];

const Menu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  console.log(containerRef.current);

  return (
    <div ref={containerRef} className="">
      <p onClick={toggleMenu}>Menu</p>

      <div className={isMenuOpen ? "" : "hidden"}>
        <div className="menu-clip-pat fixed left-0 top-0 z-50 h-screen w-screen bg-pear-700 px-8">
          <div className="flex items-center justify-between gap-4 py-9">
            <span className="text-3xl font-bold">
              Araujo<span className="text-5xl leading-3 text-pear-600">.</span>
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <Button variant="outline">Download CV</Button>
              </div>
              <div onClick={toggleMenu} className="cursor-pointer">
                <p>CLOSE</p>
              </div>
            </div>
          </div>

          <div className="text-neutral-900">
            {menuLinks.map((link) => (
              <div key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
