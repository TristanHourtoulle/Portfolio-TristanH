import type { PersonalProject } from './types';

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    teaser:
      'Un cours importé devient des questions, choisies par un modèle qui estime la maîtrise de chaque concept.',
    page: {
      slug: 'edukai',
      provenance: 'perso',
      mark: {
        src: '/images/projects/edukai/icone-app.webp',
        width: 512,
        height: 512,
        shape: 'icon',
      },
      title: 'Edukai',
      titleQualifier: 'application iOS de révision pour les lycéens',
      periodInline: 'depuis 2024',
      period: 'Depuis 2024',
      publishedTimeIso: '2024-01-01',
      lead: "Application iOS pour les lycéens : on importe un cours, l'application en extrait les concepts et interroge dessus. Un moteur pédagogique entretient une estimation statistique de la maîtrise de chaque concept et de la difficulté de chaque question, et choisit la question suivante pour viser un taux de réussite cible.",
      metaDescription:
        "Application iOS qui transforme un cours importé en questions, avec un moteur pédagogique qui estime la maîtrise de chaque concept et vise un taux de réussite cible.",
      stack: [
        'Expo',
        'React Native',
        'NestJS',
        'BullMQ',
        'Redis',
        'PostgreSQL',
        'pgvector',
        'Drizzle',
        'TypeScript',
        'OpenAI',
      ],
      externalLinks: [],
      video: {
        src: '/videos/projects/edukai/video-promo.mp4',
        poster: '/images/projects/edukai/video-promo-affiche.webp',
        width: 1080,
        height: 1920,
        title: 'Edukai en 32 secondes',
        description:
          "Film de présentation sans voix off : il s'ouvre sur une pile de cours en pagaille, en tire un cours de biologie qu'il passe au crible, nomme ses concepts clés un à un, et montre l'application en faire des questions à choix multiple.",
        playLabel: "Lire la vidéo de présentation d'Edukai, 32 secondes, avec du son",
        durationLabel: '32 s · avec du son',
      },
      galleryLayout: 'frames',
      gallery: [
        {
          src: '/images/projects/edukai/seance-du-jour.webp',
          alt: "Accueil d'Edukai sur iPhone : la séance du jour annonce 25 concepts à revoir, au-dessus de la liste des cours importés.",
          width: 804,
          height: 1748,
          variant: 'mobile',
          frame: 'phone',
        },
        {
          src: '/images/projects/edukai/prevision-convergence-cours.webp',
          alt: "Fiche d'un cours d'histoire sur la Première Guerre mondiale : 10 questions, 7 concepts, 3 acquis, et une prévision indiquant qu'au rythme actuel le modèle ne se rapproche pas du seuil d'acquisition.",
          width: 804,
          height: 1748,
          variant: 'mobile',
          frame: 'phone',
        },
        {
          src: '/images/projects/edukai/evolution-maitrise-concept.webp',
          alt: "Fiche du concept « La bataille de Verdun » : maîtrise acquise, histogramme de l'évolution de fragile à acquis, et les dernières réponses avec leur temps de réponse.",
          width: 804,
          height: 1748,
          variant: 'mobile',
          frame: 'phone',
        },
        {
          src: '/images/projects/edukai/feedback-explication.webp',
          alt: "Question de géographie en cours de séance, première sur six : la bonne réponse est validée en vert et accompagnée d'une explication.",
          width: 804,
          height: 1748,
          variant: 'mobile',
          frame: 'phone',
        },
      ],
      narrative: [
        {
          heading: "D'où vient le projet",
          paragraphs: [
            "Edukai part d'une idée à moi, que j'ai proposée en projet de fin d'études à Epitech, sur le parcours entrepreneuriat, l'un des trois ouverts. Nous étions trois à la porter. Le projet a démarré en 2024, s'est achevé en février 2026, et je développe l'application sur mon temps libre depuis.",
            "Le problème tient en une phrase que tout le monde a vécue : on apprend un cours par cœur pour un contrôle, et trois mois plus tard il n'en reste rien. C'est coûteux en temps et en énergie, et inefficace sur la durée. Un lycéen a ses cours, pas le temps de fabriquer ses propres questions, et aucune idée de ce qu'il maîtrise réellement. L'application prend le cours en entrée et rend les deux choses qui manquent, des questions et une mesure.",
            "Le nom mélange l'éducation et l'intelligence artificielle. La mascotte est un manchot, symbole de travail collectif.",
          ],
        },
        {
          heading: 'La première version, sur le web',
          paragraphs: [
            "La v1 était un site. On y déposait un cours ou des notes de cours, l'application les analysait, et il en sortait séparément un résumé et une liste de vingt questions d'entraînement. Les statistiques se limitaient à un pourcentage de bonnes réponses, avec un historique pour suivre la progression.",
            "Une grande part de l'effort est passée dans le design et l'expérience : la maquette a été refaite plus de trois fois avant de nous satisfaire. Le but n'était pas de livrer un outil de plus, que personne ne comprendrait ni n'aurait envie d'ouvrir deux fois.",
            "Côté école, toutes les notes du projet se sont jouées sur cette version, et c'est elle qui a validé l'année et le module.",
          ],
        },
        {
          heading: 'Reprendre le projet seul',
          paragraphs: [
            "En mars 2026, mes deux coéquipiers sont partis, l'un en CDI, l'autre à son compte. J'ai repris le projet seul, et j'ai commencé par l'ouvrir en grand : ce qui tenait, ce qui ne tenait pas, et pourquoi. Nommer les faiblesses de sa propre solution est la partie la moins agréable de l'exercice, et c'est celle qui a décidé de la suite.",
            "Deux conclusions en sont sorties. La première n'est pas technique : le web fermait le marché. Un lycéen révise dans le bus et entre deux cours, sur son téléphone, pas devant un navigateur. La v2 serait donc une application mobile, et ce choix a entraîné tout le reste.",
            "La seconde portait sur le moteur. Mesurer la maîtrise par un pourcentage de bonnes réponses, et servir les questions dans l'ordre où elles sortaient, ne valait pas mieux qu'une fiche de révision. Il fallait un cœur plus précis et mieux ordonné, construit sur des notions établies plutôt que sur des règles inventées au fil de l'eau : la courbe de l'oubli et la difficulté adaptative.",
          ],
        },
        {
          heading: "Ce que fait l'application",
          paragraphs: [
            "Le parcours tient en cinq étapes. On importe un cours, l'application en extrait les concepts qu'il contient, puis elle choisit une question, l'élève répond, et l'estimation de sa maîtrise est révisée.",
            "Les trois dernières étapes tournent en boucle, et c'est tout l'intérêt : chaque réponse change ce que l'application sait de l'élève, donc elle change aussi la question suivante.",
          ],
          figure: 'edukai-cycle',
        },
        {
          heading: "Ce que j'ai construit",
          paragraphs: [
            "Une application mobile native en Expo et React Native, adossée à une API NestJS. L'import d'un cours ne bloque pas l'écran : l'extraction part dans un worker asynchrone sur des files BullMQ, et l'application suit l'avancement pendant que le travail se fait.",
            "L'extraction produit des concepts et des questions. Les concepts sont dédupliqués sémantiquement, leurs embeddings stockés en pgvector : au-delà d'un seuil de similarité, un concept fraîchement extrait est fusionné dans un concept existant plutôt que recréé, pour qu'un même point de cours présenté deux fois ne devienne pas deux concepts distincts.",
            "Toute la génération reste cantonnée dans un seul paquet : une règle ESLint bloquante interdit d'importer le client OpenAI ailleurs, de sorte que la frontière d'architecture tienne sans dépendre de la discipline du moment.",
          ],
        },
        {
          heading: 'Une fourchette plutôt qu\'un score',
          paragraphs: [
            "Le moteur ne range pas l'élève derrière un pourcentage. Pour chaque concept il tient une fourchette, l'écart entre le niveau le plus bas et le niveau le plus haut qu'il juge encore plausibles, et c'est la largeur de cette fourchette qui dit à quel point il est sûr de lui. Large ne veut pas dire faible : large veut dire qu'il n'a pas encore de quoi trancher.",
            "Chaque réponse resserre la fourchette, et le temps la rouvre : la confiance se dégrade à taux fixe par jour d'absence. Ce que l'élève gagne en répondant, il le reperd en ne revenant pas, et c'est cet équilibre que le moteur entretient. La confiance n'est donc pas une donnée entretenue à côté du score, elle est la fourchette elle-même. Sous le capot, la maîtrise de l'élève et la difficulté de chaque question sont deux gaussiennes sur une même échelle de logit, mises à jour par un filtre de type Kalman, et la variance est la confiance.",
            "Les points d'expérience suivent la même règle : le moteur retient le plus haut niveau prouvé sur un concept et ne paie que le terrain gagné au-dessus. Reposer une question déjà facile ne rapporte donc rien, non pas parce que l'estimation ne bouge pas, mais parce qu'elle ne dépasse pas ce qui a déjà été payé. Ce repère s'érode avec l'oubli, de sorte que réapprendre un concept perdu de vue se paie à nouveau.",
          ],
          figure: 'edukai-interval',
        },
        {
          heading: 'Comment la question suivante est choisie',
          paragraphs: [
            "Un moteur qui cherche à faire réussir l'élève lui sert des questions faciles, et une séance où tout passe n'apprend rien. Edukai prend le problème dans l'autre sens : il se fixe d'abord le taux de réussite qu'il veut obtenir, autour de 75 %, et c'est de cette cible qu'il déduit la difficulté de la question à servir. La difficulté n'est pas choisie puis subie, elle est calculée pour que l'issue reste incertaine.",
            "Une zone de 60 à 85 % de réussite prévue est définie comme la bande productive, mais elle ne filtre rien pour l'instant : c'est un garde-fou écrit et testé, pas encore branché sur la décision. Après trois échecs d'affilée, la cible passe de 75 à 90 %, délibérément au-dessus de cette bande, le temps de remettre l'élève en selle.",
            "L'espacement des révisions ne sort pas d'une table d'intervalles mais de cette même fourchette : elle se rouvre à taux fixe par jour d'absence, et la date de révision est le moment où elle sera retombée à l'ignorance de départ. L'intervalle est donc une inversion de ce taux d'oubli, borné entre un et six jours, les deux horizons que SM-2 donne pour la consolidation et le premier espacement réel.",
          ],
          figure: 'edukai-target',
        },
      ],
      relatedSlugs: ['degommix', 'freelance-manager'],
    },
  },
  {
    teaser:
      'Clients, factures, acomptes et relances, avec un serveur MCP en production pour piloter le tout.',
    page: {
      slug: 'freelance-manager',
      provenance: 'perso',
      mark: {
        src: '/images/projects/freelance-manager/icone-app.svg',
        width: 512,
        height: 512,
        isVector: true,
        shape: 'icon',
      },
      title: 'Freelance Manager',
      titleQualifier: 'pilotage de mon activité de freelance',
      periodInline: 'mars à août 2026',
      period: 'Mars à août 2026',
      publishedTimeIso: '2026-08-01',
      lead: "L'outil sur lequel je gère ma propre activité de freelance : clients, propositions chiffrées, factures, acomptes, découpage en échéances et relances, avec une couche d'analyse qui calcule mon taux journalier effectif et ma concentration client.",
      metaDescription:
        "Back office de freelance : clients, factures, acomptes, échéances et relances, avec un serveur MCP en production et une arithmétique monétaire exacte au centime.",
      stack: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'better-auth', 'MCP', 'Railway'],
      externalLinks: [
        {
          label: 'freelance-manager.tristanhourtoulle.fr',
          href: 'https://freelance-manager.tristanhourtoulle.fr',
          note: 'Connexion requise : les données sont rattachées à un compte.',
        },
      ],
      galleryLayout: 'frames',
      gallery: [
        {
          src: '/images/projects/freelance-manager/dashboard-encours-relances.webp',
          alt: 'Tableau de bord de Freelance Manager : revenu du mois, encours, charge à venir, factures en retard à relancer et tâches en cours.',
          width: 2400,
          height: 1477,
          variant: 'desktop',
          frame: 'browser',
        },
        {
          src: '/images/projects/freelance-manager/split-facture-echeances.webp',
          alt: "Découpage d'une facture de 4 030 euros en trois échéances mensuelles de 1 343,33 euros, avec le choix de la cadence et la numérotation annoncée.",
          width: 2400,
          height: 1477,
          variant: 'desktop',
          frame: 'browser',
        },
        {
          src: '/images/projects/freelance-manager/tasks-linear-valeur-facturable.webp',
          alt: "Liste des tâches synchronisées depuis Linear, groupées par client, avec l'estimation, le temps réel, la valeur facturable de chaque ligne et le total à facturer.",
          width: 2400,
          height: 1651,
          variant: 'desktop',
          frame: 'browser',
        },
        {
          src: '/images/projects/freelance-manager/analytics-concentration-precision.webp',
          alt: "Page d'analyse sur douze mois : revenu encaissé, comparaison du payé et de l'émis, classement des clients avec leur taux journalier effectif, et métriques clés dont la concentration client et la précision des estimations.",
          width: 2400,
          height: 2621,
          variant: 'desktop',
          frame: 'browser',
        },
      ],
      narrative: [
        {
          heading: "Pourquoi je l'ai construit",
          paragraphs: [
            "Une activité de freelance tient sur des chiffres que personne ne calcule pour vous : ce qui est facturé mais pas encaissé, ce qu'une journée rapporte réellement une fois le temps non facturable compté, et la part du revenu qui dépend d'un seul client.",
            "Je gérais cela dans des feuilles de calcul, qui répondent très bien tant qu'on ne leur demande rien de contraignant. Elles ne savent ni empêcher une erreur d'arrondi, ni recalculer une relance à partir des paiements réellement reçus. J'ai donc construit l'outil que j'utilise au quotidien.",
          ],
        },
        {
          heading: "Ce que j'ai construit",
          paragraphs: [
            "Les clients, les propositions chiffrées, les factures et les acomptes, avec le découpage d'une facture en échéances et les relances qui en découlent. Au-dessus, une couche d'analyse qui calcule mon taux journalier effectif, ma concentration client et la précision de mes estimations.",
            "Les tâches sont synchronisées depuis Linear et portent chacune une estimation, un temps réel et une valeur facturable, ce qui permet de rapprocher le travail livré de ce qui part en facture.",
          ],
        },
        {
          heading: 'Un serveur MCP en production',
          paragraphs: [
            "L'outil expose un serveur MCP monté dans une route Next.js, délibérément placé hors de /api/* pour que la barrière par cookie ne s'y applique pas : un agent n'a pas de session de navigateur, et faire semblant du contraire aurait affaibli les deux chemins à la fois.",
            "Le jeton n'est stocké que sous forme de hash et comparé en temps constant. Une configuration absente ou malformée renvoie un 503 plutôt que d'ouvrir l'accès. La limitation de débit est un unique upsert atomique en base, et non un compteur en mémoire : avec plusieurs instances, chacune se serait octroyé son propre quota. L'écriture d'audit est attendue avant la réponse, de sorte qu'un audit en échec fait échouer l'appel.",
            "Le partage des pouvoirs est explicite : un agent peut préparer un brouillon de facture, il ne peut pas l'envoyer.",
          ],
        },
        {
          heading: 'Les chiffres et leurs garde-fous',
          paragraphs: [
            "Toute l'arithmétique monétaire se fait en centimes entiers, et le reste de la division part sur les premières échéances, de sorte que la somme des échéances retombe exactement sur le total. Les relances sont recalculées à partir des paiements réellement enregistrés plutôt que lues dans une colonne mise en cache qui finirait par mentir.",
            "Le domaine est une couche pure, assortie de garde-fous statistiques : aucun ratio n'est affiché en dessous de cinq mesures, et un dénominateur nul rend une valeur absente plutôt qu'un infini présenté comme un résultat.",
          ],
        },
      ],
      relatedSlugs: ['edukai', 'degommix'],
    },
  },
  {
    teaser:
      'Le score des parties de petits chevaux, en temps réel, avec une annulation que tous les joueurs partagent.',
    page: {
      slug: 'degommix',
      provenance: 'perso',
      mark: {
        src: '/images/projects/degommix/icone-app.webp',
        width: 512,
        height: 512,
        shape: 'icon',
      },
      title: 'Dégommix',
      titleQualifier: 'compteur de points pour les petits chevaux',
      periodInline: 'juillet 2026',
      period: 'Juillet 2026',
      publishedTimeIso: '2026-07-01',
      lead: "PWA mobile qui tient le score des parties physiques du jeu de société des petits chevaux Astérix, construite pour ma mère et moi. Le plateau reste le jeu, l'application enregistre ce qui s'y passe, et tous les téléphones autour de la table restent synchronisés.",
      metaDescription:
        "PWA mobile qui tient le score des parties physiques des petits chevaux Astérix : temps réel multijoueur, serveur qui fait autorité et annulation partagée entre les joueurs.",
      stack: ['Next.js', 'Socket.IO', 'PostgreSQL', 'Drizzle', 'Better Auth', 'PWA'],
      externalLinks: [
        {
          label: 'degommix.tristanhourtoulle.fr',
          href: 'https://degommix.tristanhourtoulle.fr',
          note: 'Connexion requise : les données sont rattachées à un compte.',
        },
      ],
      galleryLayout: 'frames',
      gallery: [
        {
          src: '/images/projects/degommix/ecran-titre.webp',
          alt: "Écran titre de Dégommix sur mobile : le nom sur un parchemin, les quatre écussons de camp et la salutation « Salve ! ».",
          width: 780,
          height: 1688,
          variant: 'mobile',
          frame: 'phone',
          carriesOwnTopBar: true,
        },
        {
          src: '/images/projects/degommix/partie-live-annulation.webp',
          alt: 'Partie de Dégommix en direct sur mobile : les quatre joueurs et leurs points, le choix du joueur dégommé, et le journal de la partie.',
          width: 780,
          height: 1688,
          variant: 'mobile',
          frame: 'phone',
          carriesOwnTopBar: true,
        },
        {
          src: '/images/projects/degommix/fin-de-partie-banquet.webp',
          alt: "Fin de partie sur mobile : le banquet annonce la victoire de Tristan, suivi du classement des quatre joueurs avec leurs dégommages, la durée et le format.",
          width: 780,
          height: 1688,
          variant: 'mobile',
          frame: 'phone',
          carriesOwnTopBar: true,
        },
      ],
      narrative: [
        {
          heading: "Pourquoi je l'ai construit",
          paragraphs: [
            "Les petits chevaux Astérix se jouent sur un plateau, autour d'une table, et ce plateau n'a aucune raison de disparaître dans un écran. Ce qui se perd en route, c'est le décompte : qui a dégommé qui, combien de fois, et depuis combien de temps la partie dure.",
            "L'application a été construite pour ma mère et moi. Elle ne remplace pas le jeu, elle en tient le registre, et chaque téléphone autour de la table voit le même état au même moment.",
          ],
        },
        {
          heading: "Ce que j'ai construit",
          paragraphs: [
            "Une PWA mobile adossée à un serveur Socket.IO qui fait autorité sur la partie. Chaque action passe par lui, reçoit un numéro de séquence et rejoint un journal strictement en ajout : il n'y a pas une seule suppression ni une seule mise à jour de ce journal dans tout le code.",
            "Un mutex par partie, construit sur une chaîne de promesses, rend la numérotation et la résolution des annulations insensibles aux courses, même quand deux joueurs appuient en même temps.",
            "Le réducteur qui calcule l'état à partir du journal est une fonction pure, réellement partagée entre le client et le serveur, et un test de parité vérifie que le repli complet du journal donne le même résultat que le chemin incrémental.",
          ],
        },
        {
          heading: "L'annulation et la reprise",
          paragraphs: [
            "Annuler n'efface rien : c'est un événement de plus, qui porte le numéro de séquence visé et décrémente le compteur de l'auteur d'origine, pas celui de la personne qui annule. N'importe quel joueur peut annuler l'action d'un autre, ce qui correspond à ce qui se passe autour de la table quand quelqu'un se trompe de pion.",
            "Le reste sert à ce que la partie survive au réseau : le JWT est vérifié dès la poignée de main du websocket contre un point d'accès JWKS, les renvois sont idempotents, un client se resynchronise à partir d'un numéro de séquence, et l'horloge est ancrée sur le serveur avec correction du décalage pour que la durée affichée soit la même partout.",
          ],
        },
      ],
      relatedSlugs: ['edukai', 'freelance-manager'],
    },
  },
];
