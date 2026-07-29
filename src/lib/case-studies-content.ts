import { SITE_CONFIG } from './constants';
import { HOSTEED_COPY } from './case-studies/hosteed-copy';
import { MODULOOP_IMPACT_COPY } from './case-studies/moduloop-impact-copy';
import { MODULOOP_KITS_COPY } from './case-studies/moduloop-kits-copy';
import { QUINTYSS_COPY } from './case-studies/quintyss-copy';
import type { CaseStudyPageContent } from './types';

/**
 * Structure of the four case-study detail pages (`/realisations/[slug]`):
 * identity, gallery, links and related studies.
 *
 * The prose of each page (lead, status wording, narrative sections and
 * client quote) lives in its own file under ./case-studies/ and is
 * spread in below. Copy is rewritten far more often than screenshots
 * change, and the two now sit in different files so neither edit has to
 * step over the other.
 *
 * The narratives are built strictly from what each client stated about
 * their own mission. Where no figure was given, none is written: no
 * traffic, no revenue, no percentage of gain, no user count. The only
 * numbers on these pages (Hosteed's data model, Quintyss's three client
 * sites and its deployment time) come directly from those accounts.
 */
export const CASE_STUDY_PAGES: CaseStudyPageContent[] = [
  {
    slug: 'hosteed',
    clientId: 'hosteed',
    title: 'Hosteed',
    missionType: 'Mission freelance',
    periodInline: 'mai à novembre 2025',
    period: 'Mai à novembre 2025',
    ...HOSTEED_COPY,
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'VPS client'],
    primaryCta: { label: "Discuter d'un projet similaire", href: SITE_CONFIG.calendlyUrl },
    secondaryCtas: [],
    gallery: [
      {
        src: '/images/case-studies/hosteed/hero-recherche.webp',
        alt: "Page d'accueil de Hosteed, avec la barre de recherche de séjour.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/hosteed/fiche-logement.webp',
        alt: "Fiche détaillée d'un logement sur Hosteed.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/hosteed/article-blog.webp',
        alt: 'Blog de Hosteed, avec son article mis en avant.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/hosteed/accueil-mobile.webp',
        alt: "Page d'accueil de Hosteed sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
    ],
    liveClientSites: [],
    relatedSlugs: ['moduloop-impact', 'quintyss'],
  },
  {
    slug: 'moduloop-impact',
    clientId: 'moduloop',
    title: 'Moduloop Impact',
    missionType: 'Mission freelance',
    periodInline: 'février à juin 2024',
    period: 'Février à juin 2024',
    ...MODULOOP_IMPACT_COPY,
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
    primaryCta: { label: "Discuter d'un projet similaire", href: SITE_CONFIG.calendlyUrl },
    secondaryCtas: [{ label: 'Voir le site ↗', href: 'https://moduloop-impact.fr' }],
    gallery: [
      {
        src: '/images/case-studies/moduloop-impact/calculateur-hero.webp',
        alt: "Écran principal du calculateur d'impact de Moduloop Impact.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/catalogue-produits.webp',
        alt: 'Catalogue de produits neufs et de réemploi dans Moduloop Impact.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/comparaison-reemploi.webp',
        alt: 'Comparaison chiffrée entre un scénario neuf et un scénario réemploi.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/scenario-reemploi.webp',
        alt: "Estimatif d'impact d'un scénario réemploi, avec ses quatre indicateurs.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/fiche-produit-impact.webp',
        alt: 'Fiche produit avec ses indicateurs environnementaux.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/liste-projets.webp',
        alt: "Liste des projets d'aménagement suivis dans l'outil.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/projet-detail.webp',
        alt: "Détail d'un projet d'aménagement.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/projet-impact.webp',
        alt: "Équivalences d'impact et classement des produits les plus impactants d'un projet.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/connexion.webp',
        alt: 'Écran de connexion à Moduloop Impact.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-impact/calculateur-hero-mobile.webp',
        alt: "Calculateur d'impact sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/moduloop-impact/liste-projets-mobile.webp',
        alt: 'Liste des projets sur mobile.',
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/moduloop-impact/mobile-projet-impact.webp',
        alt: "Impact d'un projet consulté sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
    ],
    liveClientSites: [],
    relatedSlugs: ['hosteed', 'quintyss'],
  },
  {
    slug: 'moduloop-kits',
    clientId: 'moduloop',
    title: 'Moduloop Kits',
    missionType: 'Mission freelance',
    periodInline: 'depuis août 2025',
    period: 'Depuis août 2025',
    ...MODULOOP_KITS_COPY,
    stack: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'Better Auth'],
    primaryCta: { label: "Discuter d'un projet similaire", href: SITE_CONFIG.calendlyUrl },
    secondaryCtas: [],
    gallery: [
      {
        src: '/images/case-studies/moduloop-kits/catalogue-produits.webp',
        alt: "Catalogue de produits pour composer un kit d'aménagement.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/liste-kits.webp',
        alt: "Liste des kits d'aménagement disponibles.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/composition-kit.webp',
        alt: 'Composition d’un kit à partir du catalogue de produits.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/fiche-produit.webp',
        alt: 'Fiche détaillée d’un produit du catalogue.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/liste-projets.webp',
        alt: 'Liste des projets utilisant les kits.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/projet-impact.webp',
        alt: "Impact environnemental et prix au m² d'un projet.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/moduloop-kits/projet-detail-mobile.webp',
        alt: "Détail d'un projet sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
    ],
    liveClientSites: [],
    relatedSlugs: ['moduloop-impact', 'quintyss'],
  },
  {
    slug: 'quintyss',
    clientId: 'quintyss',
    title: 'Quintyss V3',
    missionType: 'Mission freelance',
    periodInline: 'depuis mars 2025',
    period: 'Depuis mars 2025',
    ...QUINTYSS_COPY,
    stack: ['Next.js', 'TypeScript', 'Fastify', 'Drizzle', 'PostgreSQL', 'Stripe', 'Railway'],
    primaryCta: { label: "Discuter d'un projet similaire", href: SITE_CONFIG.calendlyUrl },
    secondaryCtas: [],
    gallery: [
      {
        src: '/images/case-studies/quintyss/editeur-slider-champs.webp',
        alt: "Le client modifie lui-même le contenu de son carrousel d'accueil, titre, texte et bouton compris : le site se met à jour aussitôt, sans intervention technique.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/editeur-slider-diapositives.webp',
        alt: "Ajouter ou réorganiser les diapositives du carrousel se fait en quelques clics, directement au-dessus du site réel.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/editeur-texte-riche.webp',
        alt: "Le texte d'une page se modifie pendant que son rendu s'affiche juste à côté : l'effet est immédiat, sans remise en ligne.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/editeur-mediatheque.webp',
        alt: "Toutes les images et tous les documents des sites clients sont centralisés dans une médiathèque de près de 800 fichiers, avec recherche et filtres.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/kcfribourg-accueil.webp',
        alt: "Page d'accueil de kcfribourg.ch, un club de karaté en production sur Quintyss V3.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/kcfribourg-actualites.webp',
        alt: "Agenda du Karaté Club Fribourg : chaque compétition et chaque stage est une fiche créée dans le CMS, avec sa date, son lieu et sa photo, publiée en grille sur le site.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/kcfribourg-cours-tarifs.webp',
        alt: 'Page cours et tarifs de kcfribourg.ch.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/judomarly-accueil.webp',
        alt: "Page d'accueil du Judo Club Marly, deuxième club en production sur Quintyss V3 : un carrousel plein écran dont le club choisit lui-même la photo, le texte et le bouton.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/judomarly-horaires.webp',
        alt: 'Plan horaires du Judo Club Marly : les cours de la semaine au dojo, tenus à jour depuis le CMS.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/culturekids-accueil.webp',
        alt: "Page d'accueil du site Culture Kids V3, un accueil extrascolaire pour les 4 à 12 ans à Fribourg : mise en page illustrée aux couleurs de la structure, déployée et en attente de validation client.",
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/culturekids-kids-activites.webp',
        alt: 'Les ateliers Kids présentés en cartes colorées : anglais, arts, cinéma, nature. Le personnel crée et date chaque atelier depuis le CMS.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/culturekids-kids-vacances.webp',
        alt: 'Page Kids Vacances du site Culture Kids V3 : camps et excursions des vacances scolaires.',
        width: 2400,
        height: 1500,
        variant: 'desktop',
      },
      {
        src: '/images/case-studies/quintyss/kcfribourg-accueil-mobile.webp',
        alt: "Page d'accueil de kcfribourg.ch sur mobile.",
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
      {
        src: '/images/case-studies/quintyss/judomarly-horaires-mobile.webp',
        alt: 'Plan horaires du Judo Club Marly sur mobile.',
        width: 780,
        height: 1688,
        variant: 'mobile',
      },
    ],
    liveClientSites: [{ label: 'kcfribourg.ch ↗', href: 'https://kcfribourg.ch' }],
    relatedSlugs: ['hosteed', 'moduloop-impact'],
  },
];

export const CASE_STUDY_PAGE_BY_SLUG: Record<string, CaseStudyPageContent> = Object.fromEntries(
  CASE_STUDY_PAGES.map((page) => [page.slug, page])
);
