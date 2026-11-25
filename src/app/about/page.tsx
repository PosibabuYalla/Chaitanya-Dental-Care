import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutHero from "@/components/about/AboutHero";
import StoryTimeline from "@/components/about/StoryTimeline";
import MissionValues from "@/components/about/MissionValues";
import ClinicEnvironment from "@/components/about/ClinicEnvironment";
import CertificationsAchievements from "@/components/about/CertificationsAchievements";
import SimpleCTA from "@/components/sections/SimpleCTA";

export const metadata: Metadata = pageMetadata({
  title: "About Chaitanya Dental Care",
  description:
    "Established in 2019 by Dr. Venigalla Chaitanya, Chaitanya Dental Care is built on clinical excellence, precision, and ethical patient-centred treatment — with in-house CAD/CAM technology and two branches in Vijayawada.",
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
        title="Precision in Practice. Excellence in Every Smile."
        description="Experience dental care guided by clinical judgement, modern technology, and genuine patient-first values."
        variant="tooth"
        tone="pink"
      />
    </div>
  );
}
