import type { MetadataRoute } from 'next';
import { REALISATION_PAGES } from '@/lib/case-studies-content';
import { canonicalUrl } from '@/lib/site-url';

const STATIC_PATHS = ['/', '/realisations', '/parcours'] as const;

/**
 * XML sitemap, served at /sitemap.xml and referenced from robots.txt.
 * @returns the sitemap entries for every indexable route
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: canonicalUrl(path),
  }));

  const caseStudyEntries = REALISATION_PAGES.map((page) => ({
    url: canonicalUrl(`/realisations/${page.slug}`),
  }));

  return [...staticEntries, ...caseStudyEntries];
}
