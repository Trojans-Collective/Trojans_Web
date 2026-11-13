import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Shield, Terminal, Zap, Code2, Users } from 'lucide-react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';

export function AboutPage() {
  const principles = [
    {
      number: '01',
      title: 'Technical Rigor',
      description: 'We prioritize deep fundamentals over surface-level hype. We write real systems, benchmark performance, and read specifications.',
      icon: Terminal,
    },
    {
      number: '02',
      title: 'Builder Mindset',
      description: 'We don’t wait for assignments or syllabus permission. If an idea has merit, we spin up a repo, assemble a squad, and sprint.',
      icon: Zap,
    },
    {
      number: '03',
      title: 'Peer Mentorship',
      description: 'Zero hierarchy. Senior hackers mentor newcomers through code reviews, whiteboard sessions, and shared hackathon hotel rooms.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Uncompromising Craft',
      description: 'From microsecond latency in distributed algorithms to 60fps WebGL shaders, craft is the baseline of everything we ship.',
      icon: Shield,
    },
  ];

  const milestones = [
    {
      year: 'Founding Season',
      title: 'The First Whiteboard',
      detail: 'Frustrated by passive student clubs that talked about technology without writing code, a small group of engineers gathered to form an authentic collective of builders.',
    },
    {
      year: 'Sprint 01',
      title: 'Code Sprint Launch',
      detail: 'Hosted our inaugural 24-hour sprint arena, drawing 120+ participants and deploying 18 production prototypes across multiple disciplines.',
    },
    {
      year: 'The Arena',
      title: 'National Grand Championship',
      detail: 'Trojans Collective fielded multidisciplinary squads to national competitive hackathons, seizing 1st place overall and the grand trophy.',
    },
    {
      year: 'Present Day',
      title: 'The Living Ecosystem',
      detail: 'An active collective of builders spanning distributed systems, AI intelligence, WebGL creative tech, and competitive hackathon squads.',
    },
  ];

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            Origin & Charter
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            Not a club. <br />
            <span className="text-lime">A collective of builders.</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            Trojans Collective is a student-led technology collective founded on a singular premise: the best way to master engineering is to build real systems under real constraints alongside people who care.
          </p>
        </div>

        {/* Hero Photo Moment: Founding Gathering */}
        <div className="mb-20 overflow-hidden rounded-xl border border-obsidian-border bg-obsidian-surface">
          <ImageFrame
            assetId="founders-group-primary"
            aspectRatio="16/9"
            caption="The Trojans Collective assembly — The founders and early builders who established our engineering culture."
            priority={true}
          />
        </div>

        {/* Narrative Section: The Philosophy */}
        <section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start border-t border-obsidian-border pt-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-silver-bright leading-tight">
              Why We Rejected the Traditional Club Model
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 font-sans text-base sm:text-lg text-silver-muted leading-relaxed">
            <p>
              Most university tech clubs suffer from the same affliction: excessive meetings, rigid hierarchies, slide presentations, and zero shipped software. We wanted the opposite.
            </p>
            <p>
              At Trojans Collective, there are no resume-padding officer titles. Status is earned through technical contribution, mentorship, and sprint velocity. Whether you are debugging distributed consensus algorithms or writing custom fragment shaders, you are evaluated on what you create.
            </p>
            <p>
              We operate more like an experimental digital studio and competitive hacking crew than an extracurricular activity. We learn together, fail together, sprint together, and win together.
            </p>
          </div>
        </section>

        {/* The 4 Principles Grid */}
        <section className="mb-24 border-t border-obsidian-border pt-16">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
              Core Principles
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-bright">
              How We Operate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.number}
                  className="bg-obsidian-surface rounded-lg border border-obsidian-border p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-lime">
                        {p.number}
                      </span>
                      <Icon className="w-5 h-5 text-silver-muted" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-silver-bright mb-3">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-silver-muted leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Culture Photos Split Section */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-obsidian-surface rounded-xl border border-obsidian-border overflow-hidden">
            <ImageFrame
              assetId="culture-whiteboard-arch"
              aspectRatio="16/9"
              caption="Architecture Whiteboard Session — Diagramming system topologies and service boundaries."
            />
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-silver-bright mb-2">
                Whiteboard Ideation
              </h3>
              <p className="font-sans text-sm text-silver-muted leading-relaxed">
                Before writing code, we dissect problem spaces on the glass. Every architectural tradeoff is debated openly.
              </p>
            </div>
          </div>

          <div className="bg-obsidian-surface rounded-xl border border-obsidian-border overflow-hidden">
            <ImageFrame
              assetId="culture-late-night-build"
              aspectRatio="16/9"
              caption="Midnight Build Sprint — The unfiltered focus of 3:00 AM development."
            />
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-silver-bright mb-2">
                Midnight Sprints
              </h3>
              <p className="font-sans text-sm text-silver-muted leading-relaxed">
                Late night sessions where ideas cross pollinate across disciplines and working code replaces theoretical debate.
              </p>
            </div>
          </div>
        </section>

        {/* Chronological Journey */}
        <section className="mb-24 border-t border-obsidian-border pt-16">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
              Timeline
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-bright">
              Our Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.title}
                className="p-6 rounded-lg bg-obsidian-surface border border-obsidian-border relative"
              >
                <span className="font-mono text-xs text-lime uppercase tracking-wider block mb-2">
                  {m.year}
                </span>
                <h4 className="font-display text-lg font-bold text-silver-bright mb-2">
                  {m.title}
                </h4>
                <p className="font-sans text-xs text-silver-muted leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <section className="rounded-xl border border-obsidian-border bg-obsidian-surface p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-4">
            Meet the Builders Behind the Collective
          </h3>
          <p className="font-sans text-sm sm:text-base text-silver-muted max-w-xl mx-auto mb-8">
            Explore the roster of engineers, researchers, and creators shaping Trojans Collective.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/people" variant="primary" size="md" icon={ArrowUpRight} iconPosition="right">
              View Builders Roster
            </Button>
            <Button to="/join" variant="outline" size="md">
              Apply to Join
            </Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default AboutPage;
