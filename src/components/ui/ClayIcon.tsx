import type { IconType } from "react-icons";
import {
  LuSmilePlus,
  LuAnchor,
  LuCrown,
  LuBraces,
  LuScanEye,
  LuBrush,
  LuArmchair,
  LuCross,
  LuScanLine,
  LuSquareActivity,
  LuLayers,
  LuSyringe,
  LuBookOpenText,
  LuMapPin,
  LuBuilding2,
  LuShieldCheck,
  LuSparkles,
  LuBaby,
  LuHeart,
  LuSun,
} from "react-icons/lu";
import type { ClayTone, ClayVariant } from "@/lib/types";
import { cn } from "@/lib/utils";

export const variantIcon: Record<ClayVariant, IconType> = {
  tooth: LuSmilePlus,
  implant: LuAnchor,
  crown: LuCrown,
  brace: LuBraces,
  mirror: LuScanEye,
  toothbrush: LuBrush,
  chair: LuArmchair,
  cross: LuCross,
  scanner: LuScanLine,
  xray: LuSquareActivity,
  aligner: LuLayers,
  syringe: LuSyringe,
  book: LuBookOpenText,
  pin: LuMapPin,
  building: LuBuilding2,
  shield: LuShieldCheck,
  sparkle: LuSparkles,
  child: LuBaby,
  heart: LuHeart,
  whitening: LuSun,
};

const toneClasses: Record<ClayTone, string> = {
  pink: "bg-sky-soft/25 text-sky-deep",
  sky: "bg-sky/20 text-sky-deep",
  coral: "bg-coral/25 text-coral-deep",
  ivory: "bg-white/40 text-ink-soft",
  lavender: "bg-lavender-deep/20 text-sky-deep",
};

export function ClayIcon({
  variant,
  tone = "sky",
  size = "md",
  className,
}: {
  variant: ClayVariant;
  tone?: ClayTone;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const Icon = variantIcon[variant];
  const sizeClasses = {
    sm: "h-10 w-10 [&>svg]:h-4 [&>svg]:w-4",
    md: "h-14 w-14 [&>svg]:h-6 [&>svg]:w-6",
    lg: "h-20 w-20 [&>svg]:h-9 [&>svg]:w-9",
    xl: "h-32 w-32 rounded-[2rem] [&>svg]:h-14 [&>svg]:w-14 sm:h-40 sm:w-40 sm:[&>svg]:h-16 sm:[&>svg]:w-16",
  }[size];

  return (
    <span
      className={cn(
        "glass-highlight inline-flex shrink-0 items-center justify-center rounded-[1.4rem] border border-white/70 shadow-glass-sm backdrop-blur-md",
        toneClasses[tone],
        sizeClasses,
        className,
      )}
    >
      <Icon strokeWidth={2} />
    </span>
  );
}
