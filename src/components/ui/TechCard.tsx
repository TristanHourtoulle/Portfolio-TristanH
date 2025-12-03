import { clsx } from 'clsx';
import {
  Box,
  Paintbrush,
  Code2,
  Server,
  Figma,
  type LucideIcon,
} from 'lucide-react';

interface TechCardProps {
  title: string;
  description: string;
  icon?: string;
  technologies?: string[];
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  nextjs: Box,
  tailwind: Paintbrush,
  typescript: Code2,
  backend: Server,
  figma: Figma,
};

export function TechCard({
  title,
  description,
  icon,
  technologies,
  className,
}: TechCardProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div
      className={clsx(
        'bg-card-bg rounded-lg p-6',
        'shadow-md hover:shadow-lg',
        'hover:-translate-y-1',
        'transition-all duration-300',
        'border border-gray-100 dark:border-gray-800',
        className
      )}
    >
      {/* Icon or Technologies list */}
      <div className="mb-4">
        {IconComponent ? (
          <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-primary-blue" />
          </div>
        ) : technologies && technologies.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-text-dark dark:bg-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : (
          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Box className="w-6 h-6 text-text-light" />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-text-dark mb-2">{title}</h3>

      {/* Description */}
      <p className="text-base text-text-light leading-relaxed">{description}</p>
    </div>
  );
}
