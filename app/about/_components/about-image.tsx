"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import { useRef } from "react";

export default function AboutImage() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={constraintsRef}
      className="relative max-h-[500px] max-w-[500px] rounded-full"
    >
      <Image
        src="/profile-bg.png"
        alt="minha foto"
        width={500}
        height={500}
        className="rounded-full"
        priority
        draggable={false}
      />

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        className="absolute left-0 top-0 max-h-[420px] max-w-full cursor-pointer"
      >
        <Image
          src="/profile-sem-fundo.png"
          alt="minha foto"
          width={420}
          height={420}
          className="rounded-full"
          priority
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
