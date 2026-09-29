"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { LuMenu, LuX, LuCalendarDays, LuArrowRight } from "react-icons/lu";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Treatments" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Doctors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// "/services/dental-implants" keeps "Treatments" highlighted, etc.
const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[90] border-b border-white/60 bg-white/45 shadow-[0_4px_24px_rgba(26,143,196,0.08)] backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12 py-3">
          <Logo tagline />

          {/* Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  data-cursor-hover
                  className={cn(
                    "relative px-3 py-2 text-sm font-semibold transition-colors xl:px-4",
                    active ? "text-ink" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-sky" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/appointment"
              data-cursor-hover
              className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors sm:flex bg-gradient-to-r from-coral to-coral-strong text-ink shadow-lg shadow-coral/50 hover:shadow-xl hover:shadow-coral/70 hover:brightness-110"
            >
              <LuCalendarDays className="h-4 w-4" />
              Book Appointment
              <LuArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
              aria-label="Open menu"
            >
              <LuMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] flex flex-col bg-white/75 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 sm:px-8">
              <Logo onClick={() => setOpen(false)} />
              <button onClick={() => setOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-100" aria-label="Close menu">
                <LuX className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="w-full max-w-xs">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    className={cn(
                      "glass-sm block w-full py-3.5 text-center font-display text-lg font-bold",
                      isActive(pathname, link.href) ? "text-sky-deep" : "text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 w-full max-w-xs">
                <Link href="/appointment" onClick={() => setOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-full py-4 font-bold bg-gradient-to-r from-coral to-coral-strong text-ink shadow-lg shadow-coral/50 hover:shadow-xl hover:shadow-coral/70 hover:brightness-110">
                  <LuCalendarDays className="h-4 w-4" /> Book Appointment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
