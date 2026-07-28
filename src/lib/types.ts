/**
 * Navigation item shared by the header and footer.
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

/**
 * Identifier for a client whose brand color drives the recoloring mechanism.
 * Edukai intentionally has no id here: it is a secondary mention only, and
 * its brand color is identical to the site's default accent, so retinting
 * it would be invisible (see CLIENT_COLORS in constants.ts).
 */
export type ClientId = 'moduloop' | 'hosteed' | 'quintyss';

/**
 * A client's logo asset, displayed alongside the brand swatch in case-study
 * cards. `width`/`height` are the file's intrinsic pixel dimensions, passed
 * straight to next/image so it can reserve layout space and pick the right
 * source set; the on-screen size is then normalized by CSS (see .logo-box
 * in globals.css), independently of each source file's own aspect ratio.
 */
export interface ClientLogo {
  src: string;
  width: number;
  height: number;
}

/**
 * A client's two-color identity.
 *
 * `brand` is the exact color extracted from the client's own codebase or
 * assets. It is used only where text contrast does not apply (identity
 * swatch, header rule / background tints).
 *
 * `ink` is a darkened variant of the same hue, verified to reach at least
 * 4.5:1 against the paper background (#F6F3EA), used everywhere the color
 * carries text (eyebrows, links, accent figures).
 */
export interface ClientColor {
  id: ClientId;
  name: string;
  brand: string;
  ink: string;
  /** Contrast ratio of `ink` against #F6F3EA, measured with the WCAG formula. */
  inkContrastRatio: number;
  logo: ClientLogo;
}

export type ButtonVariant = 'primary' | 'ghost' | 'invert';

export interface Offer {
  id: string;
  numberLabel: string;
  title: string;
  problem: string;
  features: string[];
  priceNote: string;
  price: string;
  isPriceCased: boolean;
  delay: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface CaseStudyDetail {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  clientId: ClientId;
  title: string;
  missionType: string;
  period: string;
  stack: string[];
  details: CaseStudyDetail[];
  caseLinkHref: string;
}

/**
 * A secondary mention in the "also worked on" sentence after the main case
 * studies. `href` present renders a link (Edukai); absent renders a
 * focusable, non-navigating span used only as a recoloring trigger
 * (Moduloop Kit), matching the mockup markup.
 */
export interface AlsoMentionedItem {
  clientId: ClientId | null;
  label: string;
  href?: string;
  trailingText: string;
}

export interface ProcessStep {
  id: string;
  numberLabel: string;
  title: string;
  note: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustStats {
  clientsCount: number;
  averageRating: number;
  productsInProduction: number;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  locationNote: string;
}

export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  calendlyUrl: string;
  email: string;
}

export interface AboutContent {
  paragraphs: string[];
  toolsHeading: string;
  tools: string[];
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
  icon?: 'github' | 'linkedin' | 'mail';
}
