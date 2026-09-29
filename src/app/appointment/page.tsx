import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ClayContainer from "@/components/ui/ClayContainer";
import { SectionKicker } from "@/components/ui/ClaySection";
import AppointmentWizard from "@/components/appointment/AppointmentWizard";

export const metadata: Metadata = pageMetadata({
  title: "Book a Dental Appointment",
  description:
    "Book a dental appointment online at Chaithanya Dental Hospital, Hyderabad in six quick steps — choose a treatment, doctor and time. No payment required upfront.",
  path: "/appointment",
});

export default function AppointmentPage() {
  return (
    <div>
      <section className="pb-10 pt-32 text-center sm:pt-40">
        <ClayContainer className="flex flex-col items-center gap-4">
          <SectionKicker>Book an Appointment</SectionKicker>
          <h1 className="max-w-xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Let&rsquo;s Find You a Time That Works
          </h1>
          <p className="max-w-md text-base text-ink-soft">
            Six quick steps — no account required, no payment upfront.
          </p>
        </ClayContainer>
      </section>
      <AppointmentWizard />
    </div>
  );
}
