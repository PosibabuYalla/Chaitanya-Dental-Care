"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/ClaySection";
import { Stagger, staggerItem } from "@/components/ui/RevealOnScroll";
import ClayVisual from "@/components/three/ClayVisual";
import { techItems } from "@/lib/data/site";
import crownMillingImg from "@/components/gallery/inhouse-crown-milling.jpeg";
import printingAlignersImg from "@/components/gallery/3d-printing-aligners.jpeg";
import shadingMachineImg from "@/components/gallery/Shading_Machine.jpeg";
import customShadeImg from "@/components/gallery/custom-shade-glazing.jpeg";
import cbtMachineImg from "@/components/gallery/inhouse-cbt-machine.jpeg";

const techPhotos = [
  { label: "In-House CBT / CBCT Machine", image: cbtMachineImg },
  { label: "In-House Crown Milling", image: crownMillingImg },
  { label: "3D Printing for Aligners", image: printingAlignersImg },
  { label: "Shade Matching Machine", image: shadingMachineImg },
  { label: "Custom Shade & Glazing", image: customShadeImg },
];

export default function TechnologySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-soft/40 via-ivory-deep/40 to-transparent py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-deep/30 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="Technology"
          title="Precision Powered by Modern Dental Technology"
          description="We invest continuously in diagnostic and treatment technology so every procedure is faster, safer, and more accurate."
        />

        <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-5">
          {techItems.map((tech) => (
            <motion.div
              key={tech.name}
              variants={staggerItem}
              className="glass glass-highlight flex flex-col items-center gap-3 p-4 text-center last:col-span-2 sm:gap-4 sm:p-6 lg:last:col-span-1"
            >
              <div className="h-20 w-20 sm:h-24 sm:w-24">
                <ClayVisual variant={tech.variant} tone="sky" scale={0.95} />
              </div>
              <h3 className="font-display text-sm font-bold text-ink">{tech.name}</h3>
              <p className="text-xs leading-relaxed text-ink-soft">{tech.description}</p>
            </motion.div>
          ))}
        </Stagger>

        {/* Real photo showcase of in-house technology */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-5">
          {techPhotos.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass glass-highlight group relative h-40 overflow-hidden sm:h-52"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-3 pb-3 pt-8 text-xs font-semibold text-white">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
