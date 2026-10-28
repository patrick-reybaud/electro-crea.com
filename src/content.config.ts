import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

// Saisies venant de /admin : « a@b.com » devient un lien mailto:, « site.fr » reçoit https://.
const lien = z
  .string()
  .trim()
  .transform((v) => (/^[a-z][a-z0-9+.-]*:/i.test(v) ? v : v.includes('@') ? `mailto:${v}` : `https://${v}`))
  .pipe(z.url());

// Un champ image laissé vide dans /admin est enregistré comme '' : on le traite comme absent.
const vide = (v: unknown) => (v === '' || v === null ? undefined : v);

export const RUBRIQUES = {
  projet: { label: 'Projets', url: '/projets/' },
  reparation: { label: 'Réparations', url: '/reparations/' },
  archive: { label: 'Archives', url: '/archives/' },
} as const;

export const THEMES = {
  son: { label: 'Instruments et son', ligne: 'Ce que je construis ou transforme pour faire de la musique.' },
  art: { label: 'Art et installations', ligne: "La technique au service d'une œuvre, avec son artiste." },
  vol: { label: 'Radiocommande et vol', ligne: 'Quadricoptère, récepteurs et émetteurs détournés.' },
  photo: { label: 'Image et photo', ligne: 'Reflex, objectifs et chambre grand format, démontés et remis en service.' },
  atelier: { label: 'Atelier et mesure', ligne: "Les machines de l'atelier et les capteurs qu'on fabrique pour elles." },
  maison: { label: 'Maison', ligne: 'Les appareils de la maison, ouverts plutôt que jetés.' },
} as const;

// Une fiche = un dossier src/content/projets/<slug>/ contenant index.md et ses images.
// `rubrique` décide de la page où elle apparaît (projets, carnet de réparations, archives) ;
// `theme` la classe sur la page Projets.
const projets = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projets', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      rubrique: z.enum(['projet', 'reparation', 'archive']).default('projet'),
      theme: z.enum(['son', 'art', 'vol', 'photo', 'atelier', 'maison']),
      debut: z.number().int(),
      fin: z.number().int().optional(),
      statut: z.enum(['en cours', 'terminé', 'en pause', 'abandonné', 'régulier']).default('terminé'),
      cover: z.preprocess(vide, image().optional()),
      coverAlt: z.string().optional(),
      galerie: z
        .array(z.object({ src: image(), alt: z.string(), legende: z.string().optional() }))
        .default([]),
      videos: z.array(z.object({ url: lien, titre: z.string().optional() })).default([]),
      // Vidéos courtes hébergées sur le site (fichiers MP4 dans public/clips/<slug>/), lues sans YouTube.
      clips: z
        .array(z.object({ src: z.string(), poster: z.string().optional(), legende: z.string().optional() }))
        .default([]),
      specs: z
        .array(z.object({ groupe: z.string(), lignes: z.array(z.object({ label: z.string(), valeur: z.string() })) }))
        .default([]),
      // Réparations : le résumé en quatre lignes, affiché avant le récit.
      fiche: z
        .object({
          panne: z.string().optional(),
          cause: z.string().optional(),
          solution: z.string().optional(),
          evite: z.string().optional(),
        })
        .optional(),
      avertissement: z.string().optional(),
      sources: z
        .array(z.object({ label: z.string(), url: lien, description: z.string().optional() }))
        .default([]),
      licence: z.string().optional(),
      credits: z.string().optional(),
      aLaUne: z.boolean().default(false),
      ordre: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

// Carnet : une ligne par réparation sans fiche (la panne et la solution tiennent en une phrase).
// Le fichier peut être une liste, ou un objet { lignes: [...] } (forme écrite par /admin).
// L'id est déduit si absent, pour que l'interface d'édition n'ait pas à le demander.
const carnet = defineCollection({
  loader: file('src/data/carnet.yaml', {
    parser: (text) => {
      const doc = parseYaml(text);
      const lignes: Record<string, unknown>[] = Array.isArray(doc) ? doc : (doc?.lignes ?? []);
      return lignes.map((l, i) => ({ ...l, id: String(l.id ?? `${l.tri}-${i}`) }));
    },
  }),
  schema: z.object({
    date: z.string(),
    tri: z.number(),
    appareil: z.string(),
    resultat: z.string(),
    projet: z.string().optional(),
  }),
});

// Réglages du site : contact, autres sites, mentions légales.
const reglages = defineCollection({
  loader: file('src/data/reglages.yaml'),
  schema: z.object({
    nom: z.string(),
    email: z.string(),
    lieu: z.string(),
    accroche: z.string(),
    directeurPublication: z.string(),
    autresSites: z.array(z.object({ nom: z.string(), url: lien, description: z.string().optional() })),
    github: z.preprocess(vide, lien.optional()),
  }),
});

export const collections = { projets, carnet, reglages };
