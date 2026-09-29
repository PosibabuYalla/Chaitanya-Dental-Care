"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import doctorTreating from "@/components/gallery/Doctor treating Patient.webp";
import ToothFrame from "@/components/ui/ToothFrame";
import { LuArrowRight, LuPlay, LuUsers, LuStar, LuHeart, LuEye, LuTarget, LuGem } from "react-icons/lu";

const featureCards = [
  {
    icon: <LuUsers className="h-6 w-6 text-sky" />,
    title: "Experienced Dental Team",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="#38b6e8"/>
      </svg>
    ),
    title: "Personalized Treatment Plans",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4z" stroke="#38b6e8" strokeWidth="1.5" fill="none"/>
        <path d="M9 12l2 2 4-4" stroke="#38b6e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Safe & Painless Procedures",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="#38b6e8" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Modern Technology & World-Class Care",
  },
];

const stats = [
  { icon: <LuUsers className="h-5 w-5 text-sky" />, value: "10K+", label: "Happy Patients" },
  { icon: <LuStar className="h-5 w-5 text-sky" />, value: "5★", label: "Patient Rating" },
  { icon: <LuHeart className="h-5 w-5 text-sky" />, value: "15+", label: "Years of Trusted Care" },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" fill="#38b6e8"/>
      </svg>
    ),
    value: "20+",
    label: "Advanced Treatments",
  },
];

const bottomCards = [
  {
    icon: <LuEye className="h-6 w-6" />,
    title: "Our Vision",
    desc: "A healthier, happier community with confident smiles for life.",
  },
  {
    icon: <LuTarget className="h-6 w-6" />,
    title: "Our Mission",
    desc: "To deliver exceptional dental care with compassion, innovation, and integrity.",
  },
  {
    icon: <LuGem className="h-6 w-6" />,
    title: "Our Values",
    desc: "Patient-first care, trust, transparency, and continuous learning.",
  },
  {
    icon: <LuUsers className="h-6 w-6" />,
    title: "Our Team",
    desc: "Skilled and caring dental professionals dedicated to your smile.",
  },
];

export default function AboutSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-sky/10 blur-[80px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-sky-soft/20 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* TOP SECTION */}
        <div className="grid items-center gap-10 lg:grid-cols-[42%_1fr_22%]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex w-fit items-center glass-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-deep backdrop-blur-sm">
              About Us
            </span>

            <h2 className="font-display text-[2.1rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              More Than
              <br />
              Treatment,
              <br />
              We{" "}
              <span className="text-sky">Create</span>
              <br />
              <span className="relative inline-block text-sky">
                Confident Smiles
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 260 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8 Q130 2 256 8" stroke="#ff7a00" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </h2>

            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              At Chaithanya Dental Hospital in Tadigadapa, Vijayawada, we believe a healthy smile can brighten your life. With advanced
              technology, expert dentists, and a patient-first approach, we provide gentle, precise, and
              long-lasting dental care for every stage of life.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-sky/30 transition-all hover:bg-sky-deep"
              >
                Know Our Story
                <LuArrowRight className="h-4 w-4" />
              </Link>
              <button className="flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="flex h-10 w-10 items-center justify-center glass-pill">
                  <LuPlay className="h-3.5 w-3.5 translate-x-0.5 text-sky-deep" />
                </span>
                Watch Our Journey
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-sky-100 pt-6 sm:grid-cols-4">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  {s.icon}
                  <div>
                    {s.value && <div className="font-display text-lg font-extrabold text-ink">{s.value}</div>}
                    <div className="text-xs font-medium text-ink-soft">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER — Doctor + Tooth visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative flex w-full max-w-[420px] items-center justify-center py-4">
              {/* Soft glow behind the tooth */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(168,216,240,0.55), rgba(200,230,245,0.2) 60%, transparent)" }}
              />
              {/* Doctor & patient photo, clipped to a tooth silhouette */}
              <ToothFrame className="w-[250px] sm:w-[320px] lg:w-[340px]">
                <Image
                  src={doctorTreating}
                  alt="Doctor treating a patient at Chaitanya Dental Care"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 320px, 250px"
                  quality={75}
                  className="object-cover"
                />
              </ToothFrame>
              {/* Dashed orbit dots */}
              <div className="absolute right-8 top-8 h-2 w-2 rounded-full bg-sky" />
              <div className="absolute right-16 top-20 h-1.5 w-1.5 rounded-full bg-sky/60" />
              <div className="absolute right-4 top-32 h-1 w-1 rounded-full bg-sky/40" />
            </div>
          </motion.div>

          {/* RIGHT — Feature cards + signature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3"
          >
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-3 glass-sm glass-highlight px-4 py-3.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky/10">
                  {card.icon}
                </div>
                <span className="flex-1 font-display text-sm font-semibold text-ink">{card.title}</span>
              </div>
            ))}

            {/* Care Beyond Teeth */}
            <div className="mt-3 flex justify-end pr-2">
              <svg viewBox="0 0 160 80" className="h-16 w-40" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="28" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Care</text>
                <text x="10" y="52" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Beyond</text>
                <text x="10" y="72" fontFamily="Georgia, serif" fontSize="18" fontStyle="italic" fontWeight="bold" fill="#1a8fc4">Teeth</text>
                <text x="118" y="72" fontFamily="Arial" fontSize="9" fill="#38b6e8">™</text>
                <path d="M10 76 Q80 68 148 76" stroke="#38b6e8" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-2 glass sm:mt-12 sm:gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {bottomCards.map((card, i) => (
            <div key={card.title} className={`flex items-start gap-4 rounded-2xl p-4 ${i < bottomCards.length - 1 ? "lg:border-r lg:border-sky-100" : ""}`}>
              <div className="glass-tint flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                {card.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-sm font-bold text-ink">{card.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{card.desc}</p>
              </div>
              <Link
                href="/about"
                aria-label={`Read more: ${card.title}`}
                className="glass-pill flex h-7 w-7 shrink-0 items-center justify-center text-sky-deep"
              >
                <LuArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
