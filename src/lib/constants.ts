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
 * Descriptions match the Figma design exactly
 */
export const TECH_SKILLS: TechSkill[] = [
  {
    id: 'nextjs',
    title: 'Next.JS',
    description: "J'utilise Next.JS pour créer des applications performantes et maintenable dans le temps.",
    icon: 'nextjs',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: "Le meilleur outil pour gérer le CSS facilement tout en l'optimisant.",
    icon: 'tailwind',
  },
  {
    id: 'typescript',
    title: 'Typescript',
    description: 'Permet de respecter une norme strict dans notre code avec un typage obligatoire.',
    icon: 'typescript',
  },
  {
    id: 'backend',
    title: 'Backend, Base de donnée, Déploiement',
    description: 'Optimisation du backend, stockage de données sécurisé et déploiement automatisé.',
    technologies: ['Node.js', 'Postgres', 'Supabase', 'Vercel'],
  },
  {
    id: 'figma',
    title: 'Figma',
    description: "Quoi de mieux qu'un développeur qui sait designer ?",
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
