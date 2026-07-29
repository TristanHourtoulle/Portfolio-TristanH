import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { ReactElement, ReactNode } from 'react';
import { SITE_CONFIG } from './constants';

/**
 * Shared frame for the three `opengraph-image` routes.
 *
 * Everything here targets one viewing condition: a link preview in a
 * LinkedIn, Slack or WhatsApp feed, where a 1200x630 card is painted at
 * roughly 500px wide. That is a 0.42x reduction, so the smallest type on
 * these cards is set at 26px, which lands at ~11px on screen, and nothing
 * carries meaning below that size. It is also why the cards hold very few
 * words: the prose already travels next to the image as `og:description`,
 * which every one of those platforms renders as real, selectable text.
 */

/**
 * 1200x630 is the 1.91:1 ratio LinkedIn, Facebook and Slack crop to. Any
 * other ratio gets centre-cropped by at least one of them, which is how
 * headlines lose their first and last line.
 */
export const OG_SIZE = { width: 1200, height: 630 } as const;

export const OG_CONTENT_TYPE = 'image/png';

/**
 * Design tokens copied from `globals.css`, because Satori resolves no CSS
 * custom properties: it never loads the stylesheet, so `var(--ink)` would
 * silently paint black. Every value below is the literal already measured
 * in that file and in `CLIENT_COLORS`. Keep in sync if the palette moves.
 *
 * Contrast against the `paper` ground, recomputed with the WCAG relative
 * luminance formula for these cards:
 *   ink    #24221B  14.34:1
 *   muted  #655E50   5.79:1
 *   accent #2057CE   5.71:1
 * The client inks used by the case-study cards are the darkest-ground
 * values from `CLIENT_COLORS`, so on this lighter paper they only improve:
 * Moduloop 5.62:1, Hosteed 6.64:1, Quintyss 15.44:1. Every text pair on
 * every card therefore clears 4.5:1, the AA threshold for normal text,
 * even though almost all of this type is large enough to need only 3:1.
 */
export const OG_PALETTE = {
  paper: '#F6F3EA',
  ink: '#24221B',
  muted: '#655E50',
  rule: '#D8D2C2',
  /** Text-safe site accent, the darkened form of `--accent-brand`. */
  accent: '#2057CE',
  /** Exact site brand blue. Decorative only, it measures 3.67:1. */
  accentBrand: '#2563EB',
} as const;

const FONT_DIR = join(process.cwd(), 'src/lib/og-fonts');

/**
 * The site ships Apfel Grotezk and Commit Mono as WOFF2, and Satori cannot
 * read that format: the copy of it bundled in `next/og` throws
 * "Unsupported OpenType signature wOF2" and contains no Brotli decoder at
 * all. WOFF2's payload is not plain Brotli-compressed sfnt either, its
 * glyf table is transformed, so decompressing it here was not an option.
 *
 * The files in `./og-fonts` are therefore the same faces converted back to
 * bare OpenType/CFF with fontTools, which is a lossless container change,
 * not a re-drawing. Both families are SIL OFL 1.1 (see the licences in
 * `public/fonts/`), which permits this. Commit Mono is additionally subset
 * to Latin-1 plus common punctuation, taking it from 270 KB to 20 KB. That
 * subset is deliberately defined by Unicode range rather than by the exact
 * strings these cards use, so adding a case study cannot silently drop a
 * glyph.
 *
 * Only two Apfel weights are loaded, Regular and Fett. Mittel (600) is not
 * used by any of the three cards, and an unused 31 KB face would be read on
 * every build for nothing.
 */
export async function loadOgFonts() {
  const [apfelRegular, apfelFett, commitMono] = await Promise.all([
    readFile(join(FONT_DIR, 'ApfelGrotezk-Regular.otf')),
    readFile(join(FONT_DIR, 'ApfelGrotezk-Fett.otf')),
    readFile(join(FONT_DIR, 'CommitMono-Regular.otf')),
  ]);

  return [
    { name: 'Apfel Grotezk', data: apfelRegular, style: 'normal' as const, weight: 400 as const },
    { name: 'Apfel Grotezk', data: apfelFett, style: 'normal' as const, weight: 700 as const },
    { name: 'Commit Mono', data: commitMono, style: 'normal' as const, weight: 400 as const },
  ];
}

/** Host only, so the footer reads as a brand mark rather than a URL bar. */
const SITE_HOST = new URL(SITE_CONFIG.siteUrl).host;

interface OgCardProps {
  /**
   * Small uppercase mono line above the headline. Already uppercased by
   * the caller: `textTransform` would leave the French accented capitals
   * to Satori's own casing, and the eyebrows here are short enough to
   * write out.
   */
  eyebrow: string;
  /** Colour of the eyebrow. Must be a text-safe value, never a `brand`. */
  eyebrowColor?: string;
  /**
   * Colour of the 12px rule across the top of the card. This is the one
   * place a raw `brand` colour belongs: it carries no text, so the 2.58:1
   * of Moduloop's teal is irrelevant to it.
   */
  ruleColor?: string;
  /** Second line of the footer, under the name. */
  footerNote: string;
  children: ReactNode;
}

/**
 * The frame every card shares: paper ground, brand rule, eyebrow, body,
 * and a footer that signs the card.
 *
 * Note the explicit `display: 'flex'` on nearly every node. Satori has no
 * block layout, and it throws on any element with more than one child that
 * has not declared a display mode, so these are load-bearing rather than
 * stylistic.
 */
export function OgCard({
  eyebrow,
  eyebrowColor = OG_PALETTE.accent,
  ruleColor = OG_PALETTE.accentBrand,
  footerNote,
  children,
}: OgCardProps): ReactElement {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: OG_PALETTE.paper,
        fontFamily: 'Apfel Grotezk',
      }}
    >
      <div style={{ display: 'flex', width: '100%', height: 12, backgroundColor: ruleColor }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          padding: '58px 72px 56px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'Commit Mono',
              fontSize: 26,
              letterSpacing: 2.5,
              color: eyebrowColor,
            }}
          >
            {eyebrow}
          </div>
          {children}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: 1,
              backgroundColor: OG_PALETTE.rule,
              marginBottom: 26,
            }}
          />
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 34, fontWeight: 700, color: OG_PALETTE.ink }}>
                {SITE_CONFIG.brandName}
              </div>
              <div style={{ fontSize: 26, color: OG_PALETTE.muted, marginTop: 4 }}>{footerNote}</div>
            </div>
            <div style={{ fontFamily: 'Commit Mono', fontSize: 26, color: OG_PALETTE.muted }}>
              {SITE_HOST}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
