"use client";

import { motion } from "motion/react";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import ClayVisual from "@/components/three/ClayVisual";
import { journeySteps } from "@/lib/data/site";

export default function DentalJourney() {
  return (
    <ClaySection>
      <SectionHeading
        kicker="The Journey"
        title="Your Path to a Healthier Smile"
        description="A clear, guided process from first consultation to a smile you're proud of."
      />

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-10 hidden h-[2px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-deep/40 to-transparent lg:block" />
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-6 lg:gap-4">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-highlight relative flex flex-col items-center gap-2 px-3 py-6 text-center sm:gap-3 sm:px-4 sm:py-8"
            >
              <span className="absolute left-4 top-4 font-display text-xs font-bold text-ink-faint">
                {step.number}
              </span>
              <div className="h-20 w-20">
                <ClayVisual variant={step.variant} tone={i % 2 === 0 ? "sky" : "pink"} scale={0.9} />
              </div>
              <h3 className="font-display text-base font-bold text-ink">{step.title}</h3>
              <p className="text-xs leading-relaxed text-ink-soft">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ClaySection>
  );
}
