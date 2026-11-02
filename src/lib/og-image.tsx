import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { ReactElement, ReactNode } from 'react';
import { SITE_CONFIG } from './constants';

export const OG_SIZE = { width: 1200, height: 630 } as const;

export const OG_CONTENT_TYPE = 'image/png';

export const OG_PALETTE = {
  paper: '#F6F3EA',
  ink: '#24221B',
  muted: '#655E50',
  rule: '#D8D2C2',
  accent: '#2057CE',
  accentBrand: '#2563EB',
} as const;

const FONT_DIR = join(process.cwd(), 'src/lib/og-fonts');

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

const SITE_HOST = new URL(SITE_CONFIG.siteUrl).host;

interface OgCardProps {
  /** Small uppercase mono line above the headline. */
  eyebrow: string;
  /** Colour of the eyebrow. */
  eyebrowColor?: string;
  /** Colour of the 12px rule across the top of the card. */
  ruleColor?: string;
  /** Second line of the footer, under the name. */
  footerNote: string;
  children: ReactNode;
}

/**
 * The frame every card shares.
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
