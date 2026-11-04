"use client";

import { motion } from "motion/react";
import ClayContainer from "@/components/ui/ClayContainer";
import { SectionKicker } from "@/components/ui/ClaySection";
import HeroPhoto from "@/components/ui/HeroPhoto";
import teamPhoto from "@/components/gallery/About.webp";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden pb-8 pt-28 sm:pb-4 sm:pt-36">
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-lavender/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
      <ClayContainer className="relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <SectionKicker>Our Story</SectionKicker>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Care Built Around Your Smile.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            Since 2011, chaitanya Dental Hospital has grown from a single treatment chair to a full
            multi-specialty hospital — without ever losing sight of what matters: how a patient feels the
            moment they walk in.
          </p>
        </motion.div>

        <HeroPhoto src={teamPhoto} alt="The Chaitanya Dental Care team in the clinic" className="object-[50%_25%]" />
      </ClayContainer>
    </section>
  );
}
