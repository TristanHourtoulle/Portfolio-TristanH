import { ImageResponse } from 'next/og';
import { OFFERS, SITE_CONFIG } from '@/lib/constants';
import { loadOgFonts, OgCard, OG_CONTENT_TYPE, OG_PALETTE, OG_SIZE } from '@/lib/og-image';

/**
 * Share card for `/tarifs`.
 *
 * A pricing page shared without its price is a card nobody clicks, so the
 * two starting figures are the body of this card rather than a footnote to
 * it. They are read from `OFFERS`, the same constant the visible table
 * renders, so the card and the table cannot disagree.
 *
 * Only two of the three offers appear. The third is priced "Au cas par
 * cas", and a line reading "sur devis" next to two real numbers reads as a
 * hidden price rather than as an honest one. The full table is one click
 * away and shows all three.
 */

const [VITRINE_OFFER, APP_OFFER] = OFFERS;

const PAGE_TITLE = 'Tarifs : combien coûte un site internet professionnel';

export const alt = `${PAGE_TITLE} · ${SITE_CONFIG.brandName}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

interface PriceLineProps {
  label: string;
  priceNote: string;
  price: string;
}

/**
 * One row of the price list. `display: flex` on every node is required:
 * Satori has no block layout and throws on a multi-child element that has
 * not declared one.
 */
function PriceLine({ label, priceNote, price }: PriceLineProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        width: '100%',
        borderTop: `1px solid ${OG_PALETTE.rule}`,
        paddingTop: 18,
        marginTop: 18,
      }}
    >
      <div style={{ fontSize: 38, fontWeight: 700, color: OG_PALETTE.ink }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <div style={{ fontFamily: 'Commit Mono', fontSize: 26, color: OG_PALETTE.muted }}>
          {priceNote}
        </div>
        <div style={{ fontSize: 44, fontWeight: 700, color: OG_PALETTE.ink, marginLeft: 14 }}>
          {price}
        </div>
      </div>
    </div>
  );
}

export default async function Image() {
  return new ImageResponse(
    (
      <OgCard eyebrow="TARIFS" footerNote={SITE_CONFIG.brandTagline}>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            color: OG_PALETTE.ink,
            marginTop: 30,
          }}
        >
          Combien coûte un site internet
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 26 }}>
          <PriceLine
            label={VITRINE_OFFER.title}
            priceNote={VITRINE_OFFER.priceNote}
            price={VITRINE_OFFER.price}
          />
          <PriceLine
            label={APP_OFFER.title}
            priceNote={APP_OFFER.priceNote}
            price={APP_OFFER.price}
          />
        </div>
      </OgCard>
    ),
    { ...size, fonts: await loadOgFonts() }
  );
}
