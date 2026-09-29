"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { LuExpand } from "react-icons/lu";
import ClayContainer from "@/components/ui/ClayContainer";
import ClayVisual from "@/components/three/ClayVisual";
import ClayBadge from "@/components/ui/ClayBadge";
import ClayModal from "@/components/ui/ClayModal";
import { ClayIcon } from "@/components/ui/ClayIcon";
import { galleryItems, galleryCategories } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

const spanClasses: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  square: "",
};

export default function GalleryMasonry() {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);

  const filtered = category === "All" ? galleryItems : galleryItems.filter((g) => g.category === category);

  return (
    <ClayContainer className="pb-24">
      <div className="no-scrollbar mb-10 flex gap-2.5 overflow-x-auto pb-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            data-cursor-hover
            className={cn(
              "glass-pill shrink-0 px-4 py-2 text-sm font-semibold transition-colors",
              category === cat ? "bg-sky bg-none text-white shadow-md shadow-sky/30" : "text-ink-soft",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div layout className="grid auto-rows-[220px] grid-flow-row-dense grid-cols-2 gap-4 sm:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                onClick={() => setActive(item)}
                data-cursor-hover
                className={cn(
                  "glass glass-highlight group relative flex flex-col items-center justify-center gap-3 overflow-hidden p-4 text-left",
                  spanClasses[item.span],
                )}
              >
                <ClayBadge tone={item.tone} className="absolute left-3 top-3 z-10">
                  {item.category}
                </ClayBadge>
                <span className="glass-pill absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  <LuExpand className="h-3.5 w-3.5" />
                </span>
                <div className="h-20 w-20 transition-transform duration-300 group-hover:scale-110">
                  <ClayVisual variant={item.variant} tone={item.tone} scale={0.85} />
                </div>
                <p className="text-center text-xs font-medium text-ink-soft">{item.caption}</p>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <ClayModal open={!!active} onClose={() => setActive(null)} labelledBy="gallery-lightbox-title">
        {active && (
          <div className="flex flex-col items-center gap-5 text-center">
            <ClayBadge tone={active.tone}>{active.category}</ClayBadge>
            <div className="flex h-48 w-48 items-center justify-center">
              <ClayIcon variant={active.variant} tone={active.tone} size="lg" className="animate-float" />
            </div>
            <h2 id="gallery-lightbox-title" className="font-display text-xl font-bold text-ink">
              {active.caption}
            </h2>
          </div>
        )}
      </ClayModal>
    </ClayContainer>
  );
}
