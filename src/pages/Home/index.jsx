import React from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { Hero3DCanvas } from '../../components/common/Hero3DCanvas';
import { Button } from '../../components/ui/Button';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { InteractiveTypography } from '../../features/interactive-typography';
import { RubiksCube } from '../../features/rubiks-cube/RubiksCube';

export function HomePage() {
  return (
    <PageTransition>
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {/* Subtle Background Radial Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Monumental Editorial Typography & CTAs */}
          <div className="z-10 flex flex-col items-start text-left lg:col-span-7">
            <h1 className="mb-6 font-display text-5xl font-bold uppercase leading-[0.88] tracking-[-0.06em] text-silver-bright sm:text-6xl md:text-7xl xl:text-8xl">
              TROJANS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-bright via-silver to-lime">
                COLLECTIVE
              </span>
            </h1>

            {/* Tagline */}
            <p className="mb-5 font-display text-lg font-medium text-lime sm:text-xl">
              Not a club. A collective of builders.
            </p>

            <p className="mb-8 max-w-md font-sans text-base leading-relaxed text-silver-muted sm:text-lg">
              A space to learn, make, and build together.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                to="/about"
                variant="primary"
                size="md"
                icon={Compass}
              >
                Discover Trojans
              </Button>

              <Button
                to="/memories"
                variant="secondary"
                size="md"
                icon={Sparkles}
              >
                Explore memories
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-5">
            <Hero3DCanvas />
          </div>
        </div>
      </section>

      <RubiksCube />

      <section className="relative border-b border-obsidian-border bg-obsidian-surface/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Build. Create. Compete. Explore." />
          <InteractiveTypography />
        </div>
      </section>

      <section className="border-b border-obsidian-border bg-obsidian-deep py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-end lg:px-8">
          <SectionHeader
            title="Step inside the museum."
            subtitle="Explore five connected rooms, each centered on a photographic exhibit."
            className="mb-0"
          />
          <Button to="/museum" variant="secondary" size="md" icon={ArrowUpRight} iconPosition="right">
            Enter the museum
          </Button>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. MEET THE BUILDERS & PROJECT PORTALS TEASER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 border-b border-obsidian-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Builders Teaser */}
            <div className="p-8 rounded-md bg-obsidian-surface border border-obsidian-border flex flex-col justify-between">
              <div>
                <h3 className="font-display text-3xl font-bold text-silver-bright mb-4">
                  Meet the Builders
                </h3>
                <p className="mb-6 font-sans text-sm leading-relaxed text-silver-muted">
                  A closer look at the people and moments behind Trojans Collective.
                </p>
              </div>
              <Button
                to="/people"
                variant="secondary"
                size="md"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                View Builder Roster
              </Button>
            </div>

            {/* Projects Teaser */}
            <div className="p-8 rounded-md bg-obsidian-surface border border-obsidian-border flex flex-col justify-between">
              <div>
                <h3 className="font-display text-3xl font-bold text-silver-bright mb-4">
                  Project Portals
                </h3>
                <p className="mb-6 font-sans text-sm leading-relaxed text-silver-muted">
                  A selection of work and experiments from the collective.
                </p>
              </div>
              <Button
                to="/projects"
                variant="secondary"
                size="md"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. CALL TO ACTION: JOIN THE COLLECTIVE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-silver-bright tracking-tight mb-6">
            Ready to Build With Us?
          </h2>

          <p className="font-sans text-base sm:text-lg text-silver-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Interested in being part of the collective? Start a conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/join"
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              Apply to Join Trojans Collective
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
            >
              Contact Core Team
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default HomePage;
