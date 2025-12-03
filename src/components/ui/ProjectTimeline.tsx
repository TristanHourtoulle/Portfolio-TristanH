'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { ExternalLink, Lock, Clock, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ProjectTag } from '@/components/ui/ProjectTag';
import type { Project, ProjectDate } from '@/lib/types';

interface ProjectTimelineProps {
  projects: Project[];
}

const MONTH_NAMES = [
  'Jan',
  'Fév',
  'Mar',
  'Avr',
  'Mai',
  'Juin',
  'Juil',
  'Août',
  'Sep',
  'Oct',
  'Nov',
  'Déc',
];

function formatDate(date: ProjectDate): string {
  return `${MONTH_NAMES[date.month - 1]} ${date.year}`;
}

function calculateDuration(startDate: ProjectDate, endDate?: ProjectDate): string {
  const now = new Date();
  const end = endDate
    ? new Date(endDate.year, endDate.month - 1)
    : new Date(now.getFullYear(), now.getMonth());
  const start = new Date(startDate.year, startDate.month - 1);

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  if (totalMonths < 1) return '< 1 mois';
  if (totalMonths === 1) return '1 mois';
  return `${totalMonths} mois`;
}

export function ProjectTimeline({ projects }: ProjectTimelineProps) {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const activeProject = projects.find((p) => p.id === activeProjectId);
  const activeIndex = useMemo(
    () => projects.findIndex((p) => p.id === activeProjectId),
    [projects, activeProjectId]
  );

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!activeProject) return null;

  const handleProjectChange = (projectId: string) => {
    if (projectId === activeProjectId) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProjectId(projectId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 30);
    }, 100);
  };

  const getStatusButton = (project: Project) => {
    // Special case for portfolio - user is already on it
    if (project.id === 'portfolio') {
      return (
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-green/10 text-secondary-green rounded-lg font-medium text-sm cursor-default">
          <Check className="w-4 h-4" />
          Vous y êtes déjà !
        </span>
      );
    }

    switch (project.status) {
      case 'live':
        return (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg font-medium text-sm hover:bg-primary-blue-dark transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Voir le projet
          </a>
        );
      case 'private':
        return (
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-text-light/10 text-text-light rounded-lg font-medium text-sm cursor-not-allowed">
            <Lock className="w-4 h-4" />
            Projet privé
          </span>
        );
      case 'coming-soon':
        return (
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-lg font-medium text-sm cursor-not-allowed">
            <Clock className="w-4 h-4" />
            Bientôt disponible
          </span>
        );
    }
  };

  const getDateDisplay = (project: Project) => {
    const startFormatted = formatDate(project.startDate);
    const endFormatted = project.endDate ? formatDate(project.endDate) : "Aujourd'hui";
    const duration = calculateDuration(project.startDate, project.endDate);

    return `${startFormatted} - ${endFormatted} • ${duration}`;
  };

  // Calculate the position of the blue indicator
  // Each button is 44px height (py-3 = 12px * 2 + text ~20px)
  const buttonHeight = 44;
  const indicatorTop = activeIndex * buttonHeight;

  return (
    <div
      ref={timelineRef}
      className="flex flex-col md:flex-row gap-6 md:gap-10"
    >
      {/* Tab List - Left side with relative border */}
      <div
        className={clsx(
          'relative flex md:flex-col gap-2 md:gap-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0',
          'transition-all duration-500 ease-out',
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        )}
      >
        {/* Gray vertical line (background) */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-text-light/20" />

        {/* Blue animated indicator */}
        <div
          className="hidden md:block absolute left-0 w-0.5 bg-primary-blue transition-all duration-200 ease-out z-10"
          style={{
            top: `${indicatorTop}px`,
            height: `${buttonHeight}px`,
          }}
        />

        <div
          role="tablist"
          aria-label="Liste des projets"
          className="flex md:flex-col gap-2 md:gap-0"
        >
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={activeProjectId === project.id}
              aria-controls={`panel-${project.id}`}
              onClick={() => handleProjectChange(project.id)}
              className={clsx(
                'px-4 py-3 text-left text-sm font-medium whitespace-nowrap md:whitespace-normal',
                'rounded-lg md:rounded-none md:rounded-r-lg cursor-pointer',
                'transition-all duration-200 ease-out',
                activeProjectId === project.id
                  ? 'bg-primary-blue/10 text-primary-blue scale-[1.02]'
                  : 'text-text-light hover:text-text-dark hover:bg-primary-blue/5 hover:scale-[1.01]'
              )}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content - Right side */}
      <div
        id={`panel-${activeProject.id}`}
        role="tabpanel"
        aria-labelledby={activeProject.id}
        className={clsx(
          'flex-1',
          'transition-all duration-500 ease-out delay-150',
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-8'
        )}
      >
        <div
          className={clsx(
            'bg-card-bg rounded-2xl p-6 border-2 border-gray-300/10 dark:border-gray-500/10 h-full flex flex-col min-h-80',
            'transition-all duration-150 ease-out',
            isTransitioning
              ? 'opacity-0 translate-y-2 scale-[0.98]'
              : 'opacity-100 translate-y-0 scale-100'
          )}
        >
          {/* Header: Logo + Title/Date + Badge aligned right */}
          <div className="flex items-center gap-4 mb-4">
            {/* Logo */}
            <div className="w-12 h-12 relative shrink-0 rounded-lg overflow-hidden bg-background">
              <Image
                src={activeProject.logo}
                alt={`Logo ${activeProject.title}`}
                fill
                className="object-contain p-1"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* Title + Date */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-text-dark">
                {activeProject.title}
              </h3>
              <p className="text-sm text-text-light/60">{getDateDisplay(activeProject)}</p>
            </div>

            {/* Badge aligned right */}
            <Badge
              label={activeProject.type === 'freelance' ? 'Freelance' : 'Projet perso'}
              variant={activeProject.type === 'freelance' ? 'blue' : 'green'}
            />
          </div>

          {/* Description - flex-grow to push content down */}
          <p className="text-text-light leading-relaxed mb-6 grow">
            {activeProject.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {activeProject.tags.map((tag, index) => (
              <ProjectTag key={`${tag.label}-${index}`} tag={tag} />
            ))}
          </div>

          {/* Action Button - always at bottom */}
          <div className="mt-auto">{getStatusButton(activeProject)}</div>
        </div>
      </div>
    </div>
  );
}
