"use client";

import { motion } from "motion/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  LuCalendarDays, LuArrowRight, LuPlay,
  LuUsers, LuStar, LuShield, LuWrench,
} from "react-icons/lu";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

// Start fetching the GLB as soon as this module loads
import("@/components/three/HeroGLBCanvas");

const HeroGLBCanvas = dynamic(() => import("@/components/three/HeroGLBCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-48 w-48 animate-pulse rounded-full bg-sky/10">
        <div className="absolute inset-4 rounded-full bg-sky/15" />
        <div className="absolute inset-8 rounded-full bg-sky/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-sky/30 border-t-sky" />
        </div>
      </div>
    </div>
  ),
});

const infoCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="2" width="6" height="3" rx="1" fill="#38b6e8" />
        <rect x="10" y="5" width="4" height="14" rx="2" fill="#1a8fc4" />
        <circle cx="12" cy="20" r="2" fill="#38b6e8" />
      </svg>
    ),
    title: "Explore Treatment Options",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="18" height="10" rx="3" stroke="#38b6e8" strokeWidth="1.5" fill="none" />
        <circle cx="7" cy="13" r="1.5" fill="#38b6e8" />
        <circle cx="12" cy="13" r="1.5" fill="#38b6e8" />
        <circle cx="17" cy="13" r="1.5" fill="#38b6e8" />
        <path d="M7 8V6a5 5 0 0 1 10 0v2" stroke="#1a8fc4" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "See Real Results",
    href: "/gallery",
  },
];

const stats = [
  { icon: <LuUsers className="h-6 w-6 text-sky" />, value: "10K+", label: "Happy Patients" },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="#38b6e8" />
      </svg>
    ),
    value: "20+",
    label: "Dental Treatments",
  },
  { icon: <LuStar className="h-6 w-6 text-sky" />, value: "5★", label: "Patient Rating" },
  { icon: <LuWrench className="h-6 w-6 text-sky" />, value: "3D", label: "Digital Imaging & Scanning" },
];

export default function Hero() {
  const isStatic = usePrefersReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-16 sm:pt-20">
      {/* HeroBg.png as full background */}
      <Image
        src="/HeroBg.png"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-[70%_center] lg:object-center"
        style={{ zIndex: 0 }}
      />
      {/* Overlay to keep text readable */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(232,244,251,0.82) 0%, rgba(240,248,253,0.65) 40%, rgba(218,238,248,0.55) 70%, rgba(200,230,245,0.5) 100%)",
          zIndex: 1,
        }}
      />

      {/* Vertical text right edge */}
      <div className="pointer-events-none absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 xl:flex">
        <span
          className="whitespace-nowrap font-display text-[clamp(1.5rem,4vh,2.6rem)] font-extrabold leading-none tracking-tight text-sky-deep/15"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          A CONFIDENT SMILE CHANGES EVERYTHING
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 sm:px-8 lg:px-12 pb-0 pt-8 sm:pt-10 lg:flex-row lg:items-center lg:pt-14">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-5 sm:gap-6 lg:w-[40%]"
        >
          <span className="inline-flex items-center glass-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-deep backdrop-blur-sm">
            <span className="hidden sm:inline">Dental Hospital · </span>Banjara Hills, Hyderabad
          </span>

          <h1 className="font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            A Healthier{" "}
            <span className="text-sky">Smile</span>{" "}
            <br />
            for a Brighter{" "}
            <span className="relative inline-block text-ink">
              You
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none">
                <path d="M4 8 Q60 2 116 8" stroke="#38b6e8" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            Expert care, modern technology and a patient-first approach — for smiles that last a lifetime.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/appointment"
              className="flex items-center justify-center gap-2 rounded-full bg-sky px-7 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-sky/30 transition-all hover:bg-sky-deep"
            >
              <LuCalendarDays className="h-4 w-4" />
              Book Your Visit
              <LuArrowRight className="h-4 w-4" />
            </Link>
            <button className="flex items-center justify-center gap-3 glass-pill px-6 py-3.5 font-display text-sm font-bold text-ink backdrop-blur-sm transition-all hover:border-sky/50">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky/10">
                <LuPlay className="h-3.5 w-3.5 translate-x-0.5 text-sky-deep" />
              </span>
              Watch Our Story
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 sm:pt-2">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="#38b6e8" />
                  </svg>
                ),
                label: "Experienced Dentists",
              },
              { icon: <LuShield className="h-4 w-4 text-sky" />, label: "Painless Treatments" },
              { icon: <LuUsers className="h-4 w-4 text-sky" />, label: "Personalized Care" },
            ].map((f) => (
              <span key={f.label} className="flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-ink-soft sm:text-[13px]">
                <span className="shrink-0">{f.icon}</span> {f.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CENTER — GLB 3D model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-1 flex-col items-center justify-end"
        >
          {/* Drag hint */}
          <div className="absolute top-2 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-0.5 text-ink-soft/70 select-none pointer-events-none">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 40 12" className="h-3 w-8" fill="none">
                <path d="M2 6h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M38 6l-4-4M38 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M9 3h6v8l2 2v4H7v-4l2-2V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 19v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <svg viewBox="0 0 40 12" className="h-3 w-8" fill="none">
                <path d="M2 6h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M38 6l-4-4M38 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xs font-semibold"><span className="lg:hidden">Swipe</span><span className="hidden lg:inline">Drag</span> to Rotate</span>
            <span className="text-[10px]">Explore Every Angle</span>
          </div>

          {/* Canvas */}
          <div className="h-[340px] w-full max-w-[520px] sm:h-[480px] lg:h-[520px]">
            <HeroGLBCanvas isStatic={isStatic} />
          </div>
        </motion.div>

        {/* RIGHT — Info cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:w-[22%] lg:flex-col lg:pb-16"
        >
          {infoCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              data-cursor-hover
              className="group flex items-center gap-3 glass-sm glass-highlight px-4 py-3.5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky/10">
                {card.icon}
              </div>
              <span className="flex-1 font-display text-sm font-semibold text-ink">{card.title}</span>
              <LuArrowRight className="h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-sky-deep" />
            </Link>
          ))}

          <div className="mt-4 hidden justify-end pr-2 lg:flex">
            <svg viewBox="0 0 160 80" className="h-16 w-40" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="28" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Care</text>
              <text x="10" y="52" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Beyond</text>
              <text x="10" y="72" fontFamily="Georgia, serif" fontSize="18" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Teeth</text>
              <text x="118" y="72" fontFamily="Arial" fontSize="9" fill="#38b6e8">™</text>
              <path d="M10 76 Q80 68 148 76" stroke="#38b6e8" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* STATS BAR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mx-auto mt-6 max-w-7xl px-5 sm:px-8 lg:px-12 pb-8 lg:mt-2"
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 glass px-4 py-5 sm:grid-cols-4 sm:px-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 ${i < stats.length - 1 ? "sm:border-r sm:border-sky-100" : ""}`}
            >
              {s.icon}
              <div>
                {s.value && <div className="font-display text-xl font-extrabold text-ink">{s.value}</div>}
                <div className="text-xs font-medium text-ink-soft">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
