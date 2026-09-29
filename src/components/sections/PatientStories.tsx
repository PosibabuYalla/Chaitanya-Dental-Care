"use client";

import { useRef } from "react";
import { LuStar, LuChevronLeft, LuChevronRight, LuQuote } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export default function PatientStories() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
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

      <div className="relative mt-12">
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 sm:scroll-px-0 sm:gap-6 sm:px-0"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={cn(
                "glass glass-highlight relative w-[300px] shrink-0 snap-start p-6 sm:w-[340px] sm:p-7",
              )}
            >
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
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <LuStar key={i} className="h-3.5 w-3.5 fill-gold-deep text-gold-deep" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous testimonial"
            data-cursor-hover
            className="glass-pill flex h-11 w-11 items-center justify-center text-ink"
          >
            <LuChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next testimonial"
            data-cursor-hover
            className="glass-pill flex h-11 w-11 items-center justify-center text-ink"
          >
            <LuChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </ClaySection>
  );
}
