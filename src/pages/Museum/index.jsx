import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';
import { ModalOverlay } from '../../components/ui/ModalOverlay';
import { MUSEUM_ROOMS } from '../../data/milestones';
import { getAssetById } from '../../assets/assetManifest';
import { Compass, Eye, ArrowRight, ArrowLeft } from 'lucide-react';

export function MuseumPage() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [inspectedExhibit, setInspectedExhibit] = useState(null);

  const activeRoom = MUSEUM_ROOMS[activeRoomIndex];
  const activeAsset = getAssetById(activeRoom.keyExhibit);

  // Keyboard shortcut listener: F to inspect active room key exhibit, Arrow keys to navigate rooms
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If modal is open, don't hijack unless Escape (ModalOverlay handles Escape)
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="08_VIRTUAL_MUSEUM"
          tag="TIMELINE UNIVERSE"
          title="Virtual Museum"
          subtitle="Explore five rooms in the collective archive. Choose a room, view its photograph, or press F to inspect it."
        />

        {/* 3D Museum HUD & Interactive Navigation Console */}
        <div className="mb-10 p-6 rounded-lg bg-obsidian-card border border-obsidian-border">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-obsidian-border">
            {/* Museum Status Readout */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/10 text-lime">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-silver-dark">
                  ROOM {activeRoom.number} / 05
                </span>
                <h3 className="mt-0.5 font-display text-xl font-bold text-silver-bright">
                  {activeRoom.title}
                </h3>
              </div>
            </div>

            {/* Keyboard Command Cheat Sheet */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="text-silver-dark">
                ROOMS: <strong className="text-lime">[A][D] / ARROWS</strong>
              </span>
              <span className="text-silver-dark">
                INSPECT: <strong className="text-lime">[F]</strong>
              </span>
              <span className="text-silver-dark">
                DISMISS: <strong className="text-silver-bright">[ESC]</strong>
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
                  className={`p-3 rounded-sm text-left transition-all border ${
                    isActive
                      ? 'bg-lime text-obsidian border-lime shadow-glow-lime-sm'
                      : 'bg-obsidian-surface text-silver-muted border-obsidian-border hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1 font-mono text-[10px]">
                    <span className={isActive ? 'text-obsidian font-bold' : 'text-lime'}>
                      ROOM {room.number}
                    </span>
                    {isActive && <span className="font-bold">&bull; ACTIVE</span>}
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
        <div className="p-8 rounded-lg bg-obsidian-card border border-obsidian-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Key Exhibit Frame */}
          <div className="lg:col-span-7">
            <div
              className="cursor-pointer group relative"
              onClick={() => setInspectedExhibit(activeAsset)}
            >
              <ImageFrame
                asset={activeAsset}
                aspectRatio="16/9"
                caption={`EXHIBIT // ROOM ${activeRoom.number}: ${activeRoom.title}`}
              />

              {/* Quick Inspect Floating Pill */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setInspectedExhibit(activeAsset);
                  }}
                  className="px-3 py-1 rounded-sm bg-obsidian/90 border border-lime text-lime font-mono text-xs flex items-center gap-1.5 shadow-card hover:bg-lime hover:text-obsidian transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>PRESS [F] TO INSPECT</span>
                </button>
              </div>
            </div>
          </div>

          {/* Room Narrative & Museum Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-lime uppercase tracking-widest">
                  // ROOM {activeRoom.number} EXHIBITION BRIEF
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold text-silver-bright mb-3">
                {activeRoom.title}
              </h3>

              <p className="font-sans text-sm text-silver-muted leading-relaxed mb-4">
                {activeRoom.description}
              </p>

            </div>

            {/* Room Stepper Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-obsidian-border">
              <Button
                variant="secondary"
                size="sm"
                icon={ArrowLeft}
                onClick={() =>
                  setActiveRoomIndex((prev) => (prev > 0 ? prev - 1 : MUSEUM_ROOMS.length - 1))
                }
              >
                Prev Room
              </Button>

              <Button
                variant="primary"
                size="sm"
                icon={Eye}
                onClick={() => setInspectedExhibit(activeAsset)}
              >
                Inspect Exhibit [F]
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
                Next Room
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
              <ImageFrame
                asset={inspectedExhibit}
                aspectRatio="16/9"
                showPlaceholderTag={false}
              />
              <div>
                <h5 className="font-mono text-xs text-lime uppercase tracking-widest mb-1">
                  PHOTO NOTE
                </h5>
                <p className="font-sans text-sm text-silver leading-relaxed">
                  {inspectedExhibit.description}
                </p>
              </div>

              <div className="flex items-center justify-end text-xs text-silver-dark">
                <span>Press Escape to close.</span>
              </div>
            </div>
          )}
        </ModalOverlay>
      </div>
    </PageTransition>
  );
}

export default MuseumPage;
