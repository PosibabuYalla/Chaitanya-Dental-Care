"use client";

import { useEffect, useState } from "react";
import { LuCalendarPlus, LuPhone } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/lib/data/site";

export default function MobileBookBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(true);
      return;
    }
    // On home page: show only after the hero (≈100vh) has scrolled past
    const check = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  if (pathname === "/appointment") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="mobile-book-bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
          className="glass fixed inset-x-4 bottom-4 z-[85] flex items-center gap-2 p-2 sm:hidden"
        >
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            aria-label="Call the clinic"
            className="glass-pill flex h-12 w-12 shrink-0 items-center justify-center text-sky-deep"
          >
            <LuPhone className="h-5 w-5" />
          </a>
          <Link
            href="/appointment"
            className="flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-bold bg-gradient-to-r from-coral to-coral-strong text-ink shadow-lg shadow-coral/50 hover:shadow-xl hover:shadow-coral/70 hover:brightness-110"
          >
            <LuCalendarPlus className="h-4 w-4" /> Book Appointment
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
