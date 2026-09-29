import Link from "next/link";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const TOOTH =
  "M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 16C6 18 6 20 7 21C7.5 21.5 8 21 8.5 20C9 19 9.5 17 10 16C10.5 15 11 14.5 12 14.5C13 14.5 13.5 15 14 16C14.5 17 15 19 15.5 20C16 21 16.5 21.5 17 21C18 20 18 18 18.5 16C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z";

// Brand lockup shared by the navbar, mobile menu and footer.
export default function Logo({ tagline = false, onClick, className }: { tagline?: boolean; onClick?: () => void; className?: string }) {
  return (
    <Link href="/" onClick={onClick} className={cn("flex items-center gap-3", className)} aria-label={`${siteConfig.name} home`} data-cursor-hover>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky to-sky-deep shadow-md shadow-sky/30">
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <path d={TOOTH} fill="white" stroke="white" strokeWidth="0.5" />
        </svg>
      </span>
      <span>
        <span className="block font-display text-lg font-extrabold leading-none text-ink">Chaithanya</span>
        <span className="block text-[10px] font-semibold uppercase tracking-widest text-sky-deep">Dental Hospital</span>
      </span>
      {tagline && (
        <span className="ml-2 hidden border-l border-sky-200 pl-4 text-xs font-medium leading-tight text-ink-soft xl:block">
          Healthy Smiles
          <br />
          Happier Lives
        </span>
      )}
    </Link>
  );
}
