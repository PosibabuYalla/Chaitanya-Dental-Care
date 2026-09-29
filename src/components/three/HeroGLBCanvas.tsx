"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
import HeroModel, { HERO_MODEL_URL } from "./HeroModel";
import StudioEnvironment from "./StudioEnvironment";
import { useInViewport } from "@/hooks/useInViewport";

useGLTF.preload(HERO_MODEL_URL);

export default function HeroGLBCanvas({ isStatic }: { isStatic?: boolean }) {
  // Stop the render loop entirely once the hero is scrolled away.
  const { ref, inView } = useInViewport<HTMLDivElement>({ rootMargin: "0px" });

  return (
    <div ref={ref} className="h-full w-full">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.05, 6], fov: 38 }}
        style={{ width: "100%", height: "100%", touchAction: "pan-y" }}
      >
        <ambientLight intensity={0.8} color="#e8f4fb" />
        <directionalLight position={[4, 6, 4]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#c8e6f5" />
        <pointLight position={[0, -1, 3]} intensity={0.3} color="#38b6e8" />
        <Suspense fallback={null}>
          <StudioEnvironment />
          <HeroModel isStatic={isStatic} />
          <ContactShadows position={[0, -1.6, 0]} opacity={0.3} scale={5} blur={2.5} far={2} resolution={256} frames={isStatic ? 1 : Infinity} color="#1a8fc4" />
        </Suspense>
      </Canvas>
    </div>
  );
}
