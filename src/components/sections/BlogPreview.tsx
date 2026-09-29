"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowRight, LuClock } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import ClayVisual from "@/components/three/ClayVisual";
import ClayBadge from "@/components/ui/ClayBadge";
import { blogPosts } from "@/lib/data/blog";

export default function BlogPreview() {
  const items = blogPosts.slice(0, 3);

  return (
    <ClaySection>
      <SectionHeading
        kicker="From the Blog"
        title="Better Dental Knowledge. Healthier Smiles."
        description="Practical, dentist-written guidance on prevention, treatment, and long-term oral health."
      />

      <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
        {items.map((post) => (
          <motion.div key={post.slug} variants={staggerItem}>
            <Link href={`/blog/${post.slug}`} data-cursor-hover className="group block h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass glass-highlight flex h-full flex-col gap-4 p-6"
              >
                <div className="flex h-28 items-center justify-center">
                  <ClayVisual variant={post.variant} tone={post.tone} scale={0.9} />
                </div>
                <ClayBadge tone={post.tone} className="self-start">
                  {post.category}
                </ClayBadge>
                <h3 className="font-display text-lg font-bold leading-snug text-ink">{post.title}</h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-2 text-xs text-ink-faint">
                  <span className="flex items-center gap-1.5">
                    <LuClock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-coral-deep transition-transform group-hover:translate-x-1">
                    Read More <LuArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.article>
            </Link>
          </motion.div>
        ))}
      </Stagger>
    </ClaySection>
  );
}
