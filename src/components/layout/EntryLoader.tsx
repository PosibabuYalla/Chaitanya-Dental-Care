"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// Once per browser session (sessionStorage): a new tab/window session plays the
// intro; refreshes and client-side navigations within the session don't.
const SESSION_KEY = "entry_played";

// Runs before first paint (inlined in <head>): returning visitors in the same
// session get the `entry-played` class immediately, so CSS shows the site
// without waiting for React to hydrate.
export const entryPlayedScript = `try{if(sessionStorage.getItem("${SESSION_KEY}"))document.documentElement.classList.add("entry-played")}catch(e){}`;

const INTRO_SRC = "/website_entry_animation.mp4";

// Never let the intro block the site: give up if playback hasn't started by
// START_TIMEOUT_MS (slow network / blocked autoplay), and once it is playing,
// release at most END_GRACE_MS after the clip should have ended even if
// `ended` never fires (e.g. a stalled stream). The clip itself is 8s.
const START_TIMEOUT_MS = 6000;
const END_GRACE_MS = 1500;
const FADE_MS = 600;

type Phase = "intro" | "fading" | "done";

/**
 * True once the intro has finished (or was already seen this session). Heavy
 * work such as WebGL rendering waits for this so it doesn't compete with video
 * decoding while it is hidden behind the overlay.
 */
export function useIntroFinished() {
  return useSyncExternalStore(
    (onChange) => {
      const observer = new MutationObserver(onChange);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    },
    () => document.documentElement.classList.contains("entry-played"),
    () => false,
  );
}

// Remembered as soon as playback starts, so a refresh mid-intro doesn't replay it.
function rememberSession() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {}
}

export default function EntryLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("intro");
  // src is attached only when the intro should play, so returning visitors never download it.
  const [src, setSrc] = useState<string | undefined>(undefined);
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishing = useRef(false);
  const capTimer = useRef<number | undefined>(undefined);

  const finish = () => {
    if (finishing.current) return;
    finishing.current = true;
    rememberSession();
    setPhase("fading");
    window.setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      // Added only after the fade: this class also hides the overlay via CSS.
      document.documentElement.classList.add("entry-played");
    }, FADE_MS);
  };

  useEffect(() => {
    if (document.documentElement.classList.contains("entry-played")) {
      finishing.current = true;
      setPhase("done"); // eslint-disable-line react-hooks/set-state-in-effect -- sessionStorage is only readable on the client
      return;
    }
    document.body.style.overflow = "hidden";
    setSrc(INTRO_SRC);

    const startTimer = window.setTimeout(() => {
      const v = videoRef.current;
      if (!v || v.paused || v.currentTime === 0) finish();
    }, START_TIMEOUT_MS);
    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(capTimer.current);
      document.body.style.overflow = "";
    };
  }, []);

  // Playback started: remember the session and arm the end-of-clip safety cap
  // relative to *now*, so a slow start never cuts the clip short.
  const onPlaying = () => {
    rememberSession();
    const v = videoRef.current;
    const remaining = v && Number.isFinite(v.duration) ? (v.duration - v.currentTime) * 1000 : 8000;
    window.clearTimeout(capTimer.current);
    capTimer.current = window.setTimeout(finish, remaining + END_GRACE_MS);
  };

  const tryPlay = () => {
    videoRef.current?.play().catch((err: DOMException) => {
      // AbortError = a newer load/play superseded this one (e.g. React StrictMode
      // re-running effects in dev) — not a real failure. Anything else (autoplay
      // blocked, Low Power Mode, decode error) skips straight to the site.
      if (err?.name !== "AbortError") finish();
    });
  };

  return (
    <>
      <div
        className="entry-content"
        style={{
          opacity: phase === "done" ? 1 : 0,
          transition: phase === "done" ? "opacity 0.5s ease" : "none",
          pointerEvents: phase === "done" ? "auto" : "none",
        }}
      >
        {children}
      </div>

      {phase !== "done" && (
        <div
          className="entry-overlay fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            opacity: phase === "fading" ? 0 : 1,
            transition: `opacity ${FADE_MS}ms ease`,
            // Matches the clip's own backdrop so portrait letterboxing is invisible
            background: "radial-gradient(ellipse at center, #eef3f7 0%, #dbe6ee 55%, #cfdde6 100%)",
          }}
          role="presentation"
        >
          <video
            ref={videoRef}
            src={src}
            muted
            playsInline
            autoPlay
            preload="auto"
            disablePictureInPicture
            onCanPlay={tryPlay}
            onPlaying={onPlaying}
            onEnded={finish}
            onError={finish}
            aria-hidden
            // Wide logo lockup: cover on landscape screens, letterbox on portrait phones
            className="h-full w-full object-cover portrait:object-contain"
          />
          <button
            type="button"
            onClick={finish}
            className="glass-pill absolute bottom-6 right-5 px-5 py-2.5 text-sm font-semibold text-ink sm:bottom-8 sm:right-8"
          >
            Skip intro
          </button>
        </div>
      )}
    </>
  );
}
