import { clsx } from 'clsx';
import type { ProjectTag as ProjectTagType } from '@/lib/types';

interface ProjectTagProps {
  tag: ProjectTagType;
  className?: string;
}

export function ProjectTag({ tag, className }: ProjectTagProps) {
  const categoryStyles = {
    tech: 'bg-primary-blue/10 text-primary-blue',
    type: 'bg-secondary-green/10 text-secondary-green',
    other: 'bg-text-light/20 text-text-light',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
        categoryStyles[tag.category],
        className
      )}
    >
      {tag.label}
    </span>
  );
}
