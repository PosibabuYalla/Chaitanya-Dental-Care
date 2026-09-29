"use client";

import { useId, useRef, useState } from "react";
import type { PointerEvent } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { LuMoveHorizontal } from "react-icons/lu";
import { cn } from "@/lib/utils";

// WebGL views can't be clipped by CSS, so this slider is photographic, not 3D.
// Drag the photo itself, or use the range bar underneath (keyboard accessible).
export default function BeforeAfterSlider({
  before,
  after,
  caption = "Patient's teeth",
  sizes = "(min-width: 768px) 768px, 100vw",
  className,
  frameClassName = "aspect-[16/10]",
}: {
  before: StaticImageData;
  after: StaticImageData;
  caption?: string;
  sizes?: string;
  className?: string;
  /** Sizing for the photo frame; pass e.g. "flex-1" to fill a fixed-height parent. */
  frameClassName?: string;
}) {
  const [value, setValue] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const id = useId();

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
    <div className={cn("flex flex-col", className)}>
      <div
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        data-cursor-hover
        className={cn(
          "relative w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[2rem]",
          frameClassName,
        )}
      >
        <div className="absolute inset-0">
          <Image
            src={before}
            alt={`${caption} before treatment`}
            fill
            placeholder="blur"
            draggable={false}
            sizes={sizes}
            className="object-cover"
          />
          <span className="glass-pill absolute bottom-4 left-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">Before</span>
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${value}%)` }}
        >
          <Image
            src={after}
            alt={`${caption} after treatment`}
            fill
            placeholder="blur"
            draggable={false}
            sizes={sizes}
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
        <label htmlFor={id} className="sr-only">
          Drag to compare before and after
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          data-cursor-hover
          className="h-2 flex-1 cursor-pointer accent-sky-deep"
        />
        <span className="text-sky-deep">After</span>
      </div>
    </div>
  );
}
