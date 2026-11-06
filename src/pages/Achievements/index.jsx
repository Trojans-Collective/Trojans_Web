import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';

export function AchievementsPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          title="Achievements"
          subtitle="Awards and competition results will appear here once their details can be verified."
        />
      </div>
    </PageTransition>
  );
}

export default AchievementsPage;
