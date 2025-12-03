/**
 * Navigation item for header menu
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

/**
 * Badge component variants (Hero section)
 */
export type BadgeVariant = 'blue' | 'green';

export interface Badge {
  id: string;
  label: string;
  variant: BadgeVariant;
}

/**
 * Tech skill card (Skills section)
 */
export interface TechSkill {
  id: string;
  title: string;
  description: string;
  icon?: string;
  technologies?: string[];
}

/**
 * Button component variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
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

/**
 * Site configuration
 */
export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}
