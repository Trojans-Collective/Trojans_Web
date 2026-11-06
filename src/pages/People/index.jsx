import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';

export function PeoplePage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          title="The people behind Trojans Collective."
          subtitle="Individual profiles and portrait mappings are being confirmed before publication."
        />

        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ImageFrame
              assetId="team-collective-shot"
              aspectRatio="21/9"
              caption="A gathering from the Trojans Collective photo archive."
              showPlaceholderTag={false}
            />
          </div>
          <aside className="lg:col-span-4">
            <h2 className="mb-3 font-display text-2xl font-semibold text-silver-bright">
              Technical co-founder
            </h2>
            <ImageFrame
              assetId="founder-portrait-co"
              aspectRatio="4/5"
              caption="Portrait mapping awaiting confirmation."
              showPlaceholderTag={false}
            />
          </aside>
        </div>
      </div>
    </PageTransition>
  );
}

export default PeoplePage;
