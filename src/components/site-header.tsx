import Link from 'next/link';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';

/**
 * Sticky header. No mobile hamburger menu: the mockup lets the nav list
 * scroll horizontally under 760px instead (see .site-nav in globals.css),
 * so this stays a plain Server Component with no interactivity.
 */
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/">
          {SITE_CONFIG.brandName}
          <span className="mono">{SITE_CONFIG.brandTagline}</span>
        </Link>
        <nav className="site-nav" aria-label="Navigation principale">
          <ul>
            {NAVIGATION.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <Button variant="primary" href={SITE_CONFIG.calendlyUrl}>
            Réserver un appel
          </Button>
        </div>
      </div>
    </header>
  );
}
