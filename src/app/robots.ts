import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * robots.txt for the whole site.
 *
 * Everything is crawlable. There is no admin area, no search results page
 * and no parameterised duplicate to fence off, so any `Disallow` here would
 * only be a way to accidentally hide something later.
 *
 * `/_next/` is deliberately NOT disallowed. That directory serves the CSS
 * and the JavaScript chunks the pages are built from, and Google renders a
 * page before deciding what it contains. Blocking it is the classic way to
 * make a fully styled site look like unstyled markup to the crawler, which
 * costs mobile-friendliness and layout signals for no benefit. Next.js
 * already fingerprints those assets, so they are cached rather than
 * re-fetched, and they are not indexable documents in the first place.
 *
 * `/mentions-legales` is not disallowed either, even though it is excluded
 * from the sitemap. It carries `robots: { index: false, follow: true }` in
 * its own metadata, and a `Disallow` would stop the crawler from ever
 * fetching the page and therefore from ever seeing that noindex. Blocked
 * URLs can still be indexed from external links; noindexed ones cannot.
 * Letting it be crawled is what actually keeps it out of the index.
 *
 * There is no `host` directive: it was a Yandex-only extension, Yandex
 * itself deprecated it in 2018, and every other crawler ignores it. The
 * apex-to-www consolidation is handled by the 308 redirect and by the
 * canonical tags, which is where it belongs.
 *
 * This file is intentionally not conditioned on `VERCEL_ENV`. Preview
 * deployments are kept out of the index by the `X-Robots-Tag: noindex`
 * header in next.config.ts, and that mechanism only works if the crawler
 * is allowed to fetch the response and read the header. A `Disallow: /`
 * on previews would block the fetch and thus suppress the very signal
 * that removes them from the index.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('/sitemap.xml', SITE_CONFIG.siteUrl).toString(),
  };
}
