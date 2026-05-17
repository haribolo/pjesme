(function() {
var CACHE_VERSION = 3.387;
var CURRENT_CACHES = {
  prefetch: 'haribol-v' + CACHE_VERSION
};

  var urlsToPrefetch = [
'./',
'./jquery.min.js',
'./fonts/noto-serif-latin-400-italic.woff2',
'./fonts/noto-serif-latin-400-normal.woff2',
'./fonts/noto-serif-latin-600-normal.woff2',
'./img/favicon.png',
'./dist/NoSleep.min.js',
'./img/yasoda_damodar.jpg',
'./img/android-startup.png',
'./img/apple-touch-icon.png',
'./img/apple-touch-startup-image.png',
'./img/screen1n.jpg',
'./img/screen1w.jpg',
'./img/screen2w.jpg'
  ];

self.addEventListener('install', function(event) {
  var now = Date.now();
  console.log('Handling install event. Resources to prefetch:', urlsToPrefetch);

event.waitUntil(
    caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
      var cachePromises = urlsToPrefetch.map(function(urlToPrefetch) {
        var url = new URL(urlToPrefetch, location.href);
        url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;
        var request = new Request(url, {mode: 'cors'});
        return fetch(request).then(function(response) {
          if (response.status >= 400) {
            throw new Error('request for ' + urlToPrefetch +
              ' failed with status ' + response.statusText);
          }
          return cache.put(urlToPrefetch, response);
        }).catch(function(error) {
          console.error('Not caching ' + urlToPrefetch + ' due to ' + error);
        });
      });

      return Promise.all(cachePromises).then(function() {
        console.log('Pre-fetching complete.');
        // skipWaiting of manual reload - toast notify @hand
        if (self.skipWaiting) { // wrapping in an if while Chrome 40 is still around
        self.skipWaiting();
	}
      });
    }).catch(function(error) {
      console.error('Pre-fetching failed:', error);
    })
	)
});
