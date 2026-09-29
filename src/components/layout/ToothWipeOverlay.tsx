"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ToothWipeOverlay() {
  const pathname = usePathname();
  const reducedMotion = usePrefersReducedMotion();
  const [playing, setPlaying] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (reducedMotion) return;
    setPlaying(true);
    const timeout = setTimeout(() => setPlaying(false), 620);
    return () => clearTimeout(timeout);
  }, [pathname, reducedMotion]);

  return (
    <AnimatePresence>
      {playing && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[250] flex items-center justify-center bg-ivory"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: ["circle(0% at 50% 50%)", "circle(78% at 50% 50%)", "circle(0% at 50% 50%)"] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.62, times: [0, 0.5, 1], ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            initial={{ scale: 0.4, rotate: -30, opacity: 0 }}
            animate={{ scale: [0.4, 1.2, 0.4], rotate: [-30, 0, 30], opacity: [0, 1, 0] }}
            transition={{ duration: 0.62, times: [0, 0.5, 1] }}
          >
            <svg width="72" height="80" viewBox="0 0 30 34" fill="none">
              <path
                d="M15 1.5c-3.6 0-5.7 2.1-7.8 2.1C4.9 3.6 2 5.4 2 10.3c0 4.4 1.4 8.9 2.7 12.8 1 3 1.9 6.7 4.2 8.6 1 .8 1.9.8 2.5-.4.8-1.6 1-5.6 2.2-5.6s1.4 4 2.2 5.6c.6 1.2 1.5 1.2 2.5.4 2.3-1.9 3.2-5.6 4.2-8.6C23.6 19.2 25 14.7 25 10.3c0-4.9-2.9-6.7-5.2-6.7-2.1 0-4.2-2.1-7.8-2.1Z"
                fill="#bae3f7"
                stroke="#1a8fc4"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
