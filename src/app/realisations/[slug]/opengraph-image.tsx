import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';
import { CASE_STUDY_PAGE_BY_SLUG, CASE_STUDY_PAGES } from '@/lib/case-studies-content';
import { CLIENT_COLOR_BY_ID, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

interface OpenGraphImageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDY_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateImageMetadata({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const page = CASE_STUDY_PAGE_BY_SLUG[slug];

  if (!page) {
    return [];
  }

  return [
    {
      id: page.slug,
      size: OG_SIZE,
      alt: `${page.title} · Étude de cas · ${SITE_CONFIG.brandName}`,
      contentType: OG_CONTENT_TYPE,
    },
  ];
}

/**
 * Share card for each `/realisations/[slug]`.
 */
export default async function Image({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const page = CASE_STUDY_PAGE_BY_SLUG[slug];

  if (!page) {
    notFound();
  }

  const client = CLIENT_COLOR_BY_ID[page.clientId];

  return new ImageResponse(
    (
      <OgCard
        eyebrow={`ÉTUDE DE CAS · ${page.period.toUpperCase()}`}
        eyebrowColor={client.ink}
        ruleColor={client.brand}
        footerNote={page.engagementType}
      >
        <div
          style={{
            fontSize: 108,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2.5,
            color: client.ink,
            marginTop: 30,
          }}
        >
          {page.title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: 30 }}>
          <div
            style={{
              display: 'flex',
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: client.brand,
              marginRight: 14,
            }}
          />
          <div style={{ fontSize: 34, color: OG_PALETTE.ink }}>{page.statusBadge}</div>
        </div>

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
