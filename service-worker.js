const CACHE_NAME = 'audio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/audios/es/1.mp3', 
  '/audios/es/2.mp3',
    '/audios/es/3.mp3',
    '/audios/es/4.mp3',
    '/audios/es/5.mp3',
    '/audios/es/6.mp3',
    '/audios/es/7.mp3',
    '/audios/es/8.mp3',
     '/audios/dd/1.mp3', 
    '/audios/dd/2.mp3',
    '/audios/dd/3.mp3',
    '/audios/dd/4.mp3',
    '/audios/dd/5.mp3',
    '/audios/dd/6.mp3',
    '/audios/dd/7.mp3',
    '/audios/dd/8.mp3',
    '/imagenes/1.jpg',
    '/imagenes/2.jpg',
    '/imagenes/3.jpg',  
    '/imagenes/4.jpg',
    '/imagenes/5.jpg',
    '/imagenes/6.jpg',
    '/imagenes/7.jpg',
    '/imagenes/8.jpg'
];

// Instalar y almacenar en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos cacheados');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones y servir desde la caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve el archivo de la caché si existe, si no, pide a la red
        return response || fetch(event.request);
      })
  );
});
