"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { LuSearch, LuArrowRight, LuClock, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import ClayContainer from "@/components/ui/ClayContainer";
import ClayVisual from "@/components/three/ClayVisual";
import ClayBadge from "@/components/ui/ClayBadge";
import { blogPosts, blogCategories } from "@/lib/data/blog";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 4;

export default function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim() === "" || post.title.toLowerCase().includes(query.toLowerCase()) || post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <ClayContainer className="pb-24">
      <h2 className="sr-only">All dental health articles</h2>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="glass-inset flex w-full max-w-sm items-center gap-2 px-4 py-3">
          <LuSearch className="h-4 w-4 shrink-0 text-ink-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint outline-none"
          />
        </div>

        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {["All", ...blogCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
              data-cursor-hover
              className={cn(
                "glass-pill shrink-0 px-3.5 py-1.5 text-xs font-semibold transition-colors",
                category === cat ? "bg-sky bg-none text-white shadow-md shadow-sky/30" : "text-ink-soft",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {paginated.length === 0 ? (
        <div className="glass flex flex-col items-center gap-3 p-16 text-center">
          <p className="font-display text-lg font-bold text-ink">No articles found</p>
          <p className="text-sm text-ink-soft">Try a different search term or category.</p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {paginated.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href={`/blog/${post.slug}`} data-cursor-hover className="group block h-full">
                <div className="glass glass-highlight flex h-full flex-col gap-4 p-6 sm:flex-row sm:items-center">
                  <div className="h-24 w-24 shrink-0">
                    <ClayVisual variant={post.variant} tone={post.tone} scale={0.85} />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <ClayBadge tone={post.tone} className="w-fit">
                      {post.category}
                    </ClayBadge>
                    <h3 className="font-display text-base font-bold leading-snug text-ink">{post.title}</h3>
                    <p className="line-clamp-2 text-sm text-ink-soft">{post.excerpt}</p>
                    <div className="mt-1 flex items-center justify-between text-xs text-ink-faint">
                      <span className="flex items-center gap-1.5">
                        <LuClock className="h-3.5 w-3.5" /> {post.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-gold-deep transition-transform group-hover:translate-x-1">
                        Read <LuArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Previous page"
            data-cursor-hover
            className="glass-pill flex h-10 w-10 items-center justify-center text-ink disabled:opacity-40"
          >
            <LuChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-semibold text-ink-soft">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
            data-cursor-hover
            className="glass-pill flex h-10 w-10 items-center justify-center text-ink disabled:opacity-40"
          >
            <LuChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </ClayContainer>
  );
}
