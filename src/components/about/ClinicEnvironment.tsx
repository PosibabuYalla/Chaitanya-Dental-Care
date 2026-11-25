"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import ClayVisual from "@/components/three/ClayVisual";
import { clinicRooms } from "@/lib/data/about";
import receptionImg from "@/components/gallery/Reception-clinic.jpg";
import consultationImg from "@/components/gallery/Doctor-treating-new.jpg";
import operatingAreaImg from "@/components/gallery/Operating_Area.jpg";
import sterilisationImg from "@/components/gallery/Operation_Rooms.jpeg";
import waitingLoungeImg from "@/components/gallery/Waiting_Lounge.jpg";

const roomPhotos: Record<string, StaticImageData> = {
  "Reception": receptionImg,
  "Consultation": consultationImg,
  "Treatment Suites": operatingAreaImg,
  "Sterilisation Centre": sterilisationImg,
  "Recovery Lounge": waitingLoungeImg,
};

export default function ClinicEnvironment() {
  return (
    <ClaySection>
      <SectionHeading
        kicker="Inside the Clinic"
        title="A Space Designed for Comfort & Precision"
        description="From reception to treatment, every space is designed to support accurate diagnosis, careful treatment, and a calm patient experience."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {clinicRooms.map((room, i) => {
          const photo = roomPhotos[room.name];
          return (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass glass-highlight flex flex-col items-center gap-3 overflow-hidden p-0 text-center"
            >
              {photo ? (
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={photo}
                    alt={room.name}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-32 w-full items-center justify-center">
                  <div className="h-20 w-20">
                    <ClayVisual variant={room.variant} tone={room.tone} scale={0.9} />
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-1 px-4 pb-5 pt-2">
                <h3 className="font-display text-sm font-bold text-ink">{room.name}</h3>
                <p className="text-xs leading-relaxed text-ink-soft">{room.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </ClaySection>
  );
}
