import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypographyWord } from './TypographyWord';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ArrowLeft, ArrowRight, Layers, Sparkles, Trophy, Compass, RotateCcw } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';

export const WORD_PERSONALITIES = [
  {
    word: 'BUILD',
    number: '01',
    icon: Layers,
    tagline: 'Systems Over Promises.',
    description: 'We construct low-latency distributed infrastructure, systems-level tooling, and production software engineered for reliability.',
    specialties: ['Distributed Systems', 'Rust & Go', 'Edge Computing', 'Microservices'],
    coordinateCode: 'AXIS // ARCH_SYS_01',
    gradientStops: '#FFFFFF 0%, #E2E4E8 35%, #6B7280 75%, #1F2429 100%',
    stroke: '1px rgba(255, 255, 255, 0.4)',
    glowFilter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.12))',
    accentColor: '#E2E4E8',
  },
  {
    word: 'CREATE',
    number: '02',
    icon: Sparkles,
    tagline: 'Dimensional Craft & Code.',
    description: 'We push browser boundaries with real-time WebGL shaders, spatial computing, tactile physics, and creative interface engineering.',
    specialties: ['Creative Computing', 'WebGL & GLSL', 'Dimensional UI', 'Generative Art'],
    coordinateCode: 'CORE // LUMEN_FX_02',
    gradientStops: '#FFFFFF 0%, #F5FF80 30%, #D4FF00 65%, #4A5600 100%',
    stroke: '1px rgba(212, 255, 0, 0.55)',
    glowFilter: 'drop-shadow(0 0 35px rgba(212, 255, 0, 0.25))',
    accentColor: '#D4FF00',
  },
  {
    word: 'COMPETE',
    number: '03',
    icon: Trophy,
    tagline: 'Podium Finishes in 36 Hours.',
    description: 'We field multidisciplinary squads in premier national hackathons, shipping functional innovations under high-pressure competitive conditions.',
    specialties: ['24H Code Sprints', 'Competitive Strategy', 'Rapid Prototyping', 'Podium Record'],
    coordinateCode: 'ARENA // SPARTAN_03',
    gradientStops: '#FFFFFF 0%, #E5E7EB 35%, #EF4444 70%, #450A0A 100%',
    stroke: '1px rgba(255, 255, 255, 0.35)',
    glowFilter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.22))',
    accentColor: '#EF4444',
  },
  {
    word: 'EXPLORE',
    number: '04',
    icon: Compass,
    tagline: 'Challenging the Unknown.',
    description: 'We venture into uncharted territory: autonomous AI agent pipelines, WebAssembly runtimes, decentralized protocols, and experimental tech.',
    specialties: ['Autonomous AI', 'Agent Orchestration', 'WASM Runtimes', 'Peer Protocols'],
    coordinateCode: 'ORBIT // DEEP_TECH_04',
    gradientStops: '#FFFFFF 0%, #E0E7FF 30%, #9CA3AF 65%, #111827 100%',
    stroke: '1px rgba(212, 255, 0, 0.4)',
    glowFilter: 'drop-shadow(0 0 30px rgba(212, 255, 0, 0.18))',
    accentColor: '#D4FF00',
  },
];

export function InteractiveTypography({
  autoCycle = false,
  cycleInterval = 6000,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const isReducedMotion = useReducedMotion();

  const activeData = WORD_PERSONALITIES[activeIndex];

  // Smooth inertial pointer tracking
  const handlePointerMove = useCallback((e) => {
    if (isReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setPointer((prev) => ({ ...prev, targetX: Math.max(-1, Math.min(1, x)), targetY: Math.max(-1, Math.min(1, y)) }));
  }, [isReducedMotion]);

  const handlePointerLeave = useCallback(() => {
    setPointer((prev) => ({ ...prev, targetX: 0, targetY: 0 }));
    setIsHovered(false);
  }, []);

  // Animation frame loop for silky smooth inertial damping
  useEffect(() => {
    if (isReducedMotion) return;
    let animationFrameId;

    const updateInertia = () => {
      setPointer((prev) => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;
        // Damping factor: 0.1 for subtle organic delay
        return {
          ...prev,
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1,
        };
      });
      animationFrameId = requestAnimationFrame(updateInertia);
    };

    animationFrameId = requestAnimationFrame(updateInertia);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isReducedMotion]);

  // Optional auto-cycle timer (pauses when user hovers)
  useEffect(() => {
    if (!autoCycle || isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WORD_PERSONALITIES.length);
    }, cycleInterval);
    return () => clearInterval(timer);
  }, [autoCycle, isHovered, cycleInterval]);

  const nextWord = () => {
    setActiveIndex((prev) => (prev + 1) % WORD_PERSONALITIES.length);
  };

  const prevWord = () => {
    setActiveIndex((prev) => (prev - 1 + WORD_PERSONALITIES.length) % WORD_PERSONALITIES.length);
  };

  // Keyboard navigation listener (left/right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextWord();
      if (e.key === 'ArrowLeft') prevWord();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Calculate 3D perspective tilt
  const tiltX = isReducedMotion ? 0 : pointer.y * -8;
  const tiltY = isReducedMotion ? 0 : pointer.x * 12;

  return (
    <div
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handlePointerLeave}
      className={`relative w-full overflow-hidden rounded-lg bg-obsidian-card border border-obsidian-border p-6 sm:p-10 lg:p-12 ${className}`}
      style={{
        perspective: '1200px',
      }}
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate3d(${pointer.x * -12}px, ${pointer.y * -12}px, 0)`,
        }}
      />

      {/* Top HUD Controls & Coordinates */}
      <div className="relative z-30 flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-obsidian-border">
        <div className="flex items-center gap-3">
          <Badge variant="lime" dot dotPulse size="sm">
            INTERACTIVE 3D ENGINE
          </Badge>
          <span className="font-mono text-xs text-silver-dark tracking-widest uppercase">
            // {activeData.coordinateCode}
          </span>
        </div>

        {/* Word Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-sm bg-obsidian-surface border border-obsidian-border">
          {WORD_PERSONALITIES.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.word}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1 rounded-xs font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-lime text-obsidian font-bold shadow-glow-lime-sm'
                    : 'text-silver-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {item.word}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Tilt Viewport Stage */}
      <div
        className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] flex items-center justify-center my-6"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transition: isReducedMotion ? 'none' : 'transform 0.15s ease-out',
        }}
      >
        {WORD_PERSONALITIES.map((item, idx) => (
          <TypographyWord
            key={item.word}
            word={item.word}
            personality={item}
            pointerX={pointer.x}
            pointerY={pointer.y}
            isActive={idx === activeIndex}
            isReducedMotion={isReducedMotion}
          />
        ))}
      </div>

      {/* Bottom Technical Telemetry & Narrative Card */}
      <div className="relative z-30 mt-8 pt-6 border-t border-obsidian-border grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Narrative & Specialties */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-lime">
            <span>// CORE PHILOSOPHY {activeData.number}</span>
            <span>&bull;</span>
            <span className="text-silver-bright font-display font-semibold">{activeData.tagline}</span>
          </div>

          <p className="font-sans text-sm text-silver-muted leading-relaxed mb-4 max-w-2xl">
            {activeData.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {activeData.specialties.map((spec) => (
              <span
                key={spec}
                className="font-mono text-[10px] px-2.5 py-1 rounded-xs bg-obsidian-surface border border-obsidian-border text-silver tracking-wider uppercase"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Stepper Navigation & Manual Controls */}
        <div className="lg:col-span-4 flex items-center justify-end gap-3 font-mono text-xs">
          <span className="text-silver-dark tracking-widest hidden sm:inline">
            KEYBOARD: [&larr;] [&rarr;]
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prevWord}
              className="p-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border hover:border-lime hover:text-lime text-silver transition-colors"
              aria-label="Previous Word"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextWord}
              className="p-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border hover:border-lime hover:text-lime text-silver transition-colors"
              aria-label="Next Word"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveTypography;
