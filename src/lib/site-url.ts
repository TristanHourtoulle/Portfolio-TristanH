import { SITE_CONFIG } from './constants';

/**
 * Builds the one URL form the site advertises for a route.
 * @param path - route path, absolute from the site root
 * @returns the absolute URL, with no trailing slash on the home route
 */
export function canonicalUrl(path: string): string {
  return path === '/' ? SITE_CONFIG.siteUrl : new URL(path, `${SITE_CONFIG.siteUrl}/`).toString();
}
