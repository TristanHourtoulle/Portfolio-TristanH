import { TechCard } from '@/components/ui/TechCard';
import { TECH_SKILLS } from '@/lib/constants';

export function Skills() {
  // Get skills by id for positioning
  const nextjs = TECH_SKILLS.find((s) => s.id === 'nextjs');
  const tailwind = TECH_SKILLS.find((s) => s.id === 'tailwind');
  const typescript = TECH_SKILLS.find((s) => s.id === 'typescript');
  const backend = TECH_SKILLS.find((s) => s.id === 'backend');
  const figma = TECH_SKILLS.find((s) => s.id === 'figma');

  return (
    <section id="skills" className="py-8 md:py-12">
      <div className="container-portfolio">
        {/* Asymmetric Grid Layout - Matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Row 1: 3 equal cards */}
          {nextjs && (
            <TechCard
              title={nextjs.title}
              description={nextjs.description}
              icon={nextjs.icon}
            />
          )}
          {tailwind && (
            <TechCard
              title={tailwind.title}
              description={tailwind.description}
              icon={tailwind.icon}
            />
          )}
          {typescript && (
            <TechCard
              title={typescript.title}
              description={typescript.description}
              icon={typescript.icon}
            />
          )}

          {/* Row 2: 1 large card (2 cols) + 1 medium card (1 col) */}
          {backend && (
            <TechCard
              title={backend.title}
              description={backend.description}
              technologies={backend.technologies}
              className="md:col-span-2"
              size="large"
            />
          )}
          {figma && (
            <TechCard
              title={figma.title}
              description={figma.description}
              icon={figma.icon}
            />
          )}
        </div>
      </div>
    </section>
  );
}
