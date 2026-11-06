import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { FloatingMemories } from '../../features/floating-memories';

export function MemoriesPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          title="Photographs from the collective"
          subtitle="Moments of making, learning and being together."
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
