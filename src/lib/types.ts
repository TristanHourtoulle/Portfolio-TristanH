export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export type ClientId = 'moduloop' | 'hosteed' | 'quintyss';

export interface ClientLogo {
  src: string;
  width: number;
  height: number;
}

export interface ClientColor {
  id: ClientId;
  name: string;
  brand: string;
  ink: string;
  /** Contrast ratio of `ink` against #F6F3EA. */
  inkContrastRatio: number;
  logo: ClientLogo;
}

export type ButtonVariant = 'primary' | 'ghost' | 'invert';

export interface CaseStudyDetail {
  label: string;
  value: string;
}

export type CaseStudySlug = 'hosteed' | 'moduloop-impact' | 'moduloop-kits' | 'quintyss';

export interface CaseStudy {
  id: CaseStudySlug;
  clientId: ClientId;
  title: string;
  missionType: string;
  period: string;
  stack: readonly string[];
  details: CaseStudyDetail[];
  caseLinkHref: string;
}

export interface AlsoMentionedItem {
  clientId: ClientId | null;
  label: string;
  href?: string;
  trailingText: string;
}

/**
 * A single screenshot in a case-study detail page.
 */
export interface CaseStudyGalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant: 'desktop' | 'mobile';
}

/**
 * One prose block in the narrative column.
 */
export interface CaseStudyNarrativeSection {
  heading: string;
  paragraphs: string[];
}

/**
 * The client quote closing a case-study narrative.
 */
export type CaseStudyTestimonial =
  | { status: 'published'; testimonialId: string; context: string }
  | { status: 'pending'; note: string };

/**
 * A single link rendered as a hero CTA button or as an inline reference.
 */
export interface CaseStudyPageLink {
  label: string;
  href: string;
}

/**
 * Full content of a case-study detail page (`/realisations/[slug]`).
 */
export interface CaseStudyPageContent {
  slug: CaseStudySlug;
  clientId: ClientId;
  title: string;
  /** Lowercase noun phrase appended to the client name inside the <h1>. */
  titleQualifier: string;
  missionType: string;
  /** Lowercase form, used inline in the eyebrow. */
  periodInline: string;
  /** Capitalized form, used in the sidebar and related-card mono line. */
  period: string;
  /** ISO 8601 date at month precision, fed to `openGraph.publishedTime`. */
  publishedTimeIso: string;
  /** Short label next to the status dot in the hero. */
  statusBadge: string;
  /** Full-sentence status, reused in the sidebar and narrative sections. */
  statusDetail: string;
  /** Visible opening paragraph of the page. */
  lead: string;
  metaDescription: string;
  stack: readonly string[];
  primaryCta: CaseStudyPageLink;
  secondaryCtas: CaseStudyPageLink[];
  gallery: CaseStudyGalleryImage[];
  narrative: CaseStudyNarrativeSection[];
  /** Client quote closing the narrative. */
  testimonial?: CaseStudyTestimonial;
  /** Live client sites built on this project, shown in the sidebar. */
  liveClientSites: CaseStudyPageLink[];
  /** Slugs of other case studies to surface in "Voir aussi", in display order. */
  relatedSlugs: string[];
}

/**
 * The editorial half of a case-study page: every field that is prose.
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

export interface TrustStats {
  clientsCount: number;
  averageRating: number;
  productsInProduction: number;
}

export interface HeroContent {
  /** Small line rendered inside the <h1>, above `title`. */
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
  /** Canonical production origin, without a trailing slash. */
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
 * Identity block for the site editor.
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
 * Identity block for the hosting provider.
 */
export interface LegalHost {
  name: string;
  /** Postal address, one entry per display line. */
  addressLines: string[];
}

/**
 * A single prose topic on the mentions légales page.
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
