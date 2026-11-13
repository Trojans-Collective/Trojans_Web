import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TypographyWord } from './TypographyWord';

export const WORD_PERSONALITIES = [
  {
    word: 'BUILD',
    accent: '#f3f4f5',
    statement: 'Systems from first principles.',
    detail: 'From low-level runtimes to distributed networks. We engineer robust, performant software designed to scale beyond prototypes.',
  },
  {
    word: 'CREATE',
    accent: '#d4ff00',
    statement: 'Code as a creative medium.',
    detail: 'Where mathematical rigor meets aesthetic craft. WebGL shaders, kinetic UI, and interactive digital experiences that leave a lasting mark.',
  },
  {
    word: 'COMPETE',
    accent: '#e2e8f0',
    statement: 'Tested under sprint pressure.',
    detail: 'Fielding dedicated engineering squads across premier national hackathons, shipping functional architecture within 36-hour limits.',
  },
  {
    word: 'EXPLORE',
    accent: '#cbd5e1',
    statement: 'Venturing into uncharted territory.',
    detail: 'Autonomous intelligence agents, peer-to-peer mesh protocols, and experimental paradigms that expand what student builders can achieve.',
  },
];

export function InteractiveTypography({ autoCycle = true, cycleInterval = 5000, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isReducedMotion = useReducedMotion();

  const currentItem = WORD_PERSONALITIES[activeIndex];

  useEffect(() => {
    if (!autoCycle || isHovered || isReducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WORD_PERSONALITIES.length);
    }, cycleInterval);
    return () => window.clearInterval(timer);
  }, [autoCycle, cycleInterval, isHovered, isReducedMotion]);

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch' || isReducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    });
  };

  const moveWord = (step) => {
    setActiveIndex((prev) => (prev + step + WORD_PERSONALITIES.length) % WORD_PERSONALITIES.length);
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-5xl py-8 ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        setPointer({ x: 0, y: 0 });
        setIsHovered(false);
      }}
      onPointerEnter={() => setIsHovered(true)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          moveWord(1);
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          moveWord(-1);
        }
      }}
      tabIndex={0}
      aria-label="Interactive installation: Build, Create, Compete, Explore. Use arrow keys or click to cycle words."
    >
      {/* Selector Tabs */}
      <div
        className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4"
        role="tablist"
        aria-label="Word selection tabs"
      >
        {WORD_PERSONALITIES.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.word}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime ${
                isActive
                  ? 'bg-obsidian-surface text-lime shadow-inner'
                  : 'text-silver-muted hover:text-silver-bright hover:bg-obsidian-surface/40'
              }`}
            >
              {item.word}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-lime" />
              )}
            </button>
          );
        })}
      </div>

      {/* 3D Typographic Display Stage */}
      <div
        className="relative flex min-h-[160px] w-full items-center justify-center overflow-visible sm:min-h-[220px]"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${isReducedMotion ? 0 : pointer.y * -4}deg) rotateY(${isReducedMotion ? 0 : pointer.x * 6}deg)`,
          transition: isReducedMotion ? 'none' : 'transform 180ms ease-out',
        }}
        aria-live="polite"
      >
        <TypographyWord
          word={currentItem.word}
          accent={currentItem.accent}
          pointerX={pointer.x}
          pointerY={pointer.y}
          isReducedMotion={isReducedMotion}
        />
      </div>

      {/* Supporting Editorial Statement & Detail */}
      <div className="mx-auto mt-6 max-w-xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.word}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex flex-col items-center gap-2"
          >
            <p className="font-display text-lg font-semibold tracking-tight text-silver-bright sm:text-xl">
              {currentItem.statement}
            </p>
            <p className="font-sans text-sm leading-relaxed text-silver-muted sm:text-base">
              {currentItem.detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default InteractiveTypography;
