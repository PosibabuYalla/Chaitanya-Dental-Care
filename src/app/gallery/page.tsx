import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryMasonry from "@/components/gallery/GalleryMasonry";
import SimpleCTA from "@/components/sections/SimpleCTA";

export const metadata: Metadata = pageMetadata({
  title: "Clinic Gallery",
  description:
    "Take a look inside Chaithanya Dental Hospital, Hyderabad — our treatment rooms, digital dental technology, our team and the confident smiles we help create.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div>
      <GalleryHero />
      <GalleryMasonry />
      <SimpleCTA
        title="See These Results in Person"
        description="Book a consultation and start your own transformation story."
        variant="crown"
        tone="gold"
      />
    </div>
  );
}
