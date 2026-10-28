---
title: MICIR, un micro infrarouge pour violoncelle
summary: Quatre couples émetteur infrarouge et phototransistor, un par corde, gravés sur un circuit souple collé au chevalet. La corde fait de l'ombre, et l'ombre devient du son.
rubrique: projet
theme: son
debut: 2020
statut: en pause
cover: ./cover.jpg
coverAlt: Le chevalet du violoncelle vu de près, le circuit du MICIR collé sur sa face, quatre capteurs alignés sous les cordes
galerie:
  - src: ./galerie-1.jpg
    alt: Une main soude un fil fin sur le bord du circuit, contre la caisse rouge d'un instrument
    legende: Soudure du câble, juin 2020
  - src: ./galerie-2.jpg
    alt: Le circuit imprimé doré du MICIR posé sur le chevalet, pistes et composants visibles
    legende: Le circuit sur le chevalet
  - src: ./galerie-3.jpg
    alt: Gros plan sur le circuit, les quatre paires de composants sous chaque corde
    legende: Sous chaque corde, un émetteur et un phototransistor
  - src: ./galerie-4.jpg
    alt: Le circuit en cours d'usinage sur la fraiseuse, la fraise au-dessus du cuivre
    legende: Le circuit, gravé sur la fraiseuse de l'atelier
specs:
  - groupe: Capteur
    lignes:
      - label: Émetteur
        valeur: SFH 4646, diode infrarouge 950 nm, une par corde
      - label: Récepteur
        valeur: SFH 3605, phototransistor, un par corde
      - label: Alimentation
        valeur: 5 V, résistances de 150 Ω
      - label: Circuit
        valeur: KiCad, deux faces, usiné sur la fraiseuse
sources:
  - label: Le circuit, sur GitHub
    url: https://github.com/patrick-reybaud/micir-cello
    description: Schéma et circuit KiCad, fiche technique des composants, essais sonores
licence: Fichiers publiés pour qui voudrait reprendre ou adapter.
---

Un micro de violoncelle qui ne touche pas la corde et n'entend pas la caisse. Le principe est optique : sous chaque corde, une diode infrarouge éclaire un phototransistor. La corde, en vibrant, passe dans le faisceau et le coupe plus ou moins ; le courant du phototransistor suit le mouvement de la corde, et ce courant est le signal.

Le capteur est insensible à la lumière ambiante, parce que la diode émet à 950 nm et que le phototransistor est filtré pour cette longueur d'onde. Il est insensible aux vibrations de la caisse, parce qu'il ne regarde que la corde. Et il voit chaque corde séparément, ce qui ouvre la porte à un traitement par corde.

Le circuit est dessiné dans KiCad : quatre fois le même étage, une diode, un phototransistor, une résistance de 150 Ω pour fixer le courant de la diode, un condensateur de découplage, et un connecteur. Il est gravé sur la fraiseuse de l'atelier, puis collé sur la face du chevalet, les composants alignés sous les cordes.

Les essais de 2020 sont enregistrés. Le préampli qui suivait a ensuite pris son indépendance : il est devenu le PZF-20 d'Ondulab, un préampli piézo symétrique alimenté en 48 V. Le micro, lui, attend un deuxième prototype, avec un réglage de hauteur par corde.
