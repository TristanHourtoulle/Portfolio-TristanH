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
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium',
        {
          'bg-blue-600/15 text-blue-600': variant === 'blue',
          'bg-emerald-500/15 text-emerald-600': variant === 'green',
        },
        className
      )}
    >
      {label}
    </span>
  );
}
