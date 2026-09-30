import { ImageResponse } from 'next/og';
import { HERO_CONTENT, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

/**
 * Share card for `/`.
 */

export const alt = `${SITE_CONFIG.brandName} · Développeur web full-stack`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard eyebrow="DÉVELOPPEUR WEB FULL-STACK" footerNote={HERO_CONTENT.locationNote}>
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
