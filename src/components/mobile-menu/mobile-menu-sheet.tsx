'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  NAVIGATION,
  PROFILE_PRIMARY_ACTION,
  PROFILE_SECONDARY_ACTION,
} from '@/lib/constants';
import { MOBILE_MENU_SHEET_ID, useMobileMenu } from './mobile-menu-context';

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

const MENU_ACTIONS = [PROFILE_PRIMARY_ACTION, PROFILE_SECONDARY_ACTION].filter(
  (action) => action !== null,
);

/**
 * Full-height mobile menu sheet, rendered outside the transformed page shell.
 *
 * @returns The sheet, hidden above the mobile breakpoint.
 */
export function MobileMenuSheet() {
  const { isOpen, closeForNavigation, triggerRef } = useMobileMenu();
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      triggerRef.current?.focus({ preventScroll: true });
    }
    wasOpenRef.current = isOpen;
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return;
      }
      const trigger = triggerRef.current;
      const sheet = sheetRef.current;
      if (trigger === null || sheet === null) {
        return;
      }

      const nodes: HTMLElement[] = [
        trigger,
        ...Array.from(sheet.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)),
      ];
      const current = nodes.indexOf(document.activeElement as HTMLElement);
      const last = nodes.length - 1;
      let next: number;
      if (event.shiftKey) {
        next = current <= 0 ? last : current - 1;
      } else {
        next = current === -1 || current === last ? 0 : current + 1;
      }

      event.preventDefault();
      nodes[next]?.focus();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, triggerRef]);

  return (
    <div
      id={MOBILE_MENU_SHEET_ID}
      ref={sheetRef}
      className="menu-sheet"
      inert={!isOpen}
    >
      <div className="menu-inner">
        <nav className="menu-nav" aria-label="Navigation mobile">
          <ul>
            {NAVIGATION.map((item, index) => (
              <li
                key={item.id}
                style={{ '--i': index } as React.CSSProperties}
              >
                <Link href={item.href} onClick={closeForNavigation}>
                  <span className="menu-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-foot">
          {MENU_ACTIONS.map((action) => {
            const opensInNewTab =
              action.downloadFileName === undefined &&
              action.href.startsWith('http');

            return (
              <a
                key={action.href}
                className="menu-cta"
                href={action.href}
                download={action.downloadFileName}
                target={opensInNewTab ? '_blank' : undefined}
                rel={opensInNewTab ? 'noopener noreferrer' : undefined}
              >
                {action.label}
                <span aria-hidden="true">&#8599;</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
