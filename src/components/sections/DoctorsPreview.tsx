"use client";

import { motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import ClayButton from "@/components/ui/ClayButton";
import DoctorPortrait from "@/components/ui/DoctorPortrait";
import { doctors } from "@/lib/data/doctors";

export default function DoctorsPreview() {
  const previewDoctors = [
    "venigalla-chaitanya",
    "dhanya-abhiram-kamireddy",
    "sai-nath-bhukya",
    "samata-avula",
  ].map((s) => doctors.find((d) => d.slug === s)).filter(Boolean) as typeof doctors;
  return (
    <ClaySection>
      <SectionHeading
        kicker="Our Team"
        title="Meet the Specialists Behind Your Smile"
        description="Every doctor at Chaitanya Dental Care brings deep specialisation, clinical precision, and a genuine patient-first approach."
      />

      <Stagger className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {previewDoctors.map((doctor) => (
          <motion.div key={doctor.slug} variants={staggerItem} className="w-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass glass-highlight overflow-hidden"
            >
              <DoctorPortrait
                initials={doctor.initials}
                tone={doctor.tone}
                photo={doctor.photo}
                name={doctor.name}
              />
              <div className="px-4 py-4 text-center">
                <h3 className="font-display text-sm font-bold leading-snug text-ink">{doctor.name}</h3>
                <p className="mt-1 text-xs font-medium text-ink-soft">{doctor.specialty}</p>
                {doctor.experienceYears >= 10 && (
                  <span className="mt-2 inline-block rounded-full bg-sky/10 px-3 py-0.5 text-[11px] font-semibold text-sky-deep">
                    {doctor.experienceYears}+ yrs experience
                  </span>
                )}
              </div>
            </motion.div>
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
