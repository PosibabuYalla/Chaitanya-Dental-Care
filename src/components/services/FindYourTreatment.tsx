"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuArrowRight, LuSparkles } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { ClaySelect } from "@/components/ui/ClayInput";
import ClayVisual from "@/components/three/ClayVisual";
import ClayButton from "@/components/ui/ClayButton";
import { getServiceBySlug } from "@/lib/data/services";

const concerns = [
  { label: "Tooth pain or sensitivity", slug: "root-canal-treatment" },
  { label: "One or more missing teeth", slug: "dental-implants" },
  { label: "Crooked or crowded teeth", slug: "orthodontics" },
  { label: "Prefer an invisible straightening option", slug: "clear-aligners" },
  { label: "Stained or dull teeth", slug: "teeth-whitening" },
  { label: "Bleeding or swollen gums", slug: "gum-treatment" },
  { label: "Chipped tooth or uneven smile", slug: "cosmetic-dentistry" },
  { label: "My child needs a check-up", slug: "pediatric-dentistry" },
  { label: "Sudden pain or dental injury", slug: "emergency-dentistry" },
  { label: "Just due for a routine clean", slug: "preventive-dentistry" },
];

export default function FindYourTreatment() {
  const [selected, setSelected] = useState("");
  const service = selected ? getServiceBySlug(selected) : undefined;

  return (
    <ClaySection>
      <div className="glass-lg glass-highlight mx-auto max-w-4xl px-6 py-12 sm:px-12 sm:py-14">
        <SectionHeading
          kicker="Find Your Treatment"
          title="Tell Us What's Bothering You"
          description="Select your main concern and we'll recommend the right department to start with."
        />

        <div className="mx-auto mt-10 max-w-md">
          <ClaySelect
            id="concern"
            label="What's your concern?"
            placeholder="Choose a concern"
            options={concerns.map((c) => ({ value: c.slug, label: c.label }))}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          />
        </div>

        <AnimatePresence mode="wait">
          {service && (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="glass-inset mx-auto mt-8 flex max-w-md flex-col items-center gap-4 p-6 text-center"
            >
              <span className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-gold-deep">
                <LuSparkles className="h-3.5 w-3.5" /> Recommended
              </span>
              <div className="h-20 w-20">
                <ClayVisual variant={service.variant} tone={service.tone} scale={0.9} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{service.name}</h3>
              <p className="text-sm text-ink-soft">{service.tagline}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <ClayButton href={`/services/${service.slug}`} size="md" variant="secondary" icon={<LuArrowRight className="h-4 w-4" />}>
                  View Treatment
                </ClayButton>
                <ClayButton href="/appointment" size="md">
                  Book Appointment
                </ClayButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ClaySection>
  );
}
