// 離線 / Lets the game open without a connection once it has been visited.
//
// Pages: network first, so a new version shows up as soon as there is one.
// Everything else (scripts named by content, the face models): the copy
// already kept, fetched once. Only this site's own files pass through here;
// the family's photos are not files on the site and are never cached by it.
const CACHE = 'face-game-v2';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  // The home server's photos and their list are never kept here.
  if (/\/(api|photos)\//.test(url.pathname)) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (req.mode === 'navigate') {
      try {
        const res = await fetch(req);
        if (res.ok) await cache.put(req, res.clone());
        return res;
      } catch {
        return (await cache.match(req)) ?? (await cache.match('./')) ?? Response.error();
      }
    }
    const hit = await cache.match(req);
    if (hit) return hit;
    const res = await fetch(req);
    if (res.ok) await cache.put(req, res.clone());
    return res;
  })());
});
