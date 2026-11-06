import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Terminal, Shield, Layers, Trophy, Sparkles } from 'lucide-react';
import { Hero3DCanvas } from '../../components/common/Hero3DCanvas';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { InteractiveTypography } from '../../features/interactive-typography';
import { FloatingMemories } from '../../features/floating-memories';
import { MUSEUM_ROOMS } from '../../data/milestones';

export function HomePage() {
  return (
    <PageTransition>
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 border-b border-obsidian-border overflow-hidden">
        {/* Subtle Background Radial Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Monumental Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* System Node Badge */}
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="lime" dot dotPulse size="md">
                COLLECTIVE ONLINE
              </Badge>
              <span className="font-mono text-xs text-silver-dark tracking-widest uppercase">
                // STUDENT-LED COLLECTIVE
              </span>
            </div>

            {/* Oversized Typography */}
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight text-silver-bright uppercase leading-[0.95] mb-6">
              TROJANS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-bright via-silver to-lime">
                COLLECTIVE
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-display text-xl sm:text-2xl text-lime font-medium tracking-wide mb-4">
              "Not a club. A collective of builders."
            </p>

            {/* Narrative Description */}
            <p className="font-sans text-base sm:text-lg text-silver-muted max-w-xl leading-relaxed mb-8">
              A student-led community of engineers, hackers, and creative technologists. We learn, experiment, build robust software, compete on national hackathon podiums, and push each other toward technical excellence.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                to="/about"
                variant="primary"
                size="lg"
                icon={Compass}
              >
                Explore the Collective
              </Button>

              <Button
                to="/memories"
                variant="secondary"
                size="lg"
                icon={Sparkles}
              >
                Spatial Memories
              </Button>
            </div>

            {/* Readout Meta */}
            <div className="mt-10 pt-6 border-t border-obsidian-border flex items-center gap-6 font-mono text-xs text-silver-dark">
              <div>
                <span className="text-silver-muted">FOCUS:</span> HACKATHONS & DEEP TECH
              </div>
              <div>
                <span className="text-silver-muted">STATUS:</span> ACTIVE EXPERIMENTS
              </div>
            </div>
          </div>

          {/* Right Column: Designated 3D Hero Visual Area */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* 3D Visual Container */}
            <div className="relative w-full rounded-lg bg-obsidian-card/40 border border-obsidian-border p-4 backdrop-blur-xs">
              {/* Corner Crosshairs */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-lime pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-lime pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-lime pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-lime pointer-events-none" />

              <div className="w-full">
                <Hero3DCanvas />
              </div>

              {/* Architectural Label */}
              <div className="mt-2 text-center">
                <span className="font-mono text-[10px] tracking-widest text-silver-dark uppercase">
                  SPARTAN MONOLITH // INTERACTIVE R3F
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. SIGNATURE INTERACTIVE 3D TYPOGRAPHY SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-obsidian-border bg-obsidian-surface/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="01_CORE_PILLARS"
            tag="INTERACTIVE DIMENSIONAL TYPOGRAPHY"
            title="The Builder Mandate"
            subtitle="Four dimensional principles that anchor everything we create. Drag your pointer across the canvas to interact with letterform depth, lighting angles, and engineering philosophies."
          />

          {/* Master Interactive 3D Typography Engine */}
          <InteractiveTypography autoCycle={true} />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. SIGNATURE EXPERIENCE: FLOATING MEMORIES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-obsidian-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <SectionHeader
              index="02_SPATIAL_ARCHIVE"
              tag="REAL PHOTOGRAPHY"
              title="Floating Memories"
              subtitle="An immersive spatial photographic installation floating in 3D obsidian space. Real photographs of genuine builders, late-night hackathon war rooms, whiteboard debates, and podium victories."
              className="mb-0"
            />
            <Button
              to="/memories"
              variant="primary"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              Open Fullscreen Archive
            </Button>
          </div>

          {/* Embedded Master Spatial Memories Canvas */}
          <FloatingMemories
            defaultViewMode="spatial"
          />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. DESIGNATED SECTION: VIRTUAL MUSEUM UNIVERSE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 border-b border-obsidian-border bg-obsidian-deep relative overflow-hidden">
        {/* Subtle Backlighting */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-lime/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            index="03_TIMELINE_UNIVERSE"
            tag="PLAYABLE 3D EXHIBIT"
            title="Timeline Universe — Virtual Museum"
            subtitle="We are not building a conventional vertical timeline. Trojans Collective is constructing a playable 3D virtual museum with third-person exploration, WASD movement, collision detection, and 5 connected rooms."
          />

          {/* Controls Readout Banner */}
          <div className="mb-10 p-6 rounded-md bg-obsidian-card border border-obsidian-border grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-silver-dark uppercase tracking-widest mb-1">
                MOVEMENT CONTROLS
              </span>
              <span className="font-mono text-sm text-lime font-bold">
                [W] [A] [S] [D] / ARROWS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-silver-dark uppercase tracking-widest mb-1">
                CAMERA CONTROLS
              </span>
              <span className="font-mono text-sm text-silver-bright font-bold">
                THIRD-PERSON MOUSE
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-silver-dark uppercase tracking-widest mb-1">
                EXHIBIT INSPECTION
              </span>
              <span className="font-mono text-sm text-lime font-bold">
                PRESS [F] TO INSPECT
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-silver-dark uppercase tracking-widest mb-1">
                EXIT INSPECTION
              </span>
              <span className="font-mono text-sm text-silver-bright font-bold">
                PRESS [ESC] TO CLOSE
              </span>
            </div>
          </div>

          {/* Planned Museum Rooms Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
            {MUSEUM_ROOMS.map((room) => (
              <div
                key={room.id}
                className="p-5 rounded-md bg-obsidian-surface border border-obsidian-border hover:border-lime/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-lime font-bold">
                      ROOM {room.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-silver-bright mb-2">
                    {room.title}
                  </h4>
                  <p className="font-sans text-xs text-silver-muted leading-relaxed mb-4">
                    {room.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-obsidian-border">
                  <span className="font-mono text-[10px] text-silver-dark tracking-wider uppercase block truncate">
                    {room.theme}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Museum Launch CTA */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-obsidian-border">
            <div className="flex items-center gap-3">
              <Badge variant="lime" dot size="sm">
                STANDALONE 3D MODULE READY
              </Badge>
              <span className="font-mono text-xs text-silver-dark">
                Includes Guided-Tour Fallback for Mobile
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                to="/museum"
                variant="primary"
                size="md"
                icon={Terminal}
              >
                Launch Museum Experience
              </Button>
            </div>
          </div>
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-lime uppercase">// 04_COLLECTIVE</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-silver-bright mb-4">
                  Meet the Builders
                </h3>
                <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                  Get to know the engineers, founders, and creative technologists driving Trojans Collective. Inspect skill matrices, roles, and open source profiles.
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-lime uppercase">// 05_CODE_REPOS</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-silver-bright mb-4">
                  Project Portals
                </h3>
                <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                  Dimensional showcases of tools, decentralized grids, AI agents, and experimental software engineered during competitions and late-night builds.
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
          <Badge variant="lime" dot dotPulse size="md" className="mb-6">
            APPLICATIONS OPEN // 2024 COHORT
          </Badge>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-silver-bright tracking-tight mb-6">
            Ready to Build With Us?
          </h2>

          <p className="font-sans text-base sm:text-lg text-silver-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            We don't look for resumes. We look for curiosity, problem-solving stamina, and students who want to build real systems.
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
