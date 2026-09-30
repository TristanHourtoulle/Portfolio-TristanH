'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Event name as it appears in the Vercel Web Analytics dashboard.
 */
const CONVERSION_EVENT = 'Calendly click';

/** Maximum length of the CTA label sent with the event. */
const CTA_LABEL_MAX_LENGTH = 120;

/** Label used when a Calendly link carries no readable text. */
const UNLABELLED_CTA = '(sans libelle)';

/**
 * Tracks clicks on Calendly booking links.
 */
export function CalendlyConversionTracker() {
  useEffect(() => {
    const calendlyOrigin = new URL(SITE_CONFIG.calendlyUrl).origin;

    const handlePointerActivation = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== 1) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest('a');
      if (!anchor || anchor.origin !== calendlyOrigin) {
        return;
      }

      const label = (anchor.textContent ?? '').trim().replace(/\s+/g, ' ');

      track(CONVERSION_EVENT, {
        page: window.location.pathname,
        cta: label ? label.slice(0, CTA_LABEL_MAX_LENGTH) : UNLABELLED_CTA,
      });
    };

    document.addEventListener('click', handlePointerActivation, { capture: true });
    document.addEventListener('auxclick', handlePointerActivation, { capture: true });

    return () => {
      document.removeEventListener('click', handlePointerActivation, { capture: true });
      document.removeEventListener('auxclick', handlePointerActivation, { capture: true });
    };
  }, []);

  return null;
}
