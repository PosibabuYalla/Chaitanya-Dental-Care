"use client";

import { motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";
import ClaySection from "@/components/ui/ClaySection";
import ClayButton from "@/components/ui/ClayButton";
import ClayVisual from "@/components/three/ClayVisual";
import type { ClayTone, ClayVariant } from "@/lib/types";

export default function SimpleCTA({
  title,
  description,
  ctaLabel = "Book Your Appointment",
  ctaHref = "/appointment",
  variant = "sparkle",
  tone = "gold",
}: {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: ClayVariant;
  tone?: ClayTone;
}) {
  return (
    <ClaySection>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass-lg glass-highlight flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-14"
      >
        <div className="h-24 w-24">
          <ClayVisual variant={variant} tone={tone} scale={1} />
        </div>
        <h2 className="max-w-lg font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        {description && <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">{description}</p>}
        <ClayButton href={ctaHref} icon={<LuArrowRight className="h-4 w-4" />}>
          {ctaLabel}
        </ClayButton>
      </motion.div>
    </ClaySection>
  );
}
