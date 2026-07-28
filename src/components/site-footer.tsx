import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { FOOTER_LEGAL_LINKS, NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import type { FooterLink } from '@/lib/types';

const ICONS: Record<NonNullable<FooterLink['icon']>, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

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
          <p>Développeur web full-stack et designer freelance.</p>
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
                  >
                    {Icon ? <Icon aria-hidden="true" className="inline-block w-4 h-4 mr-1" /> : null}
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
