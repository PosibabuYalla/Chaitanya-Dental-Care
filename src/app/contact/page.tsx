import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Directions",
  description:
    "Visit Chaitanya Dental Care at Panchumarthi Complex, Tadigadapa, Poranki, Vijayawada. Call +91 86397 99150, email us, or check opening hours and directions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
