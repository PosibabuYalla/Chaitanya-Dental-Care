"use client";

import { motion } from "motion/react";
import { LuAward } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import ClayStat from "@/components/ui/ClayStat";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import { certifications, achievements } from "@/lib/data/about";

export default function CertificationsAchievements() {
  return (
    <ClaySection>
      <SectionHeading kicker="Our Capabilities" title="Technology & Clinical Approach" />

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c) => (
          <motion.div key={c.name} variants={staggerItem} className="glass-inset flex flex-col items-center gap-3 p-6 text-center">
            <span className="glass-highlight flex h-14 w-14 items-center justify-center rounded-2xl bg-sky bg-none text-white shadow-md shadow-sky/30 shadow-glass-sm">
              <LuAward className="h-6 w-6" />
            </span>
            <h3 className="font-display text-sm font-bold text-ink">{c.name}</h3>
            <p className="text-xs text-ink-soft">{c.issuer}</p>
          </motion.div>
        ))}
      </Stagger>

      <div className="mt-20">
        <SectionHeading kicker="At a Glance" title="Chaitanya Dental Care in Numbers" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {achievements.map((a) => (
            <ClayStat key={a.label} value={a.value} label={a.label} variant="sparkle" />
          ))}
        </div>
      </div>
    </ClaySection>
  );
}
