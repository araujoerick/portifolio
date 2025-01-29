"use client";

import React from "react";
import {
  BiLogoFigma,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaCcStripe, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { FaDocker, FaGitAlt } from "react-icons/fa6";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiClerk,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
  SiShadcnui,
  SiZod,
} from "react-icons/si";

import TechCard from "./techs-card";

const TechCards = () => {
  const technologies = [
    {
      Icon: SiNextdotjs,
      technology: "Next.js",
    },
    {
      Icon: FaReact,
      technology: "React",
    },
    {
      Icon: BiLogoTypescript,
      technology: "TypeScript",
    },
    {
      Icon: RiJavascriptFill,
      technology: "JavaScript",
    },

    {
      Icon: RiTailwindCssFill,
      technology: "TailwindCSS",
    },
    {
      Icon: FaSass,
      technology: "Sass",
    },
    {
      Icon: FaNodeJs,
      technology: "Node",
    },
    {
      Icon: SiPrisma,
      technology: "Prisma",
    },
    {
      Icon: BiLogoPostgresql,
      technology: "PostgreSQL",
    },
  ];

  const tools = [
    {
      Icon: FaGitAlt,
      technology: "Git",
    },
    {
      Icon: SiZod,
      technology: "Zod",
    },
    {
      Icon: SiShadcnui,
      technology: "Shadcn",
    },
    {
      Icon: SiPostman,
      technology: "Postman",
    },
    {
      Icon: FaDocker,
      technology: "Docker",
    },
    {
      Icon: FaCcStripe,
      technology: "Stripe",
    },
    {
      Icon: SiClerk,
      technology: "Clerk",
    },
    {
      Icon: BiLogoFigma,
      technology: "Figma",
    },
  ];

  return (
    <>
      <TechCard title="Desenvolvimento" technologies={technologies} />
      <TechCard title="Ferramentas" technologies={tools} />
    </>
  );
};

export default TechCards;
