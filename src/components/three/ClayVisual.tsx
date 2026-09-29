"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ClayIcon } from "@/components/ui/ClayIcon";
import type { ClayTone, ClayVariant } from "@/lib/types";
import { cn } from "@/lib/utils";

// Floating 2D glass icon. Only the hero and services sections use real 3D
// models (HeroGLBCanvas / ServicesGLBCanvas); everything else stays DOM-only.
export default function ClayVisual({
  variant,
  tone = "sky",
  scale = 1,
  size,
  className,
}: {
  variant: ClayVariant;
  tone?: ClayTone;
  /** Visual weight: ≥1.2 renders the large feature size. */
  scale?: number;
  /** Explicit icon size for small containers; overrides `scale`. */
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const resolved = size ?? (scale >= 1.2 ? "xl" : "lg");
  return (
    <div className={cn("relative flex h-full w-full items-center justify-center", className)}>
      {resolved === "xl" && (
        <>
          <span aria-hidden className="absolute h-60 w-60 rounded-full border border-white/60 bg-white/10 sm:h-72 sm:w-72" />
          <span aria-hidden className="absolute h-44 w-44 rounded-full border border-white/70 bg-sky/10 shadow-glass sm:h-56 sm:w-56" />
        </>
      )}
      <ClayIcon
        variant={variant}
        tone={tone}
        size={resolved}
        className={cn(!reducedMotion && "animate-float")}
      />
    </div>
  );
}
