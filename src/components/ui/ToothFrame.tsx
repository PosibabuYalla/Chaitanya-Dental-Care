import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Anatomical molar silhouette on a 100×112 grid: notched crown with two cusps,
// a soft cervical waist and two tapered roots.
const TOOTH_PATH =
  "M50 16C44 9 35 4 24 4C11 4 3 13 3 28C3 41 8 50 11 60C14 71 15 84 18 97C20 106 24 110 29 110C34 110 36 104 38 96C40 86 42 77 46 72C47.5 70 48.8 69.5 50 69.5C51.2 69.5 52.5 70 54 72C58 77 60 86 62 96C64 104 66 110 71 110C76 110 80 106 82 97C85 84 86 71 89 60C92 50 97 41 97 28C97 13 89 4 76 4C65 4 56 9 50 16Z";

const CLIP_ID = "tooth-frame-clip";
const clip = { clipPath: `url(#${CLIP_ID})`, WebkitClipPath: `url(#${CLIP_ID})` } as const;

/**
 * Clips its children (typically a `next/image` with `fill`) to a tooth shape.
 * The clip uses objectBoundingBox units, so it scales with the element at every
 * breakpoint; size the frame with width classes — the aspect ratio is fixed.
 */
export default function ToothFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn("relative aspect-[100/112]", className)}
      style={{ filter: "drop-shadow(0 22px 40px rgba(26, 143, 196, 0.28))" }}
    >
      <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
        <defs>
          <clipPath id={CLIP_ID} clipPathUnits="objectBoundingBox">
            <path transform="scale(0.01 0.0089286)" d={TOOTH_PATH} />
          </clipPath>
        </defs>
      </svg>

      {/* Enamel rim: the same silhouette, slightly larger, behind the photo */}
      <div
        aria-hidden
        className="absolute -inset-[3.5%]"
        style={{ ...clip, background: "linear-gradient(160deg, #ffffff 0%, #e8f4fb 40%, #a8d8f0 78%, #38b6e8 100%)" }}
      />

      {/* Photo, clipped to the tooth */}
      <div className="absolute inset-0 overflow-hidden bg-sky-soft/40" style={clip}>
        {children}
        {/* Enamel gloss + cool tint so the photo reads as part of the tooth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 38% at 28% 14%, rgba(255,255,255,0.55), transparent 70%), linear-gradient(to top, rgba(26,143,196,0.28), transparent 45%)",
          }}
        />
      </div>

      {/* Hairline edge to crisp up the silhouette */}
      <svg
        viewBox="0 0 100 112"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
        focusable="false"
      >
        <path d={TOOTH_PATH} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
