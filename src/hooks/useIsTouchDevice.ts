"use client";

import { useMatchMedia } from "./matchMediaStore";

// "Touch" = no fine pointer (mouse/trackpad). Server render assumes touch, so the
// custom cursor is only mounted once a mouse is actually detected.
export function useIsTouchDevice() {
  return !useMatchMedia("(pointer: fine)");
}
