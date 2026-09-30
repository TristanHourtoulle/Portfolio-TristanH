# Prose récupérée avant suppression des landing pages

Extrait le 2026-09-30, avant la suppression de `/tarifs`, `/site-vitrine` et
`/refonte-site-web` (lot 1, tâche T1 du pivot CDI).
Chemins relatifs à la racine du repo.

---

## Méthode de travail

### 1. Design puis développement par la même personne
> « Je conçois les interfaces dans Figma, puis je les développe moi-même en Next.js et TypeScript : rien ne se perd entre la maquette et le produit final. »

`src/lib/constants.ts:498` (dupliqué `src/app/site-vitrine/page.tsx:84`)
Cœur du « À propos » en CDI. Supprimer « freelance » de la phrase d'introduction, garder le reste tel quel.

### 2. Pas de perte entre les deux métiers
> « Pas de chef de projet à relancer, pas de couche commerciale, pas d'aller-retour entre un designer et un développeur qui ne se connaissent pas. »

`src/lib/constants.ts:499` (dupliqué `src/app/site-vitrine/page.tsx:85`)
Devient « je réduis les frictions design/dev », valable en équipe produit. Retirer « Vous parlez à une seule personne », qui est l'argument anti-agence.

### 3. Démo hebdomadaire, ajustements en continu
> « Une démo chaque semaine, sur un lien de test que vous pouvez partager. Les ajustements se font au fil de l'eau, pas à la fin. »

`src/lib/constants.ts:443`
Culture d'itération courte et de feedback précoce. Écrire « je livre une démo chaque semaine sur un environnement de test ».

### 4. Pourquoi l'itération courte tient le planning
> « Les ajustements se font au fil de l'eau, pas à la fin, ce qui est aussi la raison pour laquelle le prix ne bouge pas en cours de route. »

`src/app/tarifs/page.tsx:83`
Version qui explique le pourquoi. Couper la subordonnée sur le prix, la remplacer par « ce qui est aussi ce qui tient le planning ».

### 5. Le périmètre se fige avant le code
> « La validation de la maquette est le moment où l'on arrête cette structure, page par page. Pas trois semaines plus tard, sur un site à moitié construit. »

`src/app/site-vitrine/page.tsx:69`
Le second membre de phrase fait tout le travail. Passer « on » à « je », « site » à « produit ».

### 6. Le périmètre se décide au cadrage, pas d'avance
> « Le nombre de pages n'est pas fixé d'avance : il se décide au cadrage, en fonction de ce que votre activité a réellement besoin de dire. »

`src/app/site-vitrine/page.tsx:68`
Il part du besoin, pas d'un gabarit. Remplacer « votre activité » par « le produit ».

### 7. Périmètre posé avant la première ligne de code
> « Je le reprends de la maquette Figma à la mise en ligne, avec un périmètre posé avant la première ligne de code. »

`src/app/refonte-site-web/page.tsx:132-136`
Formule courte et mémorisable. Supprimer le prix ferme et la date de livraison de l'énumération d'origine.

### 8. S'insérer dans une équipe existante
> « Certains clients arrivent avec leurs maquettes, d'autres avec un développeur en interne. »

`src/lib/constants.ts:556` (variante `src/app/tarifs/page.tsx:70`)
Devient « je sais m'insérer dans une équipe existante, sur la partie design comme sur la partie dev ». Remplacer « clients / offre » par « projets / mon intervention », supprimer « et le prix suit ».

---

## Jugement technique

### 9. Une refonte ne se décide pas parce qu'un site est vieux
> « Une refonte ne se décide pas parce qu'un site est vieux. Elle se décide quand le site coûte quelque chose. »

`src/app/refonte-site-web/page.tsx:67`
La meilleure phrase du lot. Refus de la refonte cosmétique, décision guidée par le coût réel. Déjà impersonnelle, réutilisable telle quelle.

### 10. Le diagnostic Hosteed
> « Sur Hosteed, une plateforme de réservation, le site tournait sur WordPress et posait de gros problèmes de performance : pages lentes, comportement imprévisible, et le site allait jusqu'à tomber complètement. Le sujet n'était plus une fonctionnalité manquante, c'était un site sur lequel on ne pouvait plus compter. »

`src/app/refonte-site-web/page.tsx:69`
Symptômes observés puis requalification du problème, de la fonctionnalité vers la fiabilité. Retirer « C'est précisément ce qui a déclenché l'appel ».

### 11. Reprendre ou repartir de la base
> « Reprendre l'existant ou repartir de la base se décide au cadrage, pas par principe. Sur Hosteed, la plateforme a été reprise depuis la base plutôt que rafistolée, parce que l'architecture était elle-même le problème : rafistoler aurait conservé la cause. »

`src/app/refonte-site-web/page.tsx:74`
Jugement d'architecture argumenté et anti-dogmatique, avec son exemple. Passer au passé.

### 12. Une refonte qui perd le SEO acquis est ratée
> « Le référencement naturel technique et le suivi des visites font partie du périmètre, pas des options à ajouter ensuite. Une refonte qui perd le référencement acquis par le site précédent est une refonte ratée. »

`src/app/refonte-site-web/page.tsx:75`
Effets de bord d'une migration, observabilité traitée comme du périmètre et non du bonus. Position technique générale, réutilisable telle quelle.

### 13. Distinguer un site d'une application
> « Ce n'est pas un site avec une option de vente, c'est une application, avec la logique métier et la base de données que cela suppose. »

`src/app/site-vitrine/page.tsx:196-198`
Il requalifie la nature du système au lieu d'accepter le vocabulaire du demandeur. Supprimer la phrase suivante qui renvoie à une offre chiffrée.

### 14. Le tunnel de paiement construit de bout en bout
> « Le paiement en ligne, je le construis : sur la plateforme Hosteed, le tunnel passe par Stripe, de la demande de réservation jusqu'à l'encaissement. »

`src/app/site-vitrine/page.tsx:206-209`
Fait technique vérifiable pour le Parcours. Passer au passé, supprimer la mention de l'offre et du prix qui précède.

---

## Rapport au problème

### 15. La question de départ n'est pas esthétique
> « Dans les deux cas, la question de départ n'est pas esthétique. Elle est de savoir ce que le site est censé produire, et pourquoi il ne le produit pas aujourd'hui. »

`src/app/refonte-site-web/page.tsx:70`
Il instruit le problème avant la solution. Remplacer « le site » par « le produit ».

### 16. Reformuler une demande floue en problèmes mesurables
> « C'est le format qui répond à deux situations très concrètes : votre activité est invisible en ligne, ou votre site actuel ne convertit pas les visiteurs en contacts. »

`src/app/site-vitrine/page.tsx:63`
Passer à la troisième personne : « deux situations, une activité invisible en ligne, ou un site qui ne convertit pas ».

### 17. Concevoir pour l'autonomie de l'équipe
> « Un back-office dédié permet à l'équipe de suivre les logements, les réservations et les paiements sans qu'un développeur ait à intervenir. »

`src/app/refonte-site-web/page.tsx:259-265`
Il conçoit pour réduire la dépendance à l'ingénieur, argument fort en CDI. Retirer la phrase finale sur la phase de test chez le client.

### 18. Ancrer l'expérience dans du logiciel vivant
> « Je travaille depuis 2024 avec des PME, des startups et des agences, sur des produits qui sont aujourd'hui en production et utilisés chaque jour. »

`src/lib/constants.ts:500` (variante courte `src/app/site-vitrine/page.tsx:64`)
Ouverture du Parcours. Distingue du projet d'école. Passer au passé si le portfolio se met au passé.

---

## Écarté volontairement

Tout ce qui touche au prix et à la relation commerciale : prix de départ et forfaits,
hébergement à 2 ou 3 euros par mois, proposition chiffrée sous 5 jours, appel découverte
gratuit et sans engagement, propriété du code et dépôt transféré, maintenance optionnelle,
correction gratuite pendant 30 jours, formation incluse, appel d'offres et comparaison
ligne à ligne.
Sources écartées : `src/app/refonte-site-web/page.tsx:79-92`, `src/app/site-vitrine/page.tsx:72-81`,
`src/lib/constants.ts:426-449` (étapes 1, 2 et 4), et l'intégralité de `FAQ_ITEMS`.

## Note pour plus tard

Les témoignages (`src/lib/constants.ts:456-489`) sortent du périmètre de cette extraction
mais décrivent l'éthique de travail et l'autonomie. À traiter en T12.
