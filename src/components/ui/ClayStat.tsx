"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import type { ClayVariant } from "@/lib/types";
import { ClayIcon } from "./ClayIcon";

function AnimatedNumber({ value }: { value: string }) {
  const match = value.match(/^([\d,.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0.2 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView && numeric !== null) motionValue.set(numeric);
  }, [inView, numeric, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ClayStat({
  value,
  label,
  variant,
}: {
  value: string;
  label: string;
  variant: ClayVariant;
}) {
  return (
    <div className="glass glass-highlight flex flex-col items-center gap-3 px-6 py-8 text-center">
      <ClayIcon variant={variant} tone="coral" />
      <p className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
        <AnimatedNumber value={value} />
      </p>
      <p className="text-sm font-medium text-ink-soft">{label}</p>
    </div>
  );
}
