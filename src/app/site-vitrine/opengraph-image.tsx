import { ImageResponse } from 'next/og';
import { OFFERS, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

/**
 * Share card for `/site-vitrine`.
 *
 * The headline is the page's own H1, shortened to its predicate. "Site
 * vitrine" is already the eyebrow, so repeating it in the headline would
 * spend the largest type on the card saying the same two words twice.
 *
 * The terms line under it is the one thing this card adds that the
 * description text cannot be relied on to show: LinkedIn truncates
 * `og:description` at around 100 characters in a feed, and the price is
 * the fact a reader is scanning for. It is read from `OFFERS[0]` so the
 * card cannot advertise a price the site has stopped charging.
 */

const VITRINE_OFFER = OFFERS[0];

const PAGE_TITLE = 'Site vitrine : contenu, prix et hébergement';

export const alt = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard eyebrow="SITE VITRINE" footerNote={SITE_CONFIG.brandTagline}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            color: OG_PALETTE.ink,
            marginTop: 34,
          }}
        >
          Le site qui présente votre activité et amène des contacts
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
