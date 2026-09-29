"use client";

import { motion } from "motion/react";
import { LuCalendarPlus, LuPhone } from "react-icons/lu";
import ClayContainer from "@/components/ui/ClayContainer";
import ClayButton from "@/components/ui/ClayButton";
import ClayVisual from "@/components/three/ClayVisual";
import { siteConfig } from "@/lib/data/site";

export default function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-28">
      <ClayContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-lg glass-highlight relative overflow-hidden bg-sky-soft/10 px-5 py-12 text-center sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sky/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-sky/30 blur-3xl" />

          <div className="relative mx-auto mb-4 h-36 w-36 sm:mb-6 sm:h-48 sm:w-48">
            <ClayVisual variant="tooth" tone="sky" scale={1.3} />
          </div>

          <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Ready to Love Your Smile?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            Take the first step toward healthier, more confident teeth. Our team is ready when you are.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <ClayButton href="/appointment" icon={<LuCalendarPlus className="h-4 w-4" />}>
              Book Your Appointment
            </ClayButton>
            <ClayButton href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} variant="ghost" icon={<LuPhone className="h-4 w-4" />}>
              {siteConfig.phone}
            </ClayButton>
          </div>
        </motion.div>
      </ClayContainer>
    </section>
  );
}
