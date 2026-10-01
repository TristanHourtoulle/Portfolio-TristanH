import { ImageResponse } from 'next/og';
import { REALISATION_PAGES, REALISATIONS_PAGE_TITLE } from '@/lib/case-studies-content';
import { CLIENT_COLOR_BY_ID, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

export const alt = `${REALISATIONS_PAGE_TITLE} · ${SITE_CONFIG.brandName}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/**
 * Share card for `/realisations`.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <OgCard eyebrow="RÉALISATIONS ET PROJETS" footerNote={SITE_CONFIG.brandTagline}>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
            color: OG_PALETTE.ink,
            marginTop: 30,
            marginBottom: 36,
          }}
        >
          {REALISATIONS_PAGE_TITLE}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', rowGap: 14 }}>
          {REALISATION_PAGES.map((page, index) => (
            <div key={page.slug} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: page.clientId
                    ? CLIENT_COLOR_BY_ID[page.clientId].ink
                    : OG_PALETTE.ink,
                }}
              >
                {page.title}
              </div>
              {index < REALISATION_PAGES.length - 1 && (
                <div
                  style={{
                    display: 'flex',
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: OG_PALETTE.rule,
                    margin: '0 20px',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </OgCard>
    ),
    { ...size, fonts: await loadOgFonts() }
  );
}
