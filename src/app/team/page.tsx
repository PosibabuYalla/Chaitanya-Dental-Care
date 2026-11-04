import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import TeamHero from "@/components/team/TeamHero";
import TeamGrid from "@/components/team/TeamGrid";
import SimpleCTA from "@/components/sections/SimpleCTA";

export const metadata: Metadata = pageMetadata({
  title: "Our Dentists & Specialists",
  description:
    "Meet the dental surgeons, orthodontists, implantologists and hygienists at chaitanya Dental Hospital, Tadigadapa — specialists known for gentle chairside care.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <div>
      <TeamHero />
      <TeamGrid />
      <SimpleCTA
        title="Book a Consultation With Our Specialists"
        description="Tell us your concern and we'll match you with the right doctor."
        variant="chair"
        tone="sky"
      />
    </div>
  );
}
