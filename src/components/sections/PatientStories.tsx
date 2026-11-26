import { LuStar, LuExternalLink, LuPenLine } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import { fetchGooglePlaceReviews, type GooglePlaceData } from "@/lib/googlePlaces";
import ElfsightReviews from "./ElfsightReviews";

// Fallback stats shown when the API is not configured — matches the live Google listing.
const FALLBACK_RATING = 4.9;
const FALLBACK_TOTAL = 623;
const FALLBACK_MAPS_URL =
  "https://www.google.com/maps/place/Chaitanya+Dental+Care/@16.5114,80.6265,17z";

function StarRow({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div className="flex" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <LuStar
          key={i}
          className={`${cls} ${i < Math.round(rating) ? "fill-[#FBBC04] text-[#F9AB00]" : "fill-transparent text-ink-soft/20"}`}
        />
      ))}
    </div>
  );
}

function GoogleTrustBadge({ data }: { data: GooglePlaceData | null }) {
  const rating = data?.rating ?? FALLBACK_RATING;
  const total = data?.totalReviews ?? FALLBACK_TOTAL;
  const mapsUrl = data?.mapsUrl ?? FALLBACK_MAPS_URL;
  const writeUrl = data?.writeReviewUrl;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {/* Main badge */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${rating} stars · ${total.toLocaleString()} reviews on Google — open in Google Maps`}
        className="glass glass-highlight group inline-flex items-center gap-4 px-5 py-4 transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-coral/60"
      >
        <FcGoogle className="h-9 w-9 shrink-0" />
        <div>
          <div className="flex items-center gap-2">
            <StarRow rating={rating} size="lg" />
            <span className="text-xl font-bold text-ink">{rating.toFixed(1)}</span>
          </div>
          <p className="mt-0.5 text-sm text-ink-soft">
            {total.toLocaleString()} reviews on Google
          </p>
        </div>
        <LuExternalLink className="ml-1 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      {/* Write a review shortcut */}
      {writeUrl && (
        <a
          href={writeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass glass-pill inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          <LuPenLine className="h-4 w-4" />
          Write a review
        </a>
      )}
    </div>
  );
}

export default async function PatientStories() {
  const googleData = await fetchGooglePlaceReviews();

  return (
    <ClaySection containerClassName="px-0! sm:px-8! lg:px-12!">
      <div className="px-5 sm:px-0">
        <SectionHeading
          kicker="Patient Stories"
          title="Real Patients. Real Confidence."
          description="A few of the thousands of smiles we've had the privilege of treating."
        />
        <GoogleTrustBadge data={googleData} />
      </div>

      <ElfsightReviews />
    </ClaySection>
  );
}
