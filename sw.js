// TENSE AF — Service Worker
// Caches all local assets for offline classroom use.
// Strategy: cache-first for local files, network-first for fonts (Google CDN).

const CACHE = 'tense-af-v1';

const ASSETS = [
  '/',
  '/index.html',
  '/tense-af-tiers.js',
  '/tense-af-data-foundation.js',
  '/tense-af-data-intermediate.js',
  '/tense-af-data-advanced.js',
  '/tense-af-data-node3.js',
  '/tense-af-data-conditionals.js',
  '/tense-af-data-narrative.js',
  '/tense-af-data-passive.js',
  '/tense-af-data-agency.js',
  '/tense-af-data-power.js',
  '/tense-af-data-future.js',
  '/tense-af-data-reported.js',
  '/tense-af-data-wish.js',
  '/tense-af-semantic.js',
  '/tense-af-state.js',
  '/tense-af-cognitive-state.js',
  '/tense-af-input-layer.js',
  '/tense-af-mode.js',
  '/tense-af-groove.js',
  '/tense-af-bass.js',
  '/tense-af-audio.js',
  '/tense-af-patch.js',
  '/tense-af-ui.js',
  '/tense-af-transport.js',
  '/tense-af-multiplayer.js',
  '/tense-af-visual.js',
];

// Install — cache all local assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch — cache-first for local assets, network-only for external
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // External (fonts, CDN) — network only, no caching
  if (url.origin !== self.location.origin) return;
  // Local — cache first, fall back to network
  e.respondWith(
    caches.match(e.request)
      .then(cached => cached || fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
      )
  );
});
