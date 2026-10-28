---
title: Cisynth, les débuts de Sp3ctra
summary: Un scanner qui joue ce qu'il voit. Cisynth est le prototype de 2018 qui est devenu Sp3ctra, l'instrument d'Ondulab.
rubrique: projet
theme: son
debut: 2018
statut: en cours
cover: ./cover.jpg
coverAlt: Une barrette de capteur de scanner allumée en vert, posée sur une vitre au-dessus d'une image, dans les premiers essais de 2018
specs:
  - groupe: Prototype de 2018
    lignes:
      - label: Capteur
        valeur: barrette CIS récupérée dans un scanner à plat, trois couleurs
      - label: Calcul
        valeur: un microcontrôleur lit la barrette, un ordinateur fait la synthèse
      - label: Synthèse
        valeur: additive, un oscillateur par pixel, l'image devient un spectre
sources:
  - label: Ondulab, la suite du projet
    url: https://ondulab.com
    description: L'instrument Sp3ctra, son histoire et ses concerts
---

L'idée tient en une phrase : une barrette de capteur de scanner lit une image en continu, et chaque ligne lue devient un spectre sonore. Le capteur d'un scanner à plat, une barrette CIS, voit une ligne de quelques milliers de pixels. Si on associe à chaque pixel un oscillateur, dont la fréquence dépend de la position et l'amplitude de la lumière reçue, l'image qu'on fait défiler devant la barrette se transforme en son. Un dessin devient une partition, un objet un timbre, la main qui passe un geste musical.

Les premiers essais, en 2018, tenaient dans une boîte en carton avec une vitre, une barrette CIS récupérée dans un scanner, un microcontrôleur pour la lire et beaucoup de ruban adhésif. Le plus dur était de lire la barrette assez vite : plusieurs milliers de pixels, plusieurs centaines de fois par seconde, puis de calculer autant d'oscillateurs sans que le son ne décroche. Deux vidéos de 2018, CISYNTH #1 et #2, montrent ces essais, le capteur posé sur des images imprimées et le son qui en sort.

Depuis, le projet a changé de nom et d'échelle. Il s'appelle Sp3ctra, il a son propre capteur, son propre matériel et son propre logiciel, et il est porté par Ondulab avec Réso-nance. Il a été lauréat Universcience 2025 et exposé à la Cité des sciences. Cette fiche s'arrête aux origines ; la suite est sur ondulab.com.
