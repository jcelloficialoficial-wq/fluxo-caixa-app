const CACHE_NAME = 'fluxo-caixa-v2';
const urlsToCache = [
  '/', '/index.html', '/manifest.json', '/icon-192.png', '/icon-512.png',
  'https://cdn.tailwindcss.com', 'https://esm.sh/react@18.2.0', 'https://esm.sh/react-dom@18.2.0/client'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado!');
});
