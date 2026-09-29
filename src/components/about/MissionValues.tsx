"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/ClaySection";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import ClayVisual from "@/components/three/ClayVisual";
import { valueItems } from "@/lib/data/site";

export default function MissionValues() {
  return (
    <section className="relative overflow-hidden bg-ivory-deep py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="glass-pill inline-flex w-fit items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Our Mission
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Precision Dentistry, Delivered with Heart
            </h2>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              We believe great dentistry sits at the intersection of clinical precision and genuine care. Our
              mission is to make advanced treatment feel approachable — never rushed, never impersonal, and
              always explained in plain language.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-64 sm:h-72"
          >
            <ClayVisual variant="heart" tone="pink" scale={1.3} />
          </motion.div>
        </div>

        <div className="mt-20">
          <SectionHeading kicker="Our Values" title="What Guides Every Treatment We Provide" />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valueItems.map((v) => (
              <motion.div key={v.title} variants={staggerItem} className="glass glass-highlight flex items-start gap-4 p-6">
                <div className="h-14 w-14 shrink-0">
                  <ClayVisual size="md" variant={v.variant} tone="gold" scale={0.85} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
