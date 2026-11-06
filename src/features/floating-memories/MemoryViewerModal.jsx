import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Calendar, Tag, Shield, Maximize2 } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';

/**
 * Premium Full-Screen Memory Lightbox Viewer
 */
export function MemoryViewerModal({
  memory,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasMultiple = true,
}) {
  // Keyboard listener: ESC to close, ArrowLeft for prev, ArrowRight for next
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        e.preventDefault();
        onPrev();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!memory) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 select-none">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian-deep/95 backdrop-blur-xl"
          />

          {/* Viewer Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-6xl max-h-[92vh] flex flex-col rounded-lg bg-obsidian-card border border-obsidian-border shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-obsidian-border bg-obsidian-surface/80">
              <div className="flex items-center gap-3">
                <Badge variant="lime" dot size="sm">
                  ARCHIVAL EXHIBIT
                </Badge>
                <span className="font-mono text-xs text-silver-dark tracking-wider hidden sm:inline">
                  ID: {memory.id}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-silver-dark hidden md:inline mr-2">
                  [ESC] CLOSE • [&larr;] PREV • [&rarr;] NEXT
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver-muted hover:text-white hover:border-lime transition-colors"
                  aria-label="Close Viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Stage: High-Resolution Photographic Display */}
            <div className="relative flex-1 flex items-center justify-center bg-obsidian-deep overflow-hidden p-4 sm:p-8 min-h-[300px] sm:min-h-[480px]">
              {/* Prev Button */}
              {hasMultiple && (
                <button
                  type="button"
                  onClick={onPrev}
                  className="absolute left-4 z-20 p-3 rounded-full bg-obsidian-surface/80 border border-obsidian-border text-silver-muted hover:text-lime hover:border-lime transition-all backdrop-blur-md hidden sm:flex items-center justify-center"
                  aria-label="Previous Memory"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}

              {/* Real Photograph */}
              <div className="relative max-w-full max-h-[65vh] flex items-center justify-center">
                <img
                  src={memory.resolvedSrc || memory.image}
                  alt={memory.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-sm border border-white/10 shadow-card"
                  loading="eager"
                />

                {/* Corner Crosshairs */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-lime pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-lime pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-lime pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-lime pointer-events-none" />
              </div>

              {/* Next Button */}
              {hasMultiple && (
                <button
                  type="button"
                  onClick={onNext}
                  className="absolute right-4 z-20 p-3 rounded-full bg-obsidian-surface/80 border border-obsidian-border text-silver-muted hover:text-lime hover:border-lime transition-all backdrop-blur-md hidden sm:flex items-center justify-center"
                  aria-label="Next Memory"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Bottom Metadata & Verified Information */}
            <div className="px-6 py-5 border-t border-obsidian-border bg-obsidian-surface/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-lime uppercase tracking-widest">
                    // {memory.category}
                  </span>
                  {memory.date && (
                    <span className="font-mono text-xs text-silver-dark flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {memory.date}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-silver-bright">
                  {memory.title}
                </h3>

                {memory.description && (
                  <p className="font-sans text-xs sm:text-sm text-silver-muted max-w-3xl leading-relaxed">
                    {memory.description}
                  </p>
                )}
              </div>

              {/* Mobile Prev / Next Buttons */}
              {hasMultiple && (
                <div className="flex sm:hidden items-center justify-between gap-2 pt-2 border-t border-obsidian-border">
                  <button
                    type="button"
                    onClick={onPrev}
                    className="flex-1 py-2 rounded-sm bg-obsidian-card border border-obsidian-border text-xs font-mono uppercase text-silver flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> Prev
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className="flex-1 py-2 rounded-sm bg-obsidian-card border border-obsidian-border text-xs font-mono uppercase text-silver flex items-center justify-center gap-2"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MemoryViewerModal;
