"use client";

import { useState } from "react";
import { LuMoveHorizontal } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import Image from "next/image";
import { photos } from "@/lib/images";

// Illustrative comparison: the same smile with a dulled "before" grade. WebGL
// views can't be clipped by CSS, so this slider is photographic, not 3D.
const smile = photos.aligner;

export default function BeforeAfter() {
  const [value, setValue] = useState(50);

  return (
    <ClaySection>
      <SectionHeading kicker="Transformations" title="Real Results. Confident Smiles." />

      <div className="glass-lg glass-highlight relative mx-auto mt-14 max-w-3xl overflow-hidden p-3 sm:p-4">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0">
            <Image
              src={smile.src}
              alt={`${smile.alt} — before treatment`}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              style={{ filter: "sepia(0.5) saturate(0.75) brightness(0.9) contrast(0.95)" }}
            />
            <span className="glass-pill absolute bottom-4 left-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">Before</span>
          </div>

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${value}%)` }}
          >
            <Image
              src={smile.src}
              alt={`${smile.alt} — after treatment`}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              style={{ filter: "brightness(1.06) saturate(1.05)" }}
            />
            <span className="glass-pill absolute bottom-4 right-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-sky-deep">After</span>
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 w-1 bg-white shadow-glass-sm"
            style={{ left: `${value}%` }}
          >
            <div className="glass-pill absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-ink">
              <LuMoveHorizontal className="h-4 w-4" />
            </div>
          </div>
        </div>

        <label htmlFor="before-after-slider" className="sr-only">
          Drag to compare before and after
        </label>
        <input
          id="before-after-slider"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] cursor-ew-resize opacity-0 sm:inset-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)]"
          aria-label="Before and after comparison slider"
        />
      </div>
    </ClaySection>
  );
}
