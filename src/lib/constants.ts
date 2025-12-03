import type {
  NavItem,
  Badge,
  TechSkill,
  SiteConfig,
  Project,
  Testimonial,
  TestimonialsConfig,
} from './types';

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
    description:
      "J'utilise Next.JS pour créer des applications performantes et maintenable dans le temps.",
    icon: 'nextjs',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description:
      "Le meilleur outil pour gérer le CSS facilement tout en l'optimisant.",
    icon: 'tailwind',
  },
  {
    id: 'typescript',
    title: 'Typescript',
    description:
      'Permet de respecter une norme strict dans notre code avec un typage obligatoire.',
    icon: 'typescript',
  },
  {
    id: 'backend',
    title: 'Backend, Base de donnée, Déploiement',
    description:
      'Optimisation du backend, stockage de données sécurisé et déploiement automatisé.',
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

/**
 * Projects for the Projects section
 * Sorted by most recent first, portfolio always last
 */
export const PROJECTS: Project[] = [
  // Moduloop Kit: Août 2025 - aujourd'hui (le plus récent en cours)
  {
    id: 'moduloop-kit',
    title: 'Moduloop Kit',
    description:
      "Plateforme de création de kits d'aménagement (ex: kit cafétéria). Permet de consulter l'impact environnemental, le prix au m², les différences entre achat et location, et facilite la conversion client.",
    logo: '/images/projects-logo/Moduloop.svg',
    type: 'freelance',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'TypeScript', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'Application web', category: 'type' },
    ],
    status: 'live',
    startDate: { month: 8, year: 2025 },
    // endDate undefined = aujourd'hui
  },
  // Hosteed: Mai 2025 - Novembre 2025
  {
    id: 'hosteed',
    title: 'Hosteed',
    description:
      "Plateforme de location type Airbnb dédiée à Madagascar. Interface moderne et performante pour la recherche et réservation d'hébergements. Actuellement en phase de test client.",
    logo: '/images/projects-logo/Hosteed.svg',
    type: 'freelance',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'TypeScript', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'Application web', category: 'type' },
    ],
    status: 'coming-soon',
    startDate: { month: 5, year: 2025 },
    endDate: { month: 11, year: 2025 },
  },
  // Quintyss V3: Mars 2025 - aujourd'hui
  {
    id: 'quintyss',
    title: 'Quintyss V3',
    description:
      "CMS nouvelle génération permettant de créer facilement un site Internet via une interface intuitive. Intègre des applications de gestion de paiements, articles, blogs, SEO et traduction automatisée. En tant que full-stack développeur, je gère également l'équipe de deux développeurs sur ce projet.",
    logo: '/images/projects-logo/Quintyss.svg',
    type: 'freelance',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'TypeScript', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'Application web', category: 'type' },
      { label: 'Lead Dev', category: 'other' },
    ],
    status: 'coming-soon',
    startDate: { month: 3, year: 2025 },
    // endDate undefined = aujourd'hui
  },
  // Edukai: Juillet 2024 - aujourd'hui
  {
    id: 'edukai',
    title: 'Edukai',
    description:
      "Outil pour les étudiants permettant de générer instantanément des supports de révision grâce à l'IA, basés sur leurs propres cours. Fiches, quiz et résumés générés automatiquement.",
    logo: '/images/projects-logo/Edukai.svg',
    type: 'personal',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'Supabase', category: 'tech' },
      { label: 'OpenAI', category: 'tech' },
      { label: 'Application web', category: 'type' },
      { label: 'IA', category: 'other' },
    ],
    status: 'live',
    url: 'https://www.edukai.fr',
    startDate: { month: 7, year: 2024 },
    // endDate undefined = aujourd'hui
  },
  // Moduloop Impact: Février 2024 - Juin 2024
  {
    id: 'moduloop-impact',
    title: 'Moduloop Impact',
    description:
      "Outil web permettant de calculer l'impact environnemental d'un projet d'aménagement. Interface intuitive pour la saisie des données projet et visualisation des résultats en temps réel.",
    logo: '/images/projects-logo/Moduloop.svg',
    type: 'freelance',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'TypeScript', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'Site web', category: 'type' },
    ],
    status: 'live',
    url: 'https://moduloop-impact.fr',
    startDate: { month: 2, year: 2024 },
    endDate: { month: 6, year: 2024 },
  },
  // Portfolio: Décembre 2025 (toujours en dernier)
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Mon portfolio personnel présentant mes projets, compétences et témoignages clients. Design moderne et performant avec animations fluides.',
    logo: '/images/TristanH.svg',
    type: 'personal',
    tags: [
      { label: 'Next.js', category: 'tech' },
      { label: 'Tailwind CSS', category: 'tech' },
      { label: 'TypeScript', category: 'tech' },
      { label: 'Site web', category: 'type' },
    ],
    status: 'live',
    startDate: { month: 12, year: 2025 },
    endDate: { month: 12, year: 2025 },
  },
];

/**
 * Testimonials for the Testimonials section
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'paul',
    name: 'Paul L.',
    rating: 5,
    review:
      'Tristan est positif et optimiste, ce qui rend le travail en équipe très agréable. Il est capable de faire face aux problèmes et de les résoudre en toute autonomie. Son travail est de qualité. Son éthique de travail est excellente, il est respectueux des délais et très impliqué.',
  },
  {
    id: 'cyril',
    name: 'Cyril K.',
    rating: 5,
    review:
      'Un plaisir de travailler avec Tristan, organisé et sérieux, il se plie en quatre pour trouver les solutions à nos problématiques. Je recommande !',
  },
  {
    id: 'vincent',
    name: 'Vincent G.',
    rating: 5,
    review:
      '2ème mission accomplie avec succès... rien à dire. On continue les yeux fermés... Merci Tristan pour la qualité de ton accompagnement',
    variant: 'featured',
  },
  {
    id: 'corinne',
    name: 'Corinne E.',
    rating: 5,
    review:
      'Travail de qualité, bon échange. Je referai appel à ses services si besoin !',
  },
  {
    id: 'timothe',
    name: 'Timothé C.',
    rating: 5,
    review:
      "J'ai pu travailler avec Tristan à de multiples reprises, son travail est toujours qualitatif et rapide",
  },
];

/**
 * Testimonials section configuration
 */
export const TESTIMONIALS_CONFIG: TestimonialsConfig = {
  averageRating: 5,
  totalClients: 12,
};
