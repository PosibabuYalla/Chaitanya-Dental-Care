"use client";

import { motion } from "motion/react";
import { LuCalendarPlus, LuClock } from "react-icons/lu";
import ClayContainer from "@/components/ui/ClayContainer";
import ClayButton from "@/components/ui/ClayButton";
import ClayVisual from "@/components/three/ClayVisual";
import type { Service } from "@/lib/types";

export default function ServiceDetailHero({ service }: { service: Service }) {
  return (
    <section className="relative isolate overflow-hidden pb-2 pt-6 sm:pb-4 sm:pt-8">
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-sky/25 blur-3xl" />
      <ClayContainer className="relative grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-deep">{service.tagline}</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {service.name}
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">{service.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <ClayButton href="/appointment" icon={<LuCalendarPlus className="h-4 w-4" />}>
              Book This Treatment
            </ClayButton>
            <span className="glass-pill inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-ink">
              <LuClock className="h-4 w-4 text-gold-deep" /> {service.duration}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-52 sm:h-72"
        >
          <ClayVisual variant={service.variant} tone={service.tone} scale={1.25} />
        </motion.div>
      </ClayContainer>
    </section>
  );
}
