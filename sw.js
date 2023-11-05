(function() {
var CACHE_VERSION = 20231002.39;
var CURRENT_CACHES = {
  prefetch: 'haribol-v' + CACHE_VERSION
};

  var urlsToPrefetch = [
'./',
'./fonts/noto-serif-latin-400-italic.woff2',
'./fonts/noto-serif-latin-400-normal.woff2',
'./fonts/noto-serif-latin-600-normal.woff2',
'./img/favicon.png',
'./img/yasoda_damodar.jpg',
'./img/android-startup.png',
'./img/apple-touch-icon.png',
'./img/apple-touch-startup-image.png'
  ];

self.addEventListener('install', function(event) {
  var now = Date.now();
  console.log('Handling install event. Resources to prefetch:', urlsToPrefetch);

// event.waitUntil(
//   caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
//     var cachePromises = urlsToPrefetch.map(function(urlToPrefetch) {
//       var url = new URL(urlToPrefetch, location.href);
//       url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;
//       var request = new Request(url, {mode: 'cors'});
//       return fetch(request).then(function(response) {
//         if (response.status >= 400) {
//           throw new Error('request for ' + urlToPrefetch +
//             ' failed with status ' + response.statusText);
//         }
//         return cache.put(urlToPrefetch, response);
//       }).catch(function(error) {
//         console.error('Not caching ' + urlToPrefetch + ' due to ' + error);
//       });
//     });
//
//     return Promise.all(cachePromises).then(function() {
//       console.log('Pre-fetching complete.');
//     });
//   }).catch(function(error) {
//     console.error('Pre-fetching failed:', error);
//   })
// );
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

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


//importScripts('https://solutionbox.hr/wp-content/uploads/elements/sw-offline-google-analytics.js');
//goog.offlineGoogleAnalytics.initialize();

self.addEventListener('fetch', function(event) {
  //console.log('Handling fetch event for', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        //console.log('Found response in cache:', response);
        return response;
      }
      console.log('No response found in cache. About to fetch from network...');
      return fetch(event.request).then(function(response) {
        //console.log('Response from network is:', response);
        return response;
      }).catch(function(error) {
        console.error('Fetching failed:', error);
        throw error;
      });
    })
  );
});

})();
