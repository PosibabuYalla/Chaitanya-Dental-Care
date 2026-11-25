export interface GoogleReview {
  author: string;
  initials: string;
  rating: number;
  text: string;
  relativeTime: string;
  photoUri?: string;
}

export interface GooglePlaceData {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  mapsUrl: string;
  writeReviewUrl: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapReview(r: any): GoogleReview {
  return {
    author: r.authorAttribution?.displayName ?? "Patient",
    initials: getInitials(r.authorAttribution?.displayName ?? "P"),
    rating: r.rating ?? 5,
    text: r.text?.text ?? r.originalText?.text ?? "",
    relativeTime: r.relativePublishTimeDescription ?? "",
    photoUri: r.authorAttribution?.photoUri,
  };
}

export async function fetchGooglePlaceReviews(): Promise<GooglePlaceData | null> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Google Places API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();

    return {
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: (data.reviews ?? []).map(mapReview),
      mapsUrl: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
    };
  } catch (err) {
    console.error("Failed to fetch Google reviews:", err);
    return null;
  }
}
