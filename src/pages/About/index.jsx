import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ArrowUpRight, Code, Cpu, Target, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="01_ORIGINS"
          tag="ABOUT THE COLLECTIVE"
          title="Not a club. A collective of builders."
          subtitle="Trojans Collective was formed by engineering students dissatisfied with passive seminar clubs. We wanted an intense, hands-on guild where the primary currency is what you build and ship."
        />

        {/* Hero Visual / Authentic Photo Placement */}
        <div className="mb-16">
          <ImageFrame
            assetId="founders-group-primary"
            aspectRatio="21/9"
            caption="The Founding Architects during the initial collective launch"
          />
        </div>

        {/* Core Principles Grid */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-bold text-silver-bright mb-8">
            Our Operating Principles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Ship Over Theorize',
                desc: 'A working prototype running in production beats 50 slides of architecture theory every single time.',
                icon: Code,
              },
              {
                title: 'High-Velocity Pods',
                desc: 'We operate in lean, multidisciplinary squads designed for rapid iteration under extreme hackathon deadlines.',
                icon: Target,
              },
              {
                title: 'Radical Collaboration',
                desc: 'Knowledge is never gatekept. Senior builders actively pair-program with new initiates to level up everyone.',
                icon: Users,
              },
              {
                title: 'Technical Depth',
                desc: 'We explore distributed protocols, autonomous agents, WebGL shaders, and systems-level engineering.',
                icon: Cpu,
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-6 rounded-md bg-obsidian-surface border border-obsidian-border flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-lime">0{idx + 1}</span>
                    <Icon className="w-5 h-5 text-silver-dark" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-silver-bright mb-2">
                      {p.title}
                    </h4>
                    <p className="font-sans text-xs text-silver-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Culture Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 rounded-lg bg-obsidian-card border border-obsidian-border mb-16">
          <div className="lg:col-span-7">
            <Badge variant="lime" dot size="sm" className="mb-4">
              COMMUNITY CULTURE
            </Badge>
            <h3 className="font-display text-3xl font-bold text-silver-bright mb-4">
              Built in the Trenches of 36-Hour Hackathons
            </h3>
            <p className="font-sans text-sm text-silver-muted leading-relaxed mb-6">
              Our culture isn't forged in corporate lecture halls. It's forged at 3:00 AM over cold pizza, debugging WebAssembly memory faults, and pitching working software to industry judges.
            </p>
            <Button to="/people" variant="secondary" size="md" icon={ArrowUpRight} iconPosition="right">
              Meet Our Core Team
            </Button>
          </div>
          <div className="lg:col-span-5">
            <ImageFrame
              assetId="culture-whiteboard-arch"
              aspectRatio="16/9"
              caption="Whiteboard session designing microservices topology"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default AboutPage;
