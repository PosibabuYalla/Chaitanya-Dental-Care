import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    page("/appointment", 0.9),
    page("/contact", 0.8),
    page("/about", 0.7),
    page("/team", 0.7),
    page("/blog", 0.7, "weekly"),
    page("/gallery", 0.5),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...blogPosts.map((p) => ({ ...page(`/blog/${p.slug}`, 0.6, "yearly"), lastModified: new Date(p.date) })),
  ];
}
