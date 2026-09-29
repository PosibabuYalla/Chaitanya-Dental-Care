"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowRight, LuClock } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import { ClayIcon } from "@/components/ui/ClayIcon";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <ClaySection>
      <SectionHeading kicker="All Treatments" title="Browse Our Full Range of Services" />

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div key={service.slug} variants={staggerItem}>
            <Link href={`/services/${service.slug}`} data-cursor-hover className="group block h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass glass-highlight flex h-full flex-col gap-4 p-6 sm:p-7"
              >
                <ClayIcon variant={service.variant} tone={service.tone} size="lg" />
                <h3 className="font-display text-lg font-bold text-ink">{service.name}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{service.tagline}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="flex items-center gap-1.5 text-xs text-ink-faint">
                    <LuClock className="h-3.5 w-3.5" /> {service.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-coral-deep transition-transform group-hover:translate-x-1">
                    Details <LuArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </Stagger>
    </ClaySection>
  );
}
