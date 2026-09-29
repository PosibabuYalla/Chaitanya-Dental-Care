import type { ClayTone } from "@/lib/types";
import { cn } from "@/lib/utils";

const toneClasses: Record<ClayTone, string> = {
  pink: "from-sky-soft/50 via-white/30 to-pink-deep/30",
  sky: "from-sky-soft/50 via-white/30 to-sky/35",
  gold: "from-sky/35 via-white/25 to-sky-deep/35",
  ivory: "from-white/60 via-white/30 to-sky-soft/40",
  lavender: "from-lavender/50 via-white/30 to-lavender-deep/35",
};

export default function DoctorPortrait({
  initials,
  tone,
  className,
}: {
  initials: string;
  tone: ClayTone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-highlight relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br shadow-glass backdrop-blur-md",
        toneClasses[tone],
        className,
      )}
    >
      <span className="font-display text-4xl font-extrabold text-ink/70">{initials}</span>
      <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-white/25 blur-2xl" />
    </div>
  );
}
