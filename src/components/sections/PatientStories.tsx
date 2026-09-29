"use client";

import { useState, type PointerEvent } from "react";
import { LuStar, LuQuote } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { testimonials } from "@/lib/data/testimonials";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

// ~7s of travel per card keeps the speed readable regardless of how many reviews there are.
const SECONDS_PER_CARD = 7;

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <div className="glass glass-highlight relative w-[300px] shrink-0 p-6 sm:w-[340px] sm:p-7">
      <LuQuote className="h-7 w-7 text-gold/50" />
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="glass-pill flex h-11 w-11 shrink-0 items-center justify-center glass-tint font-display text-sm font-bold text-ink">
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{t.name}</p>
          <p className="text-xs text-ink-soft">{t.treatment}</p>
        </div>
        <div className="ml-auto flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <LuStar key={i} className="h-3.5 w-3.5 fill-gold-deep text-gold-deep" aria-hidden />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PatientStories() {
  // Touch: press-and-hold pauses, release resumes. Mouse uses CSS hover (below),
  // which Tailwind only applies on devices that can actually hover.
  const [touchPaused, setTouchPaused] = useState(false);
  const onTouch = (paused: boolean) => (e: PointerEvent) => {
    if (e.pointerType !== "mouse") setTouchPaused(paused);
  };

  return (
    <ClaySection containerClassName="px-0! sm:px-8! lg:px-12!">
      <div className="px-5 sm:px-0">
        <SectionHeading
          kicker="Patient Stories"
          title="Real Patients. Real Confidence."
          description="A few of the thousands of smiles we've had the privilege of treating."
        />
      </div>

      <div
        role="region"
        aria-label="Patient reviews"
        className={cn(
          "group relative mt-12 overflow-hidden pb-4 [touch-action:pan-y]",
          // Soft fade at both edges so cards glide in and out
          "[mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]",
          // Reduced motion: no auto-scroll, just a swipeable row
          "motion-reduce:no-scrollbar motion-reduce:overflow-x-auto motion-reduce:px-5 motion-reduce:[mask-image:none] sm:motion-reduce:px-0",
        )}
        onPointerDown={onTouch(true)}
        onPointerUp={onTouch(false)}
        onPointerCancel={onTouch(false)}
        onPointerLeave={onTouch(false)}
      >
        {/*
          Two identical copies, each with trailing padding equal to the card gap,
          animated by the existing `marquee` keyframes (0 → -50%). At -50% the
          second copy sits exactly where the first began, so the loop is seamless.
        */}
        <div
          className={cn(
            "flex w-max animate-marquee",
            "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
            "motion-reduce:animate-none",
          )}
          style={{
            animationDuration: `${testimonials.length * SECONDS_PER_CARD}s`,
            animationPlayState: touchPaused ? "paused" : undefined,
          }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className={cn("flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6", copy === 1 && "motion-reduce:hidden")}
              aria-hidden={copy === 1 || undefined}
            >
              {testimonials.map((t) => (
                <ReviewCard key={`${copy}-${t.id}`} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </ClaySection>
  );
}
