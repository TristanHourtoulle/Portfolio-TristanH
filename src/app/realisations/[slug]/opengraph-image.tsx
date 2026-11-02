import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';
import { REALISATION_PAGE_BY_SLUG, REALISATION_PAGES } from '@/lib/case-studies-content';
import { CLIENT_COLOR_BY_ID, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';
import type { RealisationProvenance } from '@/lib/types';

/**
 * Reads the card label a provenance deserves.
 * @param provenance - where the realisation comes from
 * @returns the human label for that provenance
 */
function kindLabel(provenance: RealisationProvenance): string {
  return provenance === 'client' ? 'Étude de cas' : 'Projet personnel';
}

interface OpenGraphImageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return REALISATION_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateImageMetadata({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const page = REALISATION_PAGE_BY_SLUG[slug];

  if (!page) {
    return [];
  }

  return [
    {
      id: page.slug,
      size: OG_SIZE,
      alt: `${page.title} · ${kindLabel(page.provenance)} · ${SITE_CONFIG.brandName}`,
      contentType: OG_CONTENT_TYPE,
    },
  ];
}

/**
 * Share card for each `/realisations/[slug]`.
 */
export default async function Image({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const page = REALISATION_PAGE_BY_SLUG[slug];

  if (!page) {
    notFound();
  }

  const client = page.clientId ? CLIENT_COLOR_BY_ID[page.clientId] : undefined;
  const ink = client?.ink ?? OG_PALETTE.accent;
  const brand = client?.brand ?? OG_PALETTE.accentBrand;
  const label = kindLabel(page.provenance);

  return new ImageResponse(
    (
      <OgCard
        eyebrow={`${label.toUpperCase()} · ${page.period.toUpperCase()}`}
        eyebrowColor={ink}
        ruleColor={brand}
        footerNote={page.engagementType ?? label}
      >
        <div
          style={{
            fontSize: 108,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2.5,
            color: ink,
            marginTop: 30,
          }}
        >
          {page.title}
        </div>

        {page.statusBadge && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 30 }}>
            <div
              style={{
                display: 'flex',
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: brand,
                marginRight: 14,
              }}
            />
            <div style={{ fontSize: 34, color: OG_PALETTE.ink }}>{page.statusBadge}</div>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontFamily: 'Commit Mono',
            fontSize: 26,
            color: OG_PALETTE.muted,
            marginTop: 22,
          }}
        >
          {page.stack.map((item, index) => (
            <div key={item} style={{ display: 'flex' }}>
              <div style={{ display: 'flex' }}>{item}</div>
              {index < page.stack.length - 1 && (
                <div style={{ display: 'flex', margin: '0 10px' }}>·</div>
              )}
            </div>
          ))}
        </div>
      </OgCard>
    ),
    { ...OG_SIZE, fonts: await loadOgFonts() }
  );
}
