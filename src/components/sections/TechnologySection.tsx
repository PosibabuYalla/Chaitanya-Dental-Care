"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/ClaySection";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import ClayVisual from "@/components/three/ClayVisual";
import { techItems } from "@/lib/data/site";

export default function TechnologySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-soft/40 via-ivory-deep/40 to-transparent py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-deep/30 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="Technology"
          title="Precision Powered by Modern Dental Technology"
          description="We invest continuously in diagnostic and treatment technology so every procedure is faster, safer, and more accurate."
        />

        <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-5">
          {techItems.map((tech) => (
            <motion.div
              key={tech.name}
              variants={staggerItem}
              className="glass glass-highlight flex flex-col items-center gap-3 p-4 text-center last:col-span-2 sm:gap-4 sm:p-6 lg:last:col-span-1"
            >
              <div className="h-20 w-20 sm:h-24 sm:w-24">
                <ClayVisual variant={tech.variant} tone="sky" scale={0.95} />
              </div>
              <h3 className="font-display text-sm font-bold text-ink">{tech.name}</h3>
              <p className="text-xs leading-relaxed text-ink-soft">{tech.description}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
