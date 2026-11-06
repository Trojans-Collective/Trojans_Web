import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { ModalOverlay } from '../../components/ui/ModalOverlay';
import { PROJECTS_DATA } from '../../data/projects';

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          title="Project archive"
          subtitle="Project details and links will be added when they have been confirmed."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
            >
              <ImageFrame assetId={project.assetId} aspectRatio="16/9" />
              <span className="mt-3 block font-display text-lg text-silver-bright transition-colors group-hover:text-lime">
                {project.title}
              </span>
            </button>
          ))}
        </div>

        <ModalOverlay
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="space-y-4">
              <ImageFrame assetId={selectedProject.assetId} aspectRatio="16/9" showPlaceholderTag={false} />
              <p className="text-sm text-silver-muted">{selectedProject.description}</p>
            </div>
          )}
        </ModalOverlay>
      </div>
    </PageTransition>
  );
}

export default ProjectsPage;
