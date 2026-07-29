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
 * focusable, non-navigating span used only as a recoloring trigger,
 * matching the mockup markup.
 */
export interface AlsoMentionedItem {
  clientId: ClientId | null;
  label: string;
  href?: string;
  trailingText: string;
}

/**
 * A single screenshot in a case-study detail page. `variant` decides where
 * it is rendered: 'desktop' captures (2400x1500, native browser viewports)
 * feed the 16/9 carousel, while 'mobile' ones (780x1688 phone captures)
 * are shown separately as portrait frames underneath, since a landscape
 * frame would either crush or gut them. See CaseStudyGallery.
 */
export interface CaseStudyGalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant: 'desktop' | 'mobile';
}

/**
 * One prose block in the narrative column (Contexte, Intervention,
 * Résultat/Statut...). `heading` is free text rather than a fixed union
 * because it varies per case study: a shipped product gets "Résultat",
 * one still in progress gets "Statut".
 */
export interface CaseStudyNarrativeSection {
  heading: string;
  paragraphs: string[];
}

/**
 * The client quote closing a case-study narrative.
 *
 * `published` carries only the id of an entry in TESTIMONIALS
 * (constants.ts): the review text itself stays in that single source and
 * is never copied here, so editing it once updates both the homepage and
 * the case-study page. `context` places the person next to the project
 * ("Paul L., Moduloop"), which the homepage list does not do.
 *
 * `pending` covers a mission that is delivered but whose client review
 * has not arrived yet: the slot is declared in the content and the page
 * renders a plain note, rather than the page inventing a quote or the
 * section silently disappearing.
 */
export type CaseStudyTestimonial =
  | { status: 'published'; testimonialId: string; context: string }
  | { status: 'pending'; note: string };

/**
 * A single link rendered as a hero CTA button or as an inline reference
 * (e.g. a live client site listed in the sidebar).
 */
export interface CaseStudyPageLink {
  label: string;
  href: string;
}

/**
 * Full content of a case-study detail page (`/realisations/[slug]`).
 * Distinct from `CaseStudy` above, which only backs the homepage card:
 * this carries the richer, page-only content (gallery, narrative,
 * sidebar, related links) that has no equivalent on the homepage.
 */
export interface CaseStudyPageContent {
  slug: string;
  clientId: ClientId;
  title: string;
  missionType: string;
  /** Lowercase, used inline after "Étude de cas · mission freelance, " in the eyebrow. */
  periodInline: string;
  /** Capitalized, used in the sidebar and related-card mono line. */
  period: string;
  /** Short label next to the status dot in the hero, e.g. "En production". */
  statusBadge: string;
  /** Full-sentence status, reused in the sidebar and narrative sections. */
  statusDetail: string;
  lead: string;
  stack: string[];
  primaryCta: CaseStudyPageLink;
  secondaryCtas: CaseStudyPageLink[];
  gallery: CaseStudyGalleryImage[];
  narrative: CaseStudyNarrativeSection[];
  /** Client quote closing the narrative. Absent when no review covers this mission. */
  testimonial?: CaseStudyTestimonial;
  /** Live client sites built on this project, shown in the sidebar (Quintyss only so far). */
  liveClientSites: CaseStudyPageLink[];
  /** Slugs of other case studies to surface in "Voir aussi", in display order. */
  relatedSlugs: string[];
}

/**
 * The editorial half of a case-study page: every field that is prose.
 *
 * Split out so each case study's copy can live in its own file under
 * src/lib/case-studies/, while the structural half (slug, gallery,
 * links, stack, related slugs) stays in case-studies-content.ts. That
 * keeps both sides well under the file-length budget and lets copy be
 * rewritten without touching a single image entry.
 */
export type CaseStudyCopy = Pick<
  CaseStudyPageContent,
  'lead' | 'statusBadge' | 'statusDetail' | 'narrative' | 'testimonial'
>;

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

/**
 * Identity block for the site editor, required by LCEN article 6-III for
 * any professional site publisher.
 */
export interface LegalEditor {
  name: string;
  legalStatus: string;
  /** Postal address, one entry per display line. */
  addressLines: string[];
  siret: string;
  vatMention: string;
  email: string;
  publicationDirector: string;
}

/**
 * Identity block for the hosting provider, also required by LCEN article
 * 6-III.
 */
export interface LegalHost {
  name: string;
  /** Postal address, one entry per display line. */
  addressLines: string[];
}

/**
 * A single prose topic on the mentions légales page (intellectual
 * property, personal data, external links, applicable law...).
 */
export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
}

/**
 * Full content of the mentions légales page.
 */
export interface LegalPageContent {
  lastUpdatedIso: string;
  lastUpdatedLabel: string;
  editor: LegalEditor;
  host: LegalHost;
  sections: LegalSection[];
}
