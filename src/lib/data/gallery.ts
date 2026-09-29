import type { BeforeAfterPair, GalleryItem } from "@/lib/types";
import hospitalFront from "@/components/gallery/Infront of hospital.webp";
import doctorTreating from "@/components/gallery/Doctor treating Patient.webp";
import clinicFront from "@/components/gallery/Chaitanya Dental Care.webp";
import reception from "@/components/gallery/Reception.webp";
import drChaitanya from "@/components/gallery/Dr. Chaitanya.webp";
import dentalRoom from "@/components/gallery/Dental Room.webp";
import toothMachine from "@/components/gallery/Tooth MACHINE.webp";
import beforeTeeth from "@/components/gallery/Before Teeth.webp";
import afterTeeth from "@/components/gallery/After Teeth.webp";

// Add a pair here and it appears in the gallery's Before & After tab; the
// first pair is also the homepage "Real Results" slider.
export const beforeAfterPairs: BeforeAfterPair[] = [{ before: beforeTeeth, after: afterTeeth }];

export const galleryItems: GalleryItem[] = [
  // Demo photos — listed first so they also lead the homepage preview.
  { id: "p1", category: "Clinic", caption: "In front of Chaitanya Dental Care", tone: "sky", variant: "building", span: "wide", image: hospitalFront },
  { id: "p2", category: "Doctors", caption: "Dr. Chaitanya", tone: "coral", variant: "cross", span: "tall", image: drChaitanya },
  { id: "p3", category: "Patients", caption: "Doctor treating a patient", tone: "pink", variant: "sparkle", span: "square", image: doctorTreating },
  { id: "p4", category: "Clinic", caption: "Reception & waiting lounge", tone: "pink", variant: "building", span: "square", image: reception },
  { id: "p5", category: "Clinic", caption: "Chaitanya Dental Care", tone: "sky", variant: "building", span: "wide", image: clinicFront },
  { id: "p6", category: "Treatment Rooms", caption: "Dental treatment room", tone: "sky", variant: "implant", span: "square", image: dentalRoom },
  { id: "p7", category: "Technology", caption: "Advanced dental equipment", tone: "lavender", variant: "scanner", span: "tall", image: toothMachine },
  ...beforeAfterPairs.map((comparison, i): GalleryItem => ({
    id: `ba${i + 1}`,
    category: "Before & After",
    caption: "Smile transformation — drag to compare",
    tone: "coral",
    variant: "crown",
    span: "tall",
    comparison,
  })),
  // Placeholder slots for upcoming cases; replace with entries in beforeAfterPairs.
  ...Array.from({ length: 5 }, (_, i): GalleryItem => ({
    id: `ba-soon${i + 1}`,
    category: "Before & After",
    caption: "New smile transformation coming soon",
    tone: "coral",
    variant: "crown",
    span: "tall",
    comingSoon: true,
  })),
  { id: "g2", category: "Technology", caption: "3D imaging suite", tone: "sky", variant: "scanner", span: "tall" },
  { id: "g3", category: "Doctors", caption: "Dr. Ananya Rao in consultation", tone: "coral", variant: "cross", span: "square" },
  { id: "g4", category: "Treatment Rooms", caption: "Implant surgical suite", tone: "sky", variant: "implant", span: "tall" },
  { id: "g5", category: "Patients", caption: "A patient's first smile reveal", tone: "pink", variant: "sparkle", span: "square" },
  { id: "g7", category: "Events", caption: "Community dental health camp", tone: "lavender", variant: "heart", span: "square" },
  { id: "g8", category: "Clinic", caption: "Sterilisation & instrument centre", tone: "sky", variant: "shield", span: "tall" },
  { id: "g9", category: "Technology", caption: "CAD/CAM milling station", tone: "coral", variant: "xray", span: "square" },
  { id: "g10", category: "Doctors", caption: "Dr. Karthik Menon fitting aligners", tone: "lavender", variant: "aligner", span: "wide" },
  { id: "g11", category: "Treatment Rooms", caption: "Pediatric treatment room", tone: "sky", variant: "child", span: "square" },
];

export const galleryCategories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];
