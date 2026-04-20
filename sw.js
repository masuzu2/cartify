// Cartify Service Worker — v3
// Strategy:
//   - HTML / CSS / JS  → network-first  (updates apply immediately)
//   - Images / fonts   → cache-first    (fast repeat loads)
//   - On activate: wipe ALL old caches so stale dark-mode CSS can't survive

const VERSION = 'cartify-v3';
const STATIC_CACHE = `${VERSION}-static`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const PRECACHE = [
    './logo-color.png',
    './logo-white.png',
    './logo-black.png',
    './manifest.json'
];

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(caches.open(STATIC_CACHE).then(c => c.addAll(PRECACHE).catch(() => {})));
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys
                .filter(k => k !== STATIC_CACHE && k !== RUNTIME_CACHE)
                .map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

function isAsset(req, dest) {
    return dest === 'image' || dest === 'font' || /\.(png|jpg|jpeg|webp|svg|gif|woff2?|ttf)(\?|$)/i.test(req.url);
}

self.addEventListener('fetch', e => {
    const req = e.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    // Skip cross-origin POSTs / API calls entirely
    if (url.origin !== location.origin && !/cdn\.jsdelivr|fonts\.googleapis|fonts\.gstatic|unpkg/.test(url.host)) return;

    // Cache-first for images / fonts
    if (isAsset(req, req.destination)) {
        e.respondWith(
            caches.match(req).then(cached => cached || fetch(req).then(resp => {
                if (resp && resp.ok && resp.type !== 'opaque') {
                    const clone = resp.clone();
                    caches.open(STATIC_CACHE).then(c => c.put(req, clone).catch(() => {}));
                }
                return resp;
            }).catch(() => cached || new Response('', { status: 404 })))
        );
        return;
    }

    // Network-first for HTML / CSS / JS — so dark-mode updates apply instantly
    e.respondWith(
        fetch(req).then(resp => {
            if (resp && resp.status === 200 && resp.type !== 'opaque') {
                const clone = resp.clone();
                caches.open(RUNTIME_CACHE).then(c => c.put(req, clone).catch(() => {}));
            }
            return resp;
        }).catch(() => caches.match(req))
    );
});

// Allow page to force immediate cache wipe
self.addEventListener('message', e => {
    if (e.data === 'SKIP_WAITING') self.skipWaiting();
    if (e.data === 'PURGE_CACHES') {
        caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
    }
});
