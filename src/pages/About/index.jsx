import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';

export function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          title="Not a club. A collective of builders."
          subtitle="A place to learn, make, and build together."
        />

        <ImageFrame
          assetId="team-collective-shot"
          aspectRatio="21/9"
          caption="A gathering from the Trojans Collective photo archive."
        />

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="max-w-xl text-sm leading-relaxed text-silver-muted">
            Explore photographs, projects, events, and the people behind the collective.
          </p>
          <Button to="/people" variant="secondary" icon={ArrowUpRight} iconPosition="right">
            Meet the builders
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}

export default AboutPage;
