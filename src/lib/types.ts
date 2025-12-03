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

/**
 * Project types for Projects section
 */
export type ProjectType = 'freelance' | 'personal';

export type ProjectStatus = 'live' | 'private' | 'coming-soon';

export type ProjectTagCategory = 'tech' | 'type' | 'other';

export interface ProjectTag {
  label: string;
  category: ProjectTagCategory;
}

export interface ProjectDate {
  month: number; // 1-12
  year: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  logo: string;
  type: ProjectType;
  tags: ProjectTag[];
  status: ProjectStatus;
  url?: string;
  startDate: ProjectDate;
  endDate?: ProjectDate; // undefined = ongoing (aujourd'hui)
}

/**
 * Testimonial types for Testimonials section
 */
export type TestimonialVariant = 'default' | 'featured';

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  variant?: TestimonialVariant;
}

export interface TestimonialsConfig {
  averageRating: number;
  totalClients: number;
}
