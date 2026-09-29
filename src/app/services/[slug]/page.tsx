import type { Metadata } from "next";
import { pageMetadata, absoluteUrl, breadcrumbJsonLd, faqJsonLd, DENTIST_ID } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LuArrowLeft, LuCheck } from "react-icons/lu";
import { services, getServiceBySlug } from "@/lib/data/services";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ProcessSteps from "@/components/services/ProcessSteps";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import ClayContainer from "@/components/ui/ClayContainer";
import SimpleCTA from "@/components/sections/SimpleCTA";
import { ClayIcon } from "@/components/ui/ClayIcon";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.name} in Vijayawada`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: service.name,
      description: service.description,
      url: absoluteUrl(`/services/${service.slug}`),
      howPerformed: service.process.map((p) => p.title).join(", "),
      provider: { "@id": DENTIST_ID },
    },
    breadcrumbJsonLd([
      { name: "Services", path: "/services" },
      { name: service.name, path: `/services/${service.slug}` },
    ]),
    ...(service.faqs.length ? [faqJsonLd(service.faqs)] : []),
  ];

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <JsonLd data={jsonLd} />

      <ClayContainer className="pt-24 sm:pt-28">
        <Link
          href="/services"
          data-cursor-hover
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink"
        >
          <LuArrowLeft className="h-4 w-4" /> Back to Services
        </Link>
      </ClayContainer>

      <ServiceDetailHero service={service} />

      <ClaySection className="pt-0">
        {/* Headings share row 1 and lists share row 2 on desktop, so both lists start level */}
        <div className="grid gap-x-10 gap-y-6 lg:grid-cols-2">
            <SectionHeading kicker="Signs to Watch For" title="Is This Treatment Right for You?" align="left" className="lg:col-start-1 lg:row-start-1" />
            <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-2">
              {service.symptoms.map((s) => (
                <div key={s} className="glass-sm flex items-center gap-3 px-5 py-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full glass-tint text-ink">
                    <LuCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-ink">{s}</span>
                </div>
              ))}
            </div>

            <SectionHeading kicker="Why Patients Choose This" title="Key Benefits" align="left" className="mt-6 lg:col-start-2 lg:row-start-1 lg:mt-0" />
            <div className="flex flex-col gap-3 lg:col-start-2 lg:row-start-2">
              {service.benefits.map((b) => (
                <div key={b} className="glass-sm flex items-center gap-3 px-5 py-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky bg-none text-white shadow-md shadow-sky/30">
                    <LuCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-ink">{b}</span>
                </div>
              ))}
            </div>
        </div>
      </ClaySection>

      <ClaySection>
        <SectionHeading kicker="The Process" title="What to Expect, Step by Step" />
        <div className="mx-auto mt-12 max-w-2xl">
          <ProcessSteps steps={service.process} />
        </div>
      </ClaySection>

      <ClaySection>
        <SectionHeading kicker="Common Questions" title="Frequently Asked Questions" />
        <div className="mx-auto mt-10 max-w-2xl">
          <FaqAccordion items={service.faqs} />
        </div>
      </ClaySection>

      <ClaySection className="pt-0">
        <SectionHeading kicker="You Might Also Need" title="Related Treatments" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              data-cursor-hover
              className="glass glass-highlight flex h-full flex-col gap-3 p-6 transition-transform hover:-translate-y-1"
            >
              <ClayIcon variant={r.variant} tone={r.tone} size="md" />
              <h3 className="font-display text-base font-bold text-ink">{r.name}</h3>
              <p className="text-sm text-ink-soft">{r.tagline}</p>
            </Link>
          ))}
        </div>
      </ClaySection>

      <SimpleCTA
        title={`Ready to Start Your ${service.name}?`}
        description="Book a consultation and we'll walk you through the full plan."
        variant={service.variant}
        tone={service.tone}
      />
    </div>
  );
}
