import React from 'react';
import { Trophy, Award, Medal, Shield, ArrowUpRight, Cpu, Zap, Star } from 'lucide-react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Button } from '../../components/ui/Button';
import { ACHIEVEMENTS_DATA } from '../../data/milestones';

export function AchievementsPage() {
  const premierTrophy = ACHIEVEMENTS_DATA[0];

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            06 / Podiums & Recognition
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            Achievements & <br />
            <span className="text-lime">Recognition</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            We measure our engineering rigor by what we build under sprint pressure and defend before industry judges and competitive peers.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PREMIER TROPHY SHOWCASE */}
        {/* ------------------------------------------------------------- */}
        <section className="mb-20 bg-obsidian-surface rounded-2xl border border-obsidian-border p-6 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Real Trophy Photograph */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-xl overflow-hidden border border-obsidian-border shadow-2xl">
                <ImageFrame
                  assetId="achievement-national-trophy"
                  aspectRatio="4/5"
                  caption="National Hackathon Grand Champions Trophy"
                  priority={true}
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-obsidian/95 border border-lime text-lime font-mono text-xs font-bold">
                    <Trophy className="w-3.5 h-3.5" /> GRAND PRIZE
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Breakdown */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-lime uppercase tracking-wider block mb-2">
                  Apex Tech Hackathon Circuit
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-silver-bright mb-4">
                  National Hackathon Grand Champions
                </h2>

                <p className="font-sans text-base sm:text-lg text-silver-muted leading-relaxed mb-6">
                  Awarded first place among 200+ collegiate teams for engineering an autonomous distributed vulnerability auditor under 36-hour sprint constraints.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-mono text-xs text-silver uppercase tracking-wider">
                    Judged Criteria & Deliverables
                  </h4>
                  <ul className="space-y-2 text-sm text-silver-muted font-sans">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" />
                      <span>Engineered an AST-level syntax auditing pipeline analyzing vulnerability diffs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" />
                      <span>Demonstrated live autonomous patch generation against injected zero-day test cases</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" />
                      <span>Unanimous 1st place evaluation by senior security architects and technical judges</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-obsidian-border flex flex-wrap gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver">
                  Rank: 1st Place Overall
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded bg-obsidian-deep border border-obsidian-border text-silver">
                  Format: 36-Hour Competitive Sprint
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* MILESTONE RECORDS GRID */}
        {/* ------------------------------------------------------------- */}
        <section className="mb-20">
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-2">
              Verified Records
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-bright">
              Engineering Honors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACHIEVEMENTS_DATA.slice(1).map((item) => (
              <div
                key={item.id}
                className="bg-obsidian-surface rounded-xl border border-obsidian-border p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-lime uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs text-silver-dark font-medium">
                      {item.rank}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-silver-bright mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-lime/90 font-mono mb-4">
                    Issuer: {item.issuer}
                  </p>

                  <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {item.details && (
                    <div className="space-y-1.5 mb-6">
                      {item.details.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-xs font-sans text-silver-bright">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          {d}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-obsidian-border">
                  <span className="font-mono text-xs text-silver-dark">
                    Verified Collegiate Archive Record
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competition Context Photo Row */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden border border-obsidian-border bg-obsidian-surface">
            <ImageFrame
              assetId="event-hackathon-victory"
              aspectRatio="16/9"
              caption="Trojans Collective delegation receiving championship honors on stage."
            />
            <div className="p-6">
              <h4 className="font-display text-lg font-bold text-silver-bright mb-1">
                The Stage Finish
              </h4>
              <p className="font-sans text-xs text-silver-muted leading-relaxed">
                Celebrating after defending code and architecture before juries of senior tech leads.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-obsidian-border bg-obsidian-surface">
            <ImageFrame
              assetId="event-hackathon-war-room"
              aspectRatio="16/9"
              caption="The 36-hour hackathon war room — where systems are forged under pressure."
            />
            <div className="p-6">
              <h4 className="font-display text-lg font-bold text-silver-bright mb-1">
                The War Room
              </h4>
              <p className="font-sans text-xs text-silver-muted leading-relaxed">
                Trophies are won in the 3:00 AM debugging trenches before the final pitch presentation.
              </p>
            </div>
          </div>
        </section>

        {/* Join the Competitive Squads CTA */}
        <section className="rounded-xl border border-obsidian-border bg-obsidian-surface p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-silver-bright mb-4">
            Want to Compete on the National Circuit?
          </h3>
          <p className="font-sans text-sm sm:text-base text-silver-muted max-w-xl mx-auto mb-8">
            We build competitive squads across systems engineering, artificial intelligence, and creative tech for premier hackathons.
          </p>
          <Button to="/join" variant="primary" size="md" icon={ArrowUpRight} iconPosition="right">
            Join a Competitive Track
          </Button>
        </section>
      </div>
    </PageTransition>
  );
}

export default AchievementsPage;
