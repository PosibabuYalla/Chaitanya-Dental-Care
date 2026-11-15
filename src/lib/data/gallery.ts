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

// New clinic photos from CDCIMGS
import entranceDoor from "@/components/gallery/Entrace_Door.jpg";
import receptionClinic from "@/components/gallery/Reception-clinic.jpg";
import receptionZoom from "@/components/gallery/Reception_Zoom.jpg";
import waitingLounge from "@/components/gallery/Waiting_Lounge.jpg";
import waitingLounge2 from "@/components/gallery/Waiting_Lounge_2.jpg";
import waitingLounge3 from "@/components/gallery/Waiting_Lounge_3.jpg";
import bookShelf from "@/components/gallery/Book_Shelf.jpg";
import outboard from "@/components/gallery/Outboard.jpeg";
import treatmentsPricing from "@/components/gallery/Treatments_Pricing.jpg";

// New treatment room photos
import dentalRoomNew from "@/components/gallery/Dental-room-new.jpg";
import operatingArea from "@/components/gallery/Operating_Area.jpg";
import operatingRoom2 from "@/components/gallery/Operating_Room_2.jpg";
import operationRooms from "@/components/gallery/Operation_Rooms.jpeg";

// New technology photos
import printingAligners from "@/components/gallery/3d-printing-aligners.jpeg";
import inhouseCrownMilling from "@/components/gallery/inhouse-crown-milling.jpeg";
import shadingMachine from "@/components/gallery/Shading_Machine.jpeg";
import customShadeGlazing from "@/components/gallery/custom-shade-glazing.jpeg";

// New patient photos
import doctorTreatingNew from "@/components/gallery/Doctor-treating-new.jpg";
import treatingPatients from "@/components/gallery/Treating_Patients.jpg";
import sedationKids from "@/components/gallery/sedation-kids.jpeg";
import sedationKidsFull from "@/components/gallery/sedation-kids-full.jpeg";

// Add a pair here and it appears in the gallery's Before & After tab; the
// first pair is also the homepage "Real Results" slider.
export const beforeAfterPairs: BeforeAfterPair[] = [{ before: beforeTeeth, after: afterTeeth }];

export const galleryItems: GalleryItem[] = [
  // Existing hero photos — lead the homepage preview.
  { id: "p1", category: "Clinic", caption: "In front of Chaitanya Dental Care", tone: "sky", variant: "building", span: "wide", image: hospitalFront },
  { id: "p2", category: "Doctors", caption: "Dr. Chaitanya", tone: "coral", variant: "cross", span: "tall", image: drChaitanya },
  { id: "p3", category: "Patients", caption: "Doctor treating a patient", tone: "pink", variant: "sparkle", span: "square", image: doctorTreating },
  { id: "p4", category: "Clinic", caption: "Reception & waiting lounge", tone: "pink", variant: "building", span: "square", image: reception },
  { id: "p5", category: "Clinic", caption: "Chaitanya Dental Care", tone: "sky", variant: "building", span: "wide", image: clinicFront },
  { id: "p6", category: "Treatment Rooms", caption: "Dental treatment room", tone: "sky", variant: "implant", span: "square", image: dentalRoom },
  { id: "p7", category: "Technology", caption: "Advanced dental equipment", tone: "lavender", variant: "scanner", span: "tall", image: toothMachine },

  // Before & After comparisons
  ...beforeAfterPairs.map((comparison, i): GalleryItem => ({
    id: `ba${i + 1}`,
    category: "Before & After",
    caption: "Smile transformation — drag to compare",
    tone: "coral",
    variant: "crown",
    span: "tall",
    comparison,
  })),
  ...Array.from({ length: 5 }, (_, i): GalleryItem => ({
    id: `ba-soon${i + 1}`,
    category: "Before & After",
    caption: "New smile transformation coming soon",
    tone: "coral",
    variant: "crown",
    span: "tall",
    comingSoon: true,
  })),

  // Clinic — new photos
  { id: "c1", category: "Clinic", caption: "Clinic entrance", tone: "sky", variant: "building", span: "wide", image: entranceDoor },
  { id: "c2", category: "Clinic", caption: "Reception area", tone: "pink", variant: "building", span: "square", image: receptionClinic },
  { id: "c3", category: "Clinic", caption: "Reception desk close-up", tone: "pink", variant: "building", span: "square", image: receptionZoom },
  { id: "c4", category: "Clinic", caption: "Comfortable waiting lounge", tone: "sky", variant: "chair", span: "wide", image: waitingLounge },
  { id: "c5", category: "Clinic", caption: "Waiting lounge seating", tone: "lavender", variant: "chair", span: "square", image: waitingLounge2 },
  { id: "c6", category: "Clinic", caption: "Relaxing waiting area", tone: "lavender", variant: "chair", span: "square", image: waitingLounge3 },
  { id: "c7", category: "Clinic", caption: "Reference & resource shelf", tone: "coral", variant: "book", span: "square", image: bookShelf },
  { id: "c8", category: "Clinic", caption: "Chaitanya Dental Care outdoor board", tone: "sky", variant: "building", span: "square", image: outboard },
  { id: "c9", category: "Clinic", caption: "Treatment pricing display", tone: "ivory", variant: "book", span: "wide", image: treatmentsPricing },

  // Treatment Rooms — new photos
  { id: "t1", category: "Treatment Rooms", caption: "Modern dental treatment room", tone: "sky", variant: "implant", span: "square", image: dentalRoomNew },
  { id: "t2", category: "Treatment Rooms", caption: "Operating area", tone: "sky", variant: "implant", span: "tall", image: operatingArea },
  { id: "t3", category: "Treatment Rooms", caption: "Fully equipped operating room", tone: "lavender", variant: "implant", span: "square", image: operatingRoom2 },
  { id: "t4", category: "Treatment Rooms", caption: "Operation rooms overview", tone: "sky", variant: "implant", span: "wide", image: operationRooms },

  // Technology — new photos
  { id: "tech1", category: "Technology", caption: "3D printing for aligners", tone: "sky", variant: "scanner", span: "square", image: printingAligners },
  { id: "tech2", category: "Technology", caption: "In-house crown milling", tone: "coral", variant: "crown", span: "square", image: inhouseCrownMilling },
  { id: "tech3", category: "Technology", caption: "Shading machine", tone: "lavender", variant: "scanner", span: "tall", image: shadingMachine },
  { id: "tech4", category: "Technology", caption: "Custom shade and glazing", tone: "pink", variant: "xray", span: "square", image: customShadeGlazing },

  // Patients — new photos
  { id: "pat1", category: "Patients", caption: "Doctor treating a patient", tone: "pink", variant: "cross", span: "square", image: doctorTreatingNew },
  { id: "pat2", category: "Patients", caption: "Treating patients", tone: "pink", variant: "sparkle", span: "wide", image: treatingPatients },
  { id: "pat3", category: "Patients", caption: "Conscious sedation for kids", tone: "sky", variant: "child", span: "square", image: sedationKids },
  { id: "pat4", category: "Patients", caption: "Pediatric dental care", tone: "coral", variant: "child", span: "tall", image: sedationKidsFull },
];

export const galleryCategories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))];
