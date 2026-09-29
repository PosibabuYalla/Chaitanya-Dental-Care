import type { StaticImageData } from "next/image";

export type ClayVariant =
  | "tooth"
  | "implant"
  | "crown"
  | "brace"
  | "mirror"
  | "toothbrush"
  | "chair"
  | "cross"
  | "scanner"
  | "xray"
  | "aligner"
  | "syringe"
  | "book"
  | "pin"
  | "building"
  | "shield"
  | "sparkle"
  | "child"
  | "heart"
  | "whitening";

export type ClayTone = "pink" | "sky" | "coral" | "ivory" | "lavender";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  variant: ClayVariant;
  tone: ClayTone;
  duration: string;
  symptoms: string[];
  process: { title: string; description: string }[];
  benefits: string[];
  faqs: FaqItem[];
}

export type DoctorCategory =
  | "Dental Surgeons"
  | "Orthodontists"
  | "Implantologists"
  | "Cosmetic Dentists"
  | "Pediatric Dentists"
  | "Dental Hygienists"
  | "Support Team";

export interface Doctor {
  slug: string;
  name: string;
  initials: string;
  specialty: string;
  category: DoctorCategory;
  qualifications: string[];
  experienceYears: number;
  languages: string[];
  tone: ClayTone;
  bio: string;
  philosophy: string;
  treatments: string[];
  education: { degree: string; institute: string; year: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  treatment: string;
  rating: number;
  quote: string;
  tone: ClayTone;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  variant: ClayVariant;
  tone: ClayTone;
  content: { type: "heading" | "paragraph" | "list"; text?: string; items?: string[] }[];
}

export interface GalleryItem {
  id: string;
  category: string;
  caption: string;
  tone: ClayTone;
  variant: ClayVariant;
  span: "tall" | "wide" | "square" | "large";
  /** Real photo; when absent the tile falls back to its clay illustration. */
  image?: StaticImageData;
  /** Before/after pair; the tile renders a drag-to-compare slider instead of a photo. */
  comparison?: BeforeAfterPair;
  /** Empty slot reserved for a future photo; only shown when its category is selected. */
  comingSoon?: boolean;
}

export interface BeforeAfterPair {
  before: StaticImageData;
  after: StaticImageData;
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  variant: ClayVariant;
}

export interface TechItem {
  name: string;
  description: string;
  variant: ClayVariant;
}

export interface ValueItem {
  title: string;
  description: string;
  variant: ClayVariant;
}

export interface StatItem {
  value: string;
  label: string;
  variant: ClayVariant;
}
