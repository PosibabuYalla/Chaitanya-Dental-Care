"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowRight, LuGraduationCap } from "react-icons/lu";
import { SectionHeading } from "@/components/ui/ClaySection";
import ClayContainer from "@/components/ui/ClayContainer";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import DoctorPortrait from "@/components/ui/DoctorPortrait";
import ClayBadge from "@/components/ui/ClayBadge";
import { doctors, doctorCategories } from "@/lib/data/doctors";

export default function TeamGrid() {
  return (
    <section className="py-14 sm:py-20">
            <ClayContainer>
              <SectionHeading
                kicker="The Team"
                title="Our Dentists & Specialists"
                description={`${doctors.length} specialists across ${doctorCategories.length} departments.`}
              />

              <Stagger className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {doctors.map((doctor) => (
                  <motion.div key={doctor.slug} variants={staggerItem}>
                    <Link href={`/team/${doctor.slug}`} data-cursor-hover className="group block h-full">
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="glass glass-highlight flex h-full flex-col gap-4 p-5"
                      >
                        <DoctorPortrait initials={doctor.initials} tone={doctor.tone} />
                        <ClayBadge tone={doctor.tone} className="w-fit">{doctor.category}</ClayBadge>
                        <div>
                          <h3 className="font-display text-base font-bold text-ink">{doctor.name}</h3>
                          <p className="text-xs font-medium text-ink-soft">{doctor.specialty}</p>
                        </div>
                        <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-3 text-xs text-ink-faint">
                          <span className="flex items-center gap-1.5">
                            <LuGraduationCap className="h-3.5 w-3.5" /> {doctor.experienceYears}+ yrs
                          </span>
                          <span className="inline-flex items-center gap-1 font-semibold text-coral-deep opacity-0 transition-opacity group-hover:opacity-100">
                            Profile <LuArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </Stagger>
            </ClayContainer>
    </section>
  );
}
