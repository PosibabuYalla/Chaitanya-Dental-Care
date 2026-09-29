"use client";

import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { LuMoveHorizontal } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import Image from "next/image";
import beforeTeeth from "@/components/gallery/Before Teeth.webp";
import afterTeeth from "@/components/gallery/After Teeth.webp";

// WebGL views can't be clipped by CSS, so this slider is photographic, not 3D.
export default function BeforeAfter() {
  const [value, setValue] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <ClaySection>
      <SectionHeading kicker="Transformations" title="Real Results. Confident Smiles." />

      <div className="glass-lg glass-highlight relative mx-auto mt-14 max-w-3xl overflow-hidden p-3 sm:p-4">
        <div
          ref={frameRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          data-cursor-hover
          className="relative aspect-[16/10] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[2rem]"
        >
          <div className="absolute inset-0">
            <Image
              src={beforeTeeth}
              alt="Patient's teeth before treatment"
              fill
              placeholder="blur"
              draggable={false}
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
            <span className="glass-pill absolute bottom-4 left-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">Before</span>
          </div>

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${value}%)` }}
          >
            <Image
              src={afterTeeth}
              alt="Patient's teeth after treatment"
              fill
              placeholder="blur"
              draggable={false}
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
            <span className="glass-pill absolute bottom-4 right-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-sky-deep">After</span>
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-glass-sm"
            style={{ left: `${value}%` }}
          >
            <div className="glass-pill absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-ink">
              <LuMoveHorizontal className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 px-2 pb-1 text-xs font-bold uppercase tracking-wide">
          <span className="text-ink-soft">Before</span>
          <label htmlFor="before-after-slider" className="sr-only">
            Drag to compare before and after
          </label>
          <input
            id="before-after-slider"
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            data-cursor-hover
            className="h-2 flex-1 cursor-pointer accent-sky-deep"
            aria-label="Before and after comparison slider"
          />
          <span className="text-sky-deep">After</span>
        </div>
      </div>
    </ClaySection>
  );
}
