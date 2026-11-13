import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';
import { ModalOverlay } from '../../components/ui/ModalOverlay';
import { MUSEUM_ROOMS } from '../../data/milestones';
import { getAssetById } from '../../assets/assetManifest';
import { Compass, Eye, ArrowRight, ArrowLeft, Layers, Sparkles } from 'lucide-react';

export function MuseumPage() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [inspectedExhibit, setInspectedExhibit] = useState(null);

  const activeRoom = MUSEUM_ROOMS[activeRoomIndex];
  const activeAsset = getAssetById(activeRoom.keyExhibit);

  // Keyboard shortcut listener: F to inspect active room key exhibit, Arrow keys / A / D to navigate rooms
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (inspectedExhibit) return;

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        setInspectedExhibit(activeAsset);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setActiveRoomIndex((prev) => (prev < MUSEUM_ROOMS.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setActiveRoomIndex((prev) => (prev > 0 ? prev - 1 : MUSEUM_ROOMS.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectedExhibit, activeAsset]);

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            07 / Virtual Museum
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            The Virtual <br />
            <span className="text-lime">Museum</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            Five connected architectural halls commemorating our origins, builders, prototypes, competitions, and living culture.
          </p>
        </div>

        {/* 3D Museum HUD & Interactive Navigation Console */}
        <div className="mb-10 rounded-2xl bg-obsidian-surface border border-obsidian-border p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-obsidian-border">
            {/* Museum Status Readout */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-lime/10 border border-lime/30 text-lime">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-lime uppercase tracking-wider">
                  HALL {activeRoom.number} OF 05
                </span>
                <h3 className="mt-0.5 font-display text-2xl font-bold text-silver-bright">
                  {activeRoom.title}
                </h3>
              </div>
            </div>

            {/* Keyboard Command Cheat Sheet */}
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
              <span className="text-silver-muted">
                Navigate: <kbd className="px-2 py-0.5 rounded bg-obsidian-deep border border-obsidian-border text-lime font-bold">[A] [D] / Arrows</kbd>
              </span>
              <span className="text-silver-muted">
                Inspect: <kbd className="px-2 py-0.5 rounded bg-obsidian-deep border border-obsidian-border text-lime font-bold">[F]</kbd>
              </span>
              <span className="text-silver-muted">
                Dismiss: <kbd className="px-2 py-0.5 rounded bg-obsidian-deep border border-obsidian-border text-silver-bright">[ESC]</kbd>
              </span>
            </div>
          </div>

          {/* Connected Room Track Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6">
            {MUSEUM_ROOMS.map((room, idx) => {
              const isActive = idx === activeRoomIndex;
              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setActiveRoomIndex(idx)}
                  className={`p-3.5 rounded-lg text-left transition-all border ${
                    isActive
                      ? 'bg-lime text-obsidian border-lime shadow-lg font-bold'
                      : 'bg-obsidian-deep text-silver-muted border-obsidian-border hover:text-silver-bright hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
                    <span className={isActive ? 'text-obsidian font-bold' : 'text-lime'}>
                      ROOM {room.number}
                    </span>
                    {isActive && <span className="text-obsidian font-extrabold uppercase">&bull; OPEN</span>}
                  </div>
                  <div className="font-display font-bold text-xs truncate">
                    {room.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Room Exhibit Display */}
        <div className="p-8 sm:p-10 rounded-2xl bg-obsidian-surface border border-obsidian-border grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Key Exhibit Frame */}
          <div className="lg:col-span-7">
            <div
              className="cursor-pointer group relative rounded-xl overflow-hidden border border-obsidian-border shadow-2xl"
              onClick={() => setInspectedExhibit(activeAsset)}
            >
              <ImageFrame
                asset={activeAsset}
                aspectRatio="16/9"
                caption={`EXHIBIT // ROOM ${activeRoom.number}: ${activeRoom.title}`}
                priority={true}
              />

              {/* Quick Inspect Floating Pill */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setInspectedExhibit(activeAsset);
                  }}
                  className="px-3 py-1.5 rounded-full bg-obsidian/90 border border-lime text-lime font-mono text-xs flex items-center gap-1.5 shadow-xl hover:bg-lime hover:text-obsidian transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>PRESS [F] TO INSPECT</span>
                </button>
              </div>
            </div>
          </div>

          {/* Room Narrative & Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs text-lime uppercase tracking-widest block mb-2">
                Curatorial Brief
              </span>

              <h3 className="font-display text-3xl font-extrabold text-silver-bright mb-3">
                {activeRoom.title}
              </h3>

              <div className="p-3 rounded-lg bg-obsidian-deep border border-obsidian-border mb-4">
                <span className="font-mono text-[11px] text-silver-dark uppercase block mb-1">
                  Exhibition Theme
                </span>
                <p className="font-display text-sm text-silver font-semibold">
                  {activeRoom.theme}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-silver-muted leading-relaxed mb-4">
                {activeRoom.description}
              </p>
            </div>

            {/* Room Stepper Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-obsidian-border">
              <Button
                variant="secondary"
                size="sm"
                icon={ArrowLeft}
                onClick={() =>
                  setActiveRoomIndex((prev) => (prev > 0 ? prev - 1 : MUSEUM_ROOMS.length - 1))
                }
              >
                Previous Hall
              </Button>

              <Button
                variant="primary"
                size="sm"
                icon={Eye}
                onClick={() => setInspectedExhibit(activeAsset)}
              >
                Inspect Exhibit
              </Button>

              <Button
                variant="secondary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() =>
                  setActiveRoomIndex((prev) => (prev < MUSEUM_ROOMS.length - 1 ? prev + 1 : 0))
                }
              >
                Next Hall
              </Button>
            </div>
          </div>
        </div>

        {/* Exhibit Inspection Modal Overlay */}
        <ModalOverlay
          isOpen={!!inspectedExhibit}
          onClose={() => setInspectedExhibit(null)}
          title={`EXHIBIT: ${inspectedExhibit?.title}`}
          subtitle={`ROOM ${activeRoom.number} // ${inspectedExhibit?.category}`}
        >
          {inspectedExhibit && (
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border border-obsidian-border">
                <ImageFrame
                  asset={inspectedExhibit}
                  aspectRatio="16/9"
                  showPlaceholderTag={false}
                />
              </div>
              <div>
                <h5 className="font-mono text-xs text-lime uppercase tracking-widest mb-1">
                  CURATORIAL NOTE
                </h5>
                <p className="font-sans text-sm text-silver-bright leading-relaxed">
                  {inspectedExhibit.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-silver-dark pt-2 border-t border-obsidian-border">
                <span>Press [ESC] to return to museum floor.</span>
                <span className="font-mono">Trojans Archive Exhibit Record</span>
              </div>
            </div>
          )}
        </ModalOverlay>
      </div>
    </PageTransition>
  );
}

export default MuseumPage;
