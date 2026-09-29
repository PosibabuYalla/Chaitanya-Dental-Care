"use client";

import { useGLTF } from "@react-three/drei";
import GLBViewer, { type GLBViewerConfig } from "./GLBViewer";

// Separate model from the hero, shown with the same viewer. Meshopt + WebP
// (54.5 MB source → ~0.9 MB); see HeroGLBCanvas for the optimize command.
//
// Placement: the model's bounding sphere is r≈0.67 (bbox ±0.33 × ±0.32 × ±0.49),
// so at scale 2.1 it reaches 1.41 from the group centre in any orientation.
// Centre y=0.15 minus 1.41 minus the 0.07 bob = -1.33, which stays above the
// base at -1.42 however the user rotates it. Radius 1.6 keeps the platform's
// front edge inside the camera frame.
const SERVICES_MODEL: GLBViewerConfig = {
  url: "/models/services.glb",
  scale: 2.1,
  position: [0, 0.15, 0],
  base: { y: -1.42, radius: 1.6 },
};

useGLTF.preload(SERVICES_MODEL.url);

export default function ServicesGLBCanvas({ isStatic }: { isStatic?: boolean }) {
  return <GLBViewer config={SERVICES_MODEL} isStatic={isStatic} />;
}
