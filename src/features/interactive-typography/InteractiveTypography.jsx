import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { TypographyWord } from './TypographyWord';

export const WORD_PERSONALITIES = [
  { word: 'BUILD', accent: '#e8e9e9' },
  { word: 'CREATE', accent: '#d4ff00' },
  { word: 'COMPETE', accent: '#c9ced1' },
  { word: 'EXPLORE', accent: '#b7c1c4' },
];

export function InteractiveTypography({ autoCycle = false, cycleInterval = 6000, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isReducedMotion = useReducedMotion();
  const activeWord = WORD_PERSONALITIES[activeIndex].word;

  useEffect(() => {
    if (!autoCycle || isHovered || isReducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % WORD_PERSONALITIES.length);
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
    setActiveIndex((index) => (index + step + WORD_PERSONALITIES.length) % WORD_PERSONALITIES.length);
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-6xl py-10 sm:py-14 ${className}`}
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
      aria-label="Interactive words: Build, Create, Compete, Explore. Use the arrow keys to change the word."
    >
      <div className="mb-9 flex flex-wrap justify-center gap-2 sm:gap-4" role="group" aria-label="Choose a word">
        {WORD_PERSONALITIES.map((item, index) => (
          <button
            key={item.word}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            className={`px-2 py-2 text-xs tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime sm:px-3 ${
              index === activeIndex ? 'text-lime' : 'text-silver-muted hover:text-silver-bright'
            }`}
          >
            {item.word}
          </button>
        ))}
      </div>

      <div
        className="relative flex min-h-[150px] w-full items-center justify-center sm:min-h-[210px] lg:min-h-[260px]"
        style={{
          perspective: '900px',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${isReducedMotion ? 0 : pointer.y * -3}deg) rotateY(${isReducedMotion ? 0 : pointer.x * 5}deg)`,
          transition: isReducedMotion ? 'none' : 'transform 180ms ease-out',
        }}
        aria-live="polite"
      >
        <TypographyWord
          word={activeWord}
          accent={WORD_PERSONALITIES[activeIndex].accent}
          pointerX={pointer.x}
          pointerY={pointer.y}
          isReducedMotion={isReducedMotion}
        />
      </div>
    </div>
  );
}

export default InteractiveTypography;
