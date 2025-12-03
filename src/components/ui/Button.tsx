'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import type { ButtonVariant, ButtonSize } from '@/lib/types';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-linear-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 focus:ring-blue-600/50 shadow-md hover:shadow-lg',
  secondary:
    'bg-secondary-green text-white hover:bg-emerald-600 focus:ring-secondary-green/50',
  outline:
    'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-600/50',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  onClick,
  disabled = false,
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href && !disabled) {
    // External links (http/https/mailto) open in new tab
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');

    if (isExternal) {
      return (
        <a
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className={baseStyles}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {content}
    </button>
  );
}
