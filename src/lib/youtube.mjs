// Vidéos YouTube : reconnaissance des liens et lecteur « à la demande ».
// Tant qu'on ne clique pas, la page n'affiche qu'une vignette : aucun cookie ni script YouTube.
// Au clic, le lecteur youtube-nocookie.com remplace la vignette (script dans Base.astro).

const ID = /^[\w-]{11}$/;

/** Renvoie { id, start } pour un lien YouTube, sinon null. */
export function parseYouTube(url) {
  let u;
  try {
    u = new URL(url.trim());
  } catch {
    return null;
  }
  const host = u.hostname.replace(/^(www\.|m\.)/, '');
  let id = null;
  if (host === 'youtu.be') id = u.pathname.slice(1);
  else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    if (u.pathname === '/watch') id = u.searchParams.get('v');
    else id = u.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]{11})/)?.[1] ?? null;
  }
  if (!id || !ID.test(id)) return null;
  const t = u.searchParams.get('t') ?? u.searchParams.get('start');
  const start = t ? parseInt(t, 10) || 0 : 0;
  return { id, start };
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

/** HTML du lecteur. Sans JavaScript, la vignette reste un simple lien vers YouTube. */
export function youTubeHtml({ id, start = 0 }, titre = 'Vidéo') {
  const watch = `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ''}`;
  return (
    `<figure class="video">` +
    `<a class="video-play" href="${watch}" data-yt="${id}" data-start="${start}" data-title="${esc(titre)}">` +
    `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy" decoding="async">` +
    `<span class="video-btn" aria-hidden="true"></span>` +
    `<span class="visually-hidden">Lire la vidéo : ${esc(titre)}</span>` +
    `</a>` +
    (titre && titre !== 'Vidéo' ? `<figcaption>${esc(titre)}</figcaption>` : '') +
    `</figure>`
  );
}

/** Plugin Sätteri (moteur Markdown d'Astro 7) : un lien YouTube seul sur sa ligne devient un lecteur. */
export const youTubePlugin = {
  name: 'youtube',
  paragraph(node) {
    if (node.children.length !== 1) return;
    const only = node.children[0];
    const url = only.type === 'link' ? only.url : only.type === 'text' ? only.value.trim() : null;
    const label = only.type === 'link' ? (only.children ?? []).map((c) => c.value ?? '').join('').trim() : '';
    const yt = url && parseYouTube(url);
    if (!yt) return;
    return { raw: youTubeHtml(yt, label && label !== url ? label : 'Vidéo'), mdxExpressions: false };
  },
};
