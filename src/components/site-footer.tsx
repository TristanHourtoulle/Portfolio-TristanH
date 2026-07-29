import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { FOOTER_LEGAL_LINKS, FOOTER_NAVIGATION, SITE_CONFIG } from '@/lib/constants';
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
            {FOOTER_NAVIGATION.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Liens externes et légaux">
          <ul>
            {/*
              Three kinds of destination share this list, and only one of
              them is a route. `/mentions-legales` goes through next/link so
              it is prefetched and navigated client-side like the rest of the
              site; the GitHub and LinkedIn profiles open in a new tab with
              the usual `rel`; the `mailto:` hands off to the mail client and
              must stay a plain anchor, since next/link only knows how to
              route URLs this app can render.
            */}
            {FOOTER_LEGAL_LINKS.map((link) => {
              const Icon = link.icon ? ICONS[link.icon] : null;
              const isInternal = link.href.startsWith('/');
              const isNewTab = link.href.startsWith('http');
              const className = Icon ? 'icon-link' : undefined;
              const content = (
                <>
                  {Icon ? <Icon aria-hidden="true" className="w-4 h-4 shrink-0" /> : null}
                  {link.label}
                </>
              );

              return (
                <li key={link.id}>
                  {isInternal ? (
                    <Link href={link.href} className={className}>
                      {content}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={isNewTab ? '_blank' : undefined}
                      rel={isNewTab ? 'noopener noreferrer' : undefined}
                      className={className}
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
