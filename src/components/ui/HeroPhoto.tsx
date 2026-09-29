"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

// Framed photo for the right-hand column of the inner-page heroes.
export default function HeroPhoto({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  /** Extra classes for the image, e.g. an object-position to keep faces in frame. */
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="glass-lg glass-highlight relative h-64 overflow-hidden p-3 sm:h-80"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn("object-cover", className)}
        />
      </div>
    </motion.div>
  );
}
