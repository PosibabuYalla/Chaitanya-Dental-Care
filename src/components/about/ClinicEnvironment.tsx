"use client";

import { motion } from "motion/react";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import ClayVisual from "@/components/three/ClayVisual";
import { clinicRooms } from "@/lib/data/about";

export default function ClinicEnvironment() {
  return (
    <ClaySection>
      <SectionHeading
        kicker="Inside the Hospital"
        title="A Clinic Environment Designed for Calm"
        description="Every room, from reception to recovery, is designed to lower anxiety and support fast healing."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {clinicRooms.map((room, i) => (
          <motion.div
            key={room.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
            className="glass glass-highlight flex flex-col items-center gap-3 p-6 text-center"
          >
            <div className="h-20 w-20">
              <ClayVisual variant={room.variant} tone={room.tone} scale={0.9} />
            </div>
            <h3 className="font-display text-sm font-bold text-ink">{room.name}</h3>
            <p className="text-xs leading-relaxed text-ink-soft">{room.description}</p>
          </motion.div>
        ))}
      </div>
    </ClaySection>
  );
}
