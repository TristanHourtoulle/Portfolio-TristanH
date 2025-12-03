'use client';

import { ProjectTimeline } from '@/components/ui/ProjectTimeline';
import { PROJECTS } from '@/lib/constants';

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container-portfolio">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">
            <span className="text-primary-blue">02.</span> Mes projets
          </h2>
          <p className="text-text-light">Florilège de mes principaux projets réalisés en freelance et personnels.</p>
        </div>

        {/* Projects Timeline */}
        <ProjectTimeline projects={PROJECTS} />
      </div>
    </section>
  );
}
