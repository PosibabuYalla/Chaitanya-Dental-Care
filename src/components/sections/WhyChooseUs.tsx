"use client";

import { motion } from "motion/react";
import { LuCheck } from "react-icons/lu";
import ClaySection, { SectionKicker } from "@/components/ui/ClaySection";
import ClayStat from "@/components/ui/ClayStat";
import { whyChooseUs, heroStats } from "@/lib/data/site";

export default function WhyChooseUs() {
  return (
    <ClaySection>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          {heroStats.map((s) => (
            <ClayStat key={s.label} value={s.value} label={s.label} variant={s.variant} />
          ))}
        </motion.div>

        <div className="flex flex-col gap-6">
          <SectionKicker>Why Choose Us</SectionKicker>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A Hospital Built Around Patient Comfort
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            Every detail, from our sterilisation protocol to our treatment chairs, is designed around one
            question: what makes this easier for the patient in front of us?
          </p>

          <div className="mt-2 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-pill flex items-center gap-2.5 px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky bg-none text-white shadow-md shadow-sky/30">
                  <LuCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-semibold text-ink">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ClaySection>
  );
}
