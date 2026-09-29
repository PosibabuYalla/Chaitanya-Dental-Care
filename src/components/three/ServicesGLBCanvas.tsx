"use client";

import { useGLTF } from "@react-three/drei";
import GLBViewer, { type GLBViewerConfig } from "./GLBViewer";

// Separate model from the hero, shown with the same viewer. Meshopt + WebP
// (54.5 MB source → ~0.9 MB); see HeroGLBCanvas for the optimize command.
//
// Placement: the model's bounding sphere is r≈0.67 (bbox ±0.33 × ±0.32 × ±0.49),
// so at scale 2.6 it reaches 1.74 from the group centre in any orientation.
// Centre y=0.3 minus 1.74 minus the 0.07 bob = -1.51, which stays above the
// base at -1.52 however the user rotates it, and the top (2.11) stays inside
// the frame (2.12). Base radius 1.4 keeps the platform's front edge in view.
// 2.6 is the largest scale that satisfies all three with the shared camera.
const SERVICES_MODEL: GLBViewerConfig = {
  url: "/models/services.glb",
  scale: 2.6,
  position: [0, 0.3, 0],
  base: { y: -1.52, radius: 1.4 },
};

useGLTF.preload(SERVICES_MODEL.url);

export default function ServicesGLBCanvas({ isStatic }: { isStatic?: boolean }) {
  return <GLBViewer config={SERVICES_MODEL} isStatic={isStatic} />;
}
