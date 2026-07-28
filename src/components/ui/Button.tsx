import { clsx } from 'clsx';
import type { ButtonVariant } from '@/lib/types';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href: string;
  className?: string;
  ariaLabel?: string;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'btn btn-primary',
  ghost: 'btn btn-ghost',
  invert: 'btn btn-invert',
};

/**
 * Every call-to-action in the design is a link (Calendly, an in-page
 * anchor, or mailto), so this stays link-only, matching the mockup's
 * `.btn` classes rather than reinventing a generic clickable button.
 */
export function Button({ variant = 'primary', children, href, className, ariaLabel }: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  return (
    <a
      href={href}
      className={clsx(VARIANT_CLASS[variant], className)}
      aria-label={ariaLabel}
      target={isExternal && !href.startsWith('mailto:') ? '_blank' : undefined}
      rel={isExternal && !href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
