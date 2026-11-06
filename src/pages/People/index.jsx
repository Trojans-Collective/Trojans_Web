import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ModalOverlay } from '../../components/ui/ModalOverlay';
import { MEMBERS_DATA, MEMBER_DOMAINS } from '../../data/members';
import { Github, Linkedin, ArrowUpRight, Terminal } from 'lucide-react';

export function PeoplePage() {
  const [activeDomain, setActiveDomain] = useState('All');
  const [inspectedMember, setInspectedMember] = useState(null);

  const filteredMembers = activeDomain === 'All'
    ? MEMBERS_DATA
    : MEMBERS_DATA.filter((m) => m.domain === activeDomain);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="04_PERSONNEL"
          tag="MEET THE BUILDERS"
          title="Engineers, Hackers & Creative Minds"
          subtitle="Trojans Collective is powered by students who live in code editors, push commits at 4:00 AM, and solve hard problems collaboratively."
        />

        {/* Domain Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {MEMBER_DOMAINS.map((domain) => (
            <button
              key={domain}
              type="button"
              onClick={() => setActiveDomain(domain)}
              className={`px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-colors border ${
                activeDomain === domain
                  ? 'bg-lime text-obsidian border-lime font-semibold'
                  : 'bg-obsidian-surface text-silver-muted border-obsidian-border hover:text-white hover:border-white/20'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Builders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="p-4 rounded-md bg-obsidian-card border border-obsidian-border hover:border-lime/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* 4:5 Portrait Frame */}
                <div
                  className="cursor-pointer mb-4"
                  onClick={() => setInspectedMember(member)}
                >
                  <ImageFrame
                    assetId={member.assetId}
                    aspectRatio="4/5"
                  />
                </div>

                {/* Member Meta */}
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-lime uppercase tracking-widest">
                    {member.domain}
                  </span>
                  <Badge variant="outline" size="sm">
                    CORE
                  </Badge>
                </div>

                <h3
                  onClick={() => setInspectedMember(member)}
                  className="font-display text-xl font-bold text-silver-bright group-hover:text-lime transition-colors cursor-pointer mb-1"
                >
                  {member.name}
                </h3>

                <p className="font-sans text-xs text-silver-muted font-medium mb-3">
                  {member.role}
                </p>

                <p className="font-sans text-xs text-silver-dark leading-relaxed line-clamp-2 mb-4">
                  {member.bio}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[9px] px-2 py-0.5 rounded-xs bg-obsidian-surface border border-obsidian-border text-silver-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Social Actions & Inspect */}
              <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-sm text-silver-dark hover:text-white hover:bg-white/5 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-sm text-silver-dark hover:text-white hover:bg-white/5 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setInspectedMember(member)}
                  className="font-mono text-[10px] uppercase text-lime hover:text-lime-hover tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Member Profile Modal */}
        <ModalOverlay
          isOpen={!!inspectedMember}
          onClose={() => setInspectedMember(null)}
          title={inspectedMember?.name}
          subtitle={`${inspectedMember?.role} // ${inspectedMember?.domain}`}
        >
          {inspectedMember && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-5">
                <ImageFrame
                  assetId={inspectedMember.assetId}
                  aspectRatio="4/5"
                  showPlaceholderTag={false}
                />
              </div>
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h5 className="font-mono text-xs text-lime uppercase tracking-widest mb-1">
                    BIOGRAPHY & FOCUS
                  </h5>
                  <p className="font-sans text-sm text-silver leading-relaxed">
                    {inspectedMember.bio}
                  </p>
                </div>

                <div>
                  <h5 className="font-mono text-xs text-silver-muted uppercase tracking-widest mb-2">
                    CORE SPECIALTIES
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectedMember.skills.map((skill) => (
                      <Badge key={skill} variant="silver" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-obsidian-border flex items-center gap-4">
                  {inspectedMember.github && (
                    <Button
                      href={inspectedMember.github}
                      external
                      variant="outline"
                      size="sm"
                      icon={Github}
                    >
                      GitHub Repo
                    </Button>
                  )}
                  {inspectedMember.linkedin && (
                    <Button
                      href={inspectedMember.linkedin}
                      external
                      variant="secondary"
                      size="sm"
                      icon={Linkedin}
                    >
                      LinkedIn
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </ModalOverlay>
      </div>
    </PageTransition>
  );
}

export default PeoplePage;
