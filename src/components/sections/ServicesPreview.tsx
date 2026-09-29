"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import ClayButton from "@/components/ui/ClayButton";
import ClayVisual from "@/components/three/ClayVisual";
import { services } from "@/lib/data/services";

const featured = [
  "dental-implants",
  "cosmetic-dentistry",
  "orthodontics",
  "root-canal-treatment",
  "pediatric-dentistry",
  "teeth-whitening",
];

export default function ServicesPreview() {
  const items = featured.map((slug) => services.find((s) => s.slug === slug)!);

  return (
    <ClaySection>
      <SectionHeading
        kicker="Our Services"
        title="Complete Dental Care Under One Roof"
        description="From routine check-ups to advanced surgical care, every treatment is delivered with the same precision and warmth."
      />

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => (
          <motion.div key={service.slug} variants={staggerItem}>
            <Link href={`/services/${service.slug}`} data-cursor-hover className="group block">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass glass-highlight relative flex h-full flex-col gap-4 overflow-hidden p-6 sm:p-7"
              >
                <div className="h-32 w-full">
                  <ClayVisual variant={service.variant} tone={service.tone} scale={1} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{service.name}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{service.tagline}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-transform group-hover:translate-x-1">
                  Learn more <LuArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </Stagger>

      <div className="mt-12 flex justify-center">
        <ClayButton href="/services" variant="secondary" icon={<LuArrowRight className="h-4 w-4" />}>
          View All Services
        </ClayButton>
      </div>
    </ClaySection>
  );
}
