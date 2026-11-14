const CACHE_VERSION = 'v1';
const SHELL_CACHE = `scholargrid-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `scholargrid-runtime-${CACHE_VERSION}`;
const VALID_CACHES = new Set([SHELL_CACHE, RUNTIME_CACHE]);

const APP_SHELL = [
  './',
  './index.html',
  './resource.html',
  './styles/main.css',
  './scripts/data.js',
  './scripts/resources.generated.js',
  './scripts/tools-data.js',
  './scripts/tools.js',
  './scripts/app.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !VALID_CACHES.has(key))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

function isHtmlRequest(request, url) {
  const accept = request.headers.get('accept') || '';
  return (
    request.mode === 'navigate' ||
    accept.includes('text/html') ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('/')
  );
}

async function networkFirstHtml(request) {
  const cache = await caches.open(SHELL_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached =
      (await caches.match(request, { ignoreSearch: true })) ||
      (await caches.match('./index.html'));
    if (cached) return cached;
    return new Response('Offline — please reconnect to load this page.', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    return cached;
  }

  const networkResponse = await networkPromise;
  if (networkResponse) {
    return networkResponse;
  }

  return new Response('Offline — resource not cached yet.', {
    status: 504,
    statusText: 'Gateway Timeout',
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (isHtmlRequest(request, url)) {
    event.respondWith(networkFirstHtml(request));
    return;
  }

  const isPdf =
    url.pathname.includes('/UPLOADS_PDFS_ALL/') ||
    url.pathname.toLowerCase().endsWith('.pdf');

  event.respondWith(
    staleWhileRevalidate(request, isPdf ? RUNTIME_CACHE : SHELL_CACHE)
  );
});
