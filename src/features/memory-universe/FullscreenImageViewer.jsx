import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function FullscreenImageViewer({
  activePhoto,
  photos = [],
  onClose,
  onNavigate,
}) {
  const currentIndex = activePhoto
    ? photos.findIndex((p) => p.src === activePhoto.src)
    : -1;

  const handlePrev = useCallback(() => {
    if (photos.length <= 1) return;
    if (currentIndex > 0) {
      onNavigate(photos[currentIndex - 1]);
    } else {
      onNavigate(photos[photos.length - 1]);
    }
  }, [currentIndex, photos, onNavigate]);

  const handleNext = useCallback(() => {
    if (photos.length <= 1) return;
    if (currentIndex < photos.length - 1) {
      onNavigate(photos[currentIndex + 1]);
    } else {
      onNavigate(photos[0]);
    }
  }, [currentIndex, photos, onNavigate]);

  const handleClose = useCallback(
    (e) => {
      if (e) {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (typeof e.stopPropagation === 'function') e.stopPropagation();
      }
      onClose();
    },
    [onClose]
  );

  // Global Keyboard Navigation: Escape to close, Arrow keys to navigate
  useEffect(() => {
    if (!activePhoto) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [activePhoto, handleClose, handlePrev, handleNext]);

  // Ensure portal target exists
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {activePhoto && (
        <motion.div
          key="memory-universe-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 select-none"
          onClick={(e) => {
            // Clicking backdrop directly closes viewer
            if (e.target === e.currentTarget) {
              handleClose(e);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Photograph Viewer"
        >
          {/* Top Control Bar with Explicit Close Button */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-[1000000] flex items-center gap-3">
            <button
              type="button"
              onClick={handleClose}
              onPointerDown={handleClose}
              className="flex items-center gap-2 rounded-full bg-obsidian-surface border border-white/25 px-4 py-2.5 text-xs font-mono font-bold text-silver-bright hover:text-white hover:border-lime hover:bg-obsidian-card transition-all shadow-2xl cursor-pointer"
              aria-label="Close photograph viewer"
            >
              <span>Close</span>
              <X className="w-4 h-4 text-lime" />
            </button>
          </div>

          {/* Top Counter Readout */}
          <div className="absolute top-5 left-5 sm:top-7 sm:left-8 z-[1000000] font-mono text-xs tracking-widest text-silver-dark pointer-events-none">
            {currentIndex >= 0 && (
              <span>
                MEMORY {String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
              </span>
            )}
          </div>

          {/* Previous Button */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-[1000000] p-3 rounded-full bg-obsidian-surface/90 border border-white/20 text-silver hover:text-white hover:border-lime transition-all shadow-2xl cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-[1000000] p-3 rounded-full bg-obsidian-surface/90 border border-white/20 text-silver hover:text-white hover:border-lime transition-all shadow-2xl cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Centered High-Resolution Photograph Container */}
          <motion.div
            key={activePhoto.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[84vh] max-w-[92vw] overflow-hidden rounded-xl border border-white/15 bg-obsidian shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()} // Click on photo does not close
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.filename}
              className="max-h-[84vh] max-w-[92vw] object-contain select-none"
              loading="eager"
            />
          </motion.div>

          {/* Bottom Close Button / Dismissal Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000000] flex items-center gap-3">
            <button
              type="button"
              onClick={handleClose}
              onPointerDown={handleClose}
              className="flex items-center gap-2 rounded-full bg-obsidian-surface/85 border border-white/20 px-5 py-2 font-mono text-xs text-silver-muted hover:text-lime hover:border-lime transition-all cursor-pointer shadow-xl"
            >
              <X className="w-3.5 h-3.5 text-lime" />
              <span>Dismiss [ESC]</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default FullscreenImageViewer;
