"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Header from "./header";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portifolio", label: "Portifolio" },
];

const socialLinks = [
  { path: "https://github.com/araujoerick", label: "Github", Icon: Github },
  {
    path: "https://www.linkedin.com/in/araujoerick09/",
    label: "Linkedin",
    Icon: Linkedin,
  },
];

const Menu = () => {
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const timeLine = useRef<GSAPTimeline>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item", {
        y: 75,
      });

      timeLine.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          pointerEvents: "auto",
          ease: "power4.inOut",
        })
        .to(".menu-link-item", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (isMenuOpen) {
      timeLine.current?.play();
    } else {
      timeLine.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div ref={containerRef}>
      <p
        onClick={toggleMenu}
        className="cursor-pointer text-lg transition-colors duration-300 hover:text-pear-600"
      >
        Menu
      </p>

      <div className="menu-clip-path menu-overlay fixed left-0 top-0 z-50 h-screen w-screen bg-pear-800">
        <Header>
          <button
            onClick={toggleMenu}
            className="cursor-pointer text-lg transition-colors duration-300 hover:text-pear-600"
          >
            Close
          </button>
        </Header>

        <div className="flex justify-center">
          <div className="container">
            <div className="flex h-[calc(100vh-120px)] flex-col justify-between">
              <nav className="text-8xl font-light">
                {menuLinks.map((link) => (
                  <div
                    key={link.path}
                    className="menu-link-item group relative py-4"
                    onClick={toggleMenu}
                  >
                    <Link
                      href={link.path}
                      className="relative inline-block transition-colors duration-300 hover:text-pear-600"
                    >
                      {link.label}
                      {pathname === link.path && (
                        <span className="absolute -right-6 top-[56%] h-3 w-3 -translate-y-[56%] rounded-full bg-pear-600" />
                      )}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="flex gap-6 pb-12">
                {socialLinks.map((link) => (
                  <Link
                    key={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.path}
                    className="flex gap-2 text-lg transition-colors duration-300 hover:text-pear-600"
                  >
                    <link.Icon className="h-6 w-6" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
