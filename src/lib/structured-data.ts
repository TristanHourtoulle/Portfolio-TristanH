import { ABOUT_CONTENT, SITE_CONFIG } from './constants';
import { PARCOURS_CONTENT } from './parcours-content';
import { canonicalUrl } from './site-url';
import type { CaseStudyPageContent } from './types';

type JsonLdValue =
  | string
  | number
  | boolean
  | readonly JsonLdValue[]
  | { readonly [key: string]: JsonLdValue | undefined };

export interface JsonLdGraph {
  readonly '@context': 'https://schema.org';
  readonly '@graph': readonly JsonLdValue[];
}

/**
 * Serializes a graph for `dangerouslySetInnerHTML`.
 */
export function serializeJsonLd(graph: JsonLdGraph): string {
  return JSON.stringify(graph).replace(/</g, '\\u003c');
}

const SITE_URL = SITE_CONFIG.siteUrl;

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SOCIAL_PROFILE_URLS: readonly string[] = [
  'https://github.com/TristanHourtoulle',
  SITE_CONFIG.linkedinUrl,
];

const KNOWS_ABOUT: readonly string[] = ABOUT_CONTENT.tools.flatMap((tool) =>
  tool
    .split('·')
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0),
);

const PROFESSION = 'Développeur web full-stack';

const ALUMNI_OF = {
  '@type': 'CollegeOrUniversity',
  name: PARCOURS_CONTENT.school.name,
  description: PARCOURS_CONTENT.school.description,
} as const;

const PERSON_IDENTITY = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE_CONFIG.brandName,
  url: canonicalUrl('/'),
  jobTitle: PROFESSION,
  sameAs: SOCIAL_PROFILE_URLS,
} as const;

/**
 * The identity-only node, for pages that show none of the homepage profile.
 */
function buildPersonIdentityNode(): JsonLdValue {
  return PERSON_IDENTITY;
}

/**
 * The full profile node, for the one page that renders its content.
 */
function buildPersonNode(): JsonLdValue {
  return {
    ...PERSON_IDENTITY,
    image: canonicalUrl('/images/tristan-hourtoulle.webp'),
    description: ABOUT_CONTENT.paragraphs[0],
    email: SITE_CONFIG.email,
    knowsAbout: KNOWS_ABOUT,
    knowsLanguage: 'fr-FR',
    alumniOf: ALUMNI_OF,
  };
}

function buildWebSiteNode(): JsonLdValue {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: canonicalUrl('/'),
    name: SITE_CONFIG.brandName,
    inLanguage: 'fr-FR',
    publisher: { '@id': PERSON_ID },
  };
}

/**
 * Homepage graph.
 */
export function buildHomeStructuredData(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildPersonNode(),
      buildWebSiteNode(),
    ],
  };
}

interface BreadcrumbEntry {
  name: string;
  /** Omitted for the current page. */
  path?: string;
}

/**
 * Builds a `BreadcrumbList` from the same trail the page renders.
 */
function buildBreadcrumbNode(pagePath: string, entries: readonly BreadcrumbEntry[]): JsonLdValue {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl(pagePath)}#breadcrumb`,
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.path === undefined ? undefined : canonicalUrl(entry.path),
    })),
  };
}

const HOME_CRUMB: BreadcrumbEntry = { name: 'Accueil', path: '/' };

export function buildRealisationsStructuredData(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbNode('/realisations', [HOME_CRUMB, { name: 'Réalisations' }]),
      buildPersonIdentityNode(),
    ],
  };
}

export function buildParcoursStructuredData(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbNode('/parcours', [HOME_CRUMB, { name: 'Parcours' }]),
      buildPersonIdentityNode(),
    ],
  };
}

function buildCaseStudyNode(page: CaseStudyPageContent): JsonLdValue {
  const path = `/realisations/${page.slug}`;
  const desktopImages = page.gallery.filter((image) => image.variant === 'desktop');
  const images = (desktopImages.length > 0 ? desktopImages : page.gallery).map((image) =>
    canonicalUrl(image.src)
  );

  return {
    '@type': 'CreativeWork',
    '@id': `${canonicalUrl(path)}#case-study`,
    name: `${page.title}, ${page.titleQualifier}`,
    url: canonicalUrl(path),
    description: page.metaDescription,
    inLanguage: 'fr-FR',
    datePublished: page.publishedTimeIso,
    keywords: page.stack.join(', '),
    image: images.length > 0 ? images : undefined,
    author: { '@id': PERSON_ID },
  };
}

export function buildCaseStudyStructuredData(page: CaseStudyPageContent): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbNode(`/realisations/${page.slug}`, [
        HOME_CRUMB,
        { name: 'Réalisations', path: '/realisations' },
        { name: page.title },
      ]),
      buildPersonIdentityNode(),
      buildCaseStudyNode(page),
    ],
  };
}
