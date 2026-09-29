import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ServicesHero from "@/components/services/ServicesHero";
import FindYourTreatment from "@/components/services/FindYourTreatment";
import ServicesGrid from "@/components/services/ServicesGrid";
import SimpleCTA from "@/components/sections/SimpleCTA";

export const metadata: Metadata = pageMetadata({
  title: "Dental Treatments in Hyderabad",
  description:
    "Explore 12 dental treatments at Chaithanya Dental Hospital, Hyderabad: dental implants, root canal, braces and aligners, teeth whitening, kids' dentistry and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <FindYourTreatment />
      <ServicesGrid />
      <SimpleCTA
        title="Not sure where to start?"
        description="Book a consultation and we'll build a personalised treatment plan together."
        variant="mirror"
        tone="sky"
      />
    </div>
  );
}
