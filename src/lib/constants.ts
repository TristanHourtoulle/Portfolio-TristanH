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

export const FOOTER_NAVIGATION: NavItem[] = NAVIGATION;

export const CLIENT_LOGO_SIZES = '128px';

/** Layout hint for the small product mark in the realisations column. */
export const REALISATION_MARK_SIZES = '(min-width: 900px) 96px, 56px';

export const HERO_CONTENT: HeroContent = {
  titleKicker: 'Développeur web full-stack',
  title: "Je prends une spec et j'en fais un produit qui tient.",
  subtitle:
    'Quatre applications web livrées, en React, Next.js et TypeScript. Je cherche un CDI en équipe produit à partir de début octobre 2026.',
  secondaryCtaLabel: 'Voir le détail des projets',
  secondaryCtaHref: '/#realisations',
  availableFromLabel: 'Prochaine disponibilité',
  availableFromValue: 'Début octobre 2026',
  locationNote: 'Mulhouse et Strasbourg · remote, hybride ou présentiel',
};

export const CTA_CONTENT: CtaContent = {
  title: 'Disponible pour un poste en CDI.',
  lead: "Développeur full-stack, deux ans de freelance et quatre applications web développées et livrées. Je cherche une équipe produit où je développe et livre au quotidien, en startup, en scale-up ou en agence, à partir de début octobre 2026.",
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
      "Plateforme de location de logements dédiée à Madagascar, sur le modèle d'Airbnb : recherche, fiches logements et réservation.",
    contribution:
      'Développement du parcours complet, de la recherche à la réservation, côté voyageur comme côté hôte.',
    statusLabel: 'Statut',
  },
  'moduloop-impact': {
    context:
      "Les acteurs de l'aménagement doivent mesurer l'impact environnemental de leurs projets, sans outil adapté à leur métier.",
    contribution:
      'Outil de calcul complet : saisie des données du projet d\'aménagement et visualisation des résultats en temps réel.',
    statusLabel: 'Résultat',
    statusFollowUp:
      "Moduloop m'a ensuite repris en freelance pour la maintenance, puis pour construire Moduloop Kits.",
  },
  'moduloop-kits': {
    context:
      "Après Moduloop Impact, Moduloop voulait proposer des kits d'aménagement prêts à l'emploi, avec un calcul immédiat de l'impact environnemental et du prix au m² de chaque kit.",
    contribution:
      'Catalogue de produits, composition de kits, fiches produits détaillées et suivi des projets avec leur impact calculé.',
    statusLabel: 'Statut',
  },
  quintyss: {
    context:
      "CMS multi-sites : un socle commun pour plusieurs sites clients, avec édition des pages par widget, paiements, articles, blog, référencement et traduction automatisée.",
    contribution:
      "Développeur fullstack indépendant au sein d'une équipe de deux développeurs : architecture de la plateforme, développement et revue de leur code.",
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
      "Configurateur de kits d'aménagement : composer un kit, le chiffrer à l'achat comme à la location sur 1, 2 ou 3 ans, et sortir une offre avec son impact environnemental et son prix au m².",
    status: CASE_STUDY_PAGE_BY_SLUG['moduloop-kits'].statusDetail,
  },
  {
    slug: 'hosteed',
    engagement: 'Freelance',
    role: 'Développeur full-stack',
    summary:
      "Plateforme de location de logements à Madagascar, reconstruite depuis la base après un WordPress devenu instable : recherche, réservation, paiement Stripe, back-office.",
    status: CASE_STUDY_PAGE_BY_SLUG.hosteed.statusDetail,
  },
  {
    slug: 'quintyss',
    engagement: 'Freelance',
    role: 'Développeur fullstack indépendant',
    summary:
      "CMS multi-sites : un socle commun pour plusieurs sites clients, avec un éditeur qui appliquait les modifications widget par widget, sans redéploiement.",
    status: CASE_STUDY_PAGE_BY_SLUG.quintyss.statusDetail,
  },
  {
    slug: 'moduloop-impact',
    engagement: 'Stage de 3e année',
    role: 'Développeur full-stack',
    summary:
      "Calculateur d'impact environnemental qui remplace un calcul sur tableur : catalogue produits, comparaison du neuf et du réemploi, export des résultats.",
    status: CASE_STUDY_PAGE_BY_SLUG['moduloop-impact'].statusDetail,
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
    id: 'tests-avant-code',
    numberLabel: '2',
    title: 'Écrire les tests avant le code',
    note: "Je pratique le TDD : j'écris d'abord les tests d'intégration de la spec, puis je développe jusqu'à ce qu'ils passent. Cela m'oblige à traiter tous les cas et pas seulement le cas nominal, et la couverture qui en reste protège le produit des régressions à chaque livraison suivante.",
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
    "Développeur full-stack, mon travail commence à la spec. Je la lis, je repère ce qu'elle ne dit pas et je pose les questions avant d'écrire la première ligne. Ce que je livre ensuite s'intègre à la codebase existante, avec ses conventions et ses contraintes, plutôt qu'à côté d'elle.",
    "J'écris les tests d'intégration de la spec avant le code, puis je développe jusqu'à ce qu'ils passent. Cette méthode m'oblige à traiter tous les cas et pas seulement le cas nominal, et elle laisse une couverture qui protège le produit des régressions. Je sais aussi travailler à partir d'une maquette Figma, et en produire une quand il n'y en a pas, mais le design n'est pas ma compétence principale.",
    "Sur Quintyss, je suis intervenu comme développeur fullstack indépendant dans une équipe de deux développeurs : j'ai porté l'architecture, relu leur code et tranché les arbitrages au quotidien. C'est le cadre que je cherche à retrouver, une équipe où les décisions se discutent, où mon code est relu et où je relis celui des autres.",
  ],
  toolsHeading: 'Outils du quotidien',
  tools: ['React · Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js · PostgreSQL', 'Railway', 'Figma'],
};

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/TristanHourtoulle', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: SITE_CONFIG.linkedinUrl, icon: 'linkedin' },
  { id: 'email', label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
  { id: 'mentions', label: 'Mentions légales', href: '/mentions-legales' },
];
