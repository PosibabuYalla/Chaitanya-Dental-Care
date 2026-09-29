import type { GalleryItem } from "@/lib/types";

export const galleryItems: GalleryItem[] = [
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
