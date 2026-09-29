"use client";

import { useRef, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function BasePlatform() {
  const texture = useTexture("/base.png");
  return (
    <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[1.8, 64]} />
      <meshStandardMaterial
        map={texture}
        transparent
        alphaTest={0.05}
        roughness={0.3}
        metalness={0.15}
      />
    </mesh>
  );
}

// Meshopt-compressed + WebP textures (52.8 MB source → ~0.8 MB). Regenerate with:
// npx @gltf-transform/cli optimize public/hero.glb public/models/hero.glb --compress meshopt --texture-compress webp --texture-size 1024 --simplify-ratio 0.06 --simplify-error 0.0008
export const HERO_MODEL_URL = "/models/hero.glb";

export default function HeroModel({ isStatic }: { isStatic?: boolean }) {
  const { scene } = useGLTF(HERO_MODEL_URL);
  const modelRef = useRef<THREE.Group>(null);
  const { gl } = useThree();

  const isDragging = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const autoRotate = useRef(true);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Accumulated quaternion for full 3-axis trackball rotation
  const quaternion = useRef(new THREE.Quaternion());
  const bobOffset = useRef(0);

  useEffect(() => {
    const canvas = gl.domElement;

    const onDown = (e: PointerEvent) => {
      isDragging.current = true;
      autoRotate.current = false;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      canvas.setPointerCapture(e.pointerId);
    };

    const onMove = (e: PointerEvent) => {
      if (!isDragging.current) return;

      const dx = e.clientX - lastX.current;
      const dy = e.clientY - lastY.current;
      lastX.current = e.clientX;
      lastY.current = e.clientY;

      const speed = 0.008;

      // Rotate around world Y for horizontal drag
      const yQuat = new THREE.Quaternion();
      yQuat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), dx * speed);

      // Rotate around world X for vertical drag
      const xQuat = new THREE.Quaternion();
      xQuat.setFromAxisAngle(new THREE.Vector3(1, 0, 0), dy * speed);

      quaternion.current.premultiply(yQuat).premultiply(xQuat);
    };

    const onUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      resumeTimer.current = setTimeout(() => {
        autoRotate.current = true;
      }, 2500);
    };

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointerleave", onUp);
    // Fired when a vertical swipe on mobile turns into a page scroll
    canvas.addEventListener("pointercancel", onUp);

    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointerleave", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, [gl]);

  useFrame((state, delta) => {
    if (!modelRef.current || isStatic) return;

    if (autoRotate.current) {
      // Slow auto-rotate around Y only when idle
      const autoQuat = new THREE.Quaternion();
      autoQuat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), delta * 0.4);
      quaternion.current.premultiply(autoQuat);
    }

    modelRef.current.quaternion.copy(quaternion.current);

    // Bob up and down independently of rotation
    bobOffset.current = Math.sin(state.clock.elapsedTime * 0.9) * 0.07;
    modelRef.current.position.y = bobOffset.current;
  });

  return (
    <>
      <BasePlatform />
      <group ref={modelRef}>
        <primitive object={scene} scale={2.7} position={[0, -0.2, 0]} />
      </group>
    </>
  );
}
