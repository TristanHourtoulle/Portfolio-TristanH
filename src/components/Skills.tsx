'use client';

import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { TechCard } from '@/components/ui/TechCard';
import { TECH_SKILLS } from '@/lib/constants';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Get skills by id for positioning
  const nextjs = TECH_SKILLS.find((s) => s.id === 'nextjs');
  const tailwind = TECH_SKILLS.find((s) => s.id === 'tailwind');
  const typescript = TECH_SKILLS.find((s) => s.id === 'typescript');
  const backend = TECH_SKILLS.find((s) => s.id === 'backend');
  const figma = TECH_SKILLS.find((s) => s.id === 'figma');

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-8 md:py-12" ref={sectionRef}>
      <div className="container-portfolio">
        {/* Asymmetric Grid Layout - Matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Row 1: 3 equal cards */}
          <div
            className={clsx(
              'transition-all duration-500 ease-out',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {nextjs && (
              <TechCard
                title={nextjs.title}
                description={nextjs.description}
                icon={nextjs.icon}
              />
            )}
          </div>
          <div
            className={clsx(
              'transition-all duration-500 ease-out delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {tailwind && (
              <TechCard
                title={tailwind.title}
                description={tailwind.description}
                icon={tailwind.icon}
              />
            )}
          </div>
          <div
            className={clsx(
              'transition-all duration-500 ease-out delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {typescript && (
              <TechCard
                title={typescript.title}
                description={typescript.description}
                icon={typescript.icon}
              />
            )}
          </div>

          {/* Row 2: 1 large card (2 cols) + 1 medium card (1 col) - same height */}
          <div
            className={clsx(
              'md:col-span-2 h-full transition-all duration-500 ease-out delay-300',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {backend && (
              <TechCard
                title={backend.title}
                description={backend.description}
                technologies={backend.technologies}
                size="large"
              />
            )}
          </div>
          <div
            className={clsx(
              'h-full transition-all duration-500 ease-out delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {figma && (
              <TechCard
                title={figma.title}
                description={figma.description}
                icon={figma.icon}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
