import type { Metadata } from "next";
import { pageMetadata, absoluteUrl, breadcrumbJsonLd, DENTIST_ID } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LuArrowLeft, LuCalendarPlus, LuGraduationCap, LuLanguages, LuStethoscope } from "react-icons/lu";
import { doctors, getDoctorBySlug } from "@/lib/data/doctors";
import ClayContainer from "@/components/ui/ClayContainer";
import ClayButton from "@/components/ui/ClayButton";
import ClayBadge from "@/components/ui/ClayBadge";
import DoctorPortrait from "@/components/ui/DoctorPortrait";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import SimpleCTA from "@/components/sections/SimpleCTA";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return pageMetadata({
    title: `${doctor.name}, ${doctor.specialty}`,
    description: `${doctor.name}, ${doctor.specialty} at Chaithanya Dental Hospital, Vijayawada. ${doctor.bio}`,
    path: `/team/${doctor.slug}`,
    type: "profile",
  });
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  // "Dr. Ananya Rao" -> "Dr. Ananya"; "Rohan Desai" -> "Rohan"
  const first = doctor.name.replace(/^Dr\.\s*/, "").split(" ")[0];
  const bookingName = doctor.name.startsWith("Dr.") ? `Dr. ${first}` : first;
  const isClinician = !["Support Team", "Dental Hygienists"].includes(doctor.category);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: doctor.name,
      jobTitle: doctor.specialty,
      description: doctor.bio,
      url: absoluteUrl(`/team/${doctor.slug}`),
      knowsLanguage: doctor.languages,
      ...(isClinician ? { hasCredential: doctor.qualifications } : {}),
      worksFor: { "@id": DENTIST_ID },
    },
    breadcrumbJsonLd([
      { name: "Our Team", path: "/team" },
      { name: doctor.name, path: `/team/${doctor.slug}` },
    ]),
  ];

  return (
    <div>
      <JsonLd data={jsonLd} />
      <section className="pb-10 pt-24 sm:pt-28">
        <ClayContainer>
          <Link
            href="/team"
            data-cursor-hover
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-ink"
          >
            <LuArrowLeft className="h-4 w-4" /> Back to Team
          </Link>

          <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
            <div className="flex flex-col gap-5">
              <DoctorPortrait initials={doctor.initials} tone={doctor.tone} className="max-w-sm" />
              <div className="glass p-6">
                <h1 className="font-display text-2xl font-bold text-ink">{doctor.name}</h1>
                <p className="mt-1 text-sm font-semibold text-coral-deep">{doctor.specialty}</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
                  <span className="flex items-center gap-2">
                    <LuStethoscope className="h-4 w-4 text-coral-deep" /> {doctor.experienceYears}+ years experience
                  </span>
                  <span className="flex items-center gap-2">
                    <LuGraduationCap className="h-4 w-4 text-coral-deep" /> {doctor.qualifications.join(", ")}
                  </span>
                  <span className="flex items-center gap-2">
                    <LuLanguages className="h-4 w-4 text-coral-deep" /> {doctor.languages.join(", ")}
                  </span>
                </div>
                <div className="mt-5">
                  <ClayButton href="/appointment" className="w-full" icon={<LuCalendarPlus className="h-4 w-4" />}>
                    Book with {bookingName}
                  </ClayButton>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-display text-xl font-bold text-ink">Biography</h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{doctor.bio}</p>
              </div>

              <div className="glass-inset p-6">
                <h2 className="font-display text-lg font-bold text-ink">Patient Philosophy</h2>
                <p className="mt-2 text-base italic leading-relaxed text-ink-soft">&ldquo;{doctor.philosophy}&rdquo;</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-ink">Education</h2>
                <div className="mt-4 flex flex-col gap-3">
                  {doctor.education.map((e) => (
                    <div key={e.degree} className="glass-sm flex flex-wrap items-center justify-between gap-2 p-4">
                      <div>
                        <p className="text-sm font-bold text-ink">{e.degree}</p>
                        <p className="text-xs text-ink-soft">{e.institute}</p>
                      </div>
                      <ClayBadge tone={doctor.tone}>{e.year}</ClayBadge>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-ink">Treatments Offered</h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {doctor.treatments.map((t) => (
                    <ClayBadge key={t} tone={doctor.tone}>
                      {t}
                    </ClayBadge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ClayContainer>
      </section>

      <ClaySection className="pt-0">
        <SectionHeading kicker="Our Team" title="Other Specialists" />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {doctors
            .filter((d) => d.slug !== doctor.slug)
            .slice(0, 4)
            .map((d) => (
              <Link
                key={d.slug}
                href={`/team/${d.slug}`}
                data-cursor-hover
                className="glass-pill px-4 py-2 text-xs font-semibold text-ink-soft hover:text-ink"
              >
                {d.name}
              </Link>
            ))}
        </div>
      </ClaySection>

      <SimpleCTA
        title={`Book Your Visit With ${doctor.name}`}
        ctaLabel="Book Appointment"
        variant="tooth"
        tone={doctor.tone}
      />
    </div>
  );
}
