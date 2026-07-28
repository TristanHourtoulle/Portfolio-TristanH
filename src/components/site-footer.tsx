import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { FOOTER_LEGAL_LINKS, NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import type { FooterLink } from '@/lib/types';

const ICONS: Record<NonNullable<FooterLink['icon']>, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

/**
 * Read at render time, on the server only: `SiteFooter` has no `'use
 * client'` directive, so this runs during the server render, not in the
 * browser. Computing it in a Client Component (useEffect or first
 * render) would let the server-rendered HTML and the browser's own
 * clock disagree at the New Year's midnight boundary, producing a
 * hydration mismatch. Same reasoning as getAvailabilityLabel in
 * src/lib/availability.ts.
 */
function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function SiteFooter() {
  const currentYear = getCurrentYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <p>
            <Link className="brand" href="/">
              {SITE_CONFIG.brandName}
            </Link>
          </p>
          <p>Développeur web full-stack et designer freelance.</p>
          <p className="copyright">
            © {currentYear} {SITE_CONFIG.brandName}. Tous droits réservés.
          </p>
        </div>
        <nav aria-label="Navigation secondaire">
          <ul>
            {NAVIGATION.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Liens externes et légaux">
          <ul>
            {FOOTER_LEGAL_LINKS.map((link) => {
              const Icon = link.icon ? ICONS[link.icon] : null;
              const isExternal = link.href.startsWith('http');
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={Icon ? 'icon-link' : undefined}
                  >
                    {Icon ? <Icon aria-hidden="true" className="w-4 h-4 shrink-0" /> : null}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
