"use client";

import { motion } from "motion/react";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { timeline } from "@/lib/data/about";

export default function StoryTimeline() {
  return (
    <ClaySection>
      <SectionHeading kicker="Our Story" title="From One Chair to a Full Hospital" align="left" />

      <div className="relative mt-14 flex flex-col gap-8">
        <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-ink/10 sm:block" />
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"
          >
            <div className="glass-pill relative z-10 flex h-14 w-14 shrink-0 items-center justify-center glass-tint font-display text-xs font-bold text-ink">
              {item.year}
            </div>
            <div className="glass-sm flex-1 p-5">
              <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </ClaySection>
  );
}
