"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import {
  LuArrowRight, LuShield, LuGem, LuUsers, LuHeart, LuMove3D,
} from "react-icons/lu";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { useInViewport } from "@/hooks/useInViewport";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ServicesGLBCanvas = dynamic(() => import("@/components/three/ServicesGLBCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-40 w-40 animate-pulse rounded-full bg-sky/10">
        <div className="absolute inset-4 rounded-full bg-sky/15" />
        <div className="absolute inset-8 rounded-full bg-sky/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-7 w-7 animate-spin rounded-full border-2 border-sky/30 border-t-sky" />
        </div>
      </div>
    </div>
  ),
});

const leftServices = [
  {
    slug: "preventive-dentistry",
    name: "General & Preventive Care",
    desc: "Checkups, cleaning, fillings, cavity treatment and more for long-lasting oral health.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="#38b6e8" stroke="#1a8fc4" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    desc: "Painless and advanced root canal therapy to save your natural teeth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="#38b6e8" stroke="#1a8fc4" strokeWidth="0.5" />
        <line x1="12" y1="6" x2="12" y2="16" stroke="#1a8fc4" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="8" x2="14" y2="8" stroke="#1a8fc4" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    desc: "Permanent tooth replacement with natural look and feel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <rect x="10" y="2" width="4" height="10" rx="2" fill="#38b6e8" />
        <rect x="9" y="11" width="6" height="3" rx="1" fill="#1a8fc4" />
        <path d="M8 14 Q12 22 16 14" fill="#38b6e8" />
      </svg>
    ),
  },
  {
    slug: "crowns-and-bridges",
    name: "Dentures & Fixed Teeth",
    desc: "Customized dentures and prosthetic solutions for comfort and confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <rect x="2" y="8" width="20" height="8" rx="4" fill="#a8d8f0" stroke="#38b6e8" strokeWidth="0.5" />
        <rect x="4" y="10" width="3" height="4" rx="1" fill="white" />
        <rect x="8" y="10" width="3" height="4" rx="1" fill="white" />
        <rect x="12" y="10" width="3" height="4" rx="1" fill="white" />
        <rect x="16" y="10" width="3" height="4" rx="1" fill="white" />
      </svg>
    ),
  },
];

const rightServices = [
  {
    slug: "orthodontics",
    name: "Orthodontics",
    desc: "Braces, aligners and smile correction for perfectly aligned teeth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <rect x="3" y="9" width="18" height="7" rx="3" fill="#bfdbfe" stroke="#38b6e8" strokeWidth="1" />
        <rect x="5" y="11" width="3" height="3" rx="0.5" fill="white" stroke="#38b6e8" strokeWidth="0.8" />
        <rect x="9" y="11" width="3" height="3" rx="0.5" fill="white" stroke="#38b6e8" strokeWidth="0.8" />
        <rect x="13" y="11" width="3" height="3" rx="0.5" fill="white" stroke="#38b6e8" strokeWidth="0.8" />
        <line x1="5" y1="12.5" x2="19" y2="12.5" stroke="#38b6e8" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    desc: "Teeth whitening, smile makeover, gap closure and aesthetic restorations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="white" stroke="#38b6e8" strokeWidth="1" />
        <path d="M9 8l1.5 1.5L13 7" stroke="#38b6e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: "gum-treatment",
    name: "Laser Dentistry",
    desc: "Advanced laser treatments for faster, safer and painless procedures.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <path d="M12 3 L14 9 L12 8 L10 9 Z" fill="#38b6e8" />
        <path d="M12 8 L12 18" stroke="#38b6e8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="20" r="2" fill="#a8d8f0" />
        <path d="M8 12 L4 10M16 12 L20 10" stroke="#a8d8f0" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "pediatric-dentistry",
    name: "Children's Dental Care",
    desc: "Gentle and friendly dental care for your child's healthy smile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="#bfdbfe" stroke="#38b6e8" strokeWidth="0.5" />
        <circle cx="9.5" cy="9" r="1" fill="#38b6e8" />
        <circle cx="14.5" cy="9" r="1" fill="#38b6e8" />
        <path d="M9 13 Q12 16 15 13" stroke="#38b6e8" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

const trustItems = [
  { icon: <LuShield className="h-6 w-6 text-sky" />, label: "Safe & Painless Procedures" },
  { icon: <LuGem className="h-6 w-6 text-sky" />, label: "Advanced Technology" },
  { icon: <LuUsers className="h-6 w-6 text-sky" />, label: "Experienced Dental Team" },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="#38b6e8" />
      </svg>
    ),
    label: "Personalized Treatment Plans",
  },
  { icon: <LuHeart className="h-6 w-6 text-sky" />, label: "Patient-Focused Care" },
];

function ServiceCard({
  service,
  side,
  index,
}: {
  service: (typeof leftServices)[0];
  side: "left" | "right";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/services/${service.slug}`} className="group block">
        <motion.div
          whileHover={{ scale: 1.03, y: -3 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="relative flex items-center gap-3 glass-sm glass-highlight px-4 py-3.5 transition-shadow hover:bg-white/60"
        >
          {/* connector dot */}
          <span
            className={`absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-sky bg-white lg:block ${
              side === "left" ? "-right-[5px]" : "-left-[5px]"
            }`}
          />
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky/8 ring-1 ring-sky/20">
            {service.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-sm font-bold text-ink leading-tight">{service.name}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-ink-soft line-clamp-2">{service.desc}</p>
          </div>
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 transition-colors group-hover:bg-sky group-hover:text-white">
            <LuArrowRight className="h-3.5 w-3.5 text-sky group-hover:text-white" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

// Don't download three.js or the model until the section is about to scroll in.
function LazyServicesCanvas() {
  const { ref, inView } = useInViewport<HTMLDivElement>({ rootMargin: "400px", once: true });
  const isStatic = usePrefersReducedMotion();
  return (
    <div ref={ref} className="h-full w-full">
      {inView && <ServicesGLBCanvas isStatic={isStatic} />}
    </div>
  );
}

export default function ServicesOrbit() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-28">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-sky/6 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-sky-deep/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <RevealOnScroll className="flex flex-col items-center gap-3 text-center">
          <span className="glass-pill inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-deep">
            Our Services
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Complete{" "}
            <span className="text-sky">Dental Care</span>
            <br />
            Under One Roof
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            From preventive care to advanced treatments, chaitanya Dental Hospital offers comprehensive dental treatment in Vijayawada for all age groups.
          </p>
        </RevealOnScroll>

        {/* Main orbit layout */}
        <div className="mt-12 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_480px_1fr] lg:gap-0">

          {/* LEFT cards */}
          <div className="flex flex-col gap-3 lg:pr-6">
            {leftServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} side="left" index={i} />
            ))}
          </div>

          {/* CENTER — 3D model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Glow halo behind model */}
            <div className="absolute inset-0 rounded-full bg-sky/10 blur-3xl" />

            {/* Drag hint (same as the hero viewer) */}
            <div className="pointer-events-none absolute left-1/2 top-2 z-10 flex -translate-x-1/2 select-none items-center gap-1.5 text-xs font-semibold text-ink-soft/70">
              <LuMove3D className="h-3.5 w-3.5" aria-hidden />
              <span className="lg:hidden">Swipe</span>
              <span className="hidden lg:inline">Drag</span> to Rotate
            </div>

            {/* Canvas */}
            <div className="relative h-[380px] w-full sm:h-[520px] lg:h-[560px]">
              <LazyServicesCanvas />
            </div>

            {/* Signature + CTA sit below the model so they never cover its base */}
            <div className="relative flex w-full items-end justify-between px-4 sm:px-6">
            {/* Care Beyond Teeth signature */}
            <div className="pointer-events-none" aria-hidden>
              <svg viewBox="0 0 160 80" className="h-14 w-36" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="28" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Care</text>
                <text x="10" y="52" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Beyond</text>
                <text x="10" y="72" fontFamily="Georgia, serif" fontSize="18" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Teeth</text>
                <text x="118" y="72" fontFamily="Arial" fontSize="9" fill="#38b6e8">™</text>
                <path d="M10 76 Q80 68 148 76" stroke="#38b6e8" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            {/* Explore CTA */}
            <div className="flex flex-col items-center gap-1">
              <svg viewBox="0 0 40 40" className="h-10 w-10 text-sky-deep" fill="none">
                <path d="M20 8 C14 8 10 13 10 18 C10 24 14 28 20 30 C26 28 30 24 30 18 C30 13 26 8 20 8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M16 22 L20 18 L24 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="32" r="2" fill="currentColor" />
              </svg>
              <Link href="/services" className="text-center text-xs font-bold text-sky-deep hover:underline">
                Explore<br />Our Treatments
              </Link>
            </div>
            </div>
          </motion.div>

          {/* RIGHT cards */}
          <div className="flex flex-col gap-3 lg:pl-6">
            {rightServices.map((s, i) => (
              <ServiceCard key={s.slug} service={s} side="right" index={i} />
            ))}
          </div>
        </div>

        {/* Connector lines — desktop only */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0 }}>
            <defs>
              <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
                <circle cx="2" cy="2" r="1.5" fill="#38b6e8" opacity="0.5" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 glass px-6 py-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustItems.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5">
                {t.icon}
                <span className="text-sm font-semibold text-ink">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
