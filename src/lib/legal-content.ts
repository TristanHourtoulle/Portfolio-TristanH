import { SITE_CONFIG } from './constants';
import type { LegalPageContent } from './types';

export const LEGAL_CONTENT: LegalPageContent = {
  lastUpdatedIso: '2026-07-29',
  lastUpdatedLabel: '29 juillet 2026',
  editor: {
    name: 'Tristan Hourtoulle',
    legalStatus: 'Entreprise individuelle (EI)',
    addressLines: ['3bis rue des Aubépines', '68190 Ensisheim, France'],
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
        "Les logos des clients présentés dans les études de cas restent la propriété de leurs détenteurs respectifs. Ils sont utilisés ici à titre de référence, pour illustrer les projets réalisés.",
      ],
    },
    {
      id: 'donnees-personnelles',
      title: 'Données personnelles',
      paragraphs: [
        "Ce site ne dépose aucun cookie et n'écrit rien dans la mémoire de votre navigateur, ni localStorage ni sessionStorage. Il ne comporte aucun formulaire de contact et ne vous demande donc aucune information.",
        "La seule collecte effectuée par le site est une mesure d'audience anonyme, décrite dans la section suivante.",
        "La prise de rendez-vous se fait via Calendly, un service tiers qui collecte les informations que vous y saisissez (nom, email, disponibilités). Cette collecte relève de la politique de confidentialité de Calendly, disponible sur calendly.com/privacy.",
        `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données personnelles. Pour l'exercer, écrivez à ${SITE_CONFIG.email}.`,
      ],
    },
    {
      id: 'mesure-audience',
      title: "Mesure d'audience",
      paragraphs: [
        "La fréquentation et les performances du site sont mesurées avec Vercel Web Analytics et Vercel Speed Insights, deux outils fournis par l'hébergeur du site, Vercel Inc. Ils sont servis depuis ce domaine et non depuis un domaine tiers.",
        "Les informations relevées se limitent à des statistiques : la page consultée, le site ou le moteur de recherche d'où vous venez, le pays, le type d'appareil, le navigateur et le système d'exploitation, ainsi que les temps de chargement réellement mesurés dans votre navigateur. Un clic sur le lien de prise de rendez-vous est également compté, avec la page d'où il part et le libellé du bouton cliqué.",
        "Aucun cookie n'est déposé et aucun identifiant n'est enregistré sur votre appareil. Les vues d'une même visite sont rapprochées grâce à une empreinte calculée sur les serveurs de Vercel à partir des caractéristiques de la requête, dont l'adresse IP, qui n'est pas conservée avec les statistiques. Cette empreinte est supprimée automatiquement au bout de 24 heures. Ces mesures ne permettent ni de vous identifier, ni de vous suivre d'un site à l'autre.",
        "La base légale de ce traitement est l'intérêt légitime de l'éditeur, au sens de l'article 6.1.f du RGPD, à connaître l'audience et les performances de son site. Comme rien n'est lu ni écrit sur votre terminal, ce traitement n'entre pas dans le champ du consentement préalable prévu à l'article 82 de la loi Informatique et Libertés, ce qui explique l'absence de bandeau cookies.",
        "Vercel Inc. intervient ici comme sous-traitant. Sa politique de confidentialité est disponible sur vercel.com/legal/privacy-policy.",
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
