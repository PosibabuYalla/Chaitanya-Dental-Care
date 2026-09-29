"use client";

import { motion } from "motion/react";
import { LuCheck } from "react-icons/lu";
import { cn } from "@/lib/utils";

const stepLabels = ["Treatment", "Doctor", "Date", "Time", "Details", "Confirm"];

export default function StepProgress({ step }: { step: number }) {
  return (
    <div className="flex flex-col items-center">

      <div className="flex w-full max-w-2xl items-center justify-between gap-1">
        {stepLabels.map((label, i) => {
          const state = i < step ? "done" : i === step ? "active" : "upcoming";
          return (
            <div key={label} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full items-center">
                {/* Both connectors always render (outer ones invisible) so every circle is centred over its label */}
                <div
                  className={cn(
                    "h-0.5 flex-1 transition-colors",
                    i === 0 && "invisible",
                    state === "upcoming" ? "bg-ink/10" : "bg-gold-deep/50",
                  )}
                />
                <motion.span
                  animate={{ scale: state === "active" ? 1.15 : 1 }}
                  className={cn(
                    "glass-pill flex h-8 w-8 shrink-0 items-center justify-center text-xs font-bold",
                    state === "upcoming" ? "text-ink-faint" : "bg-sky bg-none text-white shadow-md shadow-sky/30",
                  )}
                >
                  {state === "done" ? <LuCheck className="h-3.5 w-3.5" /> : i + 1}
                </motion.span>
                <div
                  className={cn(
                    "h-0.5 flex-1 transition-colors",
                    i === stepLabels.length - 1 && "invisible",
                    i < step ? "bg-gold-deep/50" : "bg-ink/10",
                  )}
                />
              </div>
              <span className={cn("hidden text-[11px] font-semibold sm:block", state === "upcoming" ? "text-ink-faint" : "text-ink")}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
