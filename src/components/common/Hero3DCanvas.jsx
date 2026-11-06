import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Interactive Spartan Monolith Mesh
 */
function SpartanGeometry({ isReducedMotion }) {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    if (!isReducedMotion && meshRef.current && wireframeRef.current) {
      // Gentle idle rotation + cursor tracking
      const targetRotationX = state.pointer.y * 0.3;
      const targetRotationY = state.pointer.x * 0.4;

      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x = targetRotationX;

      wireframeRef.current.rotation.y += delta * 0.15;
      wireframeRef.current.rotation.x = -targetRotationX * 0.5;
    }
  });

  return (
    <group>
      {/* Outer Geometric Wireframe Cage */}
      <mesh ref={wireframeRef}>
        <octahedronGeometry args={[2.4, 0]} />
        <meshBasicMaterial
          color="#D4FF00"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Obsidian Monolith Core */}
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#7B8580"
          roughness={0.36}
          metalness={0.25}
          wireframe={false}
        />
      </mesh>
    </group>
  );
}

/**
 * WebGL Detection Helper
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
 * Hero3DCanvas — Designated 3D Hero Visual Area with Graceful Fallback
 */
export function Hero3DCanvas() {
  const isReduced = useReducedMotion();
  const [canRenderWebGL, setCanRenderWebGL] = useState(true);

  useEffect(() => {
    setCanRenderWebGL(isWebGLAvailable());
  }, []);

  if (!canRenderWebGL) {
    // Pure CSS Fallback when WebGL is unavailable
    return (
      <div className="relative w-full h-[360px] sm:h-[460px] flex items-center justify-center">
        <div className="relative w-48 h-48 rounded-full border border-lime/30 flex items-center justify-center animate-subtle-pulse">
          <div className="w-36 h-36 rounded-full border border-dashed border-white/20 animate-radar-spin" />
          <div className="absolute w-20 h-20 bg-obsidian-surface border border-lime shadow-glow-lime rounded-md rotate-45 flex items-center justify-center">
            <span className="font-mono text-[9px] text-lime font-bold uppercase tracking-widest -rotate-45">
              TROJANS
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[360px] w-full sm:h-[480px]">
      {/* Three.js Canvas Container */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-4, -4, -2]} intensity={2} color="#D4FF00" />

        <Float speed={isReduced ? 0 : 2} rotationIntensity={0.5} floatIntensity={0.6}>
          <SpartanGeometry isReducedMotion={isReduced} />
        </Float>
      </Canvas>

    </div>
  );
}

export default Hero3DCanvas;
