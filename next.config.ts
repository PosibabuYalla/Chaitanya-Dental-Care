import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Section backgrounds are served from Unsplash and re-encoded by next/image
    // into AVIF/WebP at the width each device actually needs.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
    qualities: [55, 75],
    deviceSizes: [420, 640, 828, 1080, 1440, 1920],
  },
  async headers() {
    // Models and the entry video never change between deploys — cache hard.
    return [
      {
        source: "/models/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
