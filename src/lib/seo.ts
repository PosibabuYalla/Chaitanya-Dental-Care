import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

// Canonical URLs, the sitemap, robots.txt and structured data all derive from
// this. NEXT_PUBLIC_SITE_URL wins when set (custom domain); on Vercel it falls
// back to the project's production domain, which Vercel exposes at build time.
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProductionUrl ? `https://${vercelProductionUrl}` : "https://www.chaitanyadental.example")
).replace(/\/$/, "");

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

/** Trim to Google's ~155-character snippet length on a word boundary. */
export function clampDescription(text: string, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-–—]+$/, "")}…`;
}

/**
 * Per-page metadata with its own canonical, Open Graph and Twitter card, so a
 * shared link previews the page itself rather than the home page.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
  publishedTime,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  /** Use `title` as-is instead of appending the brand via the layout template. */
  absoluteTitle?: boolean;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  noIndex?: boolean;
}): Metadata {
  const desc = clampDescription(description);
  // Keep titles inside Google's ~60-65 char display: full brand, else short brand, else none.
  const fullTitle = absoluteTitle
    ? title
    : [`${title} | ${siteConfig.name}`, `${title} | ${siteConfig.shortName}`].find((t) => t.length <= 65) ?? title;
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name };
  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: siteConfig.name,
      locale: "en_IN",
      title: fullTitle,
      description: desc,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: [image.url] },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

// ---------- Structured data (schema.org JSON-LD) ----------

export const DENTIST_ID = `${SITE_URL}/#dentist`;

export function dentistJsonLd() {
  const a = siteConfig.addressParts;
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": DENTIST_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.seoDescription,
    url: SITE_URL,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/logo.png"),
    telephone: siteConfig.phone.replace(/\s/g, ""),
    email: siteConfig.email,
    priceRange: "₹₹",
    medicalSpecialty: "Dentistry",
    areaServed: { "@type": "City", name: a.city },
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.locality,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    openingHoursSpecification: siteConfig.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    inLanguage: "en-IN",
    publisher: { "@id": DENTIST_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
