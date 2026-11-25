import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data/site";
import { SITE_URL, dentistJsonLd, websiteJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBookBar from "@/components/layout/MobileBookBar";
import BookingPopup from "@/components/layout/BookingPopup";
import ToothCursor from "@/components/cursor/ToothCursor";
import PageTransition from "@/components/layout/PageTransition";
import EntryLoader, { entryPlayedScript } from "@/components/layout/EntryLoader";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} – Dentist in Tadigadapa, Vijayawada`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seoDescription,
  applicationName: siteConfig.name,
  category: "health",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: { type: "website", siteName: siteConfig.name, locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  // No site-wide canonical: each page declares its own, so /qa or a 404 never
  // claims to be the home page.
};

export const viewport: Viewport = {
  themeColor: "#e8f4fb",
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${dmSans.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: entryPlayedScript }} />
        {/* Without JS the intro can't run — never leave the page hidden */}
        <noscript>
          <style>{`.entry-content{opacity:1!important;pointer-events:auto!important}.entry-overlay{display:none!important}`}</style>
        </noscript>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="flex min-h-full flex-col text-ink font-body">
        <JsonLd data={[dentistJsonLd(), websiteJsonLd()]} />
        <a
          href="#main-content"
          className="glass-pill fixed left-4 top-4 z-[100] -translate-y-24 px-5 py-3 text-sm font-semibold text-ink transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <EntryLoader>
          <ToothCursor />
          <Navbar />
          <PageTransition>
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </PageTransition>
          <Footer />
          <MobileBookBar />
          <BookingPopup />
        </EntryLoader>
      </body>
    </html>
  );
}
