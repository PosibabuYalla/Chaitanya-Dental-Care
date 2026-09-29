"use client";

import { useEffect, useRef } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ToothCursor() {
  const isTouch = useIsTouchDevice();
  const reducedMotion = usePrefersReducedMotion();
  const disabled = isTouch || reducedMotion;

  const elRef = useRef<HTMLDivElement>(null);
  const prevX = useRef(0);
  const curSrc = useRef<"left" | "right">("right");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (disabled) return;

    document.documentElement.classList.add("cursor-none-desktop");

    let raf = 0;
    let cx = -200;
    let cy = -200;

    const move = (e: PointerEvent) => {
      cx = e.clientX;
      cy = e.clientY;

      const dx = e.clientX - prevX.current;
      if (Math.abs(dx) > 1) {
        const next = dx > 0 ? "right" : "left";
        if (next !== curSrc.current && imgRef.current) {
          curSrc.current = next;
          imgRef.current.src =
            next === "right"
              ? "/cursors/couserright.webp"
              : "/cursors/courserleft.webp";
        }
      }
      prevX.current = e.clientX;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (elRef.current) {
          elRef.current.style.transform = `translate(${cx - 24}px, ${cy - 24}px)`;
          elRef.current.style.opacity = "1";
        }
      });
    };

    const down = () => {
      if (imgRef.current) imgRef.current.style.transform = "scale(0.78)";
    };
    const up = () => {
      if (imgRef.current) imgRef.current.style.transform = "scale(1)";
    };

    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      const isHover = !!t.closest("a, button, input, textarea, select, [data-cursor-hover]");
      if (imgRef.current)
        imgRef.current.style.transform = isHover ? "scale(1.25)" : "scale(1)";
    };

    const leave = () => {
      if (elRef.current) elRef.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [disabled]);

  if (disabled) return null;

  return (
    <div
      ref={elRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 48,
        height: 48,
        pointerEvents: "none",
        zIndex: 300,
        opacity: 0,
        willChange: "transform",
        transform: "translate(-200px, -200px)",
      }}
      className="hidden md:block"
    >
      <img
        ref={imgRef}
        src="/cursors/couserright.webp"
        alt=""
        draggable={false}
        style={{
          width: 48,
          height: 48,
          objectFit: "contain",
          transition: "transform 0.12s ease",
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))",
          userSelect: "none",
        }}
      />
    </div>
  );
}
