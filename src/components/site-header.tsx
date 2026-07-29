import Link from 'next/link';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';

/**
 * Sticky header. No mobile hamburger menu: under 760px the nav list moves to
 * its own full-width row and wraps onto a second line when it has to (see
 * .site-nav in globals.css), so every entry stays visible without a disclosure
 * widget and this stays a plain Server Component with no interactivity.
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
