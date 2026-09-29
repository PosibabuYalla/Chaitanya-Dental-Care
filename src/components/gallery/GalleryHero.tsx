"use client";

import { motion } from "motion/react";
import ClayContainer from "@/components/ui/ClayContainer";
import { SectionKicker } from "@/components/ui/ClaySection";
import ClayVisual from "@/components/three/ClayVisual";

export default function GalleryHero() {
  return (
    <section className="relative isolate overflow-hidden pb-2 pt-28 sm:pb-4 sm:pt-36">
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
      <ClayContainer className="relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <SectionKicker>Gallery</SectionKicker>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Inside Our World of Smiles.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            A look at our clinic, our team, our technology, and the transformations we&apos;re proudest of.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-52 sm:h-72"
        >
          <ClayVisual variant="sparkle" tone="gold" scale={1.6} />
        </motion.div>
      </ClayContainer>
    </section>
  );
}
