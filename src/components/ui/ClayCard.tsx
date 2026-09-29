"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function ClayCard({
  children,
  className,
  lift = true,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  lift?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">) {
  return (
    <motion.div
      whileHover={lift ? { y: -8, scale: 1.015 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn("glass glass-highlight relative overflow-hidden p-6 sm:p-8", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
