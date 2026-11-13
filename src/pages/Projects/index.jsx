import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Cpu, Terminal, Shield, Sparkles, X, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../../data/projects';

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            04 / Engineering Showcase
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            Things We've <br />
            <span className="text-lime">Built</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            Real software, decentralized protocols, and creative graphics engineered during hackathons, open-source sprints, and independent research.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center gap-2" role="tablist">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-colors ${
                activeCategory === category
                  ? 'bg-lime text-obsidian font-bold'
                  : 'bg-obsidian-surface text-silver-muted hover:text-silver-bright border border-obsidian-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FLAGSHIP PROJECT: MESHOS */}
        {/* ------------------------------------------------------------- */}
        {(activeCategory === 'All' || activeCategory === 'Distributed Systems') && (
          <div className="mb-16 bg-obsidian-surface rounded-2xl border border-obsidian-border overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="rounded-xl overflow-hidden border border-obsidian-border shadow-2xl">
                  <ImageFrame
                    assetId="project-mesh-os"
                    aspectRatio="16/9"
                    caption="MeshOS WebGL Telemetry & Node Discovery Fabric."
                    priority={true}
                  />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-lime uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                    Flagship Project
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-silver-bright mb-3">
                    MeshOS
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-silver-muted leading-relaxed mb-6">
                    A distributed edge-computing framework created by Trojans Collective builders for coordinating lightweight compute tasks across heterogeneous devices during hackathons and distributed sprints.
                  </p>

                  <h5 className="font-mono text-xs text-silver uppercase tracking-wider mb-2">
                    Architecture Highlights
                  </h5>
                  <ul className="space-y-1.5 mb-6 text-xs text-silver-muted font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-lime" />
                      Zero broker peer discovery over WebRTC / libp2p
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-lime" />
                      WebAssembly runtime execution inside sandboxed workers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-lime" />
                      Sub-50ms gossip protocol synchronization latency
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Rust', 'WebAssembly', 'libp2p', 'React', 'Tailwind CSS'].map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    onClick={() => setActiveProjectModal(PROJECTS_DATA[0])}
                    variant="primary"
                    size="md"
                    icon={ArrowUpRight}
                    iconPosition="right"
                  >
                    View System Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SECONDARY PROJECTS GRID */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects
            .filter((p) => p.id !== 'mesh-os')
            .map((project) => (
              <div
                key={project.id}
                className="bg-obsidian-surface rounded-xl border border-obsidian-border overflow-hidden p-6 sm:p-8 flex flex-col justify-between hover:border-lime/40 transition-colors"
              >
                <div>
                  <div className="mb-6 rounded-lg overflow-hidden border border-obsidian-border">
                    <ImageFrame
                      assetId={project.assetId}
                      aspectRatio="16/9"
                      caption={`${project.title} — ${project.tagline}`}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-lime uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-silver-dark">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-silver-bright mb-3">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-lime hover:underline"
                  >
                    Examine Architecture <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-xs text-silver-dark">{project.year}</span>
                </div>
              </div>
            ))}
        </div>

        {/* Case Study Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
            <div className="relative w-full max-w-3xl rounded-xl border border-obsidian-border bg-obsidian-surface p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-silver-muted hover:text-silver-bright hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 rounded-lg overflow-hidden border border-obsidian-border">
                <ImageFrame
                  assetId={activeProjectModal.assetId}
                  aspectRatio="16/9"
                />
              </div>

              <span className="font-mono text-xs text-lime uppercase tracking-wider block mb-1">
                {activeProjectModal.category}
              </span>
              <h3 className="font-display text-3xl font-bold text-silver-bright mb-2">
                {activeProjectModal.title}
              </h3>
              <p className="font-sans text-base text-silver font-medium mb-4">
                {activeProjectModal.tagline}
              </p>

              <div className="space-y-4 font-sans text-sm text-silver-muted leading-relaxed mb-6">
                <p>{activeProjectModal.description}</p>
                <p>
                  Built during high-intensity hackathon cycles, this project exemplifies the Trojans Collective standard: shipping clean, testable architecture with modern toolchains rather than generic slide presentations.
                </p>
              </div>

              <h5 className="font-mono text-xs text-silver uppercase tracking-wider mb-2">
                Technologies & Tooling
              </h5>
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProjectModal.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver-bright"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
                <span className="font-mono text-xs text-silver-dark">
                  Status: {activeProjectModal.status}
                </span>
                <Button
                  onClick={() => setActiveProjectModal(null)}
                  variant="outline"
                  size="sm"
                >
                  Close Dossier
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Suggest / Build With Us */}
        <section className="rounded-xl border border-obsidian-border bg-obsidian-surface p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-4">
            Have a Complex System You Want to Build?
          </h3>
          <p className="font-sans text-sm sm:text-base text-silver-muted max-w-xl mx-auto mb-8">
            We assemble squads around ambitious technical ideas. Pitch your prototype to the collective.
          </p>
          <Button to="/join" variant="primary" size="md" icon={ArrowUpRight} iconPosition="right">
            Pitch a Project Track
          </Button>
        </section>
      </div>
    </PageTransition>
  );
}

export default ProjectsPage;
