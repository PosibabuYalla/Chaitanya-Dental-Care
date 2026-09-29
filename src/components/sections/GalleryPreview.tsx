"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LuArrowRight } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import ClayButton from "@/components/ui/ClayButton";
import ClayVisual from "@/components/three/ClayVisual";
import ClayBadge from "@/components/ui/ClayBadge";
import { galleryItems } from "@/lib/data/gallery";

const preview = galleryItems.slice(0, 5);
const spanClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  square: "",
};

export default function GalleryPreview() {
  return (
    <ClaySection>
      <SectionHeading kicker="Gallery" title="Inside Our World of Smiles" />

      <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 sm:grid-cols-3">
        {preview.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className={`glass glass-highlight relative flex flex-col items-center justify-center gap-2 overflow-hidden p-4 ${spanClasses[item.span]}`}
          >
            <ClayBadge tone={item.tone} className="absolute left-3 top-3 z-10">
              {item.category}
            </ClayBadge>
            {item.image ? (
              <>
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <p className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-3 pt-10 text-xs font-semibold text-white">
                  {item.caption}
                </p>
              </>
            ) : (
              <>
                <div className="h-16 w-16">
                  <ClayVisual size="md" variant={item.variant} tone={item.tone} scale={0.85} />
                </div>
                <p className="text-center text-xs font-medium text-ink-soft">{item.caption}</p>
              </>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <ClayButton href="/gallery" variant="secondary" icon={<LuArrowRight className="h-4 w-4" />}>
          Explore Gallery
        </ClayButton>
      </div>
    </ClaySection>
  );
}
