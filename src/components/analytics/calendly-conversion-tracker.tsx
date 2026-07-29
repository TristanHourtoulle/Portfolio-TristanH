'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Event name as it appears in the Vercel Web Analytics dashboard.
 */
const CONVERSION_EVENT = 'Calendly click';

/**
 * Vercel truncates nothing and rejects nothing above 255 characters, it
 * simply refuses the whole event, so the label is clamped well under that
 * ceiling. 120 is longer than every CTA copy currently on the site.
 */
const CTA_LABEL_MAX_LENGTH = 120;

/**
 * Fallback when a Calendly link carries no readable text, which today only
 * happens if a future icon-only link is added without an accessible name.
 */
const UNLABELLED_CTA = '(sans libelle)';

/**
 * Tracks the site's only conversion: a click on a Calendly booking link.
 *
 * Every Calendly CTA is rendered by a Server Component (`SiteHeader`,
 * `HeroSection`, `ServicesSection`, `CtaSection`, `CaseStudyHero`, and the
 * four case studies' `primaryCta`), all of them through the shared
 * `Button`. Attaching an `onClick` to any of those would force `Button`
 * itself to become a Client Component, which would in turn pull every
 * section that renders a CTA across the server/client boundary. That is a
 * large subtree to ship to the browser in exchange for one counter.
 *
 * So the listener is delegated instead: one capture-phase listener on
 * `document`, mounted once from the root layout, that recognises a
 * Calendly link by its origin. This file is the only Client Component the
 * feature adds; not a single existing component changes boundary. It also
 * keeps working for any Calendly link added later anywhere in the tree,
 * with no call site to remember to instrument.
 *
 * Capture phase rather than bubble on purpose. Nothing on this site calls
 * `stopPropagation` on an anchor today, but a missed conversion is a
 * silent data loss while a conversion counted on a click that was later
 * cancelled is merely a rounding error, so the phase that cannot be
 * intercepted wins.
 */
export function CalendlyConversionTracker() {
  useEffect(() => {
    const calendlyOrigin = new URL(SITE_CONFIG.calendlyUrl).origin;

    const handlePointerActivation = (event: MouseEvent) => {
      /**
       * `auxclick` fires for the non-primary buttons. Button 1 is the
       * middle click, which opens the link in a background tab and is a
       * real booking intent that never produces a `click` event. Button 2
       * is the context menu, which is not a navigation, so it is dropped.
       */
      if (event.type === 'auxclick' && event.button !== 1) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      /**
       * `closest` rather than a direct target test: the CTAs wrap their
       * label in inline elements, so the event target is frequently a text
       * node's parent rather than the anchor itself.
       */
      const anchor = target.closest('a');
      if (!anchor || anchor.origin !== calendlyOrigin) {
        return;
      }

      const label = (anchor.textContent ?? '').trim().replace(/\s+/g, ' ');

      /**
       * Exactly two properties. Vercel allows two on the standard Pro plan
       * and eight only with the Web Analytics Plus add-on, so a third one
       * would silently cost money or be rejected depending on the plan.
       * These two answer the two questions that matter: which page created
       * the booking intent, and which CTA carried it.
       */
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
