import React, { useEffect, useState, useMemo } from 'react';
import { FloatingMemoriesCanvas } from './FloatingMemoriesCanvas';
import { MemoryViewerModal } from './MemoryViewerModal';
import { assetManifest } from '../../assets/assetManifest';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { LayoutGrid, Layers, Eye } from 'lucide-react';

const CURATED_MEMORY_IDS = [
  'founders-group-primary',
  'culture-late-night-build',
  'culture-whiteboard-arch',
  'event-code-sprint-flagship',
  'event-tech-bytes-live',
  'event-hackathon-victory',
  'event-hackathon-war-room',
  'gallery-orientation-day',
];

export function FloatingMemories({
  defaultViewMode = 'spatial', // 'spatial' or 'grid'
  className = '',
}) {
  const isReducedMotion = useReducedMotion();
  const [viewMode, setViewMode] = useState(isReducedMotion ? 'grid' : defaultViewMode);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMemory, setSelectedMemory] = useState(null);

  useEffect(() => {
    if (isReducedMotion) setViewMode('grid');
  }, [isReducedMotion]);

  const verifiedMemories = useMemo(() => {
    return CURATED_MEMORY_IDS
      .map((id) => assetManifest.find((asset) => asset.id === id))
      .filter((asset) => asset && !asset.isPlaceholder);
  }, []);

  const availableCategories = useMemo(() => {
    const cats = new Set(['All']);
    verifiedMemories.forEach((item) => {
      if (item.category) cats.add(item.category);
    });
    return Array.from(cats);
  }, [verifiedMemories]);

  const filteredMemories = useMemo(() => {
    if (activeCategory === 'All') return verifiedMemories;
    return verifiedMemories.filter((item) => item.category === activeCategory);
  }, [activeCategory, verifiedMemories]);

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
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <label className="sr-only" htmlFor="memory-category">Photograph collection</label>
        <select
          id="memory-category"
          value={activeCategory}
          onChange={(event) => setActiveCategory(event.target.value)}
          className="max-w-[220px] rounded-sm border border-white/10 bg-obsidian-surface px-3 py-2 text-sm text-silver-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
        >
          {availableCategories.map((category) => <option key={category}>{category}</option>)}
        </select>

        <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setViewMode('spatial')}
              aria-pressed={viewMode === 'spatial' && !isReducedMotion}
              disabled={isReducedMotion}
              aria-label="Spatial photo field"
              className={`rounded-sm p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime ${
                viewMode === 'spatial'
                  ? 'text-lime'
                  : 'text-silver-muted hover:text-silver-bright'
              }`}
            >
              <Layers className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-pressed={viewMode === 'grid'}
              aria-label="Photograph grid"
              className={`rounded-sm p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime ${
                viewMode === 'grid'
                  ? 'text-lime'
                  : 'text-silver-muted hover:text-silver-bright'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
        </div>
      </div>

      {/* Main Display: Spatial 3D Canvas OR Responsive Grid */}
      {viewMode === 'spatial' && !isReducedMotion ? (
        <FloatingMemoriesCanvas
          memories={filteredMemories}
          onSelectMemory={(mem) => setSelectedMemory(mem)}
        />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMemories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedMemory(item)}
              className="group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
            >
              <div className="relative mb-3 overflow-hidden bg-obsidian-surface">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <span className="flex items-center justify-between gap-3">
                <span className="font-display text-sm text-silver-bright group-hover:text-lime">{item.title}</span>
                <Eye className="h-4 w-4 shrink-0 text-silver-muted" />
              </span>
            </button>
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
