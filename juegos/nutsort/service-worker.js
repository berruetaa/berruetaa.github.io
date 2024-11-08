const CACHE_NAME = 'nut-sort-cache-v1';
const urlsToCache = [
    '/juegos/nutsort/',
    '/juegos/nutsort/index.html',
    '/juegos/nutsort/manifest.json',
    '/assets/images/nutsort.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});
