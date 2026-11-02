'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const HEADER_SELECTOR = 'header.site-header';

/**
 * Keeps anchor offsets in sync with the sticky header and lands every navigation in the right place.
 */
export function ScrollManager() {
  const pathname = usePathname();
  const hasMountedRef = useRef(false);
  const isHistoryNavigationRef = useRef(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(HEADER_SELECTOR);
    if (!header) {
      return;
    }

    const syncHeaderHeight = () => {
      const height = Math.round(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--header-h', `${height}px`);
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const markHistoryNavigation = () => {
      isHistoryNavigationRef.current = true;
    };

    window.addEventListener('popstate', markHistoryNavigation);
    return () => window.removeEventListener('popstate', markHistoryNavigation);
  }, []);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (isHistoryNavigationRef.current) {
      isHistoryNavigationRef.current = false;
      return;
    }

    if (window.location.hash) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
