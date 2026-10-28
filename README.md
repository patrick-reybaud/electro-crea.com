# electro-crea.com

Site personnel de Patrick Reybaud : projets, réparations et archives. Site statique généré par
[Astro](https://astro.build), sur le même modèle que pacabot.com : le contenu est dans des fichiers Markdown et YAML,
le build produit du HTML pur publié sur l'hébergement OVH. Aucune base de données, aucun code exécuté sur le serveur.

## Où est le contenu

| Contenu | Emplacement |
|---|---|
| Fiches (projets, réparations, archives) | `src/content/projets/<slug>/index.md` + images dans le même dossier |
| Lignes du carnet sans fiche | `src/data/carnet.yaml` |
| Contact, autres sites | `src/data/reglages.yaml` |
| Page À propos | `src/pages/a-propos.astro` (texte et repères dans le fichier) |

Le format de chaque champ est défini dans `src/content.config.ts` ; le build échoue avec un message clair si un fichier
ne le respecte pas.

Une fiche a une `rubrique` (`projet`, `reparation`, `archive`) qui décide de la page où elle apparaît et de son adresse
(`/projets/<slug>/`, `/reparations/<slug>/`, `/archives/<slug>/`), et un `theme` (`son`, `art`, `vol`, `photo`,
`atelier`, `maison`) qui la classe sur la page Projets. `aLaUne: true` la met sur l'accueil (les trois plus récentes).
Pour une réparation, le bloc `fiche` (panne, cause, solution, evite) s'affiche en tête ; `avertissement` ajoute un
encadré.

`draft: true` garde une fiche en brouillon : visible avec `npm run dev`, absente du site publié.

## Éditer

```sh
npm install
npm run dev        # http://localhost:4321, rechargement à chaque modification
npm run build      # produit dist/
```

**Depuis le navigateur** : `https://electro-crea.com/admin/` (Sveltia CMS), une fois le dépôt GitHub créé et renseigné
dans `public/admin/config.yml` (`backend.repo`). En local, `http://localhost:4321/admin/index.html`, bouton « Travailler
avec un dépôt local » dans Chrome ou Edge.

### Ajouter une fiche

1. Créer `src/content/projets/ma-fiche/` (minuscules, tirets, sans accents).
2. Y déposer les photos (JPEG, 1800 px de large suffisent : le site génère lui-même les tailles nécessaires).
3. Créer `index.md` en partant d'une fiche existante, avec `draft: true`.
4. Vérifier avec `npm run dev`, puis passer `draft: false`.

## Publier

Le site est servi depuis un dossier dédié de l'hébergement OVH (multisite), distinct de `www/` qui sert ondulab.com
et de `pacabot/` qui sert pacabot.com.

- **Automatique** : chaque push sur `main` lance `.github/workflows/deploy.yml` (build puis envoi SFTP). Secrets du
  dépôt : `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`, `FTP_REMOTE_DIR` (= `electro-crea`).
- **À la main** : copier `.env.deploy.example` en `.env.deploy`, le compléter, puis `scripts/deploy_ovh.sh`
  (`--dry-run` pour voir ce qui serait envoyé).

Le script refuse de viser `www/` ou la racine de l'hébergement, car il supprime sur le serveur les fichiers absents
du build.

## Mise en service (une seule fois)

1. Créer le dépôt GitHub et y pousser ce dossier.
2. Dans l'espace client OVH : Hébergement → Multisite → ajouter `electro-crea.com` et `www.electro-crea.com`, dossier
   racine `electro-crea`, SSL activé.
3. Faire pointer le DNS de electro-crea.com (déjà chez OVH) vers l'hébergement.
4. Renseigner les secrets FTP du dépôt et lancer le workflow « Publier sur OVH ».
