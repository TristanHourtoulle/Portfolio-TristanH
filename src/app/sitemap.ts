import type { MetadataRoute } from 'next';
import { CASE_STUDY_PAGES } from '@/lib/case-studies-content';
import { SITE_CONFIG } from '@/lib/constants';

const STATIC_PATHS = ['/', '/realisations'] as const;

/**
 * Turns a route path into the absolute URL the sitemap should advertise.
 * @param path - route path, absolute from the site root
 * @returns the absolute URL for that route
 */
function absoluteUrl(path: string): string {
  return path === '/' ? SITE_CONFIG.siteUrl : new URL(path, SITE_CONFIG.siteUrl).toString();
}

/**
 * XML sitemap, served at /sitemap.xml and referenced from robots.txt.
 * @returns the sitemap entries for every indexable route
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
