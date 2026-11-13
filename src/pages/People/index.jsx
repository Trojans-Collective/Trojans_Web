import React, { useState } from 'react';
import { Github, Linkedin, ArrowUpRight, Shield, Terminal, Cpu, Sparkles, Filter, X } from 'lucide-react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';
import { MEMBERS_DATA, MEMBER_DOMAINS } from '../../data/members';

export function PeoplePage() {
  const [activeDomain, setActiveDomain] = useState('All');
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = activeDomain === 'All'
    ? MEMBERS_DATA
    : MEMBERS_DATA.filter((m) => m.domain === activeDomain);

  const founders = MEMBERS_DATA.filter((m) => m.domain === 'Leadership');
  const coreBuilders = MEMBERS_DATA.filter((m) => m.domain !== 'Leadership');

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            03 / Builders Roster
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            The Builders of <br />
            <span className="text-lime">Trojans Collective</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            The engineers, architects, and creative technologists who build the software, organize the sprints, and mentor the next generation of builders.
          </p>
        </div>

        {/* Collective Assembly Banner */}
        <div className="mb-20 overflow-hidden rounded-xl border border-obsidian-border bg-obsidian-surface">
          <ImageFrame
            assetId="team-collective-shot"
            aspectRatio="21/9"
            caption="Trojans Collective Assembly — The community of student builders gathered together."
            priority={true}
          />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 1: FOUNDER & CO-FOUNDER LEADERSHIP PRESENTATION */}
        {/* ------------------------------------------------------------- */}
        <section className="mb-24">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
              Founding Leadership
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-bright">
              Architects & Direction
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Lead Founder */}
            <div className="lg:col-span-6 bg-obsidian-surface rounded-xl border border-obsidian-border p-8 flex flex-col justify-between group">
              <div>
                <div className="mb-6 overflow-hidden rounded-lg">
                  <ImageFrame
                    assetId="founder-portrait-lead"
                    aspectRatio="4/5"
                    className="w-full"
                    caption="Lead Founder & Strategic Architect"
                  />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright">
                      Lead Founder & Architect
                    </h3>
                    <p className="font-sans text-sm text-lime font-medium mt-0.5">
                      Founder & Strategic Lead
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-lime px-2.5 py-1 rounded bg-lime/10 border border-lime/30">
                    Founder
                  </span>
                </div>
                <p className="font-sans text-base text-silver-muted leading-relaxed mb-6">
                  Initiated Trojans Collective as an open arena for builder culture, competitive engineering, and rapid prototyping across collegiate hackathons.
                </p>
              </div>

              <div>
                <div className="pt-6 border-t border-obsidian-border flex flex-wrap gap-2 mb-6">
                  {['Systems Architecture', 'Distributed Consensus', 'Engineering Leadership', 'Product Strategy'].map((s) => (
                    <span key={s} className="font-mono text-xs text-silver-dark px-2.5 py-1 rounded bg-obsidian-deep border border-obsidian-border">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => setSelectedMember(MEMBERS_DATA[0])}
                    variant="outline"
                    size="sm"
                  >
                    View Builder Dossier
                  </Button>
                </div>
              </div>
            </div>

            {/* Technical Co-Founder */}
            <div className="lg:col-span-6 bg-obsidian-surface rounded-xl border border-obsidian-border p-8 flex flex-col justify-between group">
              <div>
                <div className="mb-6 overflow-hidden rounded-lg">
                  <ImageFrame
                    assetId="founder-portrait-co"
                    aspectRatio="4/5"
                    className="w-full"
                    caption="Technical Co-Founder (Systems & Engineering)"
                  />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright">
                      Technical Co-Founder
                    </h3>
                    <p className="font-sans text-sm text-silver font-medium mt-0.5">
                      Co-Founder & Head of Systems
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-silver px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    Leadership
                  </span>
                </div>
                <p className="font-sans text-base text-silver-muted leading-relaxed mb-4">
                  Co-directs engineering squads, high-performance runtime infrastructure, and competitive hackathon architecture across the collective.
                </p>
                <div className="mb-6 px-3.5 py-2.5 rounded bg-obsidian-deep/90 border border-white/5">
                  <p className="font-mono text-xs text-silver-dark leading-relaxed">
                    * Systems & Engineering Co-Founder — Bio & handle verification in progress.
                  </p>
                </div>
              </div>

              <div>
                <div className="pt-6 border-t border-obsidian-border flex flex-wrap gap-2 mb-6">
                  {['Distributed Systems', 'Low-Latency Networks', 'Rust', 'Linux Internals'].map((s) => (
                    <span key={s} className="font-mono text-xs text-silver-dark px-2.5 py-1 rounded bg-obsidian-deep border border-obsidian-border">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => setSelectedMember(MEMBERS_DATA[1])}
                    variant="outline"
                    size="sm"
                  >
                    View Builder Dossier
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 2: CORE BUILDERS & SPECIALISTS */}
        {/* ------------------------------------------------------------- */}
        <section className="mb-24 border-t border-obsidian-border pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
                Engineering Squads
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-bright">
                Core Builders & Specialists
              </h2>
            </div>

            {/* Unobtrusive Domain Filters */}
            <div className="flex flex-wrap items-center gap-2" role="tablist">
              {MEMBER_DOMAINS.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  onClick={() => setActiveDomain(domain)}
                  className={`px-3 py-1.5 rounded-full font-mono text-xs tracking-wider transition-colors ${
                    activeDomain === domain
                      ? 'bg-lime text-obsidian font-bold'
                      : 'bg-obsidian-surface text-silver-muted hover:text-silver-bright border border-obsidian-border'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Builder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-obsidian-surface rounded-xl border border-obsidian-border p-6 flex flex-col justify-between hover:border-lime/30 transition-all duration-300"
              >
                <div>
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <ImageFrame
                      assetId={member.assetId}
                      aspectRatio="4/5"
                      caption={`${member.name} — ${member.role}`}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-xl font-bold text-silver-bright">
                      {member.name}
                    </h4>
                    <span className="font-mono text-[10px] text-lime uppercase tracking-wider px-2 py-0.5 rounded bg-lime/10">
                      {member.domain}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-silver-dark font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-sans text-xs text-silver-muted leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  {member.note && (
                    <div className="mb-4 px-2.5 py-1.5 rounded bg-obsidian-deep border border-white/5">
                      <p className="font-mono text-[10px] text-silver-dark leading-tight">
                        {member.note}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-obsidian-border mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] text-silver-dark px-2 py-0.5 rounded bg-obsidian-deep"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-2 rounded border border-obsidian-border text-center font-mono text-xs text-silver-muted hover:text-lime hover:border-lime/40 transition-colors"
                  >
                    Examine Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Member Dossier Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-xl border border-obsidian-border bg-obsidian-surface p-6 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-silver-muted hover:text-silver-bright hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-5 rounded-lg overflow-hidden">
                  <ImageFrame
                    assetId={selectedMember.assetId}
                    aspectRatio="4/5"
                  />
                </div>

                <div className="sm:col-span-7">
                  <span className="font-mono text-xs text-lime uppercase tracking-wider block mb-1">
                    {selectedMember.domain}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-silver-bright mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="font-sans text-sm text-silver font-medium mb-4">
                    {selectedMember.role}
                  </p>
                  <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                    {selectedMember.bio}
                  </p>

                  <h5 className="font-mono text-xs text-silver uppercase tracking-wider mb-2">
                    Verified Competencies
                  </h5>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedMember.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver-bright"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {selectedMember.note && (
                    <p className="font-mono text-[11px] text-silver-dark mb-4 p-2 rounded bg-obsidian-deep border border-white/5">
                      {selectedMember.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Join the Builders CTA */}
        <section className="rounded-xl border border-obsidian-border bg-obsidian-surface p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-4">
            Think You Have What It Takes?
          </h3>
          <p className="font-sans text-sm sm:text-base text-silver-muted max-w-xl mx-auto mb-8">
            We are always scouting for engineers, researchers, and designers passionate about high technical craft.
          </p>
          <Button to="/join" variant="primary" size="md" icon={ArrowUpRight} iconPosition="right">
            Apply to Join the Roster
          </Button>
        </section>
      </div>
    </PageTransition>
  );
}

export default PeoplePage;
