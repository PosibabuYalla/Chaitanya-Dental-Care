"use client";

import { useMatchMedia } from "./matchMediaStore";

export function usePrefersReducedMotion() {
  return useMatchMedia("(prefers-reduced-motion: reduce)");
}
