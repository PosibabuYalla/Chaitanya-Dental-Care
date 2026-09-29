import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data/site";

// Default social-share card for every page (1200×630), in the hero's palette.
export const alt = `${siteConfig.name} — dental hospital in Tadigadapa, Vijayawada`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #e8f4fb 0%, #daeef8 55%, #a8d8f0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 24px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.7)",
            color: "#1a8fc4",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          TADIGADAPA · VIJAYAWADA
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 84, fontWeight: 800, color: "#0d2d3f", lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 38, color: "#2e6a8a" }}>
          Implants · Root Canal · Braces & Aligners · Cosmetic Dentistry
        </div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 32, fontWeight: 700, color: "#ffffff", background: "#38b6e8", padding: "16px 36px", borderRadius: 999, alignSelf: "flex-start" }}>
          Book your visit · {siteConfig.phone}
        </div>
      </div>
    ),
    size,
  );
}
