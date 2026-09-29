import type { GalleryItem } from "@/lib/types";
import clinicFront from "@/components/gallery/Chaitanya Dental Care.webp";
import reception from "@/components/gallery/Reception.webp";
import drChaitanya from "@/components/gallery/Dr. Chaitanya.webp";
import dentalRoom from "@/components/gallery/Dental Room.webp";
import toothMachine from "@/components/gallery/Tooth MACHINE.webp";
import beforeTeeth from "@/components/gallery/Before Teeth.webp";
import afterTeeth from "@/components/gallery/After Teeth.webp";

export const galleryItems: GalleryItem[] = [
  // Demo photos — listed first so they also lead the homepage preview.
  { id: "p1", category: "Clinic", caption: "Chaitanya Dental Care", tone: "sky", variant: "building", span: "wide", image: clinicFront },
  { id: "p2", category: "Doctors", caption: "Dr. Chaitanya", tone: "gold", variant: "cross", span: "tall", image: drChaitanya },
  { id: "p3", category: "Clinic", caption: "Reception & waiting lounge", tone: "pink", variant: "building", span: "square", image: reception },
  { id: "p4", category: "Treatment Rooms", caption: "Dental treatment room", tone: "sky", variant: "implant", span: "square", image: dentalRoom },
  { id: "p5", category: "Technology", caption: "Advanced dental equipment", tone: "lavender", variant: "scanner", span: "tall", image: toothMachine },
  { id: "p6", category: "Before & After", caption: "Smile before treatment", tone: "gold", variant: "crown", span: "square", image: beforeTeeth },
  { id: "p7", category: "Before & After", caption: "Smile after treatment", tone: "pink", variant: "sparkle", span: "square", image: afterTeeth },
  { id: "g1", category: "Clinic", caption: "Reception & waiting lounge", tone: "pink", variant: "building", span: "wide" },
  { id: "g2", category: "Technology", caption: "3D imaging suite", tone: "sky", variant: "scanner", span: "tall" },
  { id: "g3", category: "Doctors", caption: "Dr. Ananya Rao in consultation", tone: "gold", variant: "cross", span: "square" },
  { id: "g4", category: "Treatment Rooms", caption: "Implant surgical suite", tone: "sky", variant: "implant", span: "tall" },
  { id: "g5", category: "Patients", caption: "A patient's first smile reveal", tone: "pink", variant: "sparkle", span: "square" },
  { id: "g6", category: "Before & After", caption: "Cosmetic veneer transformation", tone: "gold", variant: "crown", span: "wide" },
  { id: "g7", category: "Events", caption: "Community dental health camp", tone: "lavender", variant: "heart", span: "square" },
  { id: "g8", category: "Clinic", caption: "Sterilisation & instrument centre", tone: "sky", variant: "shield", span: "tall" },
  { id: "g9", category: "Technology", caption: "CAD/CAM milling station", tone: "gold", variant: "xray", span: "square" },
  { id: "g10", category: "Doctors", caption: "Dr. Karthik Menon fitting aligners", tone: "lavender", variant: "aligner", span: "wide" },
  { id: "g11", category: "Treatment Rooms", caption: "Pediatric treatment room", tone: "sky", variant: "child", span: "square" },
  { id: "g12", category: "Before & After", caption: "Full smile makeover result", tone: "pink", variant: "sparkle", span: "tall" },
];

export const galleryCategories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];
