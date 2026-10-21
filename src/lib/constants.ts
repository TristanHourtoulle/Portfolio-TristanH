import { CASE_STUDY_PAGE_BY_SLUG, CASE_STUDY_PAGES } from './case-studies-content';
import type {
  AboutContent,
  CaseStudy,
  CaseStudySlug,
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

export { CASE_STUDY_STACKS, CLIENT_COLOR_BY_ID } from './products';

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
const CV_PDF_PATH: string | null = null;

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

export const FOOTER_NAVIGATION: NavItem[] = NAVIGATION;

export const CLIENT_LOGO_SIZES = '128px';

/** Layout hint for the small product mark in the realisations column. */
export const REALISATION_MARK_SIZES = '(min-width: 900px) 96px, 104px';

export const HERO_CONTENT: HeroContent = {
  titleKicker: 'Développeur web full-stack',
  title: 'Après le freelance, je cherche mon premier CDI.',
  subtitle:
    'J’ai développé un calculateur d’impact environnemental, une plateforme de réservation et un CMS multi-sites. Je souhaite maintenant rejoindre une équipe de développement et continuer à construire des applications en React, Next.js et TypeScript.',
  secondaryCtaLabel: 'Découvrir mes réalisations',
  secondaryCtaHref: '/#realisations',
  availableFromLabel: 'Recherche de CDI',
  availableFromValue: 'En cours',
  locationNote: 'Mulhouse et Strasbourg · à distance, hybride ou sur site',
};

export const CTA_CONTENT: CtaContent = {
  title: 'Vous recrutez un développeur full-stack ?',
  lead: 'Je recherche mon premier CDI après deux ans d’activité indépendante menés en parallèle de mes études. Pour échanger sur le poste et votre équipe, vous pouvez m’écrire ou me contacter sur LinkedIn.',
};

interface CaseStudyHomeFacts {
  context: string;
  contribution: string;
  statusLabel: string;
  statusFollowUp?: string;
}

const CASE_STUDY_HOME_FACTS: Record<CaseStudySlug, CaseStudyHomeFacts> = {
  hosteed: {
    context:
      'Un site de location de logements à Madagascar devait être reconstruit après des problèmes de stabilité sur WordPress.',
    contribution:
      'J’ai développé la recherche de logements, la réservation, le paiement Stripe et le back-office.',
    statusLabel: 'Statut',
  },
  'moduloop-impact': {
    context:
      'Chez Moduloop, l’impact environnemental des projets d’aménagement était calculé manuellement sur tableur.',
    contribution:
      'J’ai développé un outil pour composer un projet, comparer le neuf et le réemploi et exporter les résultats en PDF.',
    statusLabel: 'Résultat',
    statusFollowUp:
      'Après le stage, j’ai poursuivi la maintenance en freelance, puis développé Moduloop Kits.',
  },
  'moduloop-kits': {
    context:
      'Après le calcul d’impact, Moduloop avait besoin d’un outil pour préparer et chiffrer ses offres d’aménagement.',
    contribution:
      'J’ai développé le catalogue, la composition des kits et le suivi des projets, avec leurs tarifs et leurs indicateurs environnementaux.',
    statusLabel: 'Statut',
  },
  quintyss: {
    context:
      'Quintyss voulait administrer plusieurs sites clients depuis une même plateforme.',
    contribution:
      'J’ai participé au développement du CMS, à son architecture et aux revues de code, avec une édition des pages sans redéploiement.',
    statusLabel: 'Statut',
  },
};

export const CASE_STUDIES: CaseStudy[] = CASE_STUDY_PAGES.map((page) => {
  const facts = CASE_STUDY_HOME_FACTS[page.slug];

  return {
    id: page.slug,
    clientId: page.clientId,
    title: page.title,
    engagementType: page.engagementType,
    period: page.periodInline,
    stack: page.stack,
    details: [
      { label: 'Contexte', value: facts.context },
      { label: 'Intervention', value: facts.contribution },
      {
        label: facts.statusLabel,
        value: facts.statusFollowUp
          ? `${page.statusDetail} ${facts.statusFollowUp}`
          : page.statusDetail,
      },
    ],
    caseLinkHref: `/realisations/${page.slug}`,
  };
});

export const CASE_STUDY_BY_SLUG: Record<CaseStudySlug, CaseStudy> = Object.fromEntries(
  CASE_STUDIES.map((caseStudy) => [caseStudy.id, caseStudy])
) as Record<CaseStudySlug, CaseStudy>;

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    slug: 'moduloop-kits',
    engagement: 'Freelance',
    role: 'Développeur full-stack',
    summary:
      'Développement d’un configurateur de kits d’aménagement : catalogue, composition des kits, tarifs à l’achat ou à la location et calcul de l’impact environnemental.',
    status: CASE_STUDY_PAGE_BY_SLUG['moduloop-kits'].statusDetail,
  },
  {
    slug: 'hosteed',
    engagement: 'Freelance',
    role: 'Développeur full-stack',
    summary:
      'Refonte d’une plateforme de location de logements à Madagascar : recherche, réservation, paiement Stripe et administration des logements et des séjours.',
    status: CASE_STUDY_PAGE_BY_SLUG.hosteed.statusDetail,
  },
  {
    slug: 'quintyss',
    engagement: 'Freelance',
    role: 'Développeur full-stack indépendant',
    summary:
      'Développement d’un CMS commun à plusieurs sites clients, avec un éditeur de pages dont les modifications sont publiées sans redéploiement.',
    status: CASE_STUDY_PAGE_BY_SLUG.quintyss.statusDetail,
  },
  {
    slug: 'moduloop-impact',
    engagement: 'Stage de 3e année',
    role: 'Développeur full-stack',
    summary:
      'Développement d’un calculateur d’impact environnemental pour remplacer les calculs sur tableur : catalogue de produits, comparaison de scénarios et export PDF.',
    status: CASE_STUDY_PAGE_BY_SLUG['moduloop-impact'].statusDetail,
    note: 'Après le stage, j’ai poursuivi la maintenance en freelance, puis développé Moduloop Kits.',
  },
];

export const EXPERIENCE_SECTION = {
  eyebrow: 'Expérience',
  title: 'Mes expériences de développement',
  lead: 'Les projets sur lesquels je suis intervenu, en stage puis en indépendant, de 2024 à 2026.',
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'cadrage',
    numberLabel: '1',
    title: 'Comprendre le besoin et l’existant',
    note: 'Avant de développer, je précise ce que l’application doit permettre de faire et les contraintes à respecter. Sur Hosteed, les problèmes de stabilité du site existant ont conduit à une refonte plutôt qu’à l’ajout de nouvelles fonctionnalités.',
  },
  {
    id: 'tests-avant-code',
    numberLabel: '2',
    title: 'Tester les comportements attendus',
    note: 'Je pars des comportements décrits dans la spécification pour écrire les tests d’intégration, puis je développe leur implémentation. Ces tests servent ensuite à vérifier que les évolutions ne cassent pas ce qui fonctionnait déjà.',
  },
  {
    id: 'iterations',
    numberLabel: '3',
    title: 'Faire essayer les versions intermédiaires',
    note: 'Je présente régulièrement une version utilisable sur un environnement de test. Les retours portent ainsi sur les écrans et les parcours réels, et peuvent être intégrés pendant le développement.',
  },
  {
    id: 'autonomie',
    numberLabel: '4',
    title: 'Prévoir l’administration du produit',
    note: 'Sur Hosteed, l’équipe devait pouvoir gérer les logements, les réservations et les paiements. Sur Quintyss, les clients devaient modifier leurs pages eux-mêmes. Ces besoins d’administration font partie du développement, au même titre que les écrans publics.',
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
    'Mon expérience s’est construite sur des applications utilisées pour travailler : préparer une offre commerciale, comparer des scénarios d’aménagement, gérer des réservations ou publier le contenu de plusieurs sites. J’ai travaillé sur leurs interfaces, leurs données et leur logique métier.',
    'Le freelance m’a amené à échanger directement avec les clients et à suivre un projet au-delà de son développement initial. Sur Quintyss, je participais aussi aux choix d’architecture, aux revues de code et au découpage des tâches.',
    'Pour la suite, je cherche une équipe où discuter les choix techniques et relire le code fait partie du travail quotidien. Je souhaite contribuer avec cette expérience, tout en continuant à apprendre au contact d’autres développeurs.',
  ],
  toolsHeading: 'Technologies et outils utilisés',
  tools: ['React · Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js · PostgreSQL', 'Railway', 'Figma'],
};

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/TristanHourtoulle', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: SITE_CONFIG.linkedinUrl, icon: 'linkedin' },
  { id: 'email', label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
  { id: 'mentions', label: 'Mentions légales', href: '/mentions-legales' },
];
