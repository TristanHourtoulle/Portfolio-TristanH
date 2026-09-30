import {
  ABOUT_CONTENT,
  FOOTER_LEGAL_LINKS,
  HERO_CONTENT,
  SITE_CONFIG,
} from './constants';
import { LEGAL_CONTENT } from './legal-content';
import type { CaseStudyPageContent } from './types';

/**
 * JSON-LD graphs emitted by the site, built from the same constants the
 * pages render. Nothing in here is a second, hand-typed copy of the
 * visible copy: every string is either read from a constant or derived
 * from one, so the markup cannot drift away from what a reader sees.
 * That is not a style preference, it is Google's own condition: markup
 * that describes content absent from the page is a guideline violation
 * and can draw a manual action.
 *
 * ## What is deliberately NOT here, and why
 *
 * - **`Review` / `AggregateRating`.** `TESTIMONIALS` and
 *   `TRUST_STATS.averageRating` exist in constants.ts and would produce
 *   a "5.0, 5 avis" star line. Google's review snippet policy forbids
 *   self-serving reviews: a business may not mark up ratings about
 *   itself that it collected and published itself. The stars would be
 *   removed and the domain would carry a spammy-structured-markup
 *   record. The testimonials stay visible on the page for humans and
 *   stay out of the markup.
 *
 * - **`LocalBusiness` / `ProfessionalService`.** The positioning is
 *   national and fully remote (see `HERO_CONTENT.locationNote`), and
 *   there is no premises a client visits. Those types exist to place a
 *   business on a map, so claiming one would be asking to rank in a
 *   place where no service is delivered. `Organization` plus
 *   `Service.areaServed = France` says the true thing instead.
 *
 * - **`potentialAction: SearchAction`.** The site has no search
 *   endpoint, so the action would point nowhere. The sitelinks
 *   searchbox it used to feed is retired anyway.
 *
 * - **`Organization.logo`.** `src/app/icon.svg` and
 *   `src/app/favicon.ico` are the Kaiboard mark, a different brand.
 *   Declaring it as this organization's logo would be a false identity
 *   claim, so the property is omitted until a real mark exists.
 *
 * - **`Organization.foundingDate`.** `ABOUT_CONTENT` says "je travaille
 *   depuis 2024", which is when the client work started, not a company
 *   creation date. No field in the repo states the latter, so it is not
 *   asserted.
 *
 * - **Street address.** The postal address in legal-content.ts is a
 *   home address, published only because the mentions légales legally
 *   require it. `addressCountry: 'FR'` is the whole address here.
 */

/**
 * A JSON-LD value. Recursive rather than a hand-written interface per
 * schema.org type: the types used here are shallow, and modelling all of
 * schema.org would be a library, not a file. `undefined` is allowed in
 * objects because `JSON.stringify` drops those keys, which is how an
 * optional property (the `item` URL on the last breadcrumb, which points
 * at the current page and is therefore omitted) is left out.
 */
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
 *
 * Escaping the opening angle bracket is what keeps a string containing
 * an end tag from closing this script early and turning data into
 * markup. Note the double backslash in the replacement: it writes a
 * literal backslash followed by u003c into the JSON text, which a JSON
 * parser reads back as an angle bracket while the HTML tokenizer never
 * sees one at all. Written with a single backslash, as several
 * published snippets have it, the replacement is a no-op, since that
 * escape already evaluates to the very character being searched for.
 *
 * Every value fed in here is hand-authored site content, not user
 * input, so this is defence in depth rather than an active hole.
 */
export function serializeJsonLd(graph: JsonLdGraph): string {
  return JSON.stringify(graph).replace(/</g, '\\u003c');
}

/** Origin without a trailing slash, e.g. `https://www.tristanhourtoulle.fr`. */
const SITE_URL = SITE_CONFIG.siteUrl;

/**
 * Site-relative path to absolute URL. Every URL in the markup has to
 * match the canonical Next emits from `metadataBase`, or the two
 * disagree about which document is being described.
 */
function absolute(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

/**
 * Stable node identifiers. Fragment ids on the origin, so the same
 * entity keeps one identity across pages and a reference from a case
 * study resolves to the node the homepage declares in full.
 */
const PERSON_ID = `${SITE_URL}/#person`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SERVICE_ID = `${SITE_URL}/#service`;

/**
 * Read from the footer links rather than listed again, so `sameAs` can
 * only ever contain profiles that are actually linked from the site.
 * The `https://` test drops the `mailto:` entry and the internal
 * `/mentions-legales` route, leaving GitHub and LinkedIn.
 */
const SOCIAL_PROFILE_URLS: readonly string[] = FOOTER_LEGAL_LINKS.filter((link) =>
  link.href.startsWith('https://'),
).map((link) => link.href);

/**
 * The SIRET is displayed grouped for humans ("931 059 588 00018"); the
 * machine-readable form is the bare 14 digits. Derived here rather than
 * retyped so legal-content.ts stays the single source.
 *
 * Worth emitting: it is open company data, already public on the
 * mentions légales page and in the national Sirene register, and it is
 * the one identifier that pins this entity down unambiguously. Google
 * does not consume `identifier` on `Organization` (its list is
 * `vatID`, `taxID`, `duns`, `leiCode`, `iso6523Code`), so this buys
 * nothing in Search. It is emitted for the other consumers, at a cost
 * of about eighty bytes and zero disclosure risk. `taxID` is not used
 * for it: a SIRET is a registration number, not a fiscal one, and this
 * business has no VAT number at all (franchise en base, article 293 B).
 */
const SIRET_DIGITS = LEGAL_CONTENT.editor.siret.replace(/\D/g, '');

/**
 * `ABOUT_CONTENT.tools` stores display strings where a middle dot packs
 * two technologies onto one line ("Next.js · TypeScript"). Splitting it
 * back apart gives one term per entry, which is what `knowsAbout`
 * means; leaving it joined would assert a skill named
 * "Next.js · TypeScript" that nobody searches for.
 */
const KNOWS_ABOUT: readonly string[] = ABOUT_CONTENT.tools.flatMap((tool) =>
  tool
    .split('·')
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0),
);

/** Trade label, the same one the root layout puts in the site title. */
const PROFESSION = 'Développeur web full-stack et designer freelance';

/**
 * The service is delivered remotely across France. This is the honest
 * replacement for the `LocalBusiness` block a portfolio is usually
 * tempted into: it states the market without claiming a storefront.
 */
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

/**
 * The business is an entreprise individuelle: the person and the legal
 * entity are the same taxpayer, which is why `founder` and `worksFor`
 * point at each other and why the organization carries the person's own
 * name. schema.org has no sole-trader type, so a plain `Organization`
 * cross-linked to the `Person` is the closest true model.
 */
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
    /**
     * No `description`. The Organization and Service nodes both carry
     * `HERO_CONTENT.subtitle` already, and a third identical copy in the
     * same graph reads as padding rather than as information.
     */
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
    /**
     * The site has exactly one conversion, the Calendly booking, so the
     * channel that leads to the service is worth naming.
     */
    availableChannel: {
      '@type': 'ServiceChannel',
      name: HERO_CONTENT.primaryCtaLabel,
      serviceUrl: SITE_CONFIG.calendlyUrl,
    },
  };
}

/**
 * Homepage graph. The identity nodes live here and nowhere else:
 * Google's own guidance is that `Organization` belongs on the homepage
 * or a single about page, not repeated on every route, and repeating it
 * would add the same kilobyte to six documents for no gain.
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
  /** Omitted for the current page: Google then uses the containing URL. */
  path?: string;
}

/**
 * Builds a `BreadcrumbList` from the same trail the page renders.
 *
 * This is the one type on this site that still earns a visible SERP
 * enhancement, so it has to mirror the visible `.case-breadcrumb` nav
 * exactly, item for item and label for label. The final entry carries no
 * `item`, which matches both Google's rule (the containing page's URL is
 * assumed) and the markup, where the current page is a plain span with
 * `aria-current="page"` rather than a link to itself.
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

/** Trail shared by `/realisations` and every case study below it. */
const HOME_CRUMB: BreadcrumbEntry = { name: 'Accueil', path: '/' };

export function buildRealisationsStructuredData(): JsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbNode('/realisations', [HOME_CRUMB, { name: 'Réalisations' }]),
    ],
  };
}

/**
 * A case study as `CreativeWork`.
 *
 * `CreativeWork` rather than `Article`: these pages are documentation of
 * a delivered product, not journalism, and `Article` would invite an
 * article rich result the pages are not built to earn. There is no
 * `CaseStudy` type in schema.org, so `CreativeWork` is the nearest
 * honest parent.
 *
 * `datePublished` keeps the month precision of `publishedTimeIso`: the
 * only dates these projects have are the human periods the clients gave
 * ("mai à novembre 2025"), and a fabricated day would buy a fuller
 * looking string with a fact nobody can stand behind. It matches the
 * `og:article:published_time` the same page already emits.
 *
 * Only the desktop captures go into `image`. The portrait phone shots
 * are the same screens at a different width, so listing them adds bytes
 * without adding a subject.
 *
 * `author` is inlined rather than referenced by `@id` alone. The full
 * `Person` node is declared on the homepage, so a bare reference from
 * here would dangle for any consumer reading this document on its own;
 * repeating the identifier plus a name and URL keeps the link to the
 * homepage node while still resolving locally.
 */
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
