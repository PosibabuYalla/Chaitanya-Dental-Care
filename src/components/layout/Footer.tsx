import Link from "next/link";
import { LuInstagram, LuFacebook, LuTwitter, LuYoutube, LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu";
import { navLinks, siteConfig } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import ClayContainer from "@/components/ui/ClayContainer";
import Logo from "@/components/layout/Logo";

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram", Icon: LuInstagram },
  { href: siteConfig.social.facebook, label: "Facebook", Icon: LuFacebook },
  { href: siteConfig.social.twitter, label: "Twitter", Icon: LuTwitter },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: LuYoutube },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-white/35 pb-28 backdrop-blur-xl pt-16 sm:pb-20 sm:pt-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-pink/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
      <ClayContainer className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Premium, technology-led dental care delivered with precision, comfort, and compassion — for every
            member of your family.
          </p>
          <div className="flex gap-2.5">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor-hover
                className="glass-pill flex h-10 w-10 items-center justify-center text-ink-soft transition-colors hover:text-gold-deep"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">Navigate</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink-soft transition-colors hover:text-ink" data-cursor-hover>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">Services</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                  data-cursor-hover
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">Visit Us</h3>
          <address className="flex flex-col gap-4 not-italic">
          <p className="flex items-start gap-2.5 text-sm text-ink-soft">
            <LuMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /> {siteConfig.address}
          </p>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-sm text-ink-soft hover:text-ink" data-cursor-hover>
            <LuPhone className="h-4 w-4 shrink-0 text-gold-deep" /> {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-sm text-ink-soft hover:text-ink" data-cursor-hover>
            <LuMail className="h-4 w-4 shrink-0 text-gold-deep" /> {siteConfig.email}
          </a>
          </address>
          <div className="flex flex-col gap-1.5">
            {siteConfig.hours.map((h) => (
              <p key={h.day} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <LuClock className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                <span>
                  {h.day}: {h.time}
                </span>
              </p>
            ))}
          </div>
          <div className="glass-inset mt-2 flex items-center gap-2 p-1.5">
            <label htmlFor="footer-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter"
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-3 py-2 text-sm text-ink placeholder:text-ink-faint outline-none"
            />
            <button className="glass-pill shrink-0 px-4 py-2 text-xs font-semibold text-ink" data-cursor-hover>
              Subscribe
            </button>
          </div>
        </div>
      </ClayContainer>

      <ClayContainer className="relative mt-14">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Emergency line: <span className="whitespace-nowrap">{siteConfig.emergencyPhone}</span> · Available 24/7</p>
        </div>
      </ClayContainer>
    </footer>
  );
}
