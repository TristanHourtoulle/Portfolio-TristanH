import type { PersonalProject } from './types';

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    teaser:
      'Un cours importé devient des questions, taillées par un modèle qui estime la maîtrise de chaque concept.',
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
      lead: "Application iOS pour les lycéens : on importe un cours, l'application en extrait les concepts et interroge dessus. Un moteur pédagogique entretient une estimation statistique de la maîtrise de chaque concept et de la difficulté de chaque question, et commande la question suivante pour viser un taux de réussite cible.",
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
        width: 804,
        height: 1748,
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
            "Edukai part d'une idée à moi, que j'ai proposée en projet de fin d'études à Epitech, sur le parcours entrepreneuriat, l'un des trois proposés. Nous étions trois à la porter. Le projet a démarré en 2024, s'est achevé en février 2026, et je développe l'application sur mon temps libre depuis.",
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
            "Le parcours tient en cinq étapes. On importe un cours, l'application en extrait les concepts qu'il contient, puis une question est fabriquée, l'élève répond, et l'estimation de sa maîtrise est révisée.",
            "L'extraction est une lecture libre du cours : rien n'est pioché dans une liste imposée. Chaque concept proposé est ensuite confronté à tous ceux que l'application connaît déjà, et selon qu'il leur ressemble assez ou non, il les rejoint ou il est créé et rattaché au référentiel de sa matière.",
            "Dès l'import terminé, un travail de fond fabrique trois questions à choix multiple par concept. Faute d'élève à qui les ajuster, elles visent une difficulté neutre : le réglage fin ne commence qu'une fois que quelqu'un répond.",
            "Les trois dernières étapes tournent ensuite en boucle, et c'est tout l'intérêt : chaque réponse change ce que l'application sait de l'élève, donc elle change aussi la question suivante.",
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
            "Un seuil unique, du type « acquis au-dessus de 50 % de bonnes réponses », serait commode et faux : il met derrière le même chiffre l'élève qui a compris et celui qui a simplement eu de la chance sur trois questions. La maîtrise n'est jamais binaire, et la mesurer par un point revient à jeter ce qu'on ne sait pas encore.",
            "Le moteur ne range donc pas l'élève derrière un pourcentage. Pour chaque concept il tient une fourchette, l'écart entre le niveau le plus bas et le niveau le plus haut qu'il juge encore plausibles, et c'est la largeur de cette fourchette qui dit à quel point il est sûr de lui. Large ne veut pas dire faible : large veut dire qu'il n'a pas encore de quoi trancher.",
            "Chaque réponse resserre la fourchette, et le temps la rouvre : la confiance se dégrade à taux fixe par jour d'absence. Ce que l'élève gagne en répondant, il le reperd en ne revenant pas, et c'est cet équilibre que le moteur entretient. La confiance n'est donc pas une donnée entretenue à côté du score, elle est la fourchette elle-même. Sous le capot, la maîtrise de l'élève et la difficulté de chaque question sont deux gaussiennes sur une même échelle de logit, mises à jour par un filtre de type Kalman, et la variance est la confiance.",
            "Les points d'expérience suivent la même règle : le moteur retient le plus haut niveau prouvé sur un concept et ne paie que le terrain gagné au-dessus. Reposer une question déjà facile ne rapporte donc rien, non pas parce que l'estimation ne bouge pas, mais parce qu'elle ne dépasse pas ce qui a déjà été payé. Ce repère s'érode avec l'oubli, de sorte que réapprendre un concept perdu de vue se paie à nouveau.",
            "« Acquis » se lit donc sur la fourchette et jamais sur une moyenne : il faut à la fois que la borne basse passe le seuil, autrement dit que même en étant pessimiste l'élève réussisse assez souvent, et que la fourchette soit assez étroite. Une estimation haute mais incertaine et une estimation sûre mais moyenne échouent toutes les deux, pour des raisons opposées. Entre l'ignorance et l'acquisition, le concept passe par quatre états plutôt que par un interrupteur.",
          ],
          figure: 'edukai-interval',
        },
        {
          heading: 'Comment la question suivante est choisie',
          paragraphs: [
            "Un moteur qui cherche à faire réussir l'élève lui sert des questions faciles, et une séance où tout passe n'apprend rien. Edukai prend le problème dans l'autre sens : il se fixe d'abord le taux de réussite qu'il veut obtenir, autour de 75 %, et c'est de cette cible qu'il déduit la difficulté de la question à servir. La difficulté n'est pas choisie puis subie, elle est calculée pour que l'issue reste incertaine.",
            "Une zone de 60 à 85 % de réussite prévue est définie comme la bande productive, mais elle ne filtre rien pour l'instant : c'est un garde-fou écrit et testé, pas encore branché sur la décision. Le relèvement de la cible de 75 à 90 % après trois échecs d'affilée, délibérément au-dessus de cette bande pour remettre l'élève en selle, est écrit lui aussi et attend le même branchement.",
            "Cette décision ne consiste pas à trier dans un stock figé. À chaque réponse, juste et fausse pareillement, le moteur repart de la fourchette qu'il vient de réviser, en déduit le concept à travailler et la difficulté à viser, et c'est à cette commande que la question suivante est fabriquée, dans un travail de fond pour que personne n'attende devant l'écran. Quand cette fabrication échoue, le repli prend parmi les questions déjà calibrées celle dont la difficulté est la plus proche de la cible.",
            "Le format, lui, n'est jamais un levier de difficulté : choix multiple, vrai ou faux, texte à trous, réponses multiples, remise en ordre ou classement par catégories tournent pour la variété, et s'infléchissent seulement vers les formats les plus légers quand l'élève est en difficulté. Faire porter la difficulté au format reviendrait à la régler deux fois, dans deux endroits qui finiraient par se contredire.",
            "L'espacement des révisions ne sort pas d'une table d'intervalles mais de cette même fourchette : elle se rouvre à taux fixe par jour d'absence, et la date de révision est le moment où elle sera retombée à l'ignorance de départ. L'intervalle est donc une inversion de ce taux d'oubli, borné entre un et six jours, les deux horizons que SM-2 donne pour la consolidation et le premier espacement réel.",
          ],
          figure: 'edukai-target',
        },
        {
          heading: 'Où en est le projet',
          paragraphs: [
            "La séance du jour pioche aujourd'hui dans tous les cours suivis plutôt que dans un seul. Elle écarte les concepts déjà acquis, classe les autres du plus faible et du plus incertain au mieux tenu, et garde un plancher par cours pour qu'un petit cours ne soit jamais enterré par un gros.",
            "La suite serait de réviser en fonction d'une échéance, un contrôle, le bac, le brevet. Elle n'y est pas : aucune date d'examen n'est conservée côté serveur et rien dans la sélection n'en lit une. L'application sait compter les jours jusqu'à l'examen et le rappeler, mais ce compte à rebours ne change pas une seule question.",
            "Le projet est toujours en développement, avec un premier cerveau qui tourne. Je ne sais pas jusqu'où il ira. Je veux le pousser parce qu'il me tient à cœur, et parce qu'il me rend meilleur techniquement.",
          ],
        },
      ],
      relatedSlugs: ['degommix', 'freelance-manager'],
    },
  },
  {
    teaser:
      'Mon outil de gestion : clients, factures, échéances et relances, relié à un serveur MCP pour préparer certaines opérations avec un agent.',
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
      lead: 'J’ai développé l’outil que j’utilise pour gérer mon activité indépendante : clients, propositions commerciales, factures et suivi des paiements. Il rapproche aussi les tâches issues de Linear des montants à facturer et propose une interface MCP pour les agents.',
      metaDescription:
        'Outil personnel de gestion freelance : facturation, échéances, suivi des paiements, tâches Linear et serveur MCP, avec des calculs monétaires en centimes entiers.',
      stack: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'better-auth', 'MCP', 'Railway'],
      externalLinks: [
        {
          label: 'freelance-manager.tristanhourtoulle.fr',
          href: 'https://freelance-manager.tristanhourtoulle.fr',
          note: 'Connexion requise : les données sont propres à chaque compte.',
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
          heading: 'Pourquoi cet outil',
          paragraphs: [
            'Je suivais mon activité dans des feuilles de calcul. J’ai voulu réunir les factures, les paiements et le temps passé pour voir ce qui restait à encaisser et ce que rapportaient réellement mes missions.',
          ],
        },
        {
          heading: 'Facturation et suivi du travail',
          paragraphs: [
            'L’application gère les clients, les propositions commerciales, les factures, les acomptes et les échéances. Les tâches synchronisées depuis Linear associent une estimation, un temps réel et une valeur facturable. Les analyses portent notamment sur le taux journalier effectif, la concentration du revenu par client et la précision des estimations.',
          ],
        },
        {
          heading: 'Une interface pour les agents',
          paragraphs: [
            'Un serveur MCP permet à un agent d’interagir avec l’outil. Son périmètre est limité : il peut préparer un brouillon de facture, mais pas l’envoyer. Cette séparation garde la validation finale du côté de l’utilisateur.',
          ],
        },
        {
          heading: 'Des montants qui restent exacts',
          paragraphs: [
            'Les montants sont calculés en centimes entiers. Lorsqu’une facture est divisée en échéances, les centimes restants sont répartis pour que leur somme corresponde exactement au total. Les relances sont recalculées à partir des paiements enregistrés.',
          ],
        },
        {
          heading: 'Des statistiques avec leurs limites',
          paragraphs: [
            'Les ratios ne sont affichés qu’à partir de cinq mesures. Quand un calcul ne peut pas être fait, notamment en cas de dénominateur nul, l’application n’affiche pas de résultat plutôt qu’une valeur trompeuse.',
          ],
        },
      ],
      relatedSlugs: ['edukai', 'degommix'],
    },
  },
  {
    teaser:
      'Un compteur de points pour nos parties de petits chevaux Astérix, synchronisé entre les téléphones des joueurs.',
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
      lead: 'J’ai développé Dégommix pour les parties de petits chevaux Astérix avec ma mère. On continue à jouer sur le plateau ; l’application garde le score, l’historique des actions et la durée de la partie sur les téléphones des joueurs.',
      metaDescription:
        'Compteur de points pour les petits chevaux Astérix : PWA mobile, synchronisation en temps réel, historique des actions et annulation partagée.',
      stack: ['Next.js', 'Socket.IO', 'PostgreSQL', 'Drizzle', 'Better Auth', 'PWA'],
      externalLinks: [
        {
          label: 'degommix.tristanhourtoulle.fr',
          href: 'https://degommix.tristanhourtoulle.fr',
          note: 'Connexion requise : les données sont propres à chaque compte.',
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
          heading: 'Une application à côté du plateau',
          paragraphs: [
            'Pendant les parties, nous voulions garder le compte des pions dégommés et retrouver le déroulement du jeu. Dégommix sert à noter ces actions, sans remplacer le plateau.',
          ],
        },
        {
          heading: 'Un état commun à tous les joueurs',
          paragraphs: [
            'L’application est une PWA mobile reliée à un serveur Socket.IO. Le serveur ordonne les actions et leur attribue un numéro de séquence. Les téléphones reçoivent ainsi les mêmes événements, dans le même ordre.',
          ],
        },
        {
          heading: 'Garder l’historique, même en cas d’erreur',
          paragraphs: [
            'Les actions sont conservées dans un journal. Une annulation ajoute un événement au lieu de supprimer l’action initiale. Chaque joueur peut corriger une saisie, y compris celle d’un autre joueur, et la correction s’applique au compteur de l’auteur de l’action.',
          ],
        },
        {
          heading: 'Reprendre après une coupure',
          paragraphs: [
            'La resynchronisation repart du dernier numéro de séquence reçu et les renvois d’une même action ne doivent pas la compter deux fois. La durée de la partie est calculée à partir de l’horloge du serveur pour rester cohérente entre les téléphones.',
          ],
        },
        {
          heading: 'Vérifier le calcul du score',
          paragraphs: [
            'Le calcul de l’état est partagé entre le client et le serveur. Un test compare le résultat obtenu en relisant tout l’historique à celui obtenu en appliquant les événements progressivement.',
          ],
        },
      ],
      relatedSlugs: ['edukai', 'freelance-manager'],
    },
  },
];
