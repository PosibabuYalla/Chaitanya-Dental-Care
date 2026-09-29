// Content photography, sourced from Unsplash (free to use under the Unsplash License).
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop`;

export const photos = {
  consultation: { src: unsplash("1606811841689-23dfddce3e95"), alt: "Dentist explaining a scan to a patient" },
  aligner: { src: unsplash("1609840114035-3c981b782dfe"), alt: "Patient fitting a clear aligner" },
} as const;

export type PhotoKey = keyof typeof photos;
