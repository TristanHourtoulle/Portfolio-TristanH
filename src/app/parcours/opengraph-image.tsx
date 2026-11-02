import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/lib/constants';
import { PARCOURS_CONTENT } from '@/lib/parcours-content';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

const HEADLINE = 'D’Epitech à mes premières missions';

const FACTS: readonly string[] = [
  '65 puis 34 étudiants encadrés',
  'Deux stages en entreprise',
  'Quatrième année à Kuala Lumpur',
];

export const alt = `${PARCOURS_CONTENT.metaTitle} · ${SITE_CONFIG.brandName}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/**
 * Share card for `/parcours`.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <OgCard eyebrow="PARCOURS" footerNote={SITE_CONFIG.brandTagline}>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
            color: OG_PALETTE.ink,
            marginTop: 32,
            marginBottom: 44,
          }}
        >
          {HEADLINE}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          {FACTS.map((fact, index) => (
            <div key={fact} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: 34, color: OG_PALETTE.muted }}>{fact}</div>
              {index < FACTS.length - 1 && (
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
