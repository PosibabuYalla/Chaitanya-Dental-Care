import type { ReactNode } from "react";
import type { ClayTone } from "@/lib/types";
import { cn } from "@/lib/utils";

const toneClasses: Record<ClayTone, string> = {
  pink: "bg-sky-soft/25 text-sky-deep",
  sky: "bg-sky/20 text-sky-deep",
  gold: "bg-sky-deep/15 text-sky-deep",
  ivory: "bg-white/40 text-ink-soft",
  lavender: "bg-lavender-deep/20 text-sky-deep",
};

export default function ClayBadge({
  children,
  tone = "sky",
  className,
}: {
  children: ReactNode;
  tone?: ClayTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "glass-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-ink",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
