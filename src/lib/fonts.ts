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
 * A note on `fallback`, because the arrays below do not do what their
 * shape suggests. `adjustFontFallback` defaults to 'Arial' on
 * next/font/local, so Next emits an extra face per font, `<name>
 * Fallback`, whose src is `local(Arial)` carrying generated
 * ascent/descent/line-gap overrides and a size-adjust, and its PostCSS
 * plugin inserts that generated family AHEAD of this array. The stack
 * that actually ships is, verbatim from the generated CSS:
 *
 *   --font-display: "apfelGrotezk", "apfelGrotezk Fallback", Avenir Next, ...
 *   --font-mono:    "commitMono",   "commitMono Fallback",   ui-monospace, ...
 *
 * Since `local(Arial)` resolves on any machine that has Arial, which is
 * every mainstream desktop and mobile OS, 'Avenir Next' and
 * 'ui-monospace' are effectively dead entries. They are kept only as a
 * last resort for the rare system without Arial. The arrays are
 * therefore not what prevents layout shift while the fonts load: the
 * metric overrides on the generated Fallback faces are (size-adjust
 * 96.99% for Apfel Grotezk, 131.49% for Commit Mono).
 *
 * That also bounds how much those overrides can do for Commit Mono. They
 * scale a proportional face, Arial, to stand in for a fixed-pitch one,
 * so vertical metrics line up but per-character advance widths cannot,
 * and mono text does change width when the real face swaps in. See the
 * preload note on commitMono below.
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

/**
 * Preloaded, unlike what a 95 KB pair of files would suggest at first
 * glance, because measurement says it costs nothing and buys a real fix.
 *
 * Commit Mono carries above-the-fold text on every single page: the
 * header brand tagline (`.brand .mono` in globals.css) renders at
 * weight 700 at y=24px, and the hero availability badge at weight 400.
 * The other option on the table, dropping mono from above the fold, was
 * checked and does not exist: the tagline lives in the site header, so
 * restyling the hero would leave the font just as critical while
 * changing the design for nothing.
 *
 * Both faces are already requested on every page as it is, homepage,
 * case studies and legal page alike, since weight 700 is needed by the
 * tagline and weight 400 by the eyebrows. Verified in the browser:
 * without preload they start right after the stylesheet lands, parses
 * and lays out. So `preload: true` adds zero bytes to any page. It only
 * moves the two requests from "after the CSS round trip" to HTML parse
 * time, which is what closes the swap window.
 *
 * Closing it matters more than usual here. The generated fallback is
 * Arial, a proportional face, standing in for a fixed-pitch one, so the
 * swap changes text width, not just glyph shapes. The badge sits in a
 * `flex-direction: row; flex-wrap: wrap` container below 820px, where a
 * width change can rewrap the row and move the line under it.
 *
 * The trade-off, stated plainly: these preloads now share bandwidth with
 * Apfel Grotezk's, and Apfel is the font of the LCP element. They are
 * emitted after Apfel's in the head and at the same priority, so the
 * browser still serves the LCP font first, which is what keeps this
 * worth doing.
 */
export const commitMono = localFont({
  src: [
    { path: '../../public/fonts/CommitMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/CommitMono-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono-local',
  display: 'swap',
  preload: true,
  fallback: ['ui-monospace', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
});
