import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Compass, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers, 
  Trophy, 
  Users, 
  Code2, 
  Zap, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Hero3DCanvas } from '../../components/common/Hero3DCanvas';
import { Button } from '../../components/ui/Button';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { InteractiveTypography } from '../../features/interactive-typography';
import { RubiksCube } from '../../features/rubiks-cube/RubiksCube';
import { MEMBERS_DATA } from '../../data/members';
import { PROJECTS_DATA } from '../../data/projects';
import { EVENTS_DATA } from '../../data/events';
import { ACHIEVEMENTS_DATA } from '../../data/milestones';

export function HomePage() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  const coreMembers = MEMBERS_DATA.slice(0, 5);
  const featuredEvents = EVENTS_DATA.slice(0, 4);
  const premierAchievement = ACHIEVEMENTS_DATA[0];

  return (
    <PageTransition>
      {/* ------------------------------------------------------------- */}
      {/* 4.1 CINEMATIC HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        {/* Atmospheric Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[400px] bg-lime/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-[300px] h-[300px] bg-silver/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Monumental Editorial Typography & CTAs */}
          <div className="z-10 flex flex-col items-start text-left lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
              Student-Led Technology Collective
            </div>

            <h1 className="mb-6 font-display text-5xl font-extrabold uppercase leading-[0.88] tracking-[-0.06em] text-silver-bright sm:text-6xl md:text-7xl xl:text-8xl">
              TROJANS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-bright via-silver to-lime">
                COLLECTIVE
              </span>
            </h1>

            {/* Tagline */}
            <p className="mb-4 font-display text-xl font-semibold text-lime sm:text-2xl tracking-tight">
              Not a club. A collective of builders.
            </p>

            <p className="mb-8 max-w-xl font-sans text-base leading-relaxed text-silver-muted sm:text-lg">
              A student-led collective of builders, engineers, hackers and creative technologists learning, experimenting, and shipping production-quality software together.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                to="/about"
                variant="primary"
                size="lg"
                icon={Compass}
              >
                Discover Trojans
              </Button>

              <Button
                to="/memories"
                variant="secondary"
                size="lg"
                icon={Sparkles}
              >
                Explore Memories
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Spartan Monolith Visual */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            <Hero3DCanvas />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.2 THE COLLECTIVE PHILOSOPHY */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-y border-obsidian-border bg-obsidian-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-4">
                01 / Collective Philosophy
              </p>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-silver-bright">
                "We don't wait for opportunities. <br className="hidden sm:inline" />
                <span className="text-silver">We build them."</span>
              </h2>
              <div className="mt-8 space-y-4 max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-silver-muted">
                <p>
                  We exist outside conventional campus club hierarchies. Trojans Collective is an open arena where software architects, hardware hackers, and visual technologists converge under sprint pressure to ship real systems.
                </p>
                <p>
                  No busywork. No ceremonial roles. Only code, curiosity, high standards, and the shared intensity of building things that matter.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="lg:col-span-4 flex flex-col gap-6 pt-2">
              <div className="border-l-2 border-lime pl-5">
                <h4 className="font-display text-base font-bold text-silver-bright mb-1">
                  Code Over Credentials
                </h4>
                <p className="text-xs sm:text-sm text-silver-muted leading-relaxed">
                  Ideas are cheap until they execute. We prioritize working prototypes and architecture over resumes.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-5">
                <h4 className="font-display text-base font-bold text-silver-bright mb-1">
                  Sprint Culture
                </h4>
                <p className="text-xs sm:text-sm text-silver-muted leading-relaxed">
                  Intensive hackathons and 24-hour sprints test our resolve and forge unbreakable technical bonds.
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-5">
                <h4 className="font-display text-base font-bold text-silver-bright mb-1">
                  Peer Mentorship
                </h4>
                <p className="text-xs sm:text-sm text-silver-muted leading-relaxed">
                  Senior engineers teach first-year builders. Knowledge is open source; collective velocity belongs to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.3 INTERACTIVE TYPOGRAPHY INSTALLATION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-b border-obsidian-border bg-obsidian-surface/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Builder Spectrum"
            subtitle="Explore the four creative disciplines that define the engineering ethos of Trojans Collective."
            align="center"
          />
          <InteractiveTypography />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.4 PHOTOGRAPHIC RUBIK'S CUBE (APPROVED & LOCKED) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-b border-obsidian-border bg-obsidian-deep py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            02 / Spatial Archive
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-silver-bright tracking-tight">
            Every piece holds a memory.
          </h2>
          <p className="mt-3 max-w-xl mx-auto font-sans text-sm sm:text-base text-silver-muted leading-relaxed">
            Drag to rotate the cube in 3D space. Select any photographic tile to open its memory record from the Trojans archive.
          </p>
        </div>

        {/* The approved Rubik's cube signature experience */}
        <RubiksCube />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.5 MEET THE BUILDERS — EDITORIAL COMPOSITION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-b border-obsidian-border bg-obsidian-surface/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
                03 / People
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-silver-bright tracking-tight">
                Meet the Builders
              </h2>
              <p className="mt-3 font-sans text-base text-silver-muted max-w-xl">
                The students, hackers, and architects behind Trojans Collective. Built by individuals with a passion for high craft.
              </p>
            </div>
            <Button
              to="/people"
              variant="secondary"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              Full Builder Roster
            </Button>
          </div>

          {/* Large Assembly Banner */}
          <div className="mb-14">
            <ImageFrame
              assetId="team-collective-shot"
              aspectRatio="21/9"
              caption="Trojans Collective Assembly — Gathered across disciplines in our creative engineering space."
            />
          </div>

          {/* Asymmetric Editorial Leadership Presentation */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-stretch">
            {/* Lead Founder */}
            <div className="md:col-span-6 bg-obsidian-surface rounded-lg border border-obsidian-border p-6 flex flex-col justify-between group">
              <div>
                <div className="mb-4 overflow-hidden rounded-md">
                  <ImageFrame
                    assetId="founder-portrait-lead"
                    aspectRatio="4/5"
                    className="w-full"
                    caption="Lead Founder & Strategic Architect"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl font-bold text-silver-bright">
                    Lead Founder & Architect
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-lime px-2 py-0.5 rounded bg-lime/10 border border-lime/30">
                    Founder
                  </span>
                </div>
                <p className="font-sans text-sm text-silver-muted leading-relaxed mb-4">
                  Initiated Trojans Collective as an open arena for builder culture, competitive engineering, and rapid prototyping across collegiate hackathons.
                </p>
              </div>
              <div className="pt-4 border-t border-obsidian-border flex flex-wrap gap-2">
                {['System Design', 'Engineering Leadership', 'Distributed Consensus', 'Product Strategy'].map((s) => (
                  <span key={s} className="font-mono text-[10px] text-silver-dark px-2 py-1 rounded bg-obsidian-deep border border-obsidian-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Co-Founder */}
            <div className="md:col-span-6 bg-obsidian-surface rounded-lg border border-obsidian-border p-6 flex flex-col justify-between group">
              <div>
                <div className="mb-4 overflow-hidden rounded-md">
                  <ImageFrame
                    assetId="founder-portrait-co"
                    aspectRatio="4/5"
                    className="w-full"
                    caption="Technical Co-Founder (Systems & Engineering)"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl font-bold text-silver-bright">
                    Technical Co-Founder
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-silver px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    Leadership
                  </span>
                </div>
                <p className="font-sans text-sm text-silver-muted leading-relaxed mb-4">
                  Co-directs engineering squads, high-performance runtime infrastructure, and competitive hackathon architecture across the collective.
                </p>
                <div className="mb-4 px-3 py-2 rounded bg-obsidian-deep/80 border border-white/5">
                  <p className="font-mono text-[10px] text-silver-dark leading-tight">
                    * Systems & Engineering Co-Founder — Bio & handle verification in progress.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-obsidian-border flex flex-wrap gap-2">
                {['Distributed Systems', 'Low-Latency Networks', 'Rust', 'Linux Internals'].map((s) => (
                  <span key={s} className="font-mono text-[10px] text-silver-dark px-2 py-1 rounded bg-obsidian-deep border border-obsidian-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Builder Highlights Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Creative Technologist */}
            <div className="bg-obsidian-surface/60 rounded-md border border-obsidian-border p-5 flex flex-col justify-between hover:border-lime/30 transition-colors">
              <div>
                <div className="mb-3 rounded overflow-hidden">
                  <ImageFrame
                    assetId="builder-frontend-lead"
                    aspectRatio="4/5"
                    caption="Creative Technologist & UI Architect"
                  />
                </div>
                <h4 className="font-display text-lg font-bold text-silver-bright mb-1">
                  Creative Technologist
                </h4>
                <p className="font-sans text-xs text-silver-muted leading-relaxed mb-3">
                  Crafts dimensional web experiences, GLSL shaders, and interactive 3D web systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-obsidian-border">
                {['WebGL', 'Three.js', 'GLSL', 'React'].map((tag) => (
                  <span key={tag} className="font-mono text-[9px] text-silver-dark px-1.5 py-0.5 rounded bg-obsidian-deep">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Systems Engineer */}
            <div className="bg-obsidian-surface/60 rounded-md border border-obsidian-border p-5 flex flex-col justify-between hover:border-lime/30 transition-colors">
              <div>
                <div className="mb-3 rounded overflow-hidden">
                  <ImageFrame
                    assetId="builder-systems-lead"
                    aspectRatio="4/5"
                    caption="Core Systems Engineer"
                  />
                </div>
                <h4 className="font-display text-lg font-bold text-silver-bright mb-1">
                  Systems Engineer
                </h4>
                <p className="font-sans text-xs text-silver-muted leading-relaxed mb-3">
                  Designs low-latency microservices, protocol runtimes, and distributed edge coordination engines.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-obsidian-border">
                {['Rust', 'Go', 'gRPC', 'PostgreSQL'].map((tag) => (
                  <span key={tag} className="font-mono text-[9px] text-silver-dark px-1.5 py-0.5 rounded bg-obsidian-deep">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Researcher */}
            <div className="bg-obsidian-surface/60 rounded-md border border-obsidian-border p-5 flex flex-col justify-between hover:border-lime/30 transition-colors">
              <div>
                <div className="mb-3 rounded overflow-hidden">
                  <ImageFrame
                    assetId="builder-ai-lead"
                    aspectRatio="4/5"
                    caption="AI & Intelligence Specialist"
                  />
                </div>
                <h4 className="font-display text-lg font-bold text-silver-bright mb-1">
                  Intelligence Specialist
                </h4>
                <p className="font-sans text-xs text-silver-muted leading-relaxed mb-3">
                  Specializes in autonomous agent workflows, local inference pipelines, and ML architectures.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-obsidian-border">
                {['PyTorch', 'Agents', 'Vector Stores', 'FastAPI'].map((tag) => (
                  <span key={tag} className="font-mono text-[9px] text-silver-dark px-1.5 py-0.5 rounded bg-obsidian-deep">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.6 PROJECTS: THINGS WE'VE BUILT */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-b border-obsidian-border bg-obsidian-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
                04 / Engineering
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-silver-bright tracking-tight">
                Things We've Built
              </h2>
              <p className="mt-3 font-sans text-base text-silver-muted max-w-xl">
                Real software, decentralized protocols, and creative graphics engineered during hackathons and open-source sprints.
              </p>
            </div>
            <Button
              to="/projects"
              variant="secondary"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              All Project Portals
            </Button>
          </div>

          {/* Flagship Feature: MeshOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-obsidian-surface rounded-xl border border-obsidian-border p-6 sm:p-10 mb-10">
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-lg border border-obsidian-border">
                <ImageFrame
                  assetId="project-mesh-os"
                  aspectRatio="16/9"
                  caption="MeshOS — Decentralized peer-to-peer compute and telemetry framework."
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-lime uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                  Flagship Protocol
                </div>
                <h3 className="font-display text-3xl font-extrabold text-silver-bright mb-3">
                  MeshOS
                </h3>
                <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                  A distributed edge-computing framework created by Trojans Collective builders for coordinating lightweight compute tasks across heterogeneous devices during hackathons and distributed sprints.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Rust', 'WebAssembly', 'libp2p', 'React', 'Tailwind CSS'].map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  to="/projects"
                  variant="primary"
                  size="md"
                  icon={ArrowUpRight}
                  iconPosition="right"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sentinel AI */}
            <div className="bg-obsidian-surface rounded-lg border border-obsidian-border p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-lime uppercase tracking-wider">
                    AI & Security
                  </span>
                  <span className="font-mono text-xs text-silver-dark">
                    Hackathon Grand Prize
                  </span>
                </div>
                <h4 className="font-display text-2xl font-bold text-silver-bright mb-2">
                  Sentinel AI
                </h4>
                <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                  Autonomous security auditor built during a 36-hour sprint that monitors codebases, parses AST diffs, and synthesizes automated vulnerability patch proposals.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'FastAPI', 'Tree-sitter', 'LLM Agents'].map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-lime hover:underline">
                Read Project Spec <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Spartan Canvas */}
            <div className="bg-obsidian-surface rounded-lg border border-obsidian-border p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-silver uppercase tracking-wider">
                    Creative Tech
                  </span>
                  <span className="font-mono text-xs text-silver-dark">
                    Experimental Prototype
                  </span>
                </div>
                <h4 className="font-display text-2xl font-bold text-silver-bright mb-2">
                  Spartan Canvas
                </h4>
                <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                  Web-based creative coding workstation enabling real-time GPU shader compilation, timeline sequencing, and procedural visual art export.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['WebGL', 'GLSL', 'Three.js', 'WebAudio'].map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-lime hover:underline">
                Explore Shaders <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.7 EVENTS AND COLLECTIVE CULTURE */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-b border-obsidian-border bg-obsidian-surface/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
                05 / Culture & Events
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-silver-bright tracking-tight">
                Inside the Collective
              </h2>
              <p className="mt-3 font-sans text-base text-silver-muted max-w-xl">
                The sleepless hackathon arenas, high-intensity technical discourse, and collaborative midnight builds that bind our community.
              </p>
            </div>
            <Button
              to="/events"
              variant="secondary"
              size="md"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              All Events & Archives
            </Button>
          </div>

          {/* Asymmetric Photographic Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Code Sprint Large Card */}
            <div className="md:col-span-7 bg-obsidian-surface rounded-lg border border-obsidian-border overflow-hidden flex flex-col justify-between">
              <ImageFrame
                assetId="event-code-sprint-flagship"
                aspectRatio="16/9"
                caption="Code Sprint Arena — 24 hours of nonstop architectural development and deployment."
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-lime uppercase tracking-wider">
                    Flagship Event
                  </span>
                  <span className="font-mono text-xs text-silver-dark">
                    120+ Builders
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-silver-bright mb-2">
                  Code Sprint 24H Arena
                </h3>
                <p className="font-sans text-sm text-silver-muted leading-relaxed">
                  Our premier annual rapid engineering sprint. Squads build production-grade prototypes across 4 distinct problem tracks with live benchmark judge testing.
                </p>
              </div>
            </div>

            {/* Tech Bytes & Hackathon Podium Column */}
            <div className="md:col-span-5 flex flex-col gap-8">
              {/* Tech Bytes */}
              <div className="bg-obsidian-surface rounded-lg border border-obsidian-border overflow-hidden">
                <ImageFrame
                  assetId="event-tech-bytes-live"
                  aspectRatio="16/9"
                  caption="Tech Bytes — Deep dive systems presentation."
                />
                <div className="p-5">
                  <span className="font-mono text-xs text-silver uppercase tracking-wider">
                    Technical Series
                  </span>
                  <h4 className="font-display text-lg font-bold text-silver-bright mt-1 mb-1">
                    Tech Bytes: Systems Discourse
                  </h4>
                  <p className="font-sans text-xs text-silver-muted leading-relaxed">
                    Peer-led engineering masterclasses deconstructing distributed protocols, memory management, and compiler runtimes.
                  </p>
                </div>
              </div>

              {/* Hackathon Podium */}
              <div className="bg-obsidian-surface rounded-lg border border-obsidian-border overflow-hidden">
                <ImageFrame
                  assetId="event-hackathon-victory"
                  aspectRatio="16/9"
                  caption="National Hackathon Arena — Trojans delegation taking 1st place overall."
                />
                <div className="p-5">
                  <span className="font-mono text-xs text-lime uppercase tracking-wider">
                    Championship Circuit
                  </span>
                  <h4 className="font-display text-lg font-bold text-silver-bright mt-1 mb-1">
                    National Hackathon Podium
                  </h4>
                  <p className="font-sans text-xs text-silver-muted leading-relaxed">
                    Trojans squads competing against top universities nationwide, bringing home grand trophies and technical honors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Photo Row: Midnight Sprint & Whiteboard Session */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-obsidian-surface rounded-lg border border-obsidian-border overflow-hidden">
              <ImageFrame
                assetId="culture-late-night-build"
                aspectRatio="16/9"
                caption="Midnight Build Session — Where architecture comes alive at 3:00 AM."
              />
              <div className="p-5">
                <h4 className="font-display text-base font-bold text-silver-bright mb-1">
                  Midnight Engineering
                </h4>
                <p className="font-sans text-xs text-silver-muted">
                  Open lab sessions with zero structure: just builders, coffee, terminal windows, and collaborative experimentation.
                </p>
              </div>
            </div>

            <div className="bg-obsidian-surface rounded-lg border border-obsidian-border overflow-hidden">
              <ImageFrame
                assetId="culture-whiteboard-arch"
                aspectRatio="16/9"
                caption="Architecture Whiteboard Session — Diagramming system topologies."
              />
              <div className="p-5">
                <h4 className="font-display text-base font-bold text-silver-bright mb-1">
                  Architecture & Design Sprints
                </h4>
                <p className="font-sans text-xs text-silver-muted">
                  Mapping consensus flow, schema design, and service boundaries before writing the first line of code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.8 ACHIEVEMENTS AND RECOGNITION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-b border-obsidian-border bg-obsidian-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Trophy Photograph */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-xl border border-obsidian-border bg-obsidian-surface p-4 shadow-2xl">
                <ImageFrame
                  assetId="achievement-national-trophy"
                  aspectRatio="4/5"
                  caption="National Hackathon Championship Trophy — 1st Place Overall"
                />
                <div className="absolute top-7 right-7">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian/90 border border-lime text-lime font-mono text-xs tracking-wider">
                    <Trophy className="w-3.5 h-3.5" /> 1ST PLACE
                  </span>
                </div>
              </div>
            </div>

            {/* Achievement Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
                06 / Recognition
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-silver-bright tracking-tight mb-6">
                Championships & Technical Milestones
              </h2>
              <p className="font-sans text-base sm:text-lg text-silver-muted leading-relaxed mb-8">
                We measure ourselves not by promotional claims, but by what we build under pressure and defend before industry judges.
              </p>

              {/* Verified Records */}
              <div className="w-full space-y-4 mb-8">
                <div className="p-4 rounded-md bg-obsidian-surface border border-obsidian-border flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-lime/10 border border-lime/30 flex items-center justify-center shrink-0 text-lime">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-base font-bold text-silver-bright">
                        National Hackathon Grand Champions
                      </h4>
                      <span className="font-mono text-[10px] text-lime uppercase bg-lime/10 px-2 py-0.5 rounded">
                        1st Place
                      </span>
                    </div>
                    <p className="font-sans text-xs text-silver-muted mt-1">
                      Apex Tech Hackathon Circuit — Autonomous vulnerability analysis engine beating 200+ collegiate squads.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-md bg-obsidian-surface border border-obsidian-border flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-silver">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-base font-bold text-silver-bright">
                        Best Distributed System Architecture
                      </h4>
                      <span className="font-mono text-[10px] text-silver uppercase bg-white/5 px-2 py-0.5 rounded">
                        CloudScale Award
                      </span>
                    </div>
                    <p className="font-sans text-xs text-silver-muted mt-1">
                      MeshOS protocol recognized for low-latency peer discovery and decentralized telemetry via WebAssembly.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-md bg-obsidian-surface border border-obsidian-border flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-silver">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-base font-bold text-silver-bright">
                        Builder Velocity & Community Impact Honor
                      </h4>
                      <span className="font-mono text-[10px] text-silver uppercase bg-white/5 px-2 py-0.5 rounded">
                        Council Honor
                      </span>
                    </div>
                    <p className="font-sans text-xs text-silver-muted mt-1">
                      Honoring Code Sprint v1.0 and open source mentorship for over 120 participating student engineers.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                to="/achievements"
                variant="primary"
                size="md"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                View Full Milestone Archive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.9 OUR JOURNEY / VIRTUAL MUSEUM PREVIEW */}
      {/* ------------------------------------------------------------- */}
      <section className="relative border-b border-obsidian-border bg-obsidian-surface/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-obsidian-border bg-gradient-to-b from-obsidian-surface via-obsidian-deep to-obsidian p-8 sm:p-14">
            {/* Background Radial Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-lime/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                07 / Interactive 3D Destination
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-silver-bright tracking-tight leading-[1.05] mb-6">
                Step Inside the <br />
                <span className="text-lime">Virtual Museum</span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-silver-muted leading-relaxed mb-8 max-w-2xl">
                Experience Trojans Collective through an interactive 3D console. Explore five themed architectural halls featuring photographic exhibits, prototype artifacts, and historical founding milestones.
              </p>

              {/* 5 Rooms Overview Badges */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {[
                  '01 The Origins',
                  '02 The People',
                  '03 The Builders',
                  '04 The Arena',
                  '05 The Collective',
                ].map((room) => (
                  <span
                    key={room}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-obsidian-card border border-white/10 text-silver-muted"
                  >
                    {room}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  to="/museum"
                  variant="primary"
                  size="lg"
                  icon={ArrowUpRight}
                  iconPosition="right"
                >
                  Enter Virtual Museum
                </Button>

                <span className="font-mono text-xs text-silver-dark">
                  WASD / Arrow Keys or Pointer navigation supported
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4.10 JOIN THE COLLECTIVE — CALL TO ACTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        {/* Subtle Ambient Radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping" />
            Join the Ranks
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            Ready to Build <br />
            <span className="text-lime">With Us?</span>
          </h2>

          <p className="font-sans text-base sm:text-xl text-silver-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you engineer low-level systems in Rust, compose WebGL shaders, train autonomous agents, or solder microcontrollers — there is an engineering squad waiting for you.
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
