/**
 * Production typography setup.
 *
 * Apfel Grotezk (display and text, Collletttivo, SIL OFL 1.1) and Commit
 * Mono (labels, stacks, figures and prices, Eigil Nikolajsen, SIL OFL 1.1)
 * are self-hosted from `public/fonts/` via `next/font/local`. Both
 * licenses were verified to allow commercial use and redistribution of the
 * font files before they were added to this repository; see
 * `public/fonts/ApfelGrotezk-LICENSE.txt` and
 * `public/fonts/CommitMono-LICENSE.txt`.
 *
 * Only the weights actually used by `globals.css` are shipped:
 *   - Apfel Grotezk Regular (400), Mittel (600), Fett (700)
 *   - Commit Mono Regular (400), Bold (700, used by `.price`)
 *
 * `fallback` mirrors the exact system stack still defined by --font-sans /
 * --font-mono in globals.css, so that stack remains the fallback (never
 * removed) and there is no layout shift while the local fonts load.
 */

import localFont from 'next/font/local';

export const apfelGrotezk = localFont({
  src: [
    { path: '../../public/fonts/ApfelGrotezk-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/ApfelGrotezk-Mittel.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/ApfelGrotezk-Fett.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
  preload: true,
  fallback: ['Avenir Next', 'Avenir', 'Futura', 'Candara', 'Trebuchet MS', 'sans-serif'],
});

export const commitMono = localFont({
  src: [
    { path: '../../public/fonts/CommitMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/CommitMono-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono-local',
  display: 'swap',
  preload: false,
  fallback: ['ui-monospace', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
});
