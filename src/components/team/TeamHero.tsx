"use client";

import { motion } from "motion/react";
import ClayContainer from "@/components/ui/ClayContainer";
import { SectionKicker } from "@/components/ui/ClaySection";
import HeroPhoto from "@/components/ui/HeroPhoto";
import teamPhoto from "@/components/gallery/Doctors page image.webp";

export default function TeamHero() {
  return (
    <section className="relative isolate overflow-hidden pb-8 pt-28 sm:pb-4 sm:pt-36">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-lavender/30 blur-3xl" />
      <ClayContainer className="relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <SectionKicker>Our Team</SectionKicker>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Meet the People Behind Your Smile.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            Surgeons, orthodontists, hygienists, and support staff — every person on this team was chosen for
            both clinical skill and genuine bedside manner.
          </p>
        </motion.div>

        <HeroPhoto src={teamPhoto} alt="Our dentists discussing a treatment plan with a patient" className="object-[50%_40%]" />
      </ClayContainer>
    </section>
  );
}
