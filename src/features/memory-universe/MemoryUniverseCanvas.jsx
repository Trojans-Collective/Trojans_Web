import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PanoramicRibbon } from './PanoramicRibbon';

/**
 * Distant Restrained Star / Atmospheric Dust Particles
 */
function AmbientParticles({ count = 350 }) {
  const pointsRef = useRef();

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute in a large spherical shell far behind the scene
      const r = 25 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      pos[i * 3] = r * Math.cos(phi) * Math.sin(theta);
      pos[i * 3 + 1] = r * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi) * Math.cos(theta) - 15;
    }
    return pos;
  });

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#a5b3b8"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

/**
 * Internal Scene Manager handling momentum physics and render loop
 */
function SceneManager({
  photos,
  onSelectPhoto,
  isMobile,
  rotationYRef,
  velocityRef,
  isDraggingRef,
}) {
  useFrame((_, delta) => {
    // If not dragging, apply inertia damping
    if (!isDraggingRef.current) {
      if (Math.abs(velocityRef.current) > 0.0001) {
        rotationYRef.current += velocityRef.current;
        velocityRef.current *= Math.pow(0.92, delta * 60); // frame-rate independent friction
      } else {
        velocityRef.current = 0;
        // Gentle ambient drift so the universe is subtly alive
        rotationYRef.current += delta * 0.015;
      }
    }
  });

  return (
    <>
      {/* Cinematic Studio & Atmospheric Lighting */}
      <ambientLight intensity={0.7} color="#eef3f5" />
      <directionalLight position={[0, 9, 16]} intensity={1.15} color="#ffffff" />
      <pointLight position={[0, 0, 14]} intensity={0.65} color="#ffffff" distance={30} />
      <directionalLight position={[0, -6, -18]} intensity={0.25} color="#d4ff00" />

      {/* Atmospheric Restrained Particles */}
      <AmbientParticles count={320} />

      {/* The Panoramic Curved Photographic Surface revolving around (0, 0, 0) */}
      <PanoramicRibbon
        photos={photos}
        onSelectPhoto={onSelectPhoto}
        isDraggingRef={isDraggingRef}
        rotationYRef={rotationYRef}
        isMobile={isMobile}
      />
    </>
  );
}

/**
 * WebGL Detector
 */
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * MemoryUniverseCanvas — Interactive 3D Panoramic Universe
 */
export function MemoryUniverseCanvas({ photos, onSelectPhoto }) {
  const containerRef = useRef();
  const rotationYRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);

  const pointerState = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastTime: 0,
    moved: false,
  });

  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Pointer drag interactions with natural momentum
  const handlePointerDown = useCallback((e) => {
    // Only primary button
    if (e.button !== undefined && e.button !== 0) return;

    pointerState.current.isDown = true;
    pointerState.current.startX = e.clientX;
    pointerState.current.startY = e.clientY;
    pointerState.current.lastX = e.clientX;
    pointerState.current.lastTime = performance.now();
    pointerState.current.moved = false;
    velocityRef.current = 0;
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!pointerState.current.isDown) return;

    const deltaX = e.clientX - pointerState.current.lastX;
    const now = performance.now();
    const timeDelta = Math.max(1, now - pointerState.current.lastTime);

    const totalDistance = Math.hypot(
      e.clientX - pointerState.current.startX,
      e.clientY - pointerState.current.startY
    );

    if (totalDistance > 5) {
      pointerState.current.moved = true;
      isDraggingRef.current = true;
    }

    // Direct globe dragging: dragging to the right rotates globe surface to the right
    const sensitivity = 0.0035;
    rotationYRef.current += deltaX * sensitivity;

    // Calculate instantaneous velocity for smooth throw inertia
    const instantVelocity = (deltaX * sensitivity) / (timeDelta / 16.6);
    velocityRef.current = velocityRef.current * 0.4 + instantVelocity * 0.6;

    // Cap maximum throw speed to avoid uncontrolled spinning
    const maxVelocity = 0.08;
    velocityRef.current = Math.max(-maxVelocity, Math.min(maxVelocity, velocityRef.current));

    pointerState.current.lastX = e.clientX;
    pointerState.current.lastTime = now;
  }, []);

  const handlePointerUp = useCallback(() => {
    pointerState.current.isDown = false;
    // Release drag flag after small micro-tick to avoid triggering click on end of drag
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  }, []);

  // WebGL Fallback for devices without GPU WebGL acceleration
  if (!hasWebGL) {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-silver-bright mb-4">
          The Memory Universe
        </h3>
        <p className="font-sans text-sm text-silver-muted max-w-md mb-8">
          WebGL hardware acceleration is unavailable in this environment. Here are the photographs from the archive:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto p-4 border border-obsidian-border rounded-lg bg-obsidian-surface">
          {photos.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectPhoto(p)}
              className="cursor-pointer rounded overflow-hidden border border-obsidian-border hover:border-lime"
            >
              <img src={p.src} alt={p.filename} className="w-full h-24 object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full select-none overflow-hidden touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: 'none' }}
    >
      <Canvas
        camera={{
          position: isMobile ? [0, -0.85, 21.5] : [0, -0.45, 16.4],
          fov: isMobile ? 48 : 44,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
      >
        <SceneManager
          photos={photos}
          onSelectPhoto={onSelectPhoto}
          isMobile={isMobile}
          rotationYRef={rotationYRef}
          velocityRef={velocityRef}
          isDraggingRef={isDraggingRef}
        />
      </Canvas>
    </div>
  );
}

export default MemoryUniverseCanvas;
