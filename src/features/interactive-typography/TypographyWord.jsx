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
    : `${-pointerX * 5}px ${10 + pointerY * 4}px 0 rgba(53, 59, 61, 0.9), ${-pointerX * 9}px ${18 + pointerY * 6}px 24px rgba(0, 0, 0, 0.5)`;

  return (
    <h2
      className="max-w-full whitespace-nowrap text-center font-display text-[clamp(3rem,12vw,9rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-silver-bright"
      style={{
        color: accent === '#d4ff00' ? accent : undefined,
        textShadow: shadow,
        transform: isReducedMotion ? 'none' : `translate3d(${pointerX * 2}px, ${pointerY * 2}px, 30px)`,
        transition: isReducedMotion ? 'none' : 'transform 180ms ease-out, text-shadow 180ms ease-out',
      }}
    >
      {word}
    </h2>
  );
}

export default TypographyWord;
