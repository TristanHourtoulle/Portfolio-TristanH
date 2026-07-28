import type {
  AboutContent,
  AlsoMentionedItem,
  CaseStudy,
  ClientColor,
  ClientId,
  FaqItem,
  FooterLink,
  HeroContent,
  NavItem,
  Offer,
  ProcessStep,
  SiteConfig,
  Testimonial,
  TrustStats,
} from './types';

/**
 * Site-wide identity.
 */
export const SITE_CONFIG: SiteConfig = {
  brandName: 'Tristan Hourtoulle',
  brandTagline: 'design et dev',
  calendlyUrl: 'https://calendly.com/tristan68420/30min',
  email: 'tristan.hourtoulle@icloud.com',
};

/**
 * Shared navigation, used by both the header and the footer.
 */
export const NAVIGATION: NavItem[] = [
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'realisations', label: 'Réalisations', href: '#realisations' },
  { id: 'processus', label: 'Processus', href: '#processus' },
  { id: 'a-propos', label: 'À propos', href: '#a-propos' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

/**
 * Client brand colors used by the case-study recoloring mechanism.
 *
 * Each client carries two values: `brand` is the exact color pulled from
 * the client's own project, used for decorative, non-text purposes only
 * (identity swatch, header rule, background tints). `ink` is a darkened
 * variant of the same hue, checked against the paper background
 * (#F6F3EA) with the WCAG relative-luminance formula until it clears the
 * 4.5:1 AA threshold for text. See scratchpad/contrast.js for the script
 * used to compute these; ratios are pinned below so a future edit to a
 * brand color is forced to re-verify its ink pair.
 *
 * These same hex values are duplicated as CSS custom properties in
 * globals.css (the `[data-accent="..."]` selectors), because CSS
 * attribute selectors cannot read TypeScript constants. Keep both in
 * sync if a client's color ever changes.
 *
 * Edukai is deliberately excluded: its brand color (#2563EB) is
 * identical to the site's default accent, so recoloring the page for it
 * would produce no visible change, and it is only a secondary mention
 * rather than a full case study.
 */
export const CLIENT_COLORS: ClientColor[] = [
  {
    id: 'moduloop',
    name: 'Moduloop',
    brand: '#00AAAB',
    ink: '#007C7D', // measured ratio: 4.53:1 on #F6F3EA
    inkContrastRatio: 4.53,
    logo: { src: '/images/clients/moduloop.png', width: 300, height: 79 },
  },
  {
    id: 'hosteed',
    name: 'Hosteed',
    brand: '#015993',
    ink: '#015993', // already 6.64:1 on #F6F3EA, no darkening required
    inkContrastRatio: 6.64,
    logo: { src: '/images/clients/hosteed.png', width: 500, height: 271 },
  },
  {
    id: 'quintyss',
    name: 'Quintyss',
    brand: '#6F93F4', // icon blue, decorative use only
    ink: '#01164E', // marine, already 15.44:1 on #F6F3EA
    inkContrastRatio: 15.44,
    logo: { src: '/images/clients/quintyss.svg', width: 65, height: 65 },
  },
];

/**
 * Lookup by id, used to read a case study's swatch/identity color
 * without scanning the array on every render.
 */
export const CLIENT_COLOR_BY_ID: Record<ClientId, ClientColor> = Object.fromEntries(
  CLIENT_COLORS.map((client) => [client.id, client])
) as Record<ClientId, ClientColor>;

/**
 * Hero section content.
 */
export const HERO_CONTENT: HeroContent = {
  title: 'Votre produit web, conçu et développé par la même personne.',
  subtitle:
    'Sites vitrines, applications sur mesure et produits complets pour PME, startups et agences. Design dans Figma, développement en Next.js et TypeScript, un seul interlocuteur du premier appel à la mise en ligne.',
  primaryCtaLabel: 'Réserver un appel de 30 min, gratuit',
  primaryCtaHref: SITE_CONFIG.calendlyUrl,
  secondaryCtaLabel: 'Voir mes réalisations',
  secondaryCtaHref: '#realisations',
  locationNote: 'Basé en France · missions à distance',
};

/**
 * Number of days added to today's date to produce the availability badge.
 * Computed server-side, see src/lib/availability.ts.
 */
export const AVAILABILITY_LEAD_DAYS = 15;

/**
 * Trust banner figures.
 */
export const TRUST_STATS: TrustStats = {
  clientsCount: 12,
  averageRating: 5,
  productsInProduction: 3,
};

/**
 * Services / offers section.
 */
export const OFFERS: Offer[] = [
  {
    id: 'vitrine',
    numberLabel: 'Offre 1',
    title: 'Site vitrine et landing page',
    problem:
      'Votre activité est invisible en ligne, ou votre site actuel ne convertit pas les visiteurs en contacts.',
    features: [
      'Maquette Figma validée avant la première ligne de code',
      'Développement Next.js, rapide et responsive',
      'SEO technique et suivi des visites',
      'Mise en ligne, nom de domaine et formation incluse',
    ],
    priceNote: 'À partir de',
    price: '1 500 €',
    isPriceCased: false,
    delay: 'Livré en 2 à 4 semaines',
    ctaLabel: 'En parler 30 minutes →',
    ctaHref: SITE_CONFIG.calendlyUrl,
  },
  {
    id: 'application',
    numberLabel: 'Offre 2',
    title: 'Application web sur mesure',
    problem:
      'Vos outils actuels ne suivent plus : tableurs partagés, saisies manuelles, logiciels génériques inadaptés à votre métier.',
    features: [
      'Cadrage fonctionnel et maquettes des écrans clés',
      'Base de données PostgreSQL et authentification',
      'Tableaux de bord, rôles et permissions',
      'Tests, déploiement et documentation de reprise',
    ],
    priceNote: 'À partir de',
    price: '3 000 €',
    isPriceCased: false,
    delay: '6 à 10 semaines',
    ctaLabel: 'En parler 30 minutes →',
    ctaHref: SITE_CONFIG.calendlyUrl,
  },
  {
    id: 'bout-en-bout',
    numberLabel: 'Offre 3',
    title: 'Design et développement de bout en bout',
    problem:
      "Vous lancez un produit et il vous faudrait une équipe entière : un designer, un développeur front, un développeur back.",
    features: [
      "Identité de l'interface et design system dans Figma",
      'Développement full-stack complet',
      'Sprints hebdomadaires avec démo chaque semaine',
      'Formation, passation et maintenance optionnelle',
    ],
    priceNote: 'Tarification',
    price: 'Au cas par cas',
    isPriceCased: true,
    delay: "8 à 12 semaines · budget posé après l'appel",
    ctaLabel: 'On en parle en 30 minutes →',
    ctaHref: SITE_CONFIG.calendlyUrl,
  },
];

/**
 * Selected case studies, in the order they appear in the mockup.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'hosteed',
    clientId: 'hosteed',
    title: 'Hosteed',
    missionType: 'Mission freelance',
    period: 'mai à novembre 2025',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'VPS client'],
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
    caseLinkHref: '#proj-hosteed',
  },
  {
    id: 'moduloop-impact',
    clientId: 'moduloop',
    title: 'Moduloop Impact',
    missionType: 'Mission freelance',
    period: 'février à juin 2024',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
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
    caseLinkHref: '#proj-moduloop',
  },
  {
    id: 'quintyss',
    clientId: 'quintyss',
    title: 'Quintyss V3',
    missionType: 'Mission freelance',
    period: 'depuis mars 2025',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    details: [
      {
        label: 'Contexte',
        value:
          'CMS nouvelle génération : créer un site via une interface intuitive, avec paiements, articles, blog, SEO et traduction automatisée.',
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
    caseLinkHref: '#proj-quintyss',
  },
];

/**
 * Secondary mentions rendered after the main case studies, as a single
 * sentence. Moduloop Kit is a recoloring trigger with no destination
 * (focusable span, no href). Edukai links out but is intentionally left
 * out of the recoloring mechanism (see CLIENT_COLORS above).
 */
export const ALSO_MENTIONED_INTRO = 'Également : ';

export const ALSO_MENTIONED_ITEMS: AlsoMentionedItem[] = [
  {
    clientId: 'moduloop',
    label: 'Moduloop Kit',
    trailingText:
      ", plateforme de kits d'aménagement avec impact environnemental et prix au m², mission en cours depuis août 2025. Et à titre personnel, ",
  },
  {
    clientId: null,
    label: 'Edukai',
    href: 'https://edukai.fr',
    trailingText:
      ', fiches de révision, quiz et résumés générés par IA à partir des cours des étudiants, en ligne sur edukai.fr.',
  },
];

/**
 * Process section steps.
 */
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

/**
 * Client testimonials.
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

/**
 * About section.
 */
export const ABOUT_CONTENT: AboutContent = {
  paragraphs: [
    "Je m'appelle Tristan Hourtoulle, développeur web full-stack et designer freelance. Je conçois les interfaces dans Figma, puis je les développe moi-même en Next.js et TypeScript : rien ne se perd entre la maquette et le produit final.",
    'Vous parlez à une seule personne, du premier appel à la mise en ligne. Pas de chef de projet à relancer, pas de couche commerciale, pas d\'aller-retour entre un designer et un développeur qui ne se connaissent pas.',
    'Je travaille depuis 2024 avec des PME, des startups et des agences, sur des produits qui sont aujourd\'hui en production et utilisés chaque jour.',
  ],
  toolsHeading: 'Outils du quotidien',
  tools: ['Figma', 'Next.js · TypeScript', 'Tailwind CSS', 'Node.js · PostgreSQL', 'Railway'],
};

/**
 * FAQ section.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'delais',
    question: 'Quels sont les délais typiques ?',
    answer:
      'Un site vitrine se livre en 2 à 4 semaines, une application sur mesure en 6 à 12 semaines selon le périmètre. Le planning est posé dans la proposition chiffrée et suivi en sprints hebdomadaires.',
  },
  {
    id: 'budget',
    question: 'Comment se calcule le budget ?',
    answer:
      "Chaque projet reçoit une proposition à prix ferme, établie après l'appel découverte. Le budget dépend du périmètre réel : nombre d'écrans, fonctionnalités, intégrations. Vous connaissez le montant total avant de vous engager.",
  },
  {
    id: 'code',
    question: 'Qui possède le code à la fin ?',
    answer:
      "Vous, à 100 %. Le code est versionné sur un dépôt qui vous appartient dès le début du projet, et tout est transféré à la livraison. Aucune dépendance technique à mon égard.",
  },
  {
    id: 'apres-livraison',
    question: 'Que se passe-t-il après la livraison ?',
    answer:
      "Une session de formation est incluse pour que vous soyez autonome sur l'outil. Je corrige gratuitement les anomalies pendant 30 jours, et je propose une maintenance optionnelle si vous préférez déléguer les évolutions.",
  },
  {
    id: 'hebergement',
    question: 'Qui héberge le site, et combien ça coûte ensuite ?',
    answer:
      "Si vous disposez déjà d'une infrastructure, votre propre VPS par exemple, le site y est hébergé et vous ne payez aucun frais d'hébergement. Sinon, je m'en charge et je le facture annuellement : comptez 2 à 3 euros par mois pour un site vitrine, environ 10 euros par mois pour une application sur mesure plus lourde. Dans les deux cas, vous savez exactement où vit votre projet.",
  },
  {
    id: 'distance',
    question: 'Travaillez-vous à distance ?',
    answer:
      'Oui, avec tous mes clients, où qu\'ils soient. Une démo en visio a lieu chaque semaine, et des déplacements ponctuels restent possibles selon le projet.',
  },
  {
    id: 'preparation',
    question: "Que faut-il préparer avant l'appel découverte ?",
    answer:
      'Votre objectif principal, deux ou trois exemples de sites ou d\'outils que vous aimez, et une idée de votre budget. Trente minutes suffisent pour cadrer l\'essentiel.',
  },
  {
    id: 'perimetre-partiel',
    question: 'Puis-je vous confier uniquement le design, ou uniquement le développement ?',
    answer:
      "Oui. Certains clients arrivent avec leurs maquettes, d'autres avec un développeur en interne. L'offre s'ajuste au périmètre dont vous avez réellement besoin.",
  },
];

/**
 * Footer links.
 */
export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/TristanHourtoulle', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/tristan-hourtoulle/', icon: 'linkedin' },
  { id: 'email', label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
  { id: 'mentions', label: 'Mentions légales', href: '#contenu' },
];
