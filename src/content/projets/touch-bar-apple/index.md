---
title: Rétro-ingénierie de la Touch Bar Apple
summary: L'écran OLED tactile des MacBook Pro, démonté, écouté à l'analyseur logique et relu octet par octet, pour le réutiliser comme afficheur dans un instrument.
rubrique: projet
theme: atelier
debut: 2026
statut: en cours
specs:
  - groupe: Dalle
    lignes:
      - label: Origine
        valeur: Touch Bar des MacBook Pro A1706, A1707 et A2141
      - label: Affichage
        valeur: OLED 2170×60, interface MIPI DSI
      - label: Tactile
        valeur: contrôleur capacitif, lu en SPI
      - label: Flash de démarrage
        valeur: Zetta ZD25WQ80B, 1 Mo, 1,8 V, en QSPI
  - groupe: Outils
    lignes:
      - label: Lecture de la flash
        valeur: NUCLEO-H743ZI en QUADSPI, programme maison, liaison série à 2 Mbaud, vérification CRC32
      - label: Écoute des bus
        valeur: analyseur logique Saleae, décodeur QSPI
      - label: Documentation
        valeur: schémas des cartes mères, fiche du FlexBar
---

La Touch Bar des MacBook Pro de 2016 à 2020 est une petite merveille qu'on jette avec la machine : une dalle OLED de 2170 par 60 pixels, tactile, très lumineuse, avec son contrôleur et sa flash de démarrage sur un circuit souple. Je voulais la réutiliser comme afficheur du capteur de Sp3ctra, l'instrument d'Ondulab. Encore fallait-il savoir lui parler.

## Côté visuel

La dalle est pilotée en MIPI DSI par un contrôleur qui, au démarrage, lit sa configuration dans une flash QSPI de 1 Mo. Cette flash est la clé : elle contient la séquence d'initialisation de l'OLED, la configuration DSI et la table de gamma. Pour la lire sans la dessouder, j'ai écrit un programme pour une carte NUCLEO-H743ZI qui pilote la flash en QUADSPI, avec un petit outil interactif sur la liaison série : identification JEDEC, lecture, vidage complet, écriture et vérification. Trois lectures successives donnent le même condensé MD5 ; le contenu est à 99,8 % vide, et tout ce qui compte tient dans quelques kilo-octets, décodés et annotés.

Le reste se lit à l'analyseur logique : la séquence QSPI au démarrage, puis les trames DSI. Les schémas des cartes mères donnent le brochage du connecteur et les tensions, toutes en 1,8 V.

## Côté tactile

Le contrôleur tactile dialogue en SPI avec le Mac. Un renifleur branché sur le bus, pendant qu'on pose les doigts, donne le format des trames : position, nombre de doigts, pression. De quoi écrire un pilote pour un STM32H7.

## Et ensuite

La dalle est intégrée au nouveau capteur de Sp3ctra, avec sa propre flash de démarrage recopiée à l'identique et un port de programmation prévu sur la carte pour la reprogrammer en place, derrière un traducteur de niveaux, parce qu'un microcontrôleur en 3,3 V détruirait une flash en 1,8 V. Le dépôt des outils de lecture et des analyses reste privé pour l'instant, le temps de trier ce qui appartient à Apple de ce qui m'appartient. Les outils génériques, lecteur de flash QSPI et décodeur, seront publiés à part.
