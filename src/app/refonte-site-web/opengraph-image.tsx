import { ImageResponse } from 'next/og';
import { OFFERS, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

/**
 * Share card for `/refonte-site-web`.
 *
 * The headline is the page's own H1 minus its subject, which the eyebrow
 * already carries. It names the symptom rather than the service, because a
 * reader who recognises "un site qui ne convertit plus" is the reader this
 * page is for, and "refonte de site web" alone describes half the agencies
 * in the same feed.
 *
 * The terms line is read from `OFFERS[0]`: a refonte is billed under the
 * site vitrine offer, so quoting any other figure here would be quoting a
 * price that exists nowhere on the site.
 *
 * Two terms, not three. A "Prix ferme au devis" third term pushed the line
 * onto a second row and left "devis" alone on it, and at the 0.42x a feed
 * paints these cards at, an orphaned word reads as a rendering fault. That
 * term already travels in `og:description`, which is real text.
 */

const VITRINE_OFFER = OFFERS[0];

const PAGE_TITLE = 'Refonte de site web : périmètre, budget et délai';

export const alt = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard eyebrow="REFONTE DE SITE WEB" footerNote={SITE_CONFIG.brandTagline}>
        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            color: OG_PALETTE.ink,
            marginTop: 34,
          }}
        >
          Reprendre un site qui ne convertit plus
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Commit Mono',
            fontSize: 28,
            color: OG_PALETTE.muted,
            marginTop: 34,
          }}
        >
          {`${VITRINE_OFFER.priceNote} ${VITRINE_OFFER.price} · ${VITRINE_OFFER.delay}`}
        </div>
      </OgCard>
    ),
    { ...size, fonts: await loadOgFonts() }
  );
}
