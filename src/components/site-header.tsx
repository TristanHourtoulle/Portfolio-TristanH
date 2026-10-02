import Link from 'next/link';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import { ProfileActions } from '@/components/ui/profile-actions';
import { ScrollProgress } from '@/components/scroll-progress';
import { MobileMenuTrigger } from '@/components/mobile-menu/mobile-menu-trigger';

/**
 * Sticky site header.
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
          <ProfileActions />
        </div>
        <MobileMenuTrigger />
      </div>
      <ScrollProgress />
    </header>
  );
}
