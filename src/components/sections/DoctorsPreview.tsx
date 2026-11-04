"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import ClayButton from "@/components/ui/ClayButton";
import DoctorPortrait from "@/components/ui/DoctorPortrait";
import { doctors } from "@/lib/data/doctors";

const featured = ["ananya-rao", "karthik-menon", "priya-sharma", "arjun-verma"];

export default function DoctorsPreview() {
  const items = featured.map((slug) => doctors.find((d) => d.slug === slug)!);

  return (
    <ClaySection>
      <SectionHeading
        kicker="Our Team"
        title="Meet the Specialists Behind Your Smile"
        description="Every doctor at chaitanya Dental brings deep specialisation and a genuinely gentle chairside manner."
      />

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((doctor) => (
          <motion.div key={doctor.slug} variants={staggerItem}>
            <Link href={`/team/${doctor.slug}`} data-cursor-hover className="group block">
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="flex flex-col gap-4">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                  <DoctorPortrait initials={doctor.initials} tone={doctor.tone} />
                </motion.div>
                <div className="text-center">
                  <h3 className="font-display text-base font-bold text-ink">{doctor.name}</h3>
                  <p className="text-xs font-medium text-ink-soft">{doctor.specialty}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-coral-deep opacity-0 transition-opacity group-hover:opacity-100">
                    View profile <LuArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </Stagger>

      <div className="mt-12 flex justify-center">
        <ClayButton href="/team" variant="secondary" icon={<LuArrowRight className="h-4 w-4" />}>
          Meet Our Team
        </ClayButton>
      </div>
    </ClaySection>
  );
}
