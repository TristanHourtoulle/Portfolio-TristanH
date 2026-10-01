import { CASE_STUDY_STACKS, CLIENT_COLOR_BY_ID } from './constants';
import { HOSTEED_COPY } from './case-studies/hosteed-copy';
import { MODULOOP_IMPACT_COPY } from './case-studies/moduloop-impact-copy';
import { MODULOOP_KITS_COPY } from './case-studies/moduloop-kits-copy';
import { QUINTYSS_COPY } from './case-studies/quintyss-copy';
import { PERSONAL_PROJECTS } from './personal-projects-content';
import type {
  CaseStudyPageContent,
  ProductMark,
  RealisationFilter,
} from './types';

export const CASE_STUDY_PAGES: CaseStudyPageContent[] = [
  {
    slug: 'hosteed',
    provenance: 'client',
    clientId: 'hosteed',
    title: 'Hosteed',
    titleQualifier: 'plateforme de location de logements',
    engagementType: 'Freelance',
    periodInline: 'mai à novembre 2025',
    period: 'Mai à novembre 2025',
    publishedTimeIso: '2025-11',
    ...HOSTEED_COPY,
    stack: CASE_STUDY_STACKS.hosteed,
    externalLinks: [],
    gallery: [
      {
        src: '/images/case-studies/hosteed/hero-recherche.webp',
        alt: "Page d'accueil de Hosteed, avec la barre de recherche de séjour.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/hosteed/fiche-logement.webp',
        alt: "Fiche détaillée d'un logement sur Hosteed.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/hosteed/article-blog.webp',
        alt: 'Blog de Hosteed, avec son article mis en avant.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/hosteed/accueil-mobile.webp',
        alt: "Page d'accueil de Hosteed sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
    ],
    relatedSlugs: ['quintyss', 'moduloop-impact'],
  },
  {
    slug: 'moduloop-impact',
    provenance: 'client',
    clientId: 'moduloop',
    title: 'Moduloop Impact',
    titleQualifier: "calculateur d'impact environnemental",
    engagementType: 'Stage de 3e année',
    periodInline: 'février à juin 2024',
    period: 'Février à juin 2024',
    publishedTimeIso: '2024-06',
    ...MODULOOP_IMPACT_COPY,
    stack: CASE_STUDY_STACKS['moduloop-impact'],
    externalLinks: [{ label: 'moduloop-impact.fr', href: 'https://moduloop-impact.fr' }],
    gallery: [
      {
        src: '/images/case-studies/moduloop-impact/calculateur-hero.webp',
        alt: "Écran principal du calculateur d'impact de Moduloop Impact.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/catalogue-produits.webp',
        alt: 'Catalogue de produits neufs et de réemploi dans Moduloop Impact.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/comparaison-reemploi.webp',
        alt: 'Comparaison chiffrée entre un scénario neuf et un scénario réemploi.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/scenario-reemploi.webp',
        alt: "Estimatif d'impact d'un scénario réemploi, avec ses quatre indicateurs.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/fiche-produit-impact.webp',
        alt: 'Fiche produit avec ses indicateurs environnementaux.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/liste-projets.webp',
        alt: "Liste des projets d'aménagement suivis dans l'outil.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/projet-detail.webp',
        alt: "Détail d'un projet d'aménagement.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/projet-impact.webp',
        alt: "Équivalences d'impact et classement des produits les plus impactants d'un projet.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/connexion.webp',
        alt: 'Écran de connexion à Moduloop Impact.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/calculateur-hero-mobile.webp',
        alt: "Calculateur d'impact sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/moduloop-impact/liste-projets-mobile.webp',
        alt: 'Liste des projets sur mobile.',
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/moduloop-impact/mobile-projet-impact.webp',
        alt: "Impact d'un projet consulté sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
    ],
    relatedSlugs: ['moduloop-kits', 'hosteed'],
  },
  {
    slug: 'moduloop-kits',
    provenance: 'client',
    clientId: 'moduloop',
    title: 'Moduloop Kits',
    titleQualifier: "configurateur de kits d'aménagement",
    engagementType: 'Freelance',
    periodInline: 'août 2025 à août 2026',
    period: 'Août 2025 à août 2026',
    publishedTimeIso: '2026-08',
    ...MODULOOP_KITS_COPY,
    stack: CASE_STUDY_STACKS['moduloop-kits'],
    externalLinks: [],
    gallery: [
      {
        src: '/images/case-studies/moduloop-kits/catalogue-produits.webp',
        alt: "Catalogue de produits pour composer un kit d'aménagement.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/liste-kits.webp',
        alt: "Liste des kits d'aménagement disponibles.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/composition-kit.webp',
        alt: 'Composition d’un kit à partir du catalogue de produits.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/fiche-produit.webp',
        alt: 'Fiche détaillée d’un produit du catalogue.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/liste-projets.webp',
        alt: 'Liste des projets utilisant les kits.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/projet-impact.webp',
        alt: "Impact environnemental et prix au m² d'un projet.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/projet-detail-mobile.webp',
        alt: "Détail d'un projet sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
    ],
    relatedSlugs: ['moduloop-impact', 'quintyss'],
  },
  {
    slug: 'quintyss',
    provenance: 'client',
    clientId: 'quintyss',
    title: 'Quintyss V3',
    titleQualifier: 'CMS multi-sites',
    engagementType: 'Freelance',
    periodInline: 'mars 2025 à août 2026',
    period: 'Mars 2025 à août 2026',
    publishedTimeIso: '2026-08',
    ...QUINTYSS_COPY,
    stack: CASE_STUDY_STACKS.quintyss,
    externalLinks: [],
    gallery: [],
    relatedSlugs: ['moduloop-kits', 'hosteed'],
  },
];

export const CASE_STUDY_PAGE_BY_SLUG: Record<string, CaseStudyPageContent> = Object.fromEntries(
  CASE_STUDY_PAGES.map((page) => [page.slug, page])
);

export const PERSONAL_PROJECT_PAGES: CaseStudyPageContent[] = PERSONAL_PROJECTS.map(
  (project) => project.page
);

/**
 * The single realisations column: client work first, personal projects after.
 */
export const REALISATION_PAGES: CaseStudyPageContent[] = [
  ...CASE_STUDY_PAGES,
  ...PERSONAL_PROJECT_PAGES,
];

export const REALISATION_PAGE_BY_SLUG: Record<string, CaseStudyPageContent> = Object.fromEntries(
  REALISATION_PAGES.map((page) => [page.slug, page])
);

/**
 * Resolves the mark that stands in for a product, whatever its provenance.
 * @param page - the realisation to find a mark for
 * @returns the product mark, or undefined when there is none to show
 */
export function resolveRealisationMark(page: CaseStudyPageContent): ProductMark | undefined {
  if (page.mark) {
    return page.mark;
  }
  if (!page.clientId) {
    return undefined;
  }
  const logo = CLIENT_COLOR_BY_ID[page.clientId].logo;
  return logo ? { ...logo, shape: 'wordmark' } : undefined;
}

/**
 * Reads the active filter from a query-string value.
 * @param raw - value of the `type` search parameter, as Next.js hands it over
 * @returns the filter to apply, falling back to the unfiltered column
 */
export function resolveRealisationFilter(
  raw: string | string[] | undefined
): RealisationFilter {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return value === 'client' || value === 'perso' ? value : 'tout';
}

/**
 * Narrows the column to the entries the filter keeps.
 * @param filter - active filter state
 * @returns the pages to render, in column order
 */
export function filterRealisationPages(filter: RealisationFilter): CaseStudyPageContent[] {
  return filter === 'tout'
    ? REALISATION_PAGES
    : REALISATION_PAGES.filter((page) => page.provenance === filter);
}
