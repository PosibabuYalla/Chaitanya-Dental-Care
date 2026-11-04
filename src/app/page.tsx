import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesOrbit from "@/components/sections/ServicesOrbit";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DentalJourney from "@/components/sections/DentalJourney";
import TechnologySection from "@/components/sections/TechnologySection";
import DoctorsPreview from "@/components/sections/DoctorsPreview";
import PatientStories from "@/components/sections/PatientStories";
import BeforeAfter from "@/components/sections/BeforeAfter";
import GalleryPreview from "@/components/sections/GalleryPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = pageMetadata({
  title: "chaitanya Dental Hospital – Dentist in Tadigadapa, Vijayawada",
  absoluteTitle: true,
  description:
    "chaitanya Dental Hospital in Tadigadapa, Vijayawada offers dental implants, root canals, braces, aligners and cosmetic dentistry. Book your visit today.",
  path: "/",
});

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesOrbit />
      <WhyChooseUs />
      <DentalJourney />
      <TechnologySection />
      <DoctorsPreview />
      <PatientStories />
      <BeforeAfter />
      <GalleryPreview />
      <BlogPreview />
      <AppointmentCTA />
    </div>
  );
}
