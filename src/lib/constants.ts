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

/**
 * Site-wide identity.
 */
export const SITE_CONFIG: SiteConfig = {
  brandName: 'Tristan Hourtoulle',
  brandTagline: 'design et dev',
  siteUrl: 'https://www.tristanhourtoulle.fr',
  calendlyUrl: 'https://calendly.com/tristan68420/30min',
  email: 'tristan.hourtoulle@icloud.com',
};

/**
 * The header's navigation. The footer runs on `FOOTER_NAVIGATION` below.
 */
/**
 * Hrefs use an absolute `/#id` form rather than a bare `#id`. On the
 * homepage this still resolves to the current document (same path,
 * different fragment), so the browser performs an in-page smooth scroll
 * with no navigation. From any other page it resolves to a real
 * navigation back to the homepage, landing on the right section. A bare
 * `#id` would silently do nothing on any page other than the homepage.
 * next/link handles this form natively, so the header and footer render
 * these through `Link` like any other route.
 *
 * `realisations` is the one entry that is not a fragment: it points at
 * the real /realisations page rather than at the homepage section of the
 * same name. The header and the footer are the only surfaces present on
 * every page, so they are also the only way that page gets site-wide
 * internal links instead of being reachable from the homepage alone. The
 * homepage section keeps its own entry point through the hero's
 * "Voir mes réalisations" call to action, which still scrolls in place.
 */
/**
 * Header only, since `FOOTER_NAVIGATION` below took over the footer.
 * Three entries are left, well under the width ceiling: five were enough
 * to make the list wrap onto a second row at 320px, so anything added
 * back here is measured at that width first.
 */
export const NAVIGATION: NavItem[] = [
  { id: 'realisations', label: 'Réalisations', href: '/realisations' },
  { id: 'processus', label: 'Processus', href: '/#processus' },
  { id: 'a-propos', label: 'À propos', href: '/#a-propos' },
];

/**
 * The footer's secondary navigation. It holds the same three entries as
 * `NAVIGATION` today. The split is kept on purpose: the footer is a
 * stacked block with no width ceiling, so it is where the CV download and
 * the LinkedIn link will go, and the header will not carry either. Until
 * then the duplication is accepted.
 */
export const FOOTER_NAVIGATION: NavItem[] = [
  { id: 'realisations', label: 'Réalisations', href: '/realisations' },
  { id: 'processus', label: 'Processus', href: '/#processus' },
  { id: 'a-propos', label: 'À propos', href: '/#a-propos' },
];

/**
 * Client brand colors used by the case-study recoloring mechanism.
 *
 * Each client carries two values: `brand` is the exact color pulled from
 * the client's own project, used for decorative, non-text purposes only
 * (identity swatch, header rule, background tints). `ink` is a darkened
 * variant of the same hue, checked with the WCAG relative-luminance
 * formula until it clears the 4.5:1 AA threshold for text.
 *
 * `ink` is measured against the DARKEST ground it can land on, which is
 * the `#realisations` section, `color-mix(brand 4%, #E7DECA)`, not
 * against the lightest paper (#F6F3EA). Tuning against #F6F3EA alone is
 * what previously shipped accent text at 3.63:1 inside `#realisations`
 * and 4.15:1 on the #EFE9DA panels. `inkContrastRatio` pins that worst
 * case, so a future edit to a brand color is forced to re-verify its
 * ink pair rather than trusting the friendlier paper-0 number.
 *
 * These same hex values are duplicated as CSS custom properties in
 * globals.css (the `[data-accent="..."]` selectors), because CSS
 * attribute selectors cannot read TypeScript constants. Keep both in
 * sync if a client's color ever changes.
 *
 * Edukai is deliberately excluded: its brand color (#2563EB) is already
 * the site's default `--accent-brand`, so recoloring the page for it
 * would produce no visible change, and it is only a secondary mention
 * rather than a full case study.
 */
export const CLIENT_COLORS: ClientColor[] = [
  {
    id: 'moduloop',
    name: 'Moduloop',
    brand: '#00AAAB',
    ink: '#006C6D', // 4.51:1 on its #realisations ground, 5.62:1 on #F6F3EA
    inkContrastRatio: 4.51,
    logo: { src: '/images/clients/moduloop.png', width: 300, height: 79 },
  },
  {
    id: 'hosteed',
    name: 'Hosteed',
    brand: '#015993',
    ink: '#015993', // 5.21:1 on its #realisations ground, no darkening required
    inkContrastRatio: 5.21,
    logo: { src: '/images/clients/hosteed.png', width: 500, height: 271 },
  },
  {
    id: 'quintyss',
    name: 'Quintyss',
    brand: '#6F93F4', // icon blue, decorative use only
    ink: '#01164E', // marine, 12.43:1 on its #realisations ground
    inkContrastRatio: 12.43,
    logo: { src: '/images/clients/quintyss.svg', width: 65, height: 65 },
  },
];

/**
 * `sizes` for every client logo rendered through next/image.
 *
 * Without it, next/image has no idea how big the box is, so it builds an
 * x-descriptor srcset from the file's own intrinsic width: Hosteed
 * (500x271) shipped a 640px-wide derivative at 1x and a 1080px-wide one
 * at 2x, for a logo that paints about 58 CSS px across.
 *
 * The number is the frame, not the file. `.logo-box` and `.hero-logo`
 * are the same box in globals.css: `max-width: 8rem` with
 * `padding: 0.4rem 0.7rem`, so the widest the image itself can ever be
 * painted is 8rem minus 1.4rem of padding, 105.6px at a 16px root, and
 * 6rem below 820px. 128px is quoted rather than 106px so the value stays
 * an upper bound if the reader enlarges their root font size, and
 * because 128 is one of Next's own `imageSizes` entries: a 1x screen
 * then gets an exact-fit derivative and a 2x screen the 256px one.
 *
 * Shared by the four surfaces that render a logo (homepage card,
 * case-study hero, related cards, /realisations index) so the value
 * cannot be corrected in one of them and forgotten in the other three.
 */
export const CLIENT_LOGO_SIZES = '128px';

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
 * Single source of truth for each project's technology stack.
 *
 * The same list is rendered in three places: the homepage card, the
 * detail-page hero pills and the detail-page "En bref" sidebar. It used
 * to be written out twice, here and in case-studies-content.ts, and the
 * two copies had already drifted: the homepage announced Moduloop Kits
 * as "Next.js, React" where the case study said "Next.js 16, React 19",
 * and it announced Quintyss as "Node.js, PostgreSQL, Stripe" where the
 * case study listed Fastify, Drizzle and Railway as well. A visitor
 * moving from the card to the page was reading two different answers to
 * the same question.
 *
 * Declared here rather than in case-studies-content.ts because that file
 * already imports this one; putting it the other way round would close
 * an import cycle. Case-study pages read these entries by slug.
 */
export const CASE_STUDY_STACKS: Record<CaseStudySlug, readonly string[]> = {
  hosteed: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'VPS client'],
  'moduloop-impact': ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
  'moduloop-kits': ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'Better Auth'],
  quintyss: ['Next.js', 'TypeScript', 'Fastify', 'Drizzle', 'PostgreSQL', 'Stripe', 'Railway'],
};

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

/**
 * Secondary mention rendered after the main case studies, as a single
 * sentence. Edukai links out but is intentionally left out of the
 * recoloring mechanism (see CLIENT_COLORS above). Moduloop Kits was
 * promoted from this list to a full case study, see `CASE_STUDIES` above.
 */
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
 * Footer links.
 */
export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/TristanHourtoulle', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/tristan-hourtoulle/', icon: 'linkedin' },
  { id: 'email', label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: 'mail' },
  { id: 'mentions', label: 'Mentions légales', href: '/mentions-legales' },
];
