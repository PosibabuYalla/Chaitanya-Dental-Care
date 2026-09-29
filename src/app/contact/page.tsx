import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Directions",
  description:
    "Visit Chaithanya Dental Hospital at 142 Lakeview Boulevard, Banjara Hills, Hyderabad. Call +91 98765 43210, email us, or check opening hours and directions.",
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
