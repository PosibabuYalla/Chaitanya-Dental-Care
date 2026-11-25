"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { LuX, LuCalendarDays, LuPhone } from "react-icons/lu";
import { siteConfig } from "@/lib/data/site";

const SESSION_KEY = "cdc_popup_dismissed";
const DELAY_MS = 60_000; // 1 minute

export default function BookingPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      return;
    }

    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage blocked (private mode) — silent fail
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[200] bg-ink/20 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            key="popup-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed inset-x-4 bottom-6 z-[201] mx-auto max-w-sm sm:inset-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            <div className="glass glass-highlight relative overflow-hidden rounded-3xl px-6 pb-7 pt-8">
              {/* Glow blobs */}
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-coral/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-sky/20 blur-3xl" />

              {/* Close */}
              <button
                onClick={dismiss}
                aria-label="Close"
                className="glass-pill absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-ink-soft hover:text-ink"
              >
                <LuX className="h-4 w-4" />
              </button>

              {/* Content */}
              <div className="relative flex flex-col items-center gap-4 text-center">
                {/* Tooth icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-coral/20 to-sky/20">
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z"
                      fill="#38b6e8"
                    />
                  </svg>
                </div>

                <div>
                  <h2 id="popup-title" className="font-display text-xl font-extrabold tracking-tight text-ink">
                    Ready for a Healthier Smile?
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    Book a consultation with our team at Chaitanya Dental Care — no long waits, no pressure.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-2.5">
                  <Link
                    href="/appointment"
                    onClick={dismiss}
                    className="flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold bg-gradient-to-r from-coral to-coral-strong text-ink shadow-lg shadow-coral/40 hover:brightness-110"
                  >
                    <LuCalendarDays className="h-4 w-4" />
                    Book Appointment
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    onClick={dismiss}
                    className="flex items-center justify-center gap-2 rounded-full border border-sky/30 py-3.5 text-sm font-semibold text-sky-deep hover:bg-sky/5"
                  >
                    <LuPhone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </div>

                <button onClick={dismiss} className="text-xs text-ink-faint hover:text-ink-soft">
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
