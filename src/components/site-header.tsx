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
        <a className="brand" href="#contenu">
          {SITE_CONFIG.brandName}
          <span className="mono">{SITE_CONFIG.brandTagline}</span>
        </a>
        <nav className="site-nav" aria-label="Navigation principale">
          <ul>
            {NAVIGATION.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
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
