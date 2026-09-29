"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ClayButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  type?: "button" | "submit";
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
  "aria-label"?: string;
}

const variantClasses = {
  primary:
    "bg-sky text-white shadow-lg shadow-sky/30 hover:bg-sky-deep",
  secondary:
    "glass-pill text-sky-deep hover:bg-white/70",
  ghost: "glass-pill text-ink hover:bg-white/70",
};

export default function ClayButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "lg",
  type = "button",
  className,
  icon,
  disabled,
  ...rest
}: ClayButtonProps) {
  const classes = cn(
    "glass-highlight relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight text-ink transition-shadow duration-300",
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
    variantClasses[variant],
    disabled && "pointer-events-none opacity-50",
    className,
  );

  const motionProps = {
    whileHover: { scale: 1.035, y: -2 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block" data-cursor-hover>
        <Link href={href} onClick={onClick} className={classes} aria-label={rest["aria-label"]}>
          {children}
          {icon}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      data-cursor-hover
      aria-label={rest["aria-label"]}
    >
      {children}
      {icon}
    </motion.button>
  );
}
