import React from 'react';
import { motion } from 'framer-motion';

/**
 * TypographyWord Component
 * Renders an individual word with multi-layer 3D depth, metallic sheen,
 * and distinct personality accents.
 */
export function TypographyWord({
  word,
  personality,
  pointerX = 0,
  pointerY = 0,
  isActive = false,
  isReducedMotion = false,
}) {
  // Calculate dynamic lighting angle based on pointer
  const lightAngle = 135 + pointerX * 25;
  const depthMultiplier = isReducedMotion ? 0 : 1;

  return (
    <div
      className={`relative select-none transition-opacity duration-500 ${
        isActive ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none absolute inset-0 z-0'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dimensional Extrusion Shadow Layers (simulating 3D block thickness) */}
      {!isReducedMotion && (
        <>
          <div
            className="absolute inset-0 font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase text-obsidian-deep/80 blur-md pointer-events-none"
            style={{
              transform: `translate3d(${pointerX * -15}px, ${pointerY * -15 + 20}px, -60px)`,
            }}
            aria-hidden="true"
          >
            {word}
          </div>

          <div
            className="absolute inset-0 font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase text-charcoal-muted pointer-events-none"
            style={{
              transform: `translate3d(${pointerX * -8 * depthMultiplier}px, ${pointerY * -8 * depthMultiplier}px, -30px)`,
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
            }}
            aria-hidden="true"
          >
            {word}
          </div>

          <div
            className="absolute inset-0 font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase text-charcoal-light/40 pointer-events-none"
            style={{
              transform: `translate3d(${pointerX * -4 * depthMultiplier}px, ${pointerY * -4 * depthMultiplier}px, -15px)`,
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',
            }}
            aria-hidden="true"
          >
            {word}
          </div>
        </>
      )}

      {/* Primary Foreground Metallic Layer */}
      <h2
        className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tighter uppercase leading-none"
        style={{
          transform: `translate3d(0, 0, ${30 * depthMultiplier}px)`,
          backgroundImage: `linear-gradient(${lightAngle}deg, ${personality.gradientStops})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: personality.stroke,
          filter: personality.glowFilter,
          textShadow: isReducedMotion ? 'none' : '0 10px 40px rgba(0, 0, 0, 0.8)',
        }}
      >
        {word}
      </h2>

      {/* Floating Precision Accent Wireframe (Architectural overlay) */}
      {!isReducedMotion && (
        <div
          className="absolute inset-x-0 -bottom-4 h-1 pointer-events-none flex items-center justify-between"
          style={{
            transform: `translate3d(${pointerX * 10}px, 0, 45px)`,
          }}
        >
          <div className="h-[1px] w-24 bg-gradient-to-r from-lime to-transparent" />
          <span className="font-mono text-[9px] text-lime tracking-widest uppercase">
            {personality.coordinateCode}
          </span>
          <div className="h-[1px] w-24 bg-gradient-to-l from-lime to-transparent" />
        </div>
      )}
    </div>
  );
}

export default TypographyWord;
