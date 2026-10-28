---
title: Monocorde oscillant
summary: Une corde, un capteur, un électroaimant et une boucle. La corde s'entretient toute seule, la note tient indéfiniment, et le timbre change avec ce qu'on injecte dans la boucle.
rubrique: projet
theme: son
debut: 2020
fin: 2022
statut: en pause
cover: ./cover.jpg
coverAlt: Une mécanique d'accordage récupérée, fixée au bout d'un profilé d'aluminium, la corde tendue au-dessus
galerie:
  - src: ./galerie-1.jpg
    alt: Le premier banc d'essai sur l'établi en 2020, une planche, des bobines, un oscilloscope allumé derrière
    legende: Le premier banc, mars 2020, avec l'oscilloscope qui montre la corde osciller
  - src: ./galerie-5.jpg
    alt: Une bobine de fil de cuivre émaillé à côté d'un aimant bleu
    legende: Une bobine d'essai et son aimant
  - src: ./galerie-6.jpg
    alt: La bobineuse montée sur le châssis d'une imprimante 3D, une bobine de fil de cuivre à côté
    legende: La bobineuse, construite sur un châssis d'imprimante 3D
  - src: ./galerie-7.jpg
    alt: Le guide-fil rouge imprimé en 3D de la bobineuse, tenu par une main
    legende: Le guide-fil de la bobineuse, imprimé en 3D
  - src: ./galerie-8.jpg
    alt: Deux bobines de cuivre superposées sur un support
    legende: Bobines en série
  - src: ./galerie-9.jpg
    alt: Une bobine enroulée autour d'un noyau d'acier dans une carcasse métallique
    legende: L'excitateur, bobine sur noyau d'acier
  - src: ./galerie-10.jpg
    alt: Deux bobines plates gravées sur circuit imprimé doré
    legende: Les bobines gravées sur circuit imprimé
  - src: ./galerie-2.jpg
    alt: Le profilé d'aluminium avec la mécanique d'accordage et la corde, sur l'établi
    legende: Le profilé et sa mécanique, mai 2022
  - src: ./galerie-3.jpg
    alt: La bobine excitatrice montée sous la corde, sur le profilé
    legende: L'excitateur sous la corde
  - src: ./galerie-4.jpg
    alt: Le monocorde dressé à la verticale sur l'établi, fils et pinces crocodile vers l'alimentation
    legende: Le monocorde dressé, juillet 2022
clips:
  - src: /clips/monocorde/entretien-1.mp4
    poster: /clips/monocorde/entretien-1.jpg
    legende: La corde entretenue par la boucle, juillet 2022
  - src: /clips/monocorde/entretien-2.mp4
    poster: /clips/monocorde/entretien-2.jpg
    legende: On pince la corde, la boucle reprend
  - src: /clips/monocorde/banc-2020.mp4
    poster: /clips/monocorde/banc-2020.jpg
    legende: Le premier banc, mars 2020
  - src: /clips/monocorde/bobinage.mp4
    poster: /clips/monocorde/bobinage.jpg
    legende: Bobinage d'une bobine sur la bobineuse, avril 2020
specs:
  - groupe: Instrument
    lignes:
      - label: Corde
        valeur: corde de guitare, mécanique d'accordage récupérée
      - label: Châssis
        valeur: profilé d'aluminium
      - label: Excitateur
        valeur: bobine sur noyau d'acier, puis bobine gravée sur circuit imprimé
      - label: Boucle
        valeur: capteur, amplificateur, excitateur en phase
sources:
  - label: Les bobines et les essais, sur GitHub
    url: https://github.com/patrick-reybaud/monocorde-oscillant
    description: La bobine FreeCAD et son parcours d'usinage, les enregistrements des essais
licence: Fichiers publiés pour qui voudrait reprendre ou adapter.
---

Le monocorde est une corde de guitare tendue sur un profilé d'aluminium, avec une mécanique récupérée pour l'accorder. Sous la corde, un capteur magnétique lit sa vibration ; un amplificateur renvoie ce signal dans un électroaimant, qui relance la corde en phase. La boucle entretient la vibration : la note tient indéfiniment, sans archet ni doigt.

Ce qui m'intéresse, c'est ce qu'on met dans la boucle. Un filtre, un retard, une saturation, et la corde change de caractère : elle part sur une harmonique, oscille entre deux modes, ou s'éteint lentement. C'est un instrument qui se joue autant au fer à souder qu'avec les mains.

## Les bobines

Le premier banc, en mars 2020, utilisait une bobine enroulée à la main sur un noyau d'acier. Pour des bobines régulières, j'ai construit une bobineuse à compte-tours sur un châssis d'imprimante 3D, avec un guide-fil imprimé ; c'est la même machine qui a rebobiné les micros de la [guitare demi-caisse](/projets/guitare-demi-caisse/). Puis j'ai dessiné dans FreeCAD une bobine plate, gravée dans le cuivre d'un circuit imprimé sur la [fraiseuse de l'atelier](/projets/fraiseuse-cnc/), à partir d'un parcours CamBam : plus fine, plus reproductible, et elle se glisse sous la corde sans la toucher.

## Les essais

En 2022, le monocorde a été dressé à la verticale, pour tenir debout sur scène, et les essais d'un excitateur indépendant du capteur ont été enregistrés au MixPre. Le projet est en pause depuis, le temps que Sp3ctra prenne toute la place.
