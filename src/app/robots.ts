import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * robots.txt for the whole site.
 * @returns the crawl rules and the sitemap location
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
