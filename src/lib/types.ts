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

/**
 * Slug of a case study. The same four values identify a homepage card
 * (`CaseStudy.id`), a detail page (`CaseStudyPageContent.slug`) and a
 * stack entry (`CASE_STUDY_STACKS` in constants.ts), so the union is
 * declared once and every one of those keys is checked against it.
 */
export type CaseStudySlug = 'hosteed' | 'moduloop-impact' | 'moduloop-kits' | 'quintyss';

export interface CaseStudy {
  id: CaseStudySlug;
  clientId: ClientId;
  title: string;
  missionType: string;
  period: string;
  /**
   * Read from CASE_STUDY_STACKS rather than written inline: the same
   * project's stack is displayed on the homepage card, in the detail
   * page hero and in its sidebar, and three hand-kept copies had already
   * drifted apart (see the doc comment on CASE_STUDY_STACKS).
   */
  stack: readonly string[];
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
  slug: CaseStudySlug;
  clientId: ClientId;
  title: string;
  /**
   * Short noun phrase appended to the client name inside the <h1>, e.g.
   * "plateforme de location de logements". A bare brand name is a query
   * nobody types, so the heading has to say what the thing is; the
   * qualifier renders as a smaller second line so the client name still
   * leads visually. Lowercase, since it follows a comma in the heading.
   */
  titleQualifier: string;
  missionType: string;
  /** Lowercase, used inline after "Étude de cas · mission freelance, " in the eyebrow. */
  periodInline: string;
  /** Capitalized, used in the sidebar and related-card mono line. */
  period: string;
  /**
   * ISO 8601 date at month precision, fed to `openGraph.publishedTime`.
   *
   * Month precision, not day, because `period` above is all the client
   * ever gave ("mai à novembre 2025"): inventing a day-of-month would be
   * a fabricated fact for the sake of a fuller-looking string.
   *
   * It marks the moment the case study documents. For a finished mission
   * that is the delivery month, the end of `period`. For an open-ended
   * one ("depuis mars 2025") there is no delivery to point at, so it is
   * the month the mission started, which is the only real date the
   * project has.
   */
  publishedTimeIso: string;
  /** Short label next to the status dot in the hero, e.g. "En production". */
  statusBadge: string;
  /** Full-sentence status, reused in the sidebar and narrative sections. */
  statusDetail: string;
  /** Visible opening paragraph of the page. Written for the page, not for a SERP. */
  lead: string;
  /**
   * Written for the search result, and kept separate from `lead` on
   * purpose. The two jobs conflict: `lead` opens the page and can run
   * long, while a description over roughly 160 characters gets truncated
   * mid-sentence in the SERP. Reusing `lead` meant every edit to the
   * visible copy silently rewrote the snippet, and three of the four
   * leads were already well past the budget.
   */
  metaDescription: string;
  stack: readonly string[];
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
  'lead' | 'metaDescription' | 'statusBadge' | 'statusDetail' | 'narrative' | 'testimonial'
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
  /**
   * Small line rendered inside the <h1>, above `title`. The slogan below
   * does the conversion work but contains no term a prospect would type,
   * which left the page's single most weighted heading with no subject.
   * The kicker states the trade in plain words and is styled like the
   * `.eyebrow` that already opens every other section, so the hero stops
   * being the one section without one.
   */
  titleKicker: string;
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
  /**
   * Canonical production origin, without a trailing slash. Single source of
   * truth for every absolute URL the site emits (metadataBase, canonicals,
   * Open Graph), so no page has to hardcode the domain again.
   */
  siteUrl: string;
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
