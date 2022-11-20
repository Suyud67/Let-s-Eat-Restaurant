import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

// save asset to cache
const assetsToCache = ['./', './icons/icon1.webp', './icons/icon2.webp', './icons/icon3.webp', './images/heros/hero-image_2.webp', './index.html', './app.bundle.js', './app.webmanifest', './sw.bundle.js', './icon-app.webp'];

self.addEventListener('install', (event) => {
  // TODO: Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
