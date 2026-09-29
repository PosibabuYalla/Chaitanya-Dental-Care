import type { JourneyStep, TechItem, ValueItem, StatItem } from "@/lib/types";

export const siteConfig = {
  name: "Chaithanya Dental Hospital",
  shortName: "Chaithanya Dental",
  tagline: "Your Smile. Our Expertise.",
  description: "Advanced dental care delivered with precision, comfort, and compassion.",
  phone: "+91 98765 43210",
  emergencyPhone: "+91 98765 00000",
  email: "care@chaithanyadental.example",
  address: "142 Lakeview Boulevard, Banjara Hills, Hyderabad, Telangana 500034",
  addressParts: {
    street: "142 Lakeview Boulevard, Banjara Hills",
    locality: "Hyderabad",
    region: "Telangana",
    postalCode: "500034",
    country: "IN",
  },
  /** Used for meta descriptions and structured data. */
  seoDescription:
    "Chaithanya Dental Hospital in Banjara Hills, Hyderabad offers dental implants, root canals, braces, aligners and cosmetic dentistry. Book your visit today.",
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
  { value: "10K+", label: "Happy Patients", variant: "heart" },
  { value: "15+", label: "Years Experience", variant: "sparkle" },
  { value: "25+", label: "Dental Specialists", variant: "tooth" },
  { value: "98%", label: "Patient Satisfaction", variant: "shield" },
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
  { title: "Trust", description: "Transparent plans, honest timelines, no surprise costs.", variant: "shield" },
  { title: "Precision", description: "Technology-guided treatment planning, down to the millimetre.", variant: "scanner" },
  { title: "Comfort", description: "Every procedure designed around patient calm, not just clinical speed.", variant: "chair" },
  { title: "Innovation", description: "Continuous investment in modern dental technology and technique.", variant: "sparkle" },
  { title: "Safety", description: "Rigorous sterilisation protocol exceeding standard clinical guidelines.", variant: "cross" },
  { title: "Compassion", description: "Every patient treated as a person first, a case second.", variant: "heart" },
];

export const whyChooseUs = [
  "Experienced Specialists",
  "Advanced Technology",
  "Personalised Treatment",
  "Sterile & Safe Environment",
  "Transparent Pricing",
  "Patient-Centered Care",
];
