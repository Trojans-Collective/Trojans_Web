import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { FloatingMemories } from '../../features/floating-memories';

export function MemoriesPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="02_SPATIAL_ARCHIVE"
          tag="FLOATING MEMORIES"
          title="Spatial Photographic Archive"
          subtitle="An immersive spatial environment containing real photographs from Trojans Collective. Explore memories suspended in 3D obsidian space, inspect high-resolution exhibits, and discover our journey."
        />

        {/* Master Floating Memories Experience */}
        <FloatingMemories
          defaultViewMode="spatial"
          className="mt-4"
        />
      </div>
    </PageTransition>
  );
}

export default MemoriesPage;
