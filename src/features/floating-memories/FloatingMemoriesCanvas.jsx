import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Move } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function FloatingMemoriesCanvas({ memories = [], onSelectMemory }) {
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState(null);
  const drag = useRef({ active: false, lastX: 0, lastY: 0, velocityX: 0, velocityY: 0, moved: false });
  const frame = useRef(0);
  const isReducedMotion = useReducedMotion();

  const spatialItems = useMemo(() => {
    const columns = 3;
    const itemWidth = 220;
    const itemHeight = 190;
    const gapX = 56;
    const gapY = 18;
    const rows = Math.ceil(memories.length / columns);

    return memories.map((item, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns);
      return {
        ...item,
        baseX: column * (itemWidth + gapX) - (columns * itemWidth + (columns - 1) * gapX) / 2,
        baseY: row * (itemHeight + gapY) - (rows * itemHeight + (rows - 1) * gapY) / 2,
      };
    });
  }, [memories]);

  useEffect(() => () => window.cancelAnimationFrame(frame.current), []);

  const animateInertia = useCallback(() => {
    const tick = () => {
      const current = drag.current;
      current.velocityX *= 0.94;
      current.velocityY *= 0.94;

      if (Math.abs(current.velocityX) > 0.15 || Math.abs(current.velocityY) > 0.15) {
        setPan((position) => ({
          x: position.x + current.velocityX,
          y: position.y + current.velocityY,
        }));
        frame.current = window.requestAnimationFrame(tick);
      } else {
        current.velocityX = 0;
        current.velocityY = 0;
      }
    };

    frame.current = window.requestAnimationFrame(tick);
  }, []);

  const handlePointerDown = (event) => {
    if (event.button !== 0 || event.target.closest('[data-no-drag]')) return;
    window.cancelAnimationFrame(frame.current);
    drag.current = {
      active: true,
      lastX: event.clientX,
      lastY: event.clientY,
      velocityX: 0,
      velocityY: 0,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!drag.current.active) return;
    const dx = event.clientX - drag.current.lastX;
    const dy = event.clientY - drag.current.lastY;
    if (Math.abs(dx) + Math.abs(dy) > 0) drag.current.moved = true;
    drag.current.lastX = event.clientX;
    drag.current.lastY = event.clientY;
    drag.current.velocityX = dx;
    drag.current.velocityY = dy;
    setPan((position) => ({ x: position.x + dx, y: position.y + dy }));
  };

  const handlePointerUp = (event) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (drag.current.moved && !isReducedMotion) animateInertia();
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClickCapture={(event) => {
        if (!drag.current.moved) return;
        event.preventDefault();
        event.stopPropagation();
        drag.current.moved = false;
      }}
      className="relative h-[500px] w-full cursor-grab select-none overflow-hidden bg-obsidian-deep active:cursor-grabbing sm:h-[620px]"
      style={{ perspective: '1100px', touchAction: 'none' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(212,255,0,0.04),transparent_60%)]" />
      <div className="pointer-events-none absolute bottom-5 left-5 z-20 flex items-center gap-2 text-xs text-silver-dark">
        <Move className="h-4 w-4 text-lime" />
        Drag to explore
      </div>
      <button
        type="button"
        data-no-drag
        onClick={() => {
          window.cancelAnimationFrame(frame.current);
          drag.current.velocityX = 0;
          drag.current.velocityY = 0;
          setPan({ x: 0, y: 0 });
        }}
        className="absolute bottom-5 right-5 z-20 text-xs text-silver-dark underline decoration-white/20 underline-offset-4 hover:text-silver focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
        aria-label="Center the photograph field"
      >
        Center
      </button>

      <div
        className="absolute left-1/2 top-1/2 h-0 w-0 transition-transform duration-75"
        style={{ transformStyle: 'preserve-3d', transform: `translate3d(${pan.x}px, ${pan.y}px, 0)` }}
      >
        {spatialItems.map((item) => {
          const isHovered = hoveredId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectMemory(item)}
              onPointerEnter={() => setHoveredId(item.id)}
              onPointerLeave={() => setHoveredId(null)}
              className="group absolute left-0 top-0 w-[220px] text-left transition-transform duration-300 focus-visible:z-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translate3d(${item.baseX}px, ${item.baseY}px, ${isHovered ? 20 : 0}px) scale(${isHovered ? 1.035 : 1})`,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                draggable="false"
                className="aspect-[4/3] w-full object-cover"
              />
              <span className="mt-2 block truncate font-display text-sm text-silver-bright group-hover:text-lime">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FloatingMemoriesCanvas;
