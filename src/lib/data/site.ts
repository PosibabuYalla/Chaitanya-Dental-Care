import type { JourneyStep, TechItem, ValueItem, StatItem } from "@/lib/types";

export const siteConfig = {
  name: "Chaitanya Dental Care",
  shortName: "Chaitanya Dental",
  tagline: "Dentistry with Precision. Care with Purpose.",
  description: "Dental care driven by clinical excellence, precision, and ethical patient-centred treatment.",
  phone: "+91 86397 99150",
  emergencyPhone: "+91 98765 00000",
  email: "care@chaitanyadental.example",
  address: "1st and 3rd Floor, Center, Panchumarthi Complex, Tadigadapa, Poranki, Andhra Pradesh 521137",
  addressParts: {
    street: "1st and 3rd Floor, Center, Panchumarthi Complex, Tadigadapa",
    locality: "Poranki",
    /** Nearest city, used where a short location label reads better than the full address. */
    city: "Vijayawada",
    region: "Andhra Pradesh",
    postalCode: "521137",
    country: "IN",
  },
  /** Used for meta descriptions and structured data. */
  seoDescription:
    "Chaitanya Dental Care in Vijayawada — founded in 2019 by Dr. Venigalla Chaitanya. Precision dentistry with in-house CAD/CAM technology, laser-assisted care, and an ethical patient-first approach.",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM (Emergencies only)" },
  ],
  /** Machine-readable hours for schema.org (keep in sync with `hours`). */
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
    { days: ["Sunday"], opens: "10:00", closes: "14:00" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const heroStats: StatItem[] = [
  { value: "2019", label: "Year Founded", variant: "sparkle" },
  { value: "2", label: "Clinic Branches", variant: "tooth" },
  { value: "CAD/CAM", label: "In-House Digital Lab", variant: "heart" },
  { value: "Laser", label: "Assisted Dentistry", variant: "shield" },
];

export const journeySteps: JourneyStep[] = [
  { number: "01", title: "Consultation", description: "A relaxed first conversation about your concerns, history, and goals.", variant: "mirror" },
  { number: "02", title: "Diagnosis", description: "Digital scans and imaging build a precise picture of your oral health.", variant: "xray" },
  { number: "03", title: "Treatment Plan", description: "A transparent, personalised plan with clear timelines and costs.", variant: "book" },
  { number: "04", title: "Procedure", description: "Treatment delivered with modern technique and continuous comfort checks.", variant: "tooth" },
  { number: "05", title: "Recovery", description: "Clear aftercare guidance and support through every stage of healing.", variant: "shield" },
  { number: "06", title: "Healthy Smile", description: "Long-term maintenance plans to keep your results lasting.", variant: "sparkle" },
];

export const techItems: TechItem[] = [
  { name: "Digital Intraoral Scanner", description: "Impression-free 3D scans for crowns, aligners, and implants.", variant: "scanner" },
  { name: "Low-Radiation Digital X-Ray", description: "Faster, safer diagnostics with up to 80% less radiation.", variant: "xray" },
  { name: "3D Cone-Beam Imaging", description: "Full jaw visualisation for precise implant and surgical planning.", variant: "xray" },
  { name: "CAD/CAM Milling", description: "Same-day, custom-milled crowns designed and produced on-site.", variant: "crown" },
  { name: "Laser Dentistry", description: "Minimally invasive soft-tissue treatment with faster healing.", variant: "sparkle" },
];

export const valueItems: ValueItem[] = [
  { title: "Clinical Judgement", description: "Every treatment decision guided by accurate diagnosis, not commercial targets.", variant: "shield" },
  { title: "Precision", description: "Standardised clinical protocols and in-house CAD/CAM technology for consistent, high-quality outcomes.", variant: "scanner" },
  { title: "Patient-First", description: "Patient well-being leads every decision — treatment is recommended based on need, never oversold.", variant: "heart" },
  { title: "Innovation", description: "In-house digital workflows and laser-assisted care bring modern dentistry closer to every patient.", variant: "sparkle" },
  { title: "Ethical Practice", description: "Transparent recommendations and honest communication, always in the best interest of the patient.", variant: "cross" },
  { title: "Patient Education", description: "We ensure every patient understands their treatment and feels confident in their decisions.", variant: "chair" },
];

export const whyChooseUs = [
  "Clinical Excellence",
  "In-House CAD/CAM Technology",
  "Laser-Assisted Dentistry",
  "Ethical Treatment Recommendations",
  "Standardised Clinical Protocols",
  "Patient Education & Comfort",
];
