import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';
import { CASE_STUDY_PAGE_BY_SLUG, CASE_STUDY_PAGES } from '@/lib/case-studies-content';
import { CLIENT_COLOR_BY_ID, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

/**
 * Share card for each `/realisations/[slug]`.
 *
 * One image per case study, built from that study's own title, period,
 * stack and status, and recoloured with its client's ink. It is the same
 * mechanism the pages themselves use through `[data-accent]`, so a shared
 * link and the page it opens read as the same object.
 *
 * The card carries no prose. `generateMetadata` in `page.tsx` already
 * sets `og:description` to `page.lead`, and every platform that renders
 * this image renders that sentence beside it as real text. Repeating it
 * inside a 500px-wide picture would only make it smaller and unselectable.
 */

interface OpenGraphImageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Metadata routes do not inherit the params of the page they sit beside,
 * so without this the four cards fall back to on-demand rendering. That
 * matters more here than on an ordinary route: the client fetching these
 * URLs is a link scraper, and a scraper that times out on a cold start
 * caches the absence of an image rather than retrying. Enumerating the
 * slugs moves all four renders into the build.
 */
export function generateStaticParams() {
  return CASE_STUDY_PAGES.map((page) => ({ slug: page.slug }));
}

/**
 * Declared for one reason: `alt` as a static export would be a single
 * string shared by all four images, so every case study would announce
 * itself as the same picture. Returning one entry per route lets the alt
 * name the study it actually shows.
 *
 * The single-element array is intentional. This route needs one image per
 * slug, not several per slug, and the slug is reused as the `id` so the
 * generated URL stays readable.
 */
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

export default async function Image({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const page = CASE_STUDY_PAGE_BY_SLUG[slug];

  /**
   * `dynamicParams = false` on the page already closes this route to
   * unknown slugs, so this only guards against a slug being removed from
   * the content file while a stale request is in flight.
   */
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
        footerNote={page.missionType}
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
          {/* Decorative status dot, the one place the raw brand colour is used. */}
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

        {/* Wraps: Quintyss lists seven technologies, which overflows one line. */}
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
              {/* Separator trails its item so a wrap never opens a line with a dot. */}
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
