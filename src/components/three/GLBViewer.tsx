"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import StudioEnvironment from "./StudioEnvironment";
import { useInViewport } from "@/hooks/useInViewport";
import { useIntroFinished } from "@/components/layout/EntryLoader";

// Shared GLB presentation used by the Hero and "Complete Dental Care" sections:
// same camera, lighting, drag-to-rotate trackball, idle auto-rotation, bob and
// glass base platform. Each section supplies only its own model + placement.

export type GLBViewerConfig = {
  /** Model file under /public (kept separate per section). */
  url: string;
  scale: number;
  /** Centre of the rotating group — the model spins about this point. */
  position?: [number, number, number];
  /** Offset of the model inside the rotating group. */
  modelOffset?: [number, number, number];
  /**
   * Base platform. It sits outside the rotating group so it stays level while
   * the model turns; `y` must clear the model's bounding sphere to avoid clipping.
   */
  base: { y: number; radius: number };
};

const CAMERA = { position: [0, 0.05, 6] as [number, number, number], fov: 38 };
const DRAG_SPEED = 0.008;
const AUTO_ROTATE_SPEED = 0.4; // rad/s about Y while idle
const RESUME_AFTER_MS = 2500;
const BOB_AMPLITUDE = 0.07;

const Y_AXIS = new THREE.Vector3(0, 1, 0);
const X_AXIS = new THREE.Vector3(1, 0, 0);

function BasePlatform({ y, radius }: GLBViewerConfig["base"]) {
  const texture = useTexture("/base.png");
  return (
    <mesh position={[0, y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[radius, 64]} />
      <meshStandardMaterial map={texture} transparent alphaTest={0.05} roughness={0.3} metalness={0.15} />
    </mesh>
  );
}

function GLBModel({ config, isStatic }: { config: GLBViewerConfig; isStatic?: boolean }) {
  const { scene } = useGLTF(config.url);
  const groupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();
  const [gx, gy, gz] = config.position ?? [0, 0, 0];

  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const autoRotate = useRef(true);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Accumulated orientation for full 3-axis trackball rotation
  const orientation = useRef(new THREE.Quaternion());
  const step = useRef(new THREE.Quaternion());

  useEffect(() => {
    const canvas = gl.domElement;

    const onDown = (e: PointerEvent) => {
      dragging.current = true;
      autoRotate.current = false;
      last.current = { x: e.clientX, y: e.clientY };
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      canvas.setPointerCapture(e.pointerId);
    };

    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - last.current.x;
      const dy = e.clientY - last.current.y;
      last.current = { x: e.clientX, y: e.clientY };
      // Horizontal drag turns about world Y, vertical drag about world X
      orientation.current
        .premultiply(step.current.setFromAxisAngle(Y_AXIS, dx * DRAG_SPEED))
        .premultiply(step.current.setFromAxisAngle(X_AXIS, dy * DRAG_SPEED));
    };

    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      resumeTimer.current = setTimeout(() => {
        autoRotate.current = true;
      }, RESUME_AFTER_MS);
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
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [gl]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;
    if (!isStatic && autoRotate.current) {
      orientation.current.premultiply(step.current.setFromAxisAngle(Y_AXIS, delta * AUTO_ROTATE_SPEED));
    }
    // Dragging still works with reduced motion; only the idle motion is disabled
    group.quaternion.copy(orientation.current);
    group.position.y = gy + (isStatic ? 0 : Math.sin(state.clock.elapsedTime * 0.9) * BOB_AMPLITUDE);
  });

  return (
    <group ref={groupRef} position={[gx, gy, gz]}>
      <primitive object={scene} scale={config.scale} position={config.modelOffset ?? [0, 0, 0]} />
    </group>
  );
}

export default function GLBViewer({ config, isStatic }: { config: GLBViewerConfig; isStatic?: boolean }) {
  // Stop the render loop entirely while the section is off-screen.
  const { ref, inView } = useInViewport<HTMLDivElement>({ rootMargin: "0px" });
  // ...and while the entry intro is covering the page (assets still preload).
  const introFinished = useIntroFinished();

  return (
    <div ref={ref} className="h-full w-full cursor-grab active:cursor-grabbing">
      <Canvas
        frameloop={inView && introFinished ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={CAMERA}
        // pan-y: vertical swipes scroll the page, horizontal drags rotate the model
        style={{ width: "100%", height: "100%", touchAction: "pan-y" }}
      >
        <ambientLight intensity={0.8} color="#e8f4fb" />
        <directionalLight position={[4, 6, 4]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#c8e6f5" />
        <pointLight position={[0, -1, 3]} intensity={0.3} color="#38b6e8" />
        <Suspense fallback={null}>
          <StudioEnvironment />
          <BasePlatform {...config.base} />
          <GLBModel config={config} isStatic={isStatic} />
          <ContactShadows
            position={[0, config.base.y - 0.05, 0]}
            opacity={0.3}
            scale={5}
            blur={2.5}
            far={2}
            resolution={256}
            frames={isStatic ? 1 : Infinity}
            color="#1a8fc4"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
