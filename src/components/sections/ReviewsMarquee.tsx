"use client";

import { useState, type PointerEvent } from "react";
import { LuStar, LuQuote } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { cn } from "@/lib/utils";
import type { GoogleReview } from "@/lib/googlePlaces";
import type { Testimonial } from "@/lib/types";

const SECONDS_PER_CARD = 7;

// Rotate through Google brand colours for initials avatars
const AVATAR_COLORS = [
  "bg-[#4285F4] text-white",
  "bg-[#EA4335] text-white",
  "bg-[#34A853] text-white",
  "bg-[#FBBC04] text-gray-900",
];

function GoogleReviewCard({ review, colorIdx }: { review: GoogleReview; colorIdx: number }) {
  return (
    <article className="glass glass-highlight relative flex w-[300px] shrink-0 flex-col p-6 sm:w-[340px] sm:p-7">
      {/* Header: avatar + name + stars + Google G */}
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold",
            AVATAR_COLORS[colorIdx % AVATAR_COLORS.length],
          )}
          aria-hidden
        >
          {review.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-ink">{review.author}</p>
          <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <LuStar
                key={i}
                className={cn(
                  "h-3.5 w-3.5",
                  i < review.rating
                    ? "fill-[#FBBC04] text-[#F9AB00]"
                    : "fill-transparent text-ink-soft/20",
                )}
                aria-hidden
              />
            ))}
          </div>
        </div>
        <FcGoogle className="h-5 w-5 shrink-0" aria-label="Google review" />
      </div>

      {/* Review text */}
      <p className="mt-4 line-clamp-4 flex-1 text-sm leading-relaxed text-ink-soft">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <div className="flex items-center gap-1.5">
          <FcGoogle className="h-3.5 w-3.5" aria-hidden />
          <span className="text-xs text-ink-soft">Reviewed on Google</span>
        </div>
        {review.relativeTime && (
          <span className="text-xs text-ink-soft">{review.relativeTime}</span>
        )}
      </div>
    </article>
  );
}

function StaticReviewCard({ t }: { t: Testimonial }) {
  return (
    <article className="glass glass-highlight relative w-[300px] shrink-0 p-6 sm:w-[340px] sm:p-7">
      <LuQuote className="h-7 w-7 text-coral/50" />
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
            <LuStar key={i} className="h-3.5 w-3.5 fill-[#FBBC04] text-[#F9AB00]" aria-hidden />
          ))}
        </div>
      </div>
    </article>
  );
}

type ReviewsMarqueeProps =
  | { mode: "google"; reviews: GoogleReview[] }
  | { mode: "static"; reviews: Testimonial[] };

export default function ReviewsMarquee(props: ReviewsMarqueeProps) {
  const [touchPaused, setTouchPaused] = useState(false);
  const onTouch = (paused: boolean) => (e: PointerEvent) => {
    if (e.pointerType !== "mouse") setTouchPaused(paused);
  };

  const count = props.reviews.length;

  return (
    <div
      role="region"
      aria-label="Patient reviews"
      className={cn(
        "group relative mt-12 overflow-hidden pb-4 [touch-action:pan-y]",
        "[mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]",
        "motion-reduce:no-scrollbar motion-reduce:overflow-x-auto motion-reduce:px-5 motion-reduce:[mask-image:none] sm:motion-reduce:px-0",
      )}
      onPointerDown={onTouch(true)}
      onPointerUp={onTouch(false)}
      onPointerCancel={onTouch(false)}
      onPointerLeave={onTouch(false)}
    >
      <div
        className={cn(
          "flex w-max animate-marquee",
          "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
          "motion-reduce:animate-none",
        )}
        style={{
          animationDuration: `${count * SECONDS_PER_CARD}s`,
          animationPlayState: touchPaused ? "paused" : undefined,
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className={cn("flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6", copy === 1 && "motion-reduce:hidden")}
            aria-hidden={copy === 1 || undefined}
          >
            {props.mode === "google"
              ? (props.reviews as GoogleReview[]).map((review, idx) => (
                  <GoogleReviewCard key={`${copy}-${idx}`} review={review} colorIdx={idx} />
                ))
              : (props.reviews as Testimonial[]).map((t) => (
                  <StaticReviewCard key={`${copy}-${t.id}`} t={t} />
                ))}
          </div>
        ))}
      </div>
    </div>
  );
}
