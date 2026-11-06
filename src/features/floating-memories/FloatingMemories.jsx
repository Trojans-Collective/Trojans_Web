import React, { useState, useMemo } from 'react';
import { FloatingMemoriesCanvas } from './FloatingMemoriesCanvas';
import { MemoryViewerModal } from './MemoryViewerModal';
import { assetManifest, getAssetsBySection } from '../../assets/assetManifest';
import { Badge } from '../../components/ui/Badge';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { LayoutGrid, Layers, Sparkles, Filter, Eye } from 'lucide-react';

export function FloatingMemories({
  defaultViewMode = 'spatial', // 'spatial' or 'grid'
  title = 'Floating Memories Archive',
  subtitle = 'An immersive spatial photographic environment containing real photographs from Trojans Collective.',
  className = '',
}) {
  const isReducedMotion = useReducedMotion();
  const [viewMode, setViewMode] = useState(isReducedMotion ? 'grid' : defaultViewMode);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMemory, setSelectedMemory] = useState(null);

  // Extract all verified photographs from the manifest (where isPlaceholder: false)
  const verifiedMemories = useMemo(() => {
    return assetManifest.filter((asset) => !asset.isPlaceholder && asset.id !== 'brand-logo-main');
  }, []);

  // Compute available categories dynamically based on where real photographs actually exist
  const availableCategories = useMemo(() => {
    const cats = new Set(['All']);
    verifiedMemories.forEach((item) => {
      if (item.category) cats.add(item.category);
    });
    return Array.from(cats);
  }, [verifiedMemories]);

  // Filter memories according to selected category
  const filteredMemories = useMemo(() => {
    if (activeCategory === 'All') return verifiedMemories;
    return verifiedMemories.filter((item) => item.category === activeCategory);
  }, [activeCategory, verifiedMemories]);

  // Next / Prev handlers for the full-screen viewer
  const handleNext = () => {
    if (!selectedMemory || filteredMemories.length <= 1) return;
    const currentIndex = filteredMemories.findIndex((m) => m.id === selectedMemory.id);
    const nextIndex = (currentIndex + 1) % filteredMemories.length;
    setSelectedMemory(filteredMemories[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedMemory || filteredMemories.length <= 1) return;
    const currentIndex = filteredMemories.findIndex((m) => m.id === selectedMemory.id);
    const prevIndex = (currentIndex - 1 + filteredMemories.length) % filteredMemories.length;
    setSelectedMemory(filteredMemories[prevIndex]);
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Control Bar: Categories & Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-obsidian-border">
        {/* Left: Dynamic Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {availableCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-lime text-obsidian border-lime font-bold shadow-glow-lime-sm'
                    : 'bg-obsidian-surface text-silver-muted border-obsidian-border hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Right: View Mode Toggle & Telemetry */}
        <div className="flex items-center gap-3 shrink-0">
          <Badge variant="lime" dot size="sm">
            {filteredMemories.length} VERIFIED EXHIBITS
          </Badge>

          <div className="flex items-center p-1 rounded-sm bg-obsidian-surface border border-obsidian-border">
            <button
              type="button"
              onClick={() => setViewMode('spatial')}
              className={`p-1.5 rounded-xs font-mono text-xs flex items-center gap-1.5 transition-colors ${
                viewMode === 'spatial'
                  ? 'bg-lime text-obsidian font-bold'
                  : 'text-silver-muted hover:text-white'
              }`}
              title="Spatial 3D Canvas View"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">SPATIAL 3D</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-xs font-mono text-xs flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-lime text-obsidian font-bold'
                  : 'text-silver-muted hover:text-white'
              }`}
              title="Editorial Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GRID</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Display: Spatial 3D Canvas OR Responsive Grid */}
      {viewMode === 'spatial' && !isReducedMotion ? (
        <FloatingMemoriesCanvas
          memories={filteredMemories}
          onSelectMemory={(mem) => setSelectedMemory(mem)}
        />
      ) : (
        /* Conventional Grid Fallback */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMemories.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMemory(item)}
              className="group cursor-pointer p-3 rounded-md bg-obsidian-card border border-obsidian-border hover:border-lime/40 transition-all flex flex-col justify-between"
            >
              <div className="relative overflow-hidden rounded-sm mb-3">
                <ImageFrame
                  asset={item}
                  aspectRatio={item.aspectRatio === '4:5' ? '4/5' : item.aspectRatio === '21:9' ? '21/9' : '16/9'}
                  showPlaceholderTag={false}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-lime uppercase tracking-widest block">
                    {item.category}
                  </span>
                  <h4 className="font-display font-semibold text-sm text-silver-bright group-hover:text-lime transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="p-1 rounded-xs bg-obsidian-surface text-silver-muted group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full-Screen Lightbox Viewer */}
      <MemoryViewerModal
        isOpen={!!selectedMemory}
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={filteredMemories.length > 1}
      />
    </div>
  );
}

export default FloatingMemories;
