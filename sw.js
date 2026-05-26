// ============================================================
//  Lineagree Service Worker — v1.0
//  Strategia: Cache-First per asset statici, Network-First per HTML
// ============================================================

const CACHE_NAME = 'lineagree-v1';
const OFFLINE_URL = '/offline.html';

// Asset da pre-cachare all'installazione
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/matches.html',
  '/offline.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  // Aggiungi qui i tuoi CSS/JS/font principali, es:
  // '/css/main.css',
  // '/js/main.js',
];

// ── Install: pre-cacha gli asset essenziali ──────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching assets');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: rimuovi vecchie cache ─────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── Fetch: strategia ibrida ──────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignora richieste non-GET e cross-origin (es. analytics)
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Pagine HTML → Network-First (sempre fresche se online)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Asset statici (CSS, JS, immagini, font) → Cache-First
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        // Cacha solo risposte valide
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      }).catch(() => {
        // Fallback per immagini mancanti
        if (request.destination === 'image') {
          return caches.match('/icons/icon-192x192.png');
        }
      });
    })
  );
});
