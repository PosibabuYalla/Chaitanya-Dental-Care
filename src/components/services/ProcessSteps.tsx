"use client";

import { motion } from "motion/react";
import type { Service } from "@/lib/types";

export default function ProcessSteps({ steps }: { steps: Service["process"] }) {
  return (
    <div className="flex flex-col gap-5">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="glass flex gap-5 p-6"
        >
          <span className="glass-pill flex h-11 w-11 shrink-0 items-center justify-center glass-tint font-display text-sm font-bold text-ink">
            {i + 1}
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-ink">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
