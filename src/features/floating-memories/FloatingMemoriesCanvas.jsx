import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Eye, Hand, Move, ZoomIn } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Spatial Photographic Canvas
 * Features pan-drag physics, depth staggering, hover tilt, and touch support.
 */
export function FloatingMemoriesCanvas({
  memories = [],
  onSelectMemory,
}) {
  const containerRef = useRef(null);
  const isReducedMotion = useReducedMotion();

  // Spatial Pan Coordinates with Velocity for Inertia
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState(null);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    vx: 0,
    vy: 0,
    hasMoved: false,
  });

  // Calculate layout coordinates for each memory item in a spatial cloud
  // Distributes memories across a 3D field with varying depth (Z)
  const spatialItems = React.useMemo(() => {
    const depths = [-80, -20, 40, 90, 0];
    const columns = 4;
    const itemWidth = 320;
    const itemHeight = 220;
    const gapX = 80;
    const gapY = 80;

    return memories.map((item, idx) => {
      const col = idx % columns;
      const row = Math.floor(idx / columns);
      const depth = depths[idx % depths.length];

      // Subtle organic scatter offset
      const scatterX = ((idx * 37) % 60) - 30;
      const scatterY = ((idx * 43) % 50) - 25;

      const x = col * (itemWidth + gapX) + scatterX - (columns * (itemWidth + gapX)) / 3;
      const y = row * (itemHeight + gapY) + scatterY - (Math.ceil(memories.length / columns) * (itemHeight + gapY)) / 4;

      return {
        ...item,
        baseX: x,
        baseY: y,
        baseZ: depth,
        bobPhase: idx * 0.7,
      };
    });
  }, [memories]);

  // Inertia damping loop
  useEffect(() => {
    if (isReducedMotion) return;
    let animId;

    const tick = () => {
      if (!dragRef.current.isDragging && (Math.abs(dragRef.current.vx) > 0.05 || Math.abs(dragRef.current.vy) > 0.05)) {
        dragRef.current.vx *= 0.92; // Friction damping
        dragRef.current.vy *= 0.92;
        setPan((prev) => ({
          x: prev.x + dragRef.current.vx,
          y: prev.y + dragRef.current.vy,
        }));
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isReducedMotion]);

  // Pointer Drag Handlers (Mouse & Touch)
  const onPointerDown = useCallback((e) => {
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragRef.current.startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    dragRef.current.lastX = dragRef.current.startX;
    dragRef.current.lastY = dragRef.current.startY;
    dragRef.current.vx = 0;
    dragRef.current.vy = 0;
    dragRef.current.hasMoved = false;
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!dragRef.current.isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    const dx = clientX - dragRef.current.lastX;
    const dy = clientY - dragRef.current.lastY;

    if (Math.abs(clientX - dragRef.current.startX) > 4 || Math.abs(clientY - dragRef.current.startY) > 4) {
      dragRef.current.hasMoved = true;
    }

    dragRef.current.vx = dx;
    dragRef.current.vy = dy;
    dragRef.current.lastX = clientX;
    dragRef.current.lastY = clientY;

    setPan((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));
  }, []);

  const onPointerUp = useCallback(() => {
    dragRef.current.isDragging = false;
  }, []);

  const handleCardClick = (item) => {
    // If the user was dragging, don't trigger click
    if (dragRef.current.hasMoved) return;
    onSelectMemory(item);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
      className="relative w-full h-[620px] sm:h-[720px] rounded-lg bg-obsidian-deep border border-obsidian-border overflow-hidden select-none cursor-grab active:cursor-grabbing"
      style={{
        perspective: '1100px',
      }}
    >
      {/* Background Architectural Horizon & Deep Dust Particles */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10" />

      {/* Floating Center Target / Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/10 pointer-events-none flex items-center justify-center z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-lime/40" />
      </div>

      {/* HUD Instructions Overlay */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2">
        <span className="p-1.5 rounded-xs bg-obsidian/80 border border-obsidian-border text-silver-dark font-mono text-[10px] tracking-wider uppercase backdrop-blur-sm flex items-center gap-1.5">
          <Move className="w-3.5 h-3.5 text-lime" />
          DRAG TO EXPLORE SPATIAL FIELD
        </span>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPan({ x: 0, y: 0 })}
          className="p-1.5 rounded-xs bg-obsidian/80 border border-obsidian-border text-silver-muted hover:text-white hover:border-lime font-mono text-[10px] tracking-wider uppercase backdrop-blur-sm transition-colors"
        >
          RE-CENTER ORIGIN
        </button>
      </div>

      {/* 3D World Container */}
      <div
        className="absolute top-1/2 left-1/2 w-0 h-0 transition-transform duration-75 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `translate3d(${pan.x}px, ${pan.y}px, 0)`,
        }}
      >
        {spatialItems.map((item) => {
          const isHovered = hoveredId === item.id;
          const ratioClass = item.aspectRatio === '4:5' ? 'w-52 h-64' : item.aspectRatio === '21:9' ? 'w-80 h-36' : 'w-72 h-44';

          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`absolute transition-all duration-300 ease-out cursor-pointer ${
                isHovered ? 'z-40' : 'z-20'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: `translate3d(${item.baseX}px, ${item.baseY}px, ${
                  isHovered ? item.baseZ + 60 : item.baseZ
                }px) scale(${isHovered ? 1.08 : 1})`,
              }}
            >
              {/* Outer Photographic Frame */}
              <div
                className={`relative rounded-sm overflow-hidden bg-obsidian-card p-2 border transition-all duration-300 ${
                  isHovered
                    ? 'border-lime shadow-glow-lime-sm'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden bg-obsidian-surface rounded-xs ${ratioClass}`}>
                  <img
                    src={item.resolvedSrc || item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Corner Precision Marks */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-lime/60 pointer-events-none" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-lime/60 pointer-events-none" />
                </div>

                {/* Information Plate (Always visible or enhanced on hover) */}
                <div className="mt-2 flex items-center justify-between text-left">
                  <div className="overflow-hidden">
                    <span className="font-mono text-[9px] text-lime uppercase tracking-wider block truncate">
                      {item.category}
                    </span>
                    <h4 className="font-display font-semibold text-xs text-silver-bright truncate">
                      {item.title}
                    </h4>
                  </div>
                  <div className="p-1 rounded-xs bg-obsidian-surface text-silver-muted shrink-0 ml-1">
                    <Eye className="w-3 h-3 text-silver-muted group-hover:text-lime" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FloatingMemoriesCanvas;
