import React from 'react';

export function TypographyWord({
  word,
  accent,
  pointerX = 0,
  pointerY = 0,
  isReducedMotion = false,
}) {
  const shadow = isReducedMotion
    ? 'none'
    : `${-pointerX * 6}px ${8 + pointerY * 4}px 0 rgba(35, 42, 45, 0.85), ${-pointerX * 12}px ${16 + pointerY * 8}px 28px rgba(0, 0, 0, 0.6)`;

  return (
    <div className="relative inline-block select-none px-2 py-4">
      <h2
        className="max-w-full text-center font-display text-[clamp(2.75rem,8.5vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] transition-colors duration-300"
        style={{
          color: accent,
          textShadow: shadow,
          transform: isReducedMotion ? 'none' : `translate3d(${pointerX * 3}px, ${pointerY * 3}px, 24px)`,
          transition: isReducedMotion ? 'none' : 'transform 180ms cubic-bezier(0.16, 1, 0.3, 1), text-shadow 180ms ease-out',
        }}
      >
        {word}
      </h2>
    </div>
  );
}

export default TypographyWord;
