import type { Metadata } from "next";
import { pageMetadata, absoluteUrl, breadcrumbJsonLd, DENTIST_ID } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LuArrowLeft, LuArrowRight, LuCalendarDays, LuClock, LuUser } from "react-icons/lu";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";
import ClayContainer from "@/components/ui/ClayContainer";
import ClayVisual from "@/components/three/ClayVisual";
import ClayBadge from "@/components/ui/ClayBadge";
import SimpleCTA from "@/components/sections/SimpleCTA";
import { SectionHeading } from "@/components/ui/ClaySection";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      articleSection: post.category,
      author: { "@type": "Person", name: post.author },
      datePublished: post.date,
      dateModified: post.date,
      image: absoluteUrl("/opengraph-image"),
      mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
      publisher: { "@id": DENTIST_ID },
      inLanguage: "en-IN",
    },
    breadcrumbJsonLd([
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const relatedPosts = related.length > 0 ? related : fallbackRelated;

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <JsonLd data={jsonLd} />

      <ClayContainer className="pb-10 pt-24 sm:pt-28">
        <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          data-cursor-hover
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink"
        >
          <LuArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

          <div className="mt-8 flex flex-col gap-4">
            <ClayBadge tone={post.tone} className="w-fit">
              {post.category}
            </ClayBadge>
            <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-ink-soft">
              <span className="flex items-center gap-1.5">
                <LuUser className="h-4 w-4 text-coral-deep" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <LuCalendarDays className="h-4 w-4 text-coral-deep" /> {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <LuClock className="h-4 w-4 text-coral-deep" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </ClayContainer>

      <ClayContainer className="pb-16">
        <div className="mx-auto max-w-3xl">
          {post.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="mt-10 font-display text-xl font-bold text-ink first:mt-0">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="mt-4 flex flex-col gap-2.5">
                  {block.items?.map((item) => (
                    <li key={item} className="glass-sm flex items-start gap-3 px-4 py-3 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mt-4 text-base leading-relaxed text-ink-soft first:mt-6">
                {block.text}
              </p>
            );
          })}
        </div>
      </ClayContainer>

      {relatedPosts.length > 0 && (
        <ClayContainer className="pb-20">
          <div className="mx-auto max-w-3xl">
          <SectionHeading kicker="Continue Reading" title="Related Articles" align="left" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {relatedPosts.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} data-cursor-hover className="group block">
                <div className="glass glass-highlight flex items-center gap-4 p-5">
                  <div className="h-16 w-16 shrink-0">
                    <ClayVisual size="md" variant={r.variant} tone={r.tone} scale={0.8} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold leading-snug text-ink">{r.title}</h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-coral-deep transition-transform group-hover:translate-x-1">
                      Read More <LuArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </div>
        </ClayContainer>
      )}

      <SimpleCTA
        title="Have a Question About Your Smile?"
        description="Book a consultation and get answers tailored to you."
        variant="mirror"
        tone="sky"
      />
    </article>
  );
}
