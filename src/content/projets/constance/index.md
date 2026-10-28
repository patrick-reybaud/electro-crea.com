---
title: Constance, trois lasers qui compensent la rotation de la Terre
summary: J'ai motorisé et commandé le projecteur laser de l'installation de Luce Moreau pour le festival Gamerz, à Aix-en-Provence, en 2013.
rubrique: projet
theme: art
debut: 2013
fin: 2013
statut: terminé
credits: Œuvre de Luce Moreau
cover: ./cover.jpg
coverAlt: Les trois faisceaux, bleu, rouge et vert, partant d'un échafaudage sur le toit de l'école, de nuit
galerie:
  - src: ./galerie-3.jpg
    alt: Modèle 3D du boîtier de projecteur ouvert, avec les sources et les trois faisceaux sur trois axes perpendiculaires
    legende: Modèle 3D du module
  - src: ./galerie-4.jpg
    alt: L'axe de rotation en construction, vis à billes et paliers de laiton, sur l'établi
    legende: L'axe de rotation, vis à billes et paliers, septembre 2013
  - src: ./galerie-6.jpg
    alt: Le projecteur Kvant ouvert, les trois sources laser et leurs miroirs visibles dans le boîtier noir
    legende: Le Kvant Spectrum ouvert, les trois sources et leurs miroirs
  - src: ./galerie-7.jpg
    alt: Deux personnes penchées sur le projecteur laser ouvert, posé au sol
    legende: Réglage des sources avec Luce Moreau
  - src: ./galerie-5.jpg
    alt: Le module monté sur sa table d'essai, dehors, le projecteur incliné sur son axe
    legende: Premier montage dehors, octobre 2013
  - src: ./galerie-8.jpg
    alt: Le projecteur sanglé sur son berceau, à l'extrémité de l'axe motorisé
    legende: Le projecteur sanglé sur son berceau
  - src: ./galerie-9.jpg
    alt: Le berceau et son contrepoids, moteur pas à pas au pied de l'axe
    legende: Le berceau, le moteur et le fin de course
  - src: ./galerie-10.jpg
    alt: Le faisceau vert sortant du boîtier noir, de nuit
    legende: Le faisceau vert, aligné sur l'axe de rotation de la Terre
  - src: ./galerie-1.jpg
    alt: Le module laser sur son échafaudage, faisceau vert fixe, faisceau rouge et éventail bleu dans le ciel
    legende: Réglage des faisceaux, sur le toit
  - src: ./galerie-2.jpg
    alt: Faisceaux rouge, bleu et vert au-dessus d'un bâtiment, depuis le pied de l'échafaudage
    legende: Les trois axes, vus depuis la cour
clips:
  - src: /clips/constance/module.mp4
    poster: /clips/constance/module.jpg
    legende: Le module en rotation sur son axe, essai au sol
  - src: /clips/constance/montage.mp4
    poster: /clips/constance/montage.jpg
    legende: Montage et réglage
specs:
  - groupe: Projecteur
    lignes:
      - label: Modèle
        valeur: Kvant Spectrum 30 W RGB
      - label: Longueurs d'onde
        valeur: 637 et 658 nm (rouge), 532,5 nm (vert), 443 nm (bleu)
      - label: Portée visible
        valeur: plusieurs kilomètres
  - groupe: Motorisation
    lignes:
      - label: Axe
        valeur: le laser vert, aligné sur l'axe de rotation de la Terre
      - label: Commande
        valeur: Arduino, driver de moteur pas à pas, capteur de fin de course
sources:
  - label: Le programme Arduino, sur GitHub
    url: https://github.com/patrick-reybaud/constance-laser-motion
    description: Le croquis de commande du moteur pas à pas, les dessins du module 3 axes et les photos du montage
licence: Fichiers publiés pour qui voudrait reprendre ou adapter.
---

Constance est une horloge à l'échelle du paysage, visible la nuit à plusieurs kilomètres. Trois faisceaux, rouge, vert et bleu, partent d'un même point comme les trois axes d'un repère. Le module tourne lentement pour annuler la rotation de la Terre : l'origine des axes reste fixe dans l'espace, et c'est l'observateur qui bouge.

Ma part : le laser vert reste dans l'axe de rotation de la Terre, pointé vers l'étoile polaire. Un moteur pas à pas fait tourner le module autour de cet axe, par une vis à billes et des paliers de laiton usinés pour l'occasion. Le programme Arduino cherche la butée d'un capteur de fin de course, fait la course lente à vitesse constante, un tour sidéral, puis ramène le module. Le projecteur, un Kvant Spectrum de 30 W, est sanglé sur un berceau en bout d'axe, et ses trois sources ont été réglées une à une, boîtier ouvert, pour que les faisceaux soient perpendiculaires.

L'installation a été construite en septembre et octobre 2013 et montée sur le toit de l'École supérieure d'art d'Aix-en-Provence, pour le festival Gamerz.
