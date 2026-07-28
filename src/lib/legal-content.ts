import { SITE_CONFIG } from './constants';
import type { LegalPageContent } from './types';

/**
 * Content for the mentions légales page (`/mentions-legales`).
 *
 * All fields below have been confirmed by the client, including the SIRET
 * (931 059 588 00018, Luhn checksum verified) and the postal address. There
 * is no remaining placeholder value in this file.
 */
export const LEGAL_CONTENT: LegalPageContent = {
  lastUpdatedIso: '2026-07-28',
  lastUpdatedLabel: '28 juillet 2026',
  editor: {
    name: 'Tristan Hourtoulle',
    legalStatus: 'Entreprise individuelle (EI)',
    addressLines: ['3bis rue des Aubépines', '68190 Ensisheim, France'],
    // Grouped for readability (SIREN in three groups of three, then the
    // five-digit NIC), the usual French display convention. The digits
    // themselves are unchanged: 931059588 00018.
    siret: '931 059 588 00018',
    vatMention: 'TVA non applicable, article 293 B du Code général des impôts.',
    email: SITE_CONFIG.email,
    publicationDirector: 'Tristan Hourtoulle',
  },
  host: {
    name: 'Vercel Inc.',
    addressLines: ['440 N Barranca Avenue #4133', 'Covina, CA 91723, États-Unis'],
  },
  sections: [
    {
      id: 'propriete-intellectuelle',
      title: 'Propriété intellectuelle',
      paragraphs: [
        "L'ensemble du contenu de ce site (textes, images et code source) est la propriété de Tristan Hourtoulle, sauf mention contraire. Toute reproduction, même partielle, est soumise à son autorisation préalable.",
        "Les logos des clients présentés dans les études de cas restent la propriété de leurs détenteurs respectifs. Ils sont utilisés ici à titre de référence, pour illustrer les missions réalisées.",
      ],
    },
    {
      id: 'donnees-personnelles',
      title: 'Données personnelles',
      paragraphs: [
        "Ce site ne dépose aucun cookie et ne collecte lui-même aucune donnée personnelle : il n'y a ni traceur ni formulaire de contact.",
        "La prise de rendez-vous se fait via Calendly, un service tiers qui collecte les informations que vous y saisissez (nom, email, disponibilités). Cette collecte relève de la politique de confidentialité de Calendly, disponible sur calendly.com/privacy.",
        `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données personnelles. Pour l'exercer, écrivez à ${SITE_CONFIG.email}.`,
      ],
    },
    {
      id: 'liens-externes',
      title: 'Liens externes',
      paragraphs: [
        "Ce site contient des liens vers des sites tiers (réseaux sociaux, Calendly, sites de clients). Leur contenu n'engage pas la responsabilité de Tristan Hourtoulle.",
      ],
    },
    {
      id: 'droit-applicable',
      title: 'Droit applicable',
      paragraphs: [
        "Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation de ce site relève de la compétence des tribunaux français.",
      ],
    },
  ],
};
