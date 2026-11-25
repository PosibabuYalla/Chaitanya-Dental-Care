import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import TeamHero from "@/components/team/TeamHero";
import TeamGrid from "@/components/team/TeamGrid";
import SimpleCTA from "@/components/sections/SimpleCTA";

export const metadata: Metadata = pageMetadata({
  title: "Our Dentists & Specialists",
  description:
    "Meet the dental team at Chaitanya Dental Care, Vijayawada — specialists committed to clinical excellence, ethical treatment, and patient-first care.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <div>
      <TeamHero />
      <TeamGrid />
      <SimpleCTA
        title="Ready to Book a Consultation?"
        description="Reach out and we'll match you with the right doctor for your needs."
        variant="chair"
        tone="sky"
      />
    </div>
  );
}
