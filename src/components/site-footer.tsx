import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { FOOTER_LEGAL_LINKS, FOOTER_NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import type { FooterLink } from '@/lib/types';

const ICONS: Record<NonNullable<FooterLink['icon']>, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const currentYear = new Date().getFullYear();

/**
 * Site footer.
 *
 * The copyright year is resolved at build time, so it refreshes on each deployment.
 *
 * @returns The footer landmark with branding, navigation and legal links.
 */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <p>
            <Link className="brand" href="/">
              {SITE_CONFIG.brandName}
            </Link>
          </p>
          <p>Développeur web full-stack, de la spec aux tests.</p>
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
