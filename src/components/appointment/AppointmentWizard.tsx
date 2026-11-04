"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuArrowLeft, LuArrowRight, LuCircleCheck, LuCalendarDays } from "react-icons/lu";
import ClayContainer from "@/components/ui/ClayContainer";
import ClayButton from "@/components/ui/ClayButton";
import ClayVisual from "@/components/three/ClayVisual";
import { ClayInput, ClayTextarea } from "@/components/ui/ClayInput";
import StepProgress from "./StepProgress";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { cn } from "@/lib/utils";

interface WizardData {
  treatmentSlug: string;
  doctorSlug: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const initialData: WizardData = {
  treatmentSlug: "",
  doctorSlug: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

const timeSlots = {
  Morning: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  Afternoon: ["12:00 PM", "12:30 PM", "1:00 PM", "2:00 PM", "2:30 PM", "3:00 PM"],
  Evening: ["4:00 PM", "4:30 PM", "5:00 PM", "6:00 PM", "6:30 PM", "7:00 PM"],
};

const dateChips = ["Today", "Tomorrow", "This Week", "Next Week"];

function StepShell({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-6"
    >
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
        {description && <p className="mt-1 text-sm text-ink-soft">{description}</p>}
      </div>
      {children}
    </motion.div>
  );
}

export default function AppointmentWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>(initialData);
  const [dateChip, setDateChip] = useState("");

  const selectedTreatment = services.find((s) => s.slug === data.treatmentSlug);
  const selectedDoctor = doctors.find((d) => d.slug === data.doctorSlug);

  const canProceed = useMemo(() => {
    switch (step) {
      case 0:
        return !!data.treatmentSlug;
      case 1:
        return !!data.doctorSlug;
      case 2:
        return !!data.date;
      case 3:
        return !!data.time;
      case 4:
        return data.name.trim() !== "" && /^\S+@\S+\.\S+$/.test(data.email) && /^[\d\s+()-]{7,}$/.test(data.phone);
      default:
        return true;
    }
  }, [step, data]);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  return (
    <ClayContainer className="pb-24">
      <div className="glass-lg glass-highlight mx-auto max-w-3xl p-6 sm:p-10">
        <StepProgress step={step} />

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <StepShell key="0" title="Choose Your Treatment" description="What would you like to be seen for?">
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => setData((d) => ({ ...d, treatmentSlug: s.slug }))}
                      data-cursor-hover
                      className={cn(
                        "glass-sm flex items-center gap-3 p-4 text-left transition-shadow",
                        data.treatmentSlug === s.slug && "shadow-glass-pressed ring-2 ring-coral-deep/50",
                      )}
                    >
                      <div className="h-12 w-12 shrink-0">
                        <ClayVisual size="sm" variant={s.variant} tone={s.tone} scale={0.75} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-ink">{s.name}</p>
                        <p className="text-xs text-ink-soft">{s.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </StepShell>
            )}

            {step === 1 && (
              <StepShell key="1" title="Choose Your Doctor" description="Pick a specialist, or let us assign the best fit.">
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => setData((d) => ({ ...d, doctorSlug: "any" }))}
                    data-cursor-hover
                    className={cn(
                      "glass-sm flex items-center gap-3 p-4 text-left",
                      data.doctorSlug === "any" && "shadow-glass-pressed ring-2 ring-coral-deep/50",
                    )}
                  >
                    <span className="glass-pill flex h-12 w-12 shrink-0 items-center justify-center bg-sky bg-none text-white shadow-md shadow-sky/30">
                      <LuCircleCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">No preference</p>
                      <p className="text-xs text-ink-soft">We&rsquo;ll match the best available specialist</p>
                    </div>
                  </button>
                  {doctors.slice(0, 7).map((doc) => (
                    <button
                      key={doc.slug}
                      onClick={() => setData((d) => ({ ...d, doctorSlug: doc.slug }))}
                      data-cursor-hover
                      className={cn(
                        "glass-sm flex items-center gap-3 p-4 text-left",
                        data.doctorSlug === doc.slug && "shadow-glass-pressed ring-2 ring-coral-deep/50",
                      )}
                    >
                      <span className="glass-pill flex h-12 w-12 shrink-0 items-center justify-center glass-tint font-display text-xs font-bold text-ink">
                        {doc.initials}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-ink">{doc.name}</p>
                        <p className="text-xs text-ink-soft">{doc.specialty}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </StepShell>
            )}

            {step === 2 && (
              <StepShell key="2" title="Choose a Date" description="Pick whatever works best for your schedule.">
                <div className="flex flex-wrap justify-center gap-2.5">
                  {dateChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => setDateChip(chip)}
                      data-cursor-hover
                      className={cn(
                        "glass-pill px-4 py-2 text-sm font-semibold",
                        dateChip === chip ? "bg-sky bg-none text-white shadow-md shadow-sky/30" : "text-ink-soft",
                      )}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
                <div className="mx-auto max-w-xs">
                  <ClayInput
                    id="wizard-date"
                    label="Or pick an exact date"
                    type="date"
                    value={data.date}
                    onChange={(e) => {
                      setData((d) => ({ ...d, date: e.target.value }));
                      setDateChip("");
                    }}
                  />
                </div>
              </StepShell>
            )}

            {step === 3 && (
              <StepShell key="3" title="Choose a Time" description="All times are available on your selected date.">
                <div className="flex flex-col gap-6">
                  {Object.entries(timeSlots).map(([period, slots]) => (
                    <div key={period}>
                      <p className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-faint">
                        <LuCalendarDays className="h-3.5 w-3.5" /> {period}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {slots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setData((d) => ({ ...d, time: t }))}
                            data-cursor-hover
                            className={cn(
                              "glass-pill px-4 py-2 text-sm font-semibold",
                              data.time === t ? "bg-sky bg-none text-white shadow-md shadow-sky/30" : "text-ink-soft",
                            )}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </StepShell>
            )}

            {step === 4 && (
              <StepShell key="4" title="Your Details" description="So we can confirm your visit.">
                <div className="grid gap-5 sm:grid-cols-2">
                  <ClayInput id="wizard-name" label="Full Name" required value={data.name} onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))} placeholder="Jane Doe" />
                  <ClayInput id="wizard-phone" label="Phone" required type="tel" value={data.phone} onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))} placeholder="+91 98765 43210" />
                  <ClayInput id="wizard-email" label="Email" required type="email" value={data.email} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))} placeholder="you@example.com" className="sm:col-span-2" />
                  <ClayTextarea id="wizard-notes" label="Notes (optional)" value={data.notes} onChange={(e) => setData((d) => ({ ...d, notes: e.target.value }))} placeholder="Anything we should know before your visit?" className="sm:col-span-2" />
                </div>
              </StepShell>
            )}

            {step === 5 && (
              <StepShell key="5" title="You're All Set!" description="Here's a summary of your appointment request.">
                <div className="mx-auto flex max-w-md flex-col gap-3">
                  {[
                    ["Treatment", selectedTreatment?.name ?? "—"],
                    ["Doctor", data.doctorSlug === "any" ? "No preference" : (selectedDoctor?.name ?? "—")],
                    ["Date", dateChip || data.date || "—"],
                    ["Time", data.time || "—"],
                    ["Name", data.name],
                    ["Phone", data.phone],
                    ["Email", data.email],
                  ].map(([label, value]) => (
                    <div key={label} className="glass-sm flex items-center justify-between px-5 py-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</span>
                      <span className="text-sm font-semibold text-ink">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mx-auto max-w-sm text-center text-sm text-ink-soft">
                  A confirmation call will follow shortly. Thank you for choosing chaitanya Dental Hospital.
                </p>
              </StepShell>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <ClayButton variant="ghost" size="md" onClick={back} disabled={step === 0} icon={<LuArrowLeft className="h-4 w-4" />}>
            Back
          </ClayButton>
          {step < 5 ? (
            <ClayButton size="md" onClick={next} disabled={!canProceed} icon={<LuArrowRight className="h-4 w-4" />}>
              Continue
            </ClayButton>
          ) : (
            <ClayButton size="md" href="/" icon={<LuCircleCheck className="h-4 w-4" />}>
              Done
            </ClayButton>
          )}
        </div>
      </div>
    </ClayContainer>
  );
}
