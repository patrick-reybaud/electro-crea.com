---
title: Batterie d'aspirateur Dyson V15
summary: Bloquée par son propre logiciel, débloquée par un firmware libre. Sept cellules en bonne santé qui allaient à la poubelle.
rubrique: reparation
theme: maison
debut: 2026
fin: 2026
statut: terminé
aLaUne: true
ordre: 5
cover: ./cover.jpg
coverAlt: La batterie ouverte, sa carte de gestion reliée à une sonde de programmation, l'aspirateur posé à côté
galerie:
  - src: ./galerie-1.jpg
    alt: L'aspirateur posé sur son bloc de cellules ouvert, la sonde branchée
    legende: Les sept cellules et la carte de gestion
  - src: ./galerie-2.jpg
    alt: La sonde Black Magic Probe reliée aux pastilles SWD de la carte
    legende: Flashage en SWD
specs:
  - groupe: Carte de gestion
    lignes:
      - label: Microcontrôleur
        valeur: ATSAMD20E15
      - label: Mesure des cellules
        valeur: BQ76930
      - label: Firmware
        valeur: V11_Dyson_BMS, libre
      - label: Sonde
        valeur: Black Magic Probe, SWD
fiche:
  panne: L'aspirateur refusait de démarrer. La batterie se déclarait morte.
  cause: La carte de gestion avait verrouillé le pack à cause du déséquilibre d'une cellule. À l'intérieur, sept cellules à plus de 4 V chacune, en parfait état.
  solution: Un firmware libre flashé en SWD sur le microcontrôleur de la carte, après vérification du brochage. 28,3 V au premier démarrage.
  evite: Une batterie neuve à 80 €. La carte, quelques euros de silicium.
avertissement: La carte reste sous tension boîtier ouvert et les cellules lithium ne pardonnent pas. Le flashage efface le firmware d'origine, sans retour possible. À ne faire qu'en connaissant les risques.
sources:
  - label: V11_Dyson_BMS
    url: https://github.com/vladislav1983/V11_Dyson_BMS
    description: Le firmware libre, pour la famille de cartes à ATSAMD20
---

L'aspirateur refusait de démarrer : la batterie se déclarait morte. À l'intérieur, sept cellules à plus de 4 V chacune, en parfait état. C'est la carte de gestion qui avait verrouillé le pack, pour le déséquilibre d'une cellule. Une batterie neuve coûte 80 € ; la carte, quelques euros de silicium.

La carte utilise un microcontrôleur courant, un ATSAMD20, et un circuit de mesure standard, un BQ76930. Un firmware libre existe pour cette famille : V11_Dyson_BMS. Je l'ai flashé en SWD avec une sonde Black Magic Probe, après avoir vérifié le brochage sur la carte. L'opération efface le firmware d'origine, sans retour possible.

J'y ai ajouté deux choses : un double appui sur la gâchette qui verrouille le moteur en marche, et une surveillance de l'équilibrage qui signale une cellule qui se vide plus vite que les autres, avant qu'elle ne condamne le pack.

Résultat : 28,3 V au premier démarrage, un aspirateur qui repart.
