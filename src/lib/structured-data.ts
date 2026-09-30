import {
  ABOUT_CONTENT,
  FOOTER_LEGAL_LINKS,
  HERO_CONTENT,
  SITE_CONFIG,
} from './constants';
import { LEGAL_CONTENT } from './legal-content';
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

/**
 * Site-relative path to absolute URL.
 */
function absolute(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

const PERSON_ID = `${SITE_URL}/#person`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SERVICE_ID = `${SITE_URL}/#service`;

const SOCIAL_PROFILE_URLS: readonly string[] = FOOTER_LEGAL_LINKS.filter((link) =>
  link.href.startsWith('https://'),
).map((link) => link.href);

const SIRET_DIGITS = LEGAL_CONTENT.editor.siret.replace(/\D/g, '');

const KNOWS_ABOUT: readonly string[] = ABOUT_CONTENT.tools.flatMap((tool) =>
  tool
    .split('·')
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0),
);

const PROFESSION = 'Développeur web full-stack et designer freelance';

const AREA_SERVED = { '@type': 'Country', name: 'France' } as const;

function buildPersonNode(): JsonLdValue {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_CONFIG.brandName,
    url: absolute('/'),
    image: absolute('/images/tristan-hourtoulle.webp'),
    jobTitle: PROFESSION,
    description: ABOUT_CONTENT.paragraphs[0],
    email: `mailto:${SITE_CONFIG.email}`,
    knowsAbout: KNOWS_ABOUT,
    knowsLanguage: 'fr-FR',
    sameAs: SOCIAL_PROFILE_URLS,
    worksFor: { '@id': ORGANIZATION_ID },
  };
}

function buildOrganizationNode(): JsonLdValue {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_CONFIG.brandName,
    legalName: LEGAL_CONTENT.editor.name,
    url: absolute('/'),
    description: HERO_CONTENT.subtitle,
    email: `mailto:${SITE_CONFIG.email}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'SIRET',
      value: SIRET_DIGITS,
    },
    founder: { '@id': PERSON_ID },
    sameAs: SOCIAL_PROFILE_URLS,
  };
}

function buildWebSiteNode(): JsonLdValue {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absolute('/'),
    name: SITE_CONFIG.brandName,
    inLanguage: 'fr-FR',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

function buildServiceNode(): JsonLdValue {
  return {
    '@type': 'Service',
    '@id': SERVICE_ID,
    name: 'Design et développement web freelance',
    serviceType: 'Design et développement web',
    description: HERO_CONTENT.subtitle,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: AREA_SERVED,
    audience: {
      '@type': 'Audience',
      audienceType: 'PME, startups et agences',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      name: HERO_CONTENT.primaryCtaLabel,
      serviceUrl: SITE_CONFIG.calendlyUrl,
    },
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
      buildOrganizationNode(),
      buildWebSiteNode(),
      buildServiceNode(),
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
    '@id': `${absolute(pagePath)}#breadcrumb`,
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.path === undefined ? undefined : absolute(entry.path),
    })),
  };
}

const HOME_CRUMB: BreadcrumbEntry = { name: 'Accueil', path: '/' };

export function buildRealisationsStructuredData(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbNode('/realisations', [HOME_CRUMB, { name: 'Réalisations' }]),
    ],
  };
}

function buildCaseStudyNode(page: CaseStudyPageContent): JsonLdValue {
  const path = `/realisations/${page.slug}`;

  return {
    '@type': 'CreativeWork',
    '@id': `${absolute(path)}#case-study`,
    name: `${page.title}, ${page.titleQualifier}`,
    url: absolute(path),
    description: page.metaDescription,
    inLanguage: 'fr-FR',
    datePublished: page.publishedTimeIso,
    keywords: page.stack.join(', '),
    image: page.gallery
      .filter((image) => image.variant === 'desktop')
      .map((image) => absolute(image.src)),
    author: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE_CONFIG.brandName,
      url: absolute('/'),
    },
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
      buildCaseStudyNode(page),
    ],
  };
}
