import type { NavItem, Badge, TechSkill, SiteConfig } from './types';

/**
 * Navigation menu items
 */
export const NAVIGATION: NavItem[] = [
  { id: 'accueil', label: 'Accueil', href: '#hero' },
  { id: 'competences', label: 'Compétences', href: '#skills' },
  { id: 'projets', label: 'Projets', href: '#projects' },
  { id: 'testimoniaux', label: 'Testimoniaux', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/**
 * Hero section badges
 */
export const HERO_BADGES: Badge[] = [
  { id: 'dev', label: 'Développeur Web', variant: 'blue' },
  { id: 'designer', label: 'Designer Web', variant: 'green' },
];

/**
 * Tech skills for the Skills section
 */
export const TECH_SKILLS: TechSkill[] = [
  {
    id: 'nextjs',
    title: 'Next.JS',
    description: 'Framework React pour applications web modernes et performantes.',
    icon: 'nextjs',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: 'Framework CSS utilitaire pour un design rapide et cohérent.',
    icon: 'tailwind',
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'JavaScript typé pour des applications robustes et maintenables.',
    icon: 'typescript',
  },
  {
    id: 'backend',
    title: 'Backend/BDD/Déploiement',
    description: 'Stack complète avec Node.js, Supabase et Vercel.',
    technologies: ['Node.js', 'Supabase', 'Vercel'],
  },
  {
    id: 'figma',
    title: 'Figma',
    description: "Design d'interfaces utilisateur modernes et intuitives.",
    icon: 'figma',
  },
];

/**
 * Site-wide configuration
 */
export const SITE_CONFIG: SiteConfig = {
  name: 'Tristan H.',
  title: 'Je ne crée pas de site mais des expériences',
  subtitle:
    "Développeur web passionné par la création d'expériences digitales uniques et performantes.",
  ctaText: 'Discutons de votre projet',
  ctaHref: '#contact',
};

/**
 * Social links (for future use)
 */
export const SOCIAL_LINKS = {
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  twitter: 'https://twitter.com/',
} as const;
