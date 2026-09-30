import type {
  AboutContent,
  AlsoMentionedItem,
  CaseStudy,
  CaseStudySlug,
  ClientColor,
  ClientId,
  FooterLink,
  HeroContent,
  NavItem,
  ProcessStep,
  SiteConfig,
  Testimonial,
  TrustStats,
} from './types';

export const SITE_CONFIG: SiteConfig = {
  brandName: 'Tristan Hourtoulle',
  brandTagline: 'design et dev',
  siteUrl: 'https://www.tristanhourtoulle.fr',
  calendlyUrl: 'https://calendly.com/tristan68420/30min',
  email: 'tristan.hourtoulle@icloud.com',
};

export const NAVIGATION: NavItem[] = [
  { id: 'realisations', label: 'Réalisations', href: '/realisations' },
  { id: 'processus', label: 'Processus', href: '/#processus' },
  { id: 'a-propos', label: 'À propos', href: '/#a-propos' },
];

export const FOOTER_NAVIGATION: NavItem[] = [
  { id: 'realisations', label: 'Réalisations', href: '/realisations' },
  { id: 'processus', label: 'Processus', href: '/#processus' },
  { id: 'a-propos', label: 'À propos', href: '/#a-propos' },
];

export const CLIENT_COLORS: ClientColor[] = [
  {
    id: 'moduloop',
    name: 'Moduloop',
    brand: '#00AAAB',
    ink: '#006C6D',
    inkContrastRatio: 4.51,
    logo: { src: '/images/clients/moduloop.png', width: 300, height: 79 },
  },
  {
    id: 'hosteed',
    name: 'Hosteed',
    brand: '#015993',
    ink: '#015993',
    inkContrastRatio: 5.21,
    logo: { src: '/images/clients/hosteed.png', width: 500, height: 271 },
  },
  {
    id: 'quintyss',
    name: 'Quintyss',
    brand: '#6F93F4',
    ink: '#01164E',
    inkContrastRatio: 12.43,
    logo: { src: '/images/clients/quintyss.svg', width: 65, height: 65 },
  },
];

export const CLIENT_LOGO_SIZES = '128px';

export const CLIENT_COLOR_BY_ID: Record<ClientId, ClientColor> = Object.fromEntries(
  CLIENT_COLORS.map((client) => [client.id, client])
) as Record<ClientId, ClientColor>;

export const HERO_CONTENT: HeroContent = {
  titleKicker: 'Développeur web freelance',
  title: 'Votre produit web, conçu et développé par la même personne.',
  subtitle:
    'Sites vitrines, applications sur mesure et produits complets pour PME, startups et agences. Design dans Figma, développement en Next.js et TypeScript, un seul interlocuteur du premier appel à la mise en ligne.',
  primaryCtaLabel: 'Réserver un appel de 30 min, gratuit',
  primaryCtaHref: SITE_CONFIG.calendlyUrl,
  secondaryCtaLabel: 'Voir mes réalisations',
  secondaryCtaHref: '/#realisations',
  locationNote: 'Basé en France · missions à distance',
};

export const AVAILABILITY_LEAD_DAYS = 15;

export const TRUST_STATS: TrustStats = {
  clientsCount: 12,
  averageRating: 5,
  productsInProduction: 3,
};

export const CASE_STUDY_STACKS: Record<CaseStudySlug, readonly string[]> = {
  hosteed: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'VPS client'],
  'moduloop-impact': ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
  'moduloop-kits': ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'Better Auth'],
  quintyss: ['Next.js', 'TypeScript', 'Fastify', 'Drizzle', 'PostgreSQL', 'Stripe', 'Railway'],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'hosteed',
    clientId: 'hosteed',
    title: 'Hosteed',
    missionType: 'Mission freelance',
    period: 'mai à novembre 2025',
    stack: CASE_STUDY_STACKS.hosteed,
    details: [
      {
        label: 'Contexte',
        value:
          "Plateforme de location de logements dédiée à Madagascar, sur le modèle d'Airbnb : recherche, fiches logements et réservation.",
      },
      {
        label: 'Intervention',
        value:
          'Conception et développement du parcours complet, de la recherche à la réservation, côté voyageur comme côté hôte.',
      },
      {
        label: 'Statut',
        value: 'Livrée, en phase de test client.',
      },
    ],
    caseLinkHref: '/realisations/hosteed',
  },
  {
    id: 'moduloop-impact',
    clientId: 'moduloop',
    title: 'Moduloop Impact',
    missionType: 'Mission freelance',
    period: 'février à juin 2024',
    stack: CASE_STUDY_STACKS['moduloop-impact'],
    details: [
      {
        label: 'Contexte',
        value:
          "Les acteurs de l'aménagement doivent mesurer l'impact environnemental de leurs projets, sans outil adapté à leur métier.",
      },
      {
        label: 'Intervention',
        value:
          'Outil de calcul complet : saisie des données du projet d\'aménagement et visualisation des résultats en temps réel.',
      },
      {
        label: 'Résultat',
        value: 'En production sur moduloop-impact.fr.',
      },
    ],
    caseLinkHref: '/realisations/moduloop-impact',
  },
  {
    id: 'moduloop-kits',
    clientId: 'moduloop',
    title: 'Moduloop Kits',
    missionType: 'Mission freelance',
    period: 'depuis août 2025',
    stack: CASE_STUDY_STACKS['moduloop-kits'],
    details: [
      {
        label: 'Contexte',
        value:
          "Après Moduloop Impact, Moduloop souhaite proposer des kits d'aménagement prêts à l'emploi, avec un calcul immédiat de l'impact environnemental et du prix au mètre carré de chaque kit.",
      },
      {
        label: 'Intervention',
        value:
          'Catalogue de produits, composition de kits, fiches produits détaillées et suivi des projets avec leur impact calculé.',
      },
      {
        label: 'Statut',
        value: 'Mission en cours depuis août 2025.',
      },
    ],
    caseLinkHref: '/realisations/moduloop-kits',
  },
  {
    id: 'quintyss',
    clientId: 'quintyss',
    title: 'Quintyss V3',
    missionType: 'Mission freelance',
    period: 'depuis mars 2025',
    stack: CASE_STUDY_STACKS.quintyss,
    details: [
      {
        label: 'Contexte',
        value:
          'CMS nouvelle génération : créer un site via une interface intuitive, avec paiements, articles, blog, référencement et traduction automatisée.',
      },
      {
        label: 'Intervention',
        value:
          "Full-stack et lead dev d'une équipe de deux développeurs : architecture, développement et revue de code.",
      },
      {
        label: 'Statut',
        value: 'En développement actif.',
      },
    ],
    caseLinkHref: '/realisations/quintyss',
  },
];

export const ALSO_MENTIONED_INTRO = 'Également, à titre personnel : ';

export const ALSO_MENTIONED_ITEMS: AlsoMentionedItem[] = [
  {
    clientId: null,
    label: 'Edukai',
    href: 'https://edukai.fr',
    trailingText:
      ', fiches de révision, quiz et résumés générés par IA à partir des cours des étudiants, en ligne sur edukai.fr.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'decouverte',
    numberLabel: '1',
    title: 'Appel découverte',
    note: "30 minutes, gratuit et sans engagement. On parle de votre activité, de votre objectif et de ce qui bloque aujourd'hui.",
  },
  {
    id: 'proposition',
    numberLabel: '2',
    title: 'Proposition chiffrée',
    note: 'Sous 5 jours : périmètre détaillé, budget ferme et planning. Vous signez en connaissant le prix et la date de livraison.',
  },
  {
    id: 'sprints',
    numberLabel: '3',
    title: 'Sprints hebdomadaires',
    note: "Une démo chaque semaine, sur un lien de test que vous pouvez partager. Les ajustements se font au fil de l'eau, pas à la fin.",
  },
  {
    id: 'livraison',
    numberLabel: '4',
    title: 'Livraison et suite',
    note: 'Mise en ligne, formation à l\'outil, transfert complet du code. Maintenance optionnelle si vous souhaitez déléguer la suite.',
  },
];

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
      'Deuxième mission accomplie avec succès, rien à dire. On continue les yeux fermés. Merci Tristan pour la qualité de ton accompagnement.',
  },
  {
    id: 'corinne',
    name: 'Corinne E.',
    rating: 5,
    review: 'Travail de qualité, bon échange. Je referai appel à ses services si besoin !',
  },
  {
    id: 'timothe',
    name: 'Timothé C.',
    rating: 5,
    review:
      "J'ai pu travailler avec Tristan à de multiples reprises, son travail est toujours qualitatif et rapide.",
  },
];

export const ABOUT_CONTENT: AboutContent = {
  paragraphs: [
    "Je m'appelle Tristan Hourtoulle, développeur web full-stack et designer freelance. Je conçois les interfaces dans Figma, puis je les développe moi-même en Next.js et TypeScript : rien ne se perd entre la maquette et le produit final.",
    'Vous parlez à une seule personne, du premier appel à la mise en ligne. Pas de chef de projet à relancer, pas de couche commerciale, pas d\'aller-retour entre un designer et un développeur qui ne se connaissent pas.',
    'Je travaille depuis 2024 avec des PME, des startups et des agences, sur des produits qui sont aujourd\'hui en production et utilisés chaque jour.',
  ],
  toolsHeading: 'Outils du quotidien',
  tools: ['Figma', 'Next.js · TypeScript', 'Tailwind CSS', 'Node.js · PostgreSQL', 'Railway'],
};

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/TristanHourtoulle', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/tristan-hourtoulle/', icon: 'linkedin' },
  { id: 'email', label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
  { id: 'mentions', label: 'Mentions légales', href: '/mentions-legales' },
];
