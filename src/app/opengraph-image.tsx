import { ImageResponse } from 'next/og';
import { HERO_CONTENT, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

/**
 * Share card for `/`.
 *
 * Picked up automatically by the file convention, which is why the root
 * layout deliberately leaves `openGraph.image` and `twitter.image` unset:
 * this file fills both, and `metadataBase` makes the emitted URL absolute.
 *
 * The headline is `HERO_CONTENT.title` verbatim. It is the one sentence
 * the site already leads with, so the card and the page make the same
 * promise, and no claim is written here that a visitor will not find.
 */

export const alt = `${SITE_CONFIG.brandName} · Design et développement web freelance`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard eyebrow="DESIGN ET DÉVELOPPEMENT WEB FREELANCE" footerNote={HERO_CONTENT.locationNote}>
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
          {HERO_CONTENT.title}
        </div>
      </OgCard>
    ),
    { ...size, fonts: await loadOgFonts() }
  );
}
