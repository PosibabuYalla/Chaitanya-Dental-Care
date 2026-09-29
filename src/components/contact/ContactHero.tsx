"use client";

import { motion } from "motion/react";
import ClayContainer from "@/components/ui/ClayContainer";
import { SectionKicker } from "@/components/ui/ClaySection";
import HeroPhoto from "@/components/ui/HeroPhoto";
import receptionPhoto from "@/components/gallery/Contact page.webp";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden pb-8 pt-28 sm:pb-4 sm:pt-36">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-pink/25 blur-3xl" />
      <ClayContainer className="relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <SectionKicker>Contact</SectionKicker>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Let&rsquo;s Take Care of Your Smile.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            Reach out with a question, or request an appointment directly below. We typically respond within
            one business hour.
          </p>
        </motion.div>

        <HeroPhoto src={receptionPhoto} alt="Our front desk team helping a patient book an appointment" className="object-[50%_45%]" />
      </ClayContainer>
    </section>
  );
}
