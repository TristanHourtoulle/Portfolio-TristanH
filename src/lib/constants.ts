import type {
  AboutContent,
  CaseStudy,
  CaseStudySlug,
  ClientColor,
  ClientId,
  CtaContent,
  ExperienceEntry,
  FooterLink,
  HeroContent,
  NavItem,
  ProcessStep,
  ProfileAction,
  SiteConfig,
  Testimonial,
} from './types';

export const SITE_CONFIG: SiteConfig = {
  brandName: 'Tristan Hourtoulle',
  brandTagline: 'développeur web full-stack',
  siteUrl: 'https://www.tristanhourtoulle.fr',
  linkedinUrl: 'https://www.linkedin.com/in/tristan-hourtoulle/',
  email: 'tristan.hourtoulle@icloud.com',
};

/**
 * Public path of the CV PDF, set once the file is added to `public/`.
 */
export const CV_PDF_PATH: string | null = null;

const CV_DOWNLOAD_FILE_NAME = 'tristan-hourtoulle-cv.pdf';

const LINKEDIN_ACTION: ProfileAction = {
  label: 'Profil LinkedIn',
  href: SITE_CONFIG.linkedinUrl,
};

const CV_ACTION: ProfileAction | null =
  CV_PDF_PATH === null
    ? null
    : {
        label: 'Télécharger mon CV (PDF)',
        href: CV_PDF_PATH,
        downloadFileName: CV_DOWNLOAD_FILE_NAME,
      };

export const PROFILE_PRIMARY_ACTION: ProfileAction = CV_ACTION ?? LINKEDIN_ACTION;

export const PROFILE_SECONDARY_ACTION: ProfileAction | null =
  CV_ACTION === null ? null : LINKEDIN_ACTION;

export const NAVIGATION: NavItem[] = [
  { id: 'experience', label: 'Expérience', href: '/#experience' },
  { id: 'realisations', label: 'Réalisations', href: '/realisations' },
  { id: 'parcours', label: 'Parcours', href: '/parcours' },
  { id: 'processus', label: 'Processus', href: '/#processus' },
  { id: 'a-propos', label: 'À propos', href: '/#a-propos' },
];

export const FOOTER_NAVIGATION: NavItem[] = [
  { id: 'experience', label: 'Expérience', href: '/#experience' },
  { id: 'realisations', label: 'Réalisations', href: '/realisations' },
  { id: 'parcours', label: 'Parcours', href: '/parcours' },
  { id: 'processus', label: 'Processus', href: '/#processus' },
  { id: 'a-propos', label: 'À propos', href: '/#a-propos' },
];

const CLIENT_COLORS: ClientColor[] = [
  {
    id: 'moduloop',
    name: 'Moduloop',
    brand: '#00AAAB',
    ink: '#006C6D',
    logo: { src: '/images/clients/moduloop.png', width: 300, height: 79 },
  },
  {
    id: 'hosteed',
    name: 'Hosteed',
    brand: '#015993',
    ink: '#015993',
    logo: { src: '/images/clients/hosteed.png', width: 500, height: 271 },
  },
  {
    id: 'quintyss',
    name: 'Quintyss',
    brand: '#6F93F4',
    ink: '#01164E',
  },
];

export const CLIENT_LOGO_SIZES = '128px';

export const CLIENT_COLOR_BY_ID: Record<ClientId, ClientColor> = Object.fromEntries(
  CLIENT_COLORS.map((client) => [client.id, client])
) as Record<ClientId, ClientColor>;

export const HERO_CONTENT: HeroContent = {
  titleKicker: 'Développeur web full-stack',
  title: 'Quatre applications web livrées, de la maquette au code.',
  subtitle:
    "Je travaille dans Figma, Next.js et TypeScript. Je cherche un CDI en équipe produit, en startup, en scale-up ou en agence, à partir de début octobre 2026.",
  secondaryCtaLabel: 'Voir le détail des projets',
  secondaryCtaHref: '/#realisations',
  availableFromLabel: 'Prochaine disponibilité',
  availableFromValue: 'Début octobre 2026',
  locationNote: 'Mulhouse et Strasbourg · remote, hybride ou présentiel',
};

export const CTA_CONTENT: CtaContent = {
  title: 'Disponible pour un poste en CDI.',
  lead: "Développeur full-stack, deux ans de freelance et quatre applications web conçues et livrées. Je cherche une équipe produit où je conçois et développe au quotidien, en startup, en scale-up ou en agence, à partir de début octobre 2026.",
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
    engagementType: 'Freelance',
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
        value:
          "Livrée en novembre 2025, en phase de test chez le client à la fin de mon intervention.",
      },
    ],
    caseLinkHref: '/realisations/hosteed',
  },
  {
    id: 'moduloop-impact',
    clientId: 'moduloop',
    title: 'Moduloop Impact',
    engagementType: 'Stage de 3e année',
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
        value:
          "Mise en production sur moduloop-impact.fr en juin 2024, à la fin de mon stage. Moduloop m'a ensuite repris en freelance pour la maintenance, puis pour construire Moduloop Kits.",
      },
    ],
    caseLinkHref: '/realisations/moduloop-impact',
  },
  {
    id: 'moduloop-kits',
    clientId: 'moduloop',
    title: 'Moduloop Kits',
    engagementType: 'Freelance',
    period: 'août 2025 à août 2026',
    stack: CASE_STUDY_STACKS['moduloop-kits'],
    details: [
      {
        label: 'Contexte',
        value:
          "Après Moduloop Impact, Moduloop voulait proposer des kits d'aménagement prêts à l'emploi, avec un calcul immédiat de l'impact environnemental et du prix au m² de chaque kit.",
      },
      {
        label: 'Intervention',
        value:
          'Catalogue de produits, composition de kits, fiches produits détaillées et suivi des projets avec leur impact calculé.',
      },
      {
        label: 'Statut',
        value: 'Livré en production en août 2026, fin de mon intervention.',
      },
    ],
    caseLinkHref: '/realisations/moduloop-kits',
  },
  {
    id: 'quintyss',
    clientId: 'quintyss',
    title: 'Quintyss V3',
    engagementType: 'Freelance',
    period: 'mars 2025 à août 2026',
    stack: CASE_STUDY_STACKS.quintyss,
    details: [
      {
        label: 'Contexte',
        value:
          "CMS multi-sites : un socle commun pour plusieurs sites clients, avec édition des pages par widget, paiements, articles, blog, référencement et traduction automatisée.",
      },
      {
        label: 'Intervention',
        value:
          "Full-stack et référent technique d'une équipe de deux développeurs : architecture, développement et revue de code.",
      },
      {
        label: 'Statut',
        value:
          "À la fin de mon intervention, en août 2026, deux sites étaient en production et un troisième en attente de validation.",
      },
    ],
    caseLinkHref: '/realisations/quintyss',
  },
];

export const CASE_STUDY_BY_SLUG: Record<CaseStudySlug, CaseStudy> = Object.fromEntries(
  CASE_STUDIES.map((caseStudy) => [caseStudy.id, caseStudy])
) as Record<CaseStudySlug, CaseStudy>;

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    slug: 'moduloop-kits',
    engagement: 'Freelance',
    role: 'Développeur full-stack',
    summary:
      "Configurateur de kits d'aménagement : composer un kit, le chiffrer à l'achat comme à la location sur 1, 2 ou 3 ans, et sortir une offre avec son impact environnemental et son prix au m².",
    status: 'Livré en production en août 2026, fin de mon intervention.',
  },
  {
    slug: 'hosteed',
    engagement: 'Freelance',
    role: 'Développeur full-stack',
    summary:
      "Plateforme de location de logements à Madagascar, reconstruite depuis la base après un WordPress devenu instable : recherche, réservation, paiement Stripe, back-office.",
    status:
      "Livrée en novembre 2025, en phase de test chez le client à la fin de mon intervention.",
  },
  {
    slug: 'quintyss',
    engagement: 'Freelance',
    role: 'Développeur full-stack, référent technique',
    summary:
      "CMS multi-sites : un socle commun pour plusieurs sites clients, avec un éditeur qui appliquait les modifications widget par widget, sans redéploiement.",
    status:
      "À la fin de mon intervention, en août 2026, deux sites étaient en production et un troisième en attente de validation.",
  },
  {
    slug: 'moduloop-impact',
    engagement: 'Stage de 3e année',
    role: 'Développeur full-stack',
    summary:
      "Calculateur d'impact environnemental qui remplace un calcul sur tableur : catalogue produits, comparaison du neuf et du réemploi, export des résultats.",
    status: 'Mise en production sur moduloop-impact.fr en juin 2024, à la fin de mon stage.',
    note: "À la fin du stage, Moduloop m'a repris en freelance pour la maintenance, puis pour construire Kits.",
  },
];

export const EXPERIENCE_SECTION = {
  eyebrow: 'Expérience',
  title: 'Quatre produits livrés, en stage puis en freelance',
  lead: "Ce que j'ai construit depuis 2024, dans quel cadre, avec quelle technologie et sur quelle période.",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'cadrage',
    numberLabel: '1',
    title: 'Cadrer avant de coder',
    note: "Je commence par ce que le produit est censé produire, et par ce qui l'en empêche. Sur Hosteed, le sujet n'était pas une fonctionnalité manquante mais un site qui tombait : cela a décidé l'architecture avant la première ligne de code.",
  },
  {
    id: 'perimetre',
    numberLabel: '2',
    title: 'Arrêter le périmètre sur la maquette',
    note: "Je conçois dans Figma, donc la maquette est le moment où le périmètre se fige, écran par écran, avec les cas limites et les états vides. Ce qui se décide là ne se redécouvre pas trois semaines plus tard sur un produit à moitié construit.",
  },
  {
    id: 'iterations',
    numberLabel: '3',
    title: 'Montrer tôt, ajuster en continu',
    note: "Une démo par semaine sur un environnement de test, ouverte à toute l'équipe. Je préfère un retour sur un écran qui tourne à une validation sur un document, et les ajustements se font au fil de l'eau plutôt qu'en fin de projet.",
  },
  {
    id: 'autonomie',
    numberLabel: '4',
    title: "Rendre l'équipe autonome",
    note: "Sur Hosteed, j'ai construit un back-office pour que l'équipe suive les logements, les réservations et les paiements sans passer par un développeur. Sur Quintyss, l'éditeur permettait au client de modifier ses pages lui-même. Je considère le back-office, le référencement technique et le suivi des visites comme du produit, pas comme de la finition.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'paul',
    name: 'Paul L.',
    relation: 'peer',
    context: 'Moduloop',
    review:
      'Tristan est positif et optimiste, ce qui rend le travail en équipe très agréable. Il est capable de faire face aux problèmes et de les résoudre en toute autonomie. Son travail est de qualité. Son éthique de travail est excellente, il est respectueux des délais et très impliqué.',
  },
  {
    id: 'cyril',
    name: 'Cyril K.',
    relation: 'client',
    review:
      'Un plaisir de travailler avec Tristan, organisé et sérieux, il se plie en quatre pour trouver les solutions à nos problématiques. Je recommande !',
  },
  {
    id: 'vincent',
    name: 'Vincent G.',
    relation: 'client',
    review:
      'Deuxième mission accomplie avec succès, rien à dire. On continue les yeux fermés. Merci Tristan pour la qualité de ton accompagnement.',
  },
  {
    id: 'corinne',
    name: 'Corinne E.',
    relation: 'client',
    review: 'Travail de qualité, bon échange. Je referai appel à ses services si besoin !',
  },
  {
    id: 'timothe',
    name: 'Timothé C.',
    relation: 'peer',
    review:
      "J'ai pu travailler avec Tristan à de multiples reprises, son travail est toujours qualitatif et rapide.",
  },
];

export const ABOUT_CONTENT: AboutContent = {
  paragraphs: [
    "Je conçois les interfaces dans Figma, puis je les développe moi-même : rien ne se perd entre la maquette et le produit. Quand une contrainte technique apparaît en cours de route, je la règle des deux côtés à la fois, sans qu'il faille la traduire d'un métier à l'autre.",
    "Ce profil double sert surtout à faire le lien dans une équipe. Mes quatre projets étaient montés différemment : certains arrivaient avec leurs maquettes déjà faites, d'autres avec un développeur en interne. Je prends la partie design, la partie développement ou les deux, selon ce qui manque là où j'arrive.",
    "Sur Quintyss, j'ai été référent technique d'une équipe de deux développeurs : architecture, revue de code et arbitrages au quotidien. C'est le cadre que je cherche à retrouver, une équipe où les décisions se discutent, où mon code est relu et où je relis celui des autres.",
  ],
  toolsHeading: 'Outils du quotidien',
  tools: ['Figma', 'Next.js · TypeScript', 'Tailwind CSS', 'Node.js · PostgreSQL', 'Railway'],
};

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/TristanHourtoulle', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: SITE_CONFIG.linkedinUrl, icon: 'linkedin' },
  { id: 'email', label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
  { id: 'mentions', label: 'Mentions légales', href: '/mentions-legales' },
];
