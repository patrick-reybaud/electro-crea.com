---
title: Radio-réveil DAB+ sur STM32H747
summary: Un radio-réveil numérique construit autour d'une carte STM32H747I-DISCO et d'un dongle DAB+, dans un boîtier hybride circuit imprimé et bois dessiné dans FreeCAD. En cours.
rubrique: projet
theme: atelier
debut: 2026
statut: en cours
cover: ./cover.jpg
coverAlt: Rendu FreeCAD du radio-réveil, boîtier à façade inclinée, haut-parleur à gauche et écran à droite
galerie:
  - src: ./galerie-1.jpg
    alt: Écorché du boîtier dans FreeCAD, la carte Discovery, l'écran et le haut-parleur en place
    legende: Écorché, la carte Discovery derrière la façade
  - src: ./galerie-2.jpg
    alt: Coupes du boîtier, les panneaux de FR4 soudés en tube et les joues de bois
    legende: Coupes, le tube de FR4 et les joues
  - src: ./galerie-3.jpg
    alt: Le dos du boîtier, la trappe et les connecteurs
    legende: Le dos, qui sert de trappe
  - src: ./galerie-4.jpg
    alt: L'intérieur côté alimentation, dans FreeCAD
    legende: Côté alimentation
  - src: ./galerie-5.jpg
    alt: Aperçu du modèle FreeCAD de la carte STM32H747I-DISCO
    legende: La carte STM32H747I-DISCO, modélisée pour le boîtier
specs:
  - groupe: Matériel
    lignes:
      - label: Carte
        valeur: STM32H747I-DISCO, Cortex-M7 480 MHz + Cortex-M4, écran 4" 800×480 tactile, codec WM8994
      - label: Réception
        valeur: dongle DAB+ USB, le décodage DAB+ (FIC, Reed-Solomon, HE-AAC) est fait sur le STM32
      - label: Boîtier
        valeur: quatre panneaux de FR4 2 mm soudés en tube, deux joues en bois massif, haut-parleur Visaton FRS 8
  - groupe: Fonctions
    lignes:
      - label: Heure
        valeur: reçue du multiplex DAB, recalculée en heure de Paris
      - label: Différé
        valeur: environ 24 minutes en SDRAM, plus sur microSD
      - label: Veille
        valeur: appui court = heure affichée, appui long = tout éteint, réveil par le bouton Wakeup
sources:
  - label: Le projet, sur GitHub
    url: https://github.com/patrick-reybaud/radio-reveil-dab
    description: Firmware STM32, boîtier FreeCAD et macros, plan de conception, outils de test du dongle
licence: Fichiers publiés pour qui voudrait reprendre ou adapter.
---

Un radio-réveil qu'on comprend de bout en bout. Le point de départ est une carte STM32H747I-DISCO, avec son écran tactile de 4 pouces et son codec audio, et un dongle DAB+ USB qui ne fait que la démodulation. Tout le décodage DAB+ se fait sur le STM32 : lecture du canal d'information, correction Reed-Solomon, décodage HE-AAC. L'heure vient du multiplex, le texte défilant et les pochettes aussi, et un tampon en SDRAM permet de mettre la radio en pause.

Le boîtier est dessiné dans FreeCAD, par macro, pour pouvoir le regénérer à chaque changement de cote. Il est hybride : quatre panneaux de circuit imprimé FR4 de 2 mm, commandés chez un fabricant de circuits avec masque noir et sérigraphie blanche, soudés entre eux par l'intérieur sur des bandes de cuivre nu pour former un tube ; deux joues en bois massif ferment les bouts. La carte est tenue par les vis de son écran, à travers la façade inclinée, et le verre affleure. Le dos n'est que vissé : c'est la trappe.

Le projet est en cours. Le firmware et le boîtier sont dans le dépôt.
