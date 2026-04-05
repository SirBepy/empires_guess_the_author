const CACHE_NAME = "v1";
const ASSETS = [
  "./",
  "./index.html",
  "./src/styles/style.css",
  "./src/scripts/script.js",
  "./src/scripts/build-info.js",
  "./assets/images/favicon.svg",
  "./assets/images/favicon.png",
  "./manifest.json",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
