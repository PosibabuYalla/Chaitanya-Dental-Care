import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = pageMetadata({
  title: "Dental Health Blog",
  description:
    "Dentist-written guides on implants, braces vs aligners, root canals, gum health and children's dental care from the team at Chaithanya Dental Hospital, Hyderabad.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogList />
    </div>
  );
}
