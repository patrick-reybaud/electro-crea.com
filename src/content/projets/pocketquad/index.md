---
title: PocketQuad et télécommande DSM2
summary: Un mini-quadricoptère passé sous un micrologiciel libre, puis piloté depuis un Arduino branché sur le module radio d'une télécommande.
rubrique: projet
theme: vol
debut: 2013
fin: 2013
statut: terminé
cover: ./cover.jpg
coverAlt: Le Pocket Quad en vol stationnaire au-dessus d'un ordinateur portable, sur l'établi
galerie:
  - src: ./galerie-1.jpg
    alt: Le quadricoptère et ses protections d'hélices, vu de dessus en vol au-dessus d'une moquette
    legende: En vol, vu de dessus
clips:
  - src: /clips/pocketquad/vol-2013.mp4
    poster: /clips/pocketquad/vol-2013.jpg
    legende: Premiers vols, juillet 2013
  - src: /clips/pocketquad/vol-2021.mp4
    poster: /clips/pocketquad/vol-2021.jpg
    legende: Ressorti du tiroir en 2021, il vole encore
specs:
  - groupe: Quadricoptère
    lignes:
      - label: Appareil
        valeur: HobbyKing Pocket Quad
      - label: Contrôleur
        valeur: ATmega32U4, programmé comme un Arduino Leonardo
      - label: Logiciel
        valeur: MultiWii 2.2, géométrie en X
      - label: Radio
        valeur: récepteur satellite Spektrum, DSM2
  - groupe: Télécommande
    lignes:
      - label: Émetteur
        valeur: module radio d'un MLP4DSM, piloté en série par un Arduino
      - label: Bibliothèque
        valeur: dsm2_tx d'Erik Elmore
      - label: Outils
        valeur: Eclipse, MultiWiiConf
sources:
  - label: Les croquis, sur GitHub
    url: https://github.com/patrick-reybaud/pocketquad-dsm2
    description: Appairage du récepteur, balayage des voies depuis l'Arduino, schéma d'alimentation KiCad, configuration MultiWii
licence: Fichiers publiés pour qui voudrait reprendre ou adapter.
---

Le Pocket Quad de HobbyKing a un contrôleur ATmega32U4, le même qu'un Arduino Leonardo. Je l'ai passé sous MultiWii, configuré en X avec un récepteur satellite Spektrum, compilé dans Eclipse et réglé avec MultiWiiConf. La carte ne peut pas couper le récepteur, donc l'appairage prévu par MultiWii ne marche pas : un petit programme d'un autre utilisateur du Pocket Quad envoie les impulsions d'appairage au démarrage.

Ensuite, la télécommande. Un émetteur MLP4DSM de récupération contient un module radio DSM2 qu'on peut piloter en série. Avec la bibliothèque dsm2_tx d'Erik Elmore, un Arduino appaire le module puis envoie les six voies. Mon programme balaie chaque voie l'une après l'autre, pour vérifier la chaîne complète sans toucher un manche.
