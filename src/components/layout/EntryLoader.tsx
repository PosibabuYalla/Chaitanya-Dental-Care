"use client";

import { useEffect, useRef, useState } from "react";

// Runs before first paint (inlined in <head>): returning visitors in the same
// session get the `entry-played` class immediately, so CSS shows the site
// without waiting for React to hydrate.
export const entryPlayedScript = `try{if(sessionStorage.getItem("entry_played"))document.documentElement.classList.add("entry-played")}catch(e){}`;

const INTRO_SRC = "/website_entry_animation vedio.mp4";

// If the intro hasn't started playing by then (slow network), skip it.
const STALL_TIMEOUT_MS = 2500;

export default function EntryLoader({ children }: { children: React.ReactNode }) {
  const [playing, setPlaying] = useState(true);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingRef = useRef(false);

  const dismiss = () => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    setFading(true);
    setTimeout(() => {
      setPlaying(false);
      setDone(true);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("entry_played", "1");
      } catch {}
      document.documentElement.classList.add("entry-played");
    }, 600);
  };

  useEffect(() => {
    if (document.documentElement.classList.contains("entry-played")) {
      setPlaying(false);
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const video = videoRef.current;
    // src is attached here, not in the markup, so returning visitors never download it.
    if (video) video.src = INTRO_SRC;
    const stall = setTimeout(() => {
      if (!video || video.currentTime === 0) dismiss();
    }, STALL_TIMEOUT_MS);
    video?.play().catch(() => dismiss());
    return () => clearTimeout(stall);
  }, []);

  return (
    <>
      <div
        className="entry-content"
        style={{
          opacity: done ? 1 : 0,
          transition: done ? "opacity 0.5s ease" : "none",
          pointerEvents: done ? "auto" : "none",
        }}
      >
        {children}
      </div>

      {playing && (
        <div
          className="entry-overlay fixed inset-0 z-[9999] bg-black"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.6s ease" }}
        >
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            onEnded={dismiss}
            className="h-full w-full object-cover"
          />
          <button
            onClick={dismiss}
            className="absolute bottom-8 right-8 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Skip
          </button>
        </div>
      )}
    </>
  );
}
