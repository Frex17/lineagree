// Retired: the site no longer works offline. Browsers that installed the old worker fetch this, clear its caches and unregister.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then((k) => Promise.all(k.map((n) => caches.delete(n)))).then(() => self.registration.unregister())
));
