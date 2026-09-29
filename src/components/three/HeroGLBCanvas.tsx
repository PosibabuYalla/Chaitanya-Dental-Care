"use client";

import { useGLTF } from "@react-three/drei";
import GLBViewer, { type GLBViewerConfig } from "./GLBViewer";

// Meshopt-compressed + WebP textures (52.8 MB source → ~0.8 MB). Regenerate with:
// npx @gltf-transform/cli optimize public/hero.glb public/models/hero.glb --compress meshopt --texture-compress webp --texture-size 1024 --simplify-ratio 0.06 --simplify-error 0.0008
const HERO_MODEL: GLBViewerConfig = {
  url: "/models/hero.glb",
  scale: 2.7,
  modelOffset: [0, -0.2, 0],
  base: { y: -1.55, radius: 1.8 },
};

useGLTF.preload(HERO_MODEL.url);

export default function HeroGLBCanvas({ isStatic }: { isStatic?: boolean }) {
  return <GLBViewer config={HERO_MODEL} isStatic={isStatic} />;
}
