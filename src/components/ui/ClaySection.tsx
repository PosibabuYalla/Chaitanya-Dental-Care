import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import ClayContainer from "./ClayContainer";
import RevealOnScroll from "./RevealOnScroll";

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <span className="glass-pill inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-coral-deep">
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <RevealOnScroll
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {kicker && <SectionKicker>{kicker}</SectionKicker>}
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>}
    </RevealOnScroll>
  );
}

export default function ClaySection({
  children,
  className,
  containerClassName,
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-14 sm:py-20 lg:py-24", className)}>
      <ClayContainer className={containerClassName}>{children}</ClayContainer>
    </section>
  );
}
