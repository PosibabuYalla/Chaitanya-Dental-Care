"use client";

import { motion } from "motion/react";
import ClayContainer from "@/components/ui/ClayContainer";
import { SectionKicker } from "@/components/ui/ClaySection";
import HeroPhoto from "@/components/ui/HeroPhoto";
import xrayPhoto from "@/components/gallery/Blog Page.webp";

export default function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden pb-8 pt-28 sm:pb-4 sm:pt-36">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky/25 blur-3xl" />
      <ClayContainer className="relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <SectionKicker>Blog</SectionKicker>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Better Dental Knowledge. Healthier Smiles.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            Dentist-written guidance on prevention, treatment options, and what to expect — no jargon, just
            clear answers.
          </p>
        </motion.div>

        <HeroPhoto src={xrayPhoto} alt="Dentist explaining an X-ray to a patient" className="object-[50%_35%]" />
      </ClayContainer>
    </section>
  );
}
