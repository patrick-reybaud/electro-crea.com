---
title: Piloter l'obturateur d'un Nikon au miroir cassé
summary: Quand la mécanique du miroir casse, le capteur et l'obturateur sont intacts. En visée directe, on peut se passer du miroir et réutiliser le capteur.
rubrique: projet
theme: photo
debut: 2021
statut: en cours
cover: ./cover.jpg
coverAlt: Un reflex Nikon sans capot ni miroir, une douzaine de sondes d'analyseur logique pincées sur sa carte
galerie:
  - src: ./galerie-1.jpg
    alt: Le boîtier posé sur une carte prototype, nappe et câbles vers l'électronique de commande
    legende: Le boîtier sur sa carte d'essai
  - src: ./galerie-2.jpg
    alt: Les sondes de l'analyseur logique sur le circuit de l'obturateur
    legende: Relevé des signaux de l'obturateur, décembre 2021
---

Quand la mécanique du miroir d'un reflex numérique casse, le boîtier est bon pour la benne alors que le capteur et l'obturateur sont intacts. En visée directe, le miroir est relevé en permanence : on peut s'en passer.

À l'analyseur logique, j'ai relevé les signaux que le boîtier envoie à son obturateur, pour les rejouer depuis un microcontrôleur. Le but : réutiliser ces capteurs Nikon comme caméras de visée directe, obturateur compris.
