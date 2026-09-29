"use client";

import ClaySection from "@/components/ui/ClaySection";
import ClayStat from "@/components/ui/ClayStat";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import { motion } from "motion/react";
import { heroStats } from "@/lib/data/site";

export default function TrustStrip() {
  return (
    <ClaySection className="py-10 sm:py-14">
      <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {heroStats.map((s) => (
          <motion.div key={s.label} variants={staggerItem}>
            <ClayStat {...s} />
          </motion.div>
        ))}
      </Stagger>
    </ClaySection>
  );
}
