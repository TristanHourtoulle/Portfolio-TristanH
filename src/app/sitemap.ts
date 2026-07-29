import type { MetadataRoute } from 'next';
import { CASE_STUDY_PAGES } from '@/lib/case-studies-content';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Routes that exist as their own files rather than being generated from
 * data. Kept as an explicit list so adding a page is a deliberate act:
 * scanning the app directory at build time would silently enrol any new
 * route, including ones that should stay out of the index.
 *
 * `/mentions-legales` is absent on purpose. It declares
 * `robots: { index: false, follow: true }` in its own metadata, and a
 * sitemap is a statement of "these are the URLs I want indexed". Listing a
 * noindexed URL contradicts that, and Search Console reports it back as the
 * "Submitted URL marked noindex" error. The page stays crawlable through
 * robots.txt and through the footer link, which is all it needs.
 */
const STATIC_PATHS = ['/', '/realisations'] as const;

/**
 * Turns a route path into the absolute URL the sitemap should advertise.
 *
 * The root is returned as `SITE_CONFIG.siteUrl` verbatim rather than passed
 * through `new URL()`. The WHATWG URL parser normalises an empty path to
 * "/", so `new URL('/', origin)` yields a trailing slash, while the
 * homepage canonical that Next renders from `alternates: { canonical: '/' }`
 * resolves to the bare origin with no trailing slash. Both forms address
 * the same document, but a sitemap entry and the canonical it points at
 * should be the same string, otherwise Search Console has to reconcile two
 * spellings of one page. Matching the canonical is the safer side to be on.
 */
function absoluteUrl(path: string): string {
  return path === '/' ? SITE_CONFIG.siteUrl : new URL(path, SITE_CONFIG.siteUrl).toString();
}

/**
 * XML sitemap, served at /sitemap.xml and referenced from robots.txt.
 *
 * Every URL is built through `absoluteUrl` rather than by string
 * concatenation, so the origin comes from the single source of truth and
 * the output matches the canonical tags byte for byte. Next.js
 * resolves the relative `alternates.canonical` values against the same
 * origin through `metadataBase`, so a page's canonical and its sitemap
 * entry cannot drift apart.
 *
 * No `lastModified`
 * ----------------
 * The content of this site is hand-authored TypeScript. Nothing in
 * `CaseStudyPageContent` or in the page files records when a page's text
 * last changed, so there is no truthful value to emit, and every available
 * substitute is worse than saying nothing:
 *
 * - `new Date()` would stamp the build time, which changes on every deploy
 *   including deploys that touch no copy at all. That is a claim of "this
 *   page changed" made on a build that changed nothing.
 * - A git commit date is not dependable at build time either: Vercel builds
 *   from a shallow checkout, and a commit date reflects any commit that
 *   touched the file, formatting included, not a content change.
 * - A hardcoded date would be invented, and would go stale the moment the
 *   copy is edited without someone remembering to bump it.
 *
 * Google states it ignores `lastmod` values it judges inconsistent with the
 * page, so an inaccurate one buys nothing and costs trust in the whole
 * sitemap. The field is optional in `MetadataRoute.Sitemap`, so it is left
 * out. To do this properly, `CaseStudyPageContent` (and an equivalent for
 * the two static pages) would need a real `lastModified: string` field,
 * maintained by hand alongside the copy it describes.
 *
 * No `changeFrequency` and no `priority`
 * --------------------------------------
 * Google has said publicly that it ignores both. `priority` is relative
 * within a single sitemap, so on a six-URL sitemap it could not express
 * anything a crawler cannot already work out from the site's own internal
 * linking. `changeFrequency` would be a guess about the future, and the
 * same "no value beats a wrong value" argument as `lastModified` applies.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: absoluteUrl(path),
  }));

  const caseStudyEntries = CASE_STUDY_PAGES.map((page) => ({
    url: absoluteUrl(`/realisations/${page.slug}`),
  }));

  return [...staticEntries, ...caseStudyEntries];
}
