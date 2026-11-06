import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Badge } from '../../components/ui/Badge';
import { ACHIEVEMENTS_DATA } from '../../data/milestones';
import { Trophy, Award, Medal, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { formatEditorialDate } from '../../utils/formatters';

export function AchievementsPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="07_TROPHIES"
          tag="COMPETITIVE TRACK RECORD"
          title="Victories, Podiums & Honors"
          subtitle="Trojans Collective competes in premier national hackathons, code arenas, and open source engineering challenges."
        />

        {/* Featured Trophy Hero Banner */}
        <div className="p-8 rounded-lg bg-obsidian-card border border-obsidian-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5">
            <ImageFrame
              assetId="achievement-national-trophy"
              aspectRatio="4/5"
              caption="1st Place Championship Trophy — Apex Tech Hackathon"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="spartan" size="md">
                  CHAMPIONSHIP VICTORY
                </Badge>
                <span className="font-mono text-xs text-lime">
                  // 2024 CIRCUIT
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-silver-bright mb-4">
                National Hackathon Grand Champions
              </h3>

              <p className="font-sans text-sm sm:text-base text-silver-muted leading-relaxed mb-6">
                Fielding against 250+ teams across top universities, the Trojans Collective engineering squad developed and deployed Sentinel AI in 36 hours, securing first place overall and top developer tooling honors.
              </p>

              <div className="grid grid-cols-3 gap-4 p-4 rounded-md bg-obsidian-surface border border-obsidian-border font-mono text-xs mb-6">
                <div>
                  <span className="text-silver-dark block text-[10px]">RANK</span>
                  <span className="text-lime font-bold">1ST PLACE</span>
                </div>
                <div>
                  <span className="text-silver-dark block text-[10px]">FIELD</span>
                  <span className="text-silver">250+ TEAMS</span>
                </div>
                <div>
                  <span className="text-silver-dark block text-[10px]">TIME</span>
                  <span className="text-silver">36 HOURS</span>
                </div>
              </div>
            </div>

            <span className="font-mono text-xs text-silver-dark">
              VERIFIED ARCHIVAL RECORD // TROJANS_HONORS_2024
            </span>
          </div>
        </div>

        {/* Honors Archive List */}
        <div>
          <h3 className="font-display text-2xl font-bold text-silver-bright mb-8">
            Complete Track Record
          </h3>

          <div className="space-y-4">
            {ACHIEVEMENTS_DATA.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-md bg-obsidian-surface border border-obsidian-border hover:border-lime/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-lime/10 text-lime shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-silver-dark uppercase tracking-wider">
                        {item.issuer} • {formatEditorialDate(item.date)}
                      </span>
                      <Badge variant="lime" size="sm">
                        {item.rank}
                      </Badge>
                    </div>
                    <h4 className="font-display text-xl font-bold text-silver-bright">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-silver-muted mt-1 max-w-2xl leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 font-mono text-xs text-silver-dark flex md:flex-col md:items-end gap-2">
                  <span>CATEGORY: {item.category}</span>
                  <span className="text-lime">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default AchievementsPage;
