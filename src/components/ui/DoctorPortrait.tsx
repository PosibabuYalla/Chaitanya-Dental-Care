import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ClayTone } from "@/lib/types";
import { cn } from "@/lib/utils";

const toneClasses: Record<ClayTone, string> = {
  pink: "from-sky-soft/50 via-white/30 to-pink-deep/30",
  sky: "from-sky-soft/50 via-white/30 to-sky/35",
  coral: "from-coral-soft/70 via-white/30 to-coral/40",
  ivory: "from-white/60 via-white/30 to-sky-soft/40",
  lavender: "from-lavender/50 via-white/30 to-lavender-deep/35",
};

export default function DoctorPortrait({
  initials,
  tone,
  photo,
  name,
  className,
}: {
  initials: string;
  tone: ClayTone;
  photo?: StaticImageData;
  name?: string;
  className?: string;
}) {
  if (photo) {
    return (
      <div className={cn("relative h-56 w-full sm:h-60", className)}>
        <Image
          src={photo}
          alt={name ?? initials}
          fill
          placeholder="blur"
          sizes="(min-width: 640px) 240px, 180px"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-56 w-full items-center justify-center bg-gradient-to-br sm:h-60",
        toneClasses[tone],
        className,
      )}
    >
      <span className="font-display text-5xl font-extrabold text-ink/60">{initials}</span>
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/25 blur-2xl" />
    </div>
  );
}
