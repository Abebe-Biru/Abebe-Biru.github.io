// service-worker.js

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('encrypt-decrypt-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/icon-192x192.png',
                '/icon-512x512.png',
                '/styles.css',
                '/script.js'
                // Add other static assets as needed
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
