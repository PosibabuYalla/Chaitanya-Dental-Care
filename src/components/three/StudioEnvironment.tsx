"use client";

import { Environment, Lightformer } from "@react-three/drei";

// Local reflection environment built from a few emissive panels. Replaces
// <Environment preset="city">, which downloads an HDR from a third-party CDN
// before the model can render. Rendered once (frames={1}) into a small cube map.
export default function StudioEnvironment() {
  return (
    <Environment frames={1} resolution={128}>
      <Lightformer form="rect" intensity={2.2} color="#ffffff" position={[0, 4, 3]} scale={[8, 3, 1]} />
      <Lightformer form="rect" intensity={1.2} color="#bfe3f5" position={[-5, 1, 0]} rotation-y={Math.PI / 2} scale={[6, 4, 1]} />
      <Lightformer form="rect" intensity={1} color="#7cc8ef" position={[5, 0, -1]} rotation-y={-Math.PI / 2} scale={[6, 4, 1]} />
      <Lightformer form="ring" intensity={0.8} color="#38b6e8" position={[0, -3, 2]} scale={3} />
    </Environment>
  );
}
