"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/ClaySection";
import ClayContainer from "@/components/ui/ClayContainer";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import DoctorPortrait from "@/components/ui/DoctorPortrait";
import { doctors } from "@/lib/data/doctors";

export default function TeamGrid() {
  return (
    <section className="py-14 sm:py-20">
      <ClayContainer>
        <SectionHeading
          kicker="The Team"
          title="Our Doctors"
          description="Meet the people behind Chaitanya Dental Care — committed to clinical excellence and patient-first treatment."
        />

        <Stagger className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-3 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.slug}
              variants={staggerItem}
              className="w-full"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass glass-highlight overflow-hidden"
              >
                {/* Photo / placeholder — full width, no padding */}
                <DoctorPortrait
                  initials={doctor.initials}
                  tone={doctor.tone}
                  photo={doctor.photo}
                  name={doctor.name}
                />

                {/* Name & specialty */}
                <div className="px-4 py-4 text-center">
                  <h3 className="font-display text-sm font-bold leading-snug text-ink">
                    {doctor.name}
                  </h3>
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
      </ClayContainer>
    </section>
  );
}
