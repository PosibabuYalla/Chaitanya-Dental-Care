"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuSend, LuCircleCheck } from "react-icons/lu";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { ClayInput, ClaySelect, ClayTextarea } from "@/components/ui/ClayInput";
import ClayButton from "@/components/ui/ClayButton";
import { services } from "@/lib/data/services";

interface FormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
}

const initialState: FormState = { name: "", phone: "", email: "", date: "", time: "", treatment: "", message: "" };

function validate(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!values.name.trim()) errors.name = "Required";
  if (!/^[\d\s+()-]{7,}$/.test(values.phone)) errors.phone = "Enter a valid phone number";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email";
  if (!values.date) errors.date = "Required";
  if (!values.time) errors.time = "Required";
  if (!values.treatment) errors.treatment = "Required";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <ClaySection>
      <SectionHeading kicker="Request an Appointment" title="Tell Us a Bit About Your Visit" />

      <div className="glass-lg glass-highlight mx-auto mt-12 max-w-2xl p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-5 py-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                className="glass-highlight flex h-24 w-24 items-center justify-center rounded-full glass-tint shadow-glass"
              >
                <svg width="44" height="50" viewBox="0 0 30 34" fill="none">
                  <path
                    d="M15 1.5c-3.6 0-5.7 2.1-7.8 2.1C4.9 3.6 2 5.4 2 10.3c0 4.4 1.4 8.9 2.7 12.8 1 3 1.9 6.7 4.2 8.6 1 .8 1.9.8 2.5-.4.8-1.6 1-5.6 2.2-5.6s1.4 4 2.2 5.6c.6 1.2 1.5 1.2 2.5.4 2.3-1.9 3.2-5.6 4.2-8.6C23.6 19.2 25 14.7 25 10.3c0-4.9-2.9-6.7-5.2-6.7-2.1 0-4.2-2.1-7.8-2.1Z"
                    fill="#ffffff"
                    stroke="#38b6e8"
                    strokeWidth="1.2"
                  />
                  <path d="M11 14c1 1.4 2.2 2.1 4 2.1s3-.7 4-2.1" stroke="#1a8fc4" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                </svg>
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-ink">Request Received!</h3>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                Thank you, {values.name.split(" ")[0]}. Our care coordinator will call you at {values.phone} within
                one business hour to confirm your visit.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setValues(initialState);
                }}
                data-cursor-hover
                className="text-sm font-semibold text-coral-deep underline-offset-4 hover:underline"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              noValidate
              className="grid gap-5 sm:grid-cols-2"
            >
              <ClayInput id="name" label="Full Name" required value={values.name} onChange={update("name")} error={errors.name} placeholder="Jane Doe" />
              <ClayInput id="phone" label="Phone" required type="tel" value={values.phone} onChange={update("phone")} error={errors.phone} placeholder="+91 98765 43210" />
              <ClayInput id="email" label="Email" required type="email" value={values.email} onChange={update("email")} error={errors.email} placeholder="you@example.com" className="sm:col-span-2" />
              <ClayInput id="date" label="Preferred Date" required type="date" value={values.date} onChange={update("date")} error={errors.date} />
              <ClayInput id="time" label="Preferred Time" required type="time" value={values.time} onChange={update("time")} error={errors.time} />
              <ClaySelect
                id="treatment"
                label="Treatment"
                required
                value={values.treatment}
                onChange={update("treatment")}
                error={errors.treatment}
                placeholder="Select a treatment"
                options={services.map((s) => ({ value: s.slug, label: s.name }))}
                className="sm:col-span-2"
              />
              <ClayTextarea
                id="message"
                label="Message"
                value={values.message}
                onChange={update("message")}
                placeholder="Anything else we should know?"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <ClayButton type="submit" className="w-full" icon={<LuSend className="h-4 w-4" />}>
                  Request Appointment
                </ClayButton>
              </div>
              <p className="flex items-center gap-1.5 text-xs text-ink-faint sm:col-span-2">
                <LuCircleCheck className="h-3.5 w-3.5 text-coral-deep" /> We&rsquo;ll confirm by phone or email —
                no payment required to request.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </ClaySection>
  );
}
