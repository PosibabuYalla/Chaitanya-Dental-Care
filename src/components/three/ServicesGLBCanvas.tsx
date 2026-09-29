"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";
import StudioEnvironment from "./StudioEnvironment";
import { useInViewport } from "@/hooks/useInViewport";

// Meshopt-compressed + WebP textures (54.5 MB source → ~0.9 MB). See HeroModel for the command.
const SERVICES_MODEL_URL = "/models/services.glb";

function GlowRing() {
  return (
    <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.6, 2.1, 64]} />
      <meshBasicMaterial color="#38b6e8" transparent opacity={0.18} side={THREE.DoubleSide} />
    </mesh>
  );
}

function ServicesModel() {
  const { scene } = useGLTF(SERVICES_MODEL_URL);
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.25;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={2.4} position={[0, -0.3, 0]} />
    </group>
  );
}

export default function ServicesGLBCanvas() {
  // Mounted lazily by ServicesOrbit; also paused whenever it leaves the viewport.
  const { ref, inView } = useInViewport<HTMLDivElement>({ rootMargin: "0px" });

  return (
    <div ref={ref} className="h-full w-full">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 1, 5.5], fov: 36 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.9} color="#e8f4fb" />
        <directionalLight position={[4, 8, 4]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#c8e6f5" />
        <pointLight position={[0, 0, 3]} intensity={0.6} color="#38b6e8" />
        <pointLight position={[0, -1, 0]} intensity={0.4} color="#1a8fc4" />
        <Suspense fallback={null}>
          <StudioEnvironment />
          <Float speed={1.2} rotationIntensity={0} floatIntensity={0.4}>
            <ServicesModel />
          </Float>
          <GlowRing />
          <ContactShadows position={[0, -1.6, 0]} opacity={0.35} scale={6} blur={3} far={2} resolution={256} color="#1a8fc4" />
        </Suspense>
      </Canvas>
    </div>
  );
}
