import React, { useState } from 'react';
import { Sparkles, Grid, Layers, X, ArrowUpRight, Compass } from 'lucide-react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';
import { RubiksCube } from '../../features/rubiks-cube/RubiksCube';
import { assetManifest, ASSET_CATEGORIES } from '../../assets/assetManifest';

export function MemoriesPage() {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    ASSET_CATEGORIES.FOUNDERS,
    ASSET_CATEGORIES.TEAM,
    ASSET_CATEGORIES.CULTURE,
    ASSET_CATEGORIES.EVENTS_HACKATHONS,
    ASSET_CATEGORIES.EVENTS_CODE_SPRINT,
    ASSET_CATEGORIES.ACHIEVEMENTS,
  ];

  const photoArchive = assetManifest.filter((a) => !a.isPlaceholder && a.category !== ASSET_CATEGORIES.BRAND);

  const filteredPhotos = activeCategory === 'All'
    ? photoArchive
    : photoArchive.filter((a) => a.category === activeCategory);

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            02 / Spatial Archive
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            Photographic <br />
            <span className="text-lime">Memories</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            Every frame captures a late-night breakthrough, a hackathon sprint, or the genuine spirit of students building together.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SIGNATURE 3D EXPERIENCE: PHOTOGRAPHIC RUBIK'S CUBE */}
        {/* ------------------------------------------------------------- */}
        <section className="mb-24 rounded-2xl border border-obsidian-border bg-obsidian-deep p-6 sm:p-10 text-center">
          <div className="mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-lime block mb-2">
              Dimensional Exploration
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-bright">
              The Photographic Rubik's Cube
            </h2>
            <p className="font-sans text-sm text-silver-muted max-w-md mx-auto mt-2">
              Drag to freely inspect the cube in 3D. Click any individual photo tile to examine the memory in full resolution.
            </p>
          </div>

          <RubiksCube />
        </section>

        {/* ------------------------------------------------------------- */}
        {/* CURATED PHOTOGRAPHIC ARCHIVE GALLERY */}
        {/* ------------------------------------------------------------- */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
                Documentary Archive
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-bright">
                All Verified Moments
              </h2>
            </div>

            {/* Unobtrusive Category Filters */}
            <div className="flex flex-wrap items-center gap-2" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full font-mono text-xs tracking-wider transition-colors ${
                    activeCategory === cat
                      ? 'bg-lime text-obsidian font-bold'
                      : 'bg-obsidian-surface text-silver-muted hover:text-silver-bright border border-obsidian-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedAsset(photo)}
                className="group cursor-pointer rounded-xl overflow-hidden border border-obsidian-border bg-obsidian-surface transition-all duration-300 hover:border-lime/40 hover:-translate-y-1"
              >
                <ImageFrame
                  asset={photo}
                  aspectRatio={photo.aspectRatio === '4:5' ? '4/5' : '16/9'}
                  caption={photo.title}
                />
                <div className="p-4 bg-obsidian-card border-t border-obsidian-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-lime uppercase tracking-wider">
                      {photo.category}
                    </span>
                    <span className="font-mono text-[10px] text-silver-dark">
                      {photo.aspectRatio}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-silver-bright group-hover:text-lime transition-colors">
                    {photo.title}
                  </h4>
                  <p className="font-sans text-xs text-silver-muted line-clamp-2 mt-1">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fullscreen Photo Lightbox Modal */}
        {selectedAsset && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-md">
            <div className="relative w-full max-w-4xl rounded-2xl border border-obsidian-border bg-obsidian-surface p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedAsset(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-silver-muted hover:text-silver-bright hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 rounded-xl overflow-hidden border border-obsidian-border">
                <ImageFrame
                  asset={selectedAsset}
                  aspectRatio={selectedAsset.aspectRatio === '4:5' ? '4/5' : '16/9'}
                  hoverZoom={false}
                />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-lime uppercase tracking-wider">
                  {selectedAsset.category}
                </span>
                <span className="font-mono text-xs text-silver-dark">
                  {selectedAsset.aspectRatio}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-3">
                {selectedAsset.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-silver-muted leading-relaxed mb-6">
                {selectedAsset.description}
              </p>

              <div className="pt-4 border-t border-obsidian-border flex items-center justify-end">
                <Button
                  onClick={() => setSelectedAsset(null)}
                  variant="outline"
                  size="sm"
                >
                  Close Memory
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Museum Transition CTA */}
        <section className="rounded-xl border border-obsidian-border bg-obsidian-surface p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-4">
            Want to Walk Through These Exhibits in 3D?
          </h3>
          <p className="font-sans text-sm sm:text-base text-silver-muted max-w-xl mx-auto mb-8">
            Step into the Virtual Museum to explore five spatial halls curated around these historical moments.
          </p>
          <Button to="/museum" variant="primary" size="md" icon={ArrowUpRight} iconPosition="right">
            Enter Virtual Museum
          </Button>
        </section>
      </div>
    </PageTransition>
  );
}

export default MemoriesPage;
