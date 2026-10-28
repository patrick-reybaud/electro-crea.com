import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { RUBRIQUES, THEMES } from '../content.config';

export type Projet = CollectionEntry<'projets'>;
export type Rubrique = keyof typeof RUBRIQUES;
export type Theme = keyof typeof THEMES;

// Les brouillons s'affichent en local (npm run dev) mais jamais dans le site publié.
const visible = (draft: boolean) => import.meta.env.DEV || !draft;

// Du plus récent au plus ancien, `ordre` d'abord.
const parDate = (a: Projet, b: Projet) =>
  a.data.ordre - b.data.ordre || (b.data.fin ?? b.data.debut) - (a.data.fin ?? a.data.debut) || b.data.debut - a.data.debut;

export async function getProjets(rubrique?: Rubrique): Promise<Projet[]> {
  const all = await getCollection('projets', ({ data }) => visible(data.draft) && (!rubrique || data.rubrique === rubrique));
  return all.sort(parDate);
}

export async function getALaUne(n = 3): Promise<Projet[]> {
  const all = await getCollection('projets', ({ data }) => visible(data.draft) && data.aLaUne);
  return all.sort(parDate).slice(0, n);
}

export async function getCarnet() {
  const all = await getCollection('carnet');
  return all.sort((a, b) => b.data.tri - a.data.tri);
}

export async function getReglages() {
  const entry = await getEntry('reglages', 'site');
  if (!entry) throw new Error('src/data/reglages.yaml : entrée « site » manquante');
  return entry.data;
}

export function periode(p: Projet['data']): string {
  if (p.statut === 'régulier' && !p.fin) return `Depuis ${p.debut}`;
  if (p.statut === 'en cours' && !p.fin) return `Depuis ${p.debut}`;
  if (!p.fin || p.fin === p.debut) return String(p.debut);
  return `${p.debut}–${p.fin}`;
}

export function slugUrl(p: Projet) {
  return `${RUBRIQUES[p.data.rubrique].url}${p.id}/`;
}

export function themeLabel(t: Theme) {
  return THEMES[t].label;
}
