---
title: UHER 4200 Report Monitor
summary: Un magnétophone de reportage des années 1970, remis en état, puis doté de nouvelles cartes dessinées dans KiCad, entrées micro symétriques, alimentation fantôme et régulation du moteur par microcontrôleur.
rubrique: projet
theme: son
debut: 2019
statut: en pause
aLaUne: true
ordre: 20
cover: ./cover.jpg
coverAlt: Le UHER 4200 Report Monitor ouvert sur l'établi, mécanique de bande et cartes d'origine à nu
galerie:
  - src: ./galerie-1.jpg
    alt: Vumètres et commandes du magnétophone, capot ouvert
    legende: Les vumètres et les cartes d'origine
  - src: ./galerie-6.jpg
    alt: La face avant du UHER 4200 Report Monitor, ses deux vumètres éclairés et ses boutons
    legende: Face avant, après remise en état
  - src: ./galerie-2.jpg
    alt: Rendu 3D de la carte 1200, le préampli micro, vu de dessus, avec ses deux INA163 et ses trois OPA2134
    legende: Carte 1200, préampli micro symétrique, rendu KiCad
  - src: ./galerie-5.jpg
    alt: Rendu 3D de la carte 1200 vue de dessous
    legende: Carte 1200, dessous
  - src: ./galerie-3.jpg
    alt: Rendu 3D de la carte 600, les prises micro
    legende: Carte 600, les prises micro
  - src: ./galerie-4.jpg
    alt: Rendu 3D de la carte 700, les témoins
    legende: Carte 700, les témoins
specs:
  - groupe: Nouvelles cartes (KiCad)
    lignes:
      - label: "600"
        valeur: carte des prises micro
      - label: "1200"
        valeur: préampli micro, deux INA163 et trois OPA2134, alimentation fantôme
      - label: "400"
        valeur: alimentation et régulation
      - label: "300"
        valeur: régulation de la vitesse du moteur, par microcontrôleur
      - label: "700"
        valeur: témoins
  - groupe: Appareil
    lignes:
      - label: Modèle
        valeur: UHER 4200 Report Monitor, stéréo, quatre vitesses
      - label: Reste d'origine
        valeur: mécanique, têtes, électronique de lecture et d'enregistrement
sources:
  - label: Les cartes, sur GitHub
    url: https://github.com/pacabot/UHER-4200-Monitor_Balanced-Mic-Input
    description: Les cinq projets KiCad, le schéma A3 et le manuel de service
licence: Fichiers publiés pour qui voudrait reprendre ou adapter.
---

Le UHER 4200 Report Monitor est un magnétophone à bandes portable de 1970, fait pour le reportage : mécanique dense, quatre vitesses, et une électronique entièrement discrète, à transistors, montée sur des cartes enfichables. Le mien est arrivé en état de marche apparent, c'est-à-dire qu'il tournait. Tout le reste était à reprendre.

## La remise en état

Un magnétophone de cet âge se remet en état dans un ordre précis, parce que chaque étape conditionne la suivante.

**Les courroies.** Après cinquante ans, le caoutchouc a durci ou s'est transformé en pâte. Elles se remplacent par des courroies neuves de section et de longueur équivalentes, et le galet presseur, vitrifié, est reponcé pour retrouver son adhérence sur le cabestan. Sans cela, le pleurage rend tout réglage ultérieur illusoire.

**Les condensateurs.** Les électrochimiques d'origine ont séché : capacité effondrée, résistance série en hausse. Ils sont remplacés par lot, alimentation comprise. Les condensateurs au tantale de l'époque, eux, partent en court-circuit sans prévenir : on les change aussi.

**Les contacts.** Commutateurs à glissière, potentiomètres, connecteurs de cartes : tout est démonté, nettoyé, et les contacts des cartes enfichables sont repris un à un.

**La démagnétisation des têtes.** Les têtes et les guides accumulent un magnétisme rémanent qui efface les aigus des bandes qu'on leur confie. Un démagnétiseur, approché puis éloigné lentement, appareil éteint, règle le problème avant toute mesure.

**L'alignement.** La tête de lecture doit être perpendiculaire à la bande, à la bonne hauteur et au bon azimut. Avec une bande de référence et un oscilloscope, on règle l'azimut pour que les deux pistes soient en phase à haute fréquence. C'est le réglage qui fait la différence entre un son sourd et un son net.

**La prémagnétisation et la partie HF.** À l'enregistrement, un oscillateur à haute fréquence ajoute un courant de polarisation au signal pour linéariser la bande. Son niveau se règle pour chaque type de bande et pour chaque vitesse : trop faible, le son sature et manque de grave ; trop fort, les aigus disparaissent. On règle ensuite le niveau d'enregistrement pour que les vumètres disent la vérité, puis l'égalisation de lecture sur la bande de référence.

Une fois tout cela fait, le UHER enregistre et lit comme en 1970. C'est là que le projet suivant commence.

## Les nouvelles cartes

Les entrées micro d'origine sont asymétriques, à haute impédance, pensées pour les micros dynamiques de l'époque. Pour brancher des micros à condensateur modernes, il faut des entrées symétriques sur XLR et une alimentation fantôme de 48 V. Plutôt que de bricoler les cartes existantes, j'ai redessiné dans KiCad les cartes qui manquaient, au format des cartes enfichables d'origine :

- la carte **600**, qui porte les prises micro ;
- la carte **1200**, un préampli micro symétrique à deux INA163 et trois OPA2134, avec l'alimentation fantôme ;
- la carte **400**, l'alimentation et sa régulation ;
- la carte **300**, qui remplace le régulateur de vitesse de 1970 par une régulation du moteur par microcontrôleur ;
- la carte **700**, les témoins.

Le reste de l'appareil, mécanique, têtes, électronique de lecture et d'enregistrement, reste d'origine. Le chantier est en pause, mais le travail sur les cartes est fait : schémas, circuits imprimés et rendus 3D sont dans le dépôt, avec le schéma A3 et le manuel de service. Le dossier contient aussi un porte-bobine imprimé en 3D pour lire une boucle de bande, et le schéma de l'Akustomat F-411, l'accessoire qui déclenchait l'enregistrement au son.

À côté de celui-ci, je restaure régulièrement d'autres magnétophones : voir [la fiche des magnétophones](/projets/magnetophones/).
