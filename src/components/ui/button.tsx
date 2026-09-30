import { clsx } from 'clsx';
import type { ButtonVariant } from '@/lib/types';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href: string;
  className?: string;
  ariaLabel?: string;
  downloadFileName?: string;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'btn btn-primary',
  ghost: 'btn btn-ghost',
  invert: 'btn btn-invert',
  'invert-ghost': 'btn btn-invert-ghost',
};

/**
 * Call-to-action link styled as a button.
 *
 * @param downloadFileName File name to save the target under, which also keeps the link in the current tab.
 * @returns The anchor element.
 */
export function Button({
  variant = 'primary',
  children,
  href,
  className,
  ariaLabel,
  downloadFileName,
}: ButtonProps) {
  const opensInNewTab =
    downloadFileName === undefined && href.startsWith('http');

  return (
    <a
      href={href}
      className={clsx(VARIANT_CLASS[variant], className)}
      aria-label={ariaLabel}
      download={downloadFileName}
      target={opensInNewTab ? '_blank' : undefined}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
