import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { ModalOverlay } from '../../components/ui/ModalOverlay';
import { PROJECTS_DATA } from '../../data/projects';
import { Github, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="05_CODE_REPOS"
          tag="PROJECT PORTALS"
          title="Dimensional Project Portals"
          subtitle="Real systems built by Trojans Collective. From distributed edge protocols to autonomous AI agents and GPU shader workstations."
        />

        {/* Project Showcase List */}
        <div className="space-y-12">
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={proj.id}
              className="p-6 sm:p-8 rounded-lg bg-obsidian-card border border-obsidian-border hover:border-lime/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Screenshot Preview */}
              <div
                className="lg:col-span-6 cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                <ImageFrame
                  assetId={proj.assetId}
                  aspectRatio="16/9"
                />
              </div>

              {/* Project Metadata & Actions */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-lime uppercase tracking-widest">
                      // 0{idx + 1} • {proj.category}
                    </span>
                    <Badge variant={proj.status.includes('Winner') ? 'spartan' : 'lime'} size="sm">
                      {proj.status}
                    </Badge>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(proj)}
                    className="font-display text-3xl font-bold text-silver-bright hover:text-lime transition-colors cursor-pointer mb-2"
                  >
                    {proj.title}
                  </h3>

                  <p className="font-sans text-sm font-medium text-silver-muted mb-4">
                    {proj.tagline}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-silver-dark leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-xs bg-obsidian-surface border border-obsidian-border text-silver"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-obsidian-border">
                  {proj.liveUrl && (
                    <Button
                      href={proj.liveUrl}
                      external
                      variant="primary"
                      size="sm"
                      icon={ExternalLink}
                      iconPosition="right"
                    >
                      Live Demo
                    </Button>
                  )}
                  {proj.githubUrl && (
                    <Button
                      href={proj.githubUrl}
                      external
                      variant="secondary"
                      size="sm"
                      icon={Github}
                    >
                      View Source
                    </Button>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(proj)}
                    className="font-mono text-xs uppercase text-silver-dark hover:text-lime tracking-wider ml-auto cursor-pointer"
                  >
                    Inspect Specs &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ModalOverlay
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
          subtitle={`${selectedProject?.category} // ${selectedProject?.year}`}
        >
          {selectedProject && (
            <div className="space-y-6">
              <ImageFrame
                assetId={selectedProject.assetId}
                aspectRatio="16/9"
                showPlaceholderTag={false}
              />
              <div>
                <h4 className="font-mono text-xs text-lime uppercase tracking-widest mb-1">
                  SYSTEM OVERVIEW
                </h4>
                <p className="font-sans text-sm text-silver leading-relaxed mb-4">
                  {selectedProject.description}
                </p>
                <p className="font-sans text-xs text-silver-muted leading-relaxed">
                  {selectedProject.tagline}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-silver-muted uppercase tracking-widest mb-2">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <Badge key={t} variant="silver" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
                <span className="font-mono text-xs text-silver-dark">
                  STATUS: {selectedProject.status}
                </span>
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <Button href={selectedProject.githubUrl} external variant="outline" size="sm" icon={Github}>
                      GitHub
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button href={selectedProject.liveUrl} external variant="primary" size="sm" icon={ExternalLink}>
                      Live
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

export default ProjectsPage;
