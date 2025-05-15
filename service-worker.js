self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sky-tap-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        'https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});