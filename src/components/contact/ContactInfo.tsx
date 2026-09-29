import { LuPhone, LuMail, LuMapPin, LuClock, LuTriangleAlert, LuNavigation } from "react-icons/lu";
import ClayContainer from "@/components/ui/ClayContainer";
import { siteConfig } from "@/lib/data/site";

const cards = [
  { icon: LuPhone, label: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: LuMail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

export default function ContactInfo() {
  return (
    <ClayContainer className="pb-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="glass-lg glass-highlight flex flex-col gap-5 p-6 sm:p-8">
          <span className="glass-tint flex h-12 w-12 items-center justify-center rounded-2xl">
            <LuMapPin className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Visit Us in Banjara Hills</h2>
            <address className="mt-2 text-base not-italic leading-relaxed text-ink-soft">{siteConfig.address}</address>
          </div>
          <div className="flex flex-col gap-1.5 border-t border-ink/10 pt-4">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-faint">
              <LuClock className="h-3.5 w-3.5" /> Opening Hours
            </p>
            {siteConfig.hours.map((h) => (
              <p key={h.day} className="flex flex-wrap justify-between gap-x-4 text-sm text-ink">
                <span className="font-medium">{h.day}</span>
                <span className="text-ink-soft">{h.time}</span>
              </p>
            ))}
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.name}, ${siteConfig.address}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-sky px-6 py-3 font-display text-sm font-bold text-white shadow-lg shadow-sky/30 transition-colors hover:bg-sky-deep"
          >
            <LuNavigation className="h-4 w-4" /> Get Directions
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="glass glass-highlight flex h-full flex-col gap-3 p-5">
                  <span className="glass-highlight flex h-11 w-11 items-center justify-center rounded-2xl bg-sky bg-none text-white shadow-md shadow-sky/30 shadow-glass-sm">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</p>
                    <p className="mt-1 break-words text-sm font-semibold text-ink">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} data-cursor-hover>
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}

          </div>

          <div className="glass-inset flex items-center gap-3 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl glass-tint text-ink">
              <LuTriangleAlert className="h-4 w-4" />
            </span>
            <p className="text-sm text-ink">
              <span className="font-bold">24/7 Emergency Line:</span>{" "}
              <a href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`} className="whitespace-nowrap font-semibold hover:text-sky-deep">
                {siteConfig.emergencyPhone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </ClayContainer>
  );
}
