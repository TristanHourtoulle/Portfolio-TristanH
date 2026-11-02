'use client';

import { MOBILE_MENU_SHEET_ID, useMobileMenu } from './mobile-menu-context';

/**
 * Icon-only button that opens and closes the mobile menu.
 *
 * @returns The burger trigger, hidden above the mobile breakpoint.
 */
export function MobileMenuTrigger() {
  const { isOpen, toggle, triggerRef } = useMobileMenu();

  return (
    <button
      ref={triggerRef}
      type="button"
      className="menu-toggle"
      aria-controls={MOBILE_MENU_SHEET_ID}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      onClick={toggle}
    >
      <span className="menu-icon" aria-hidden="true">
        <span className="menu-icon-bar menu-icon-bar--top" />
        <span className="menu-icon-bar menu-icon-bar--bottom" />
      </span>
    </button>
  );
}
