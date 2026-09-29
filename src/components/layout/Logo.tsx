import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

// Brand lockup shared by the navbar, mobile menu and footer.
export default function Logo({ tagline = false, onClick, className }: { tagline?: boolean; onClick?: () => void; className?: string }) {
  return (
    <Link href="/" onClick={onClick} className={cn("flex items-center gap-3", className)} aria-label={`${siteConfig.name} home`} data-cursor-hover>
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={1983}
        height={793}
        priority
        sizes="160px"
        className="h-12 w-auto shrink-0 sm:h-14"
      />
      {tagline && (
        <span className="ml-2 hidden border-l-2 border-coral pl-4 text-xs font-semibold leading-tight text-ink-soft xl:block">
          Healthy Smiles
          <br />
          <span className="text-coral-deep">Happier Lives</span>
        </span>
      )}
    </Link>
  );
}
