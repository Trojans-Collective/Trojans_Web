import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gamepad2, Compass, MoveHorizontal } from 'lucide-react';
import { PageTransition } from '../../components/ui/PageTransition';
import {
  MemoryUniverseCanvas,
  FullscreenImageViewer,
  useMuseumArchive,
} from '../../features/memory-universe';

export function MuseumPage() {
  const { photos, totalPhotos } = useMuseumArchive();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <PageTransition>
      <div className="relative h-screen w-full overflow-hidden bg-[#07090b] text-silver-bright select-none">
        {/* Subtle Background Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-lime/4 rounded-full blur-[160px] pointer-events-none" />

        {/* ------------------------------------------------------------- */}
        {/* MINIMAL TOP CONTROL BAR                                       */}
        {/* ------------------------------------------------------------- */}
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6 pointer-events-none">
          {/* Back Navigation */}
          <div className="pointer-events-auto flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-obsidian-surface/70 px-3.5 py-1.5 font-mono text-xs text-silver-muted backdrop-blur-md border border-obsidian-border transition-colors hover:border-lime/40 hover:text-silver-bright"
              aria-label="Return to homepage"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-lime" />
              <span>Back</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-4">
              <img
                src="/assets/brand/trojans-logo.svg"
                alt=""
                className="w-5 h-5 object-contain opacity-80"
              />
              <span className="font-display text-xs font-bold tracking-wider text-silver">
                TROJANS
              </span>
            </div>
          </div>

          {/* Minimal Elegant Title */}
          <div className="text-center pointer-events-auto">
            <h1 className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.24em] text-silver-bright">
              The Memory Universe
            </h1>
            <p className="font-mono text-[9px] sm:text-[10px] text-lime/80 uppercase tracking-widest mt-0.5">
              3D Spatial Photographic Archive
            </p>
            <br />
          </div>

          {/* Future Playable Museum Entry Point */}
          <div className="pointer-events-auto">
            <div
              className="inline-flex items-center gap-2 rounded-full bg-obsidian-surface/70 px-3 py-1.5 font-mono text-[11px] text-silver-muted backdrop-blur-md border border-obsidian-border cursor-not-allowed group"
              title="The interactive playable WASD virtual museum is currently in development and will launch in a future phase."
            >
              <Gamepad2 className="w-3.5 h-3.5 text-silver-dark group-hover:text-lime transition-colors" />
              <span className="hidden sm:inline">Playable 3D Museum</span>
              <span className="rounded bg-white/5 px-1.5 py-0.2 text-[9px] text-silver-dark">
                Coming Soon
              </span>
            </div>
          </div>
        </header>

        {/* ------------------------------------------------------------- */}
        {/* MAIN 3D PANORAMIC UNIVERSE CANVAS                             */}
        {/* ------------------------------------------------------------- */}
        <main className="relative h-full w-full">
          <MemoryUniverseCanvas
            photos={photos}
            onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          />
        </main>

        {/* ------------------------------------------------------------- */}
        {/* MINIMAL BOTTOM HUD & INTERACTION HINT                         */}
        {/* ------------------------------------------------------------- */}
        <footer className="absolute bottom-6 left-0 right-0 z-20 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 pointer-events-none gap-2">
          {/* Status Counter */}
          <div className="font-mono text-[11px] text-silver-dark tracking-wider order-2 sm:order-1">
            <span className="text-lime font-bold">{totalPhotos}</span> Photographs Discovered
          </div>

          {/* Interaction Instruction */}
          <div className="inline-flex items-center gap-2 rounded-full bg-obsidian-surface/60 px-4 py-1.5 font-mono text-[11px] text-silver-muted backdrop-blur-sm border border-obsidian-border order-1 sm:order-2 shadow-lg">
            <MoveHorizontal className="w-3.5 h-3.5 text-lime animate-pulse" />
            <span>Drag horizontally to explore • Click any memory to enlarge</span>
          </div>

          {/* Perspective Indicator */}
          <div className="hidden sm:block font-mono text-[11px] text-silver-dark tracking-wider order-3">
            360° Cylindrical Perspective
          </div>
        </footer>

        {/* ------------------------------------------------------------- */}
        {/* FULLSCREEN IMAGE VIEWER MODAL                                 */}
        {/* ------------------------------------------------------------- */}
        <FullscreenImageViewer
          activePhoto={selectedPhoto}
          photos={photos}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={(photo) => setSelectedPhoto(photo)}
        />
      </div>
    </PageTransition>
  );
}

export default MuseumPage;
