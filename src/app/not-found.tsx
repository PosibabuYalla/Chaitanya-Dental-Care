import Link from "next/link";
import ClayContainer from "@/components/ui/ClayContainer";
import ClayButton from "@/components/ui/ClayButton";
import ClayVisual from "@/components/three/ClayVisual";
import { LuHouse, LuCalendarPlus } from "react-icons/lu";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center py-24">
      <ClayContainer className="flex flex-col items-center gap-6 text-center">
        <div className="h-56 w-56">
          <ClayVisual variant="tooth" tone="lavender" scale={1.3} />
        </div>
        <span className="font-display text-6xl font-extrabold text-ink/20">404</span>
        <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          This Page Took an Unexpected Detour
        </h1>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          The page you&rsquo;re looking for may have moved or no longer exists. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ClayButton href="/" icon={<LuHouse className="h-4 w-4" />}>
            Back to Home
          </ClayButton>
          <ClayButton href="/appointment" variant="secondary" icon={<LuCalendarPlus className="h-4 w-4" />}>
            Book an Appointment
          </ClayButton>
        </div>
        <Link href="/services" className="text-sm font-semibold text-gold-deep hover:underline" data-cursor-hover>
          Or browse our services →
        </Link>
      </ClayContainer>
    </section>
  );
}
