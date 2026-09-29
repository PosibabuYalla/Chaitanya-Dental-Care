"use client";

import { useSyncExternalStore } from "react";

// Subscribes to a CSS media query. The server snapshot is `false`, so the first
// client render matches the server HTML and updates after hydration.
export function useMatchMedia(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
