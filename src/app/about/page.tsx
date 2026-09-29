import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutHero from "@/components/about/AboutHero";
import StoryTimeline from "@/components/about/StoryTimeline";
import MissionValues from "@/components/about/MissionValues";
import ClinicEnvironment from "@/components/about/ClinicEnvironment";
import CertificationsAchievements from "@/components/about/CertificationsAchievements";
import SimpleCTA from "@/components/sections/SimpleCTA";

export const metadata: Metadata = pageMetadata({
  title: "About Our Dental Hospital",
  description:
    "Since 2011, Chaithanya Dental Hospital in Banjara Hills, Hyderabad has grown into a multi-specialty dental practice built on precision, comfort and compassion.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <StoryTimeline />
      <MissionValues />
      <ClinicEnvironment />
      <CertificationsAchievements />
      <SimpleCTA
        title="Experience Dental Care Differently."
        description="Come see why thousands of patients trust us with their smiles."
        variant="tooth"
        tone="pink"
      />
    </div>
  );
}
