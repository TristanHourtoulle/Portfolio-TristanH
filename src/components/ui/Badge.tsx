import { clsx } from 'clsx';
import type { BadgeVariant } from '@/lib/types';

interface BadgeProps {
  label: string;
  variant: BadgeVariant;
  className?: string;
}

export function Badge({ label, variant, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white',
        {
          'bg-primary-blue': variant === 'blue',
          'bg-secondary-green': variant === 'green',
        },
        className
      )}
    >
      {label}
    </span>
  );
}
