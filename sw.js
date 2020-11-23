(function() {
var CACHE_VERSION = 20201121.9;
var CURRENT_CACHES = {
  prefetch: 'haribol-v' + CACHE_VERSION
};

  var urlsToPrefetch = [
'./',
'./img/favicon.png',
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
        // This constructs a new URL object using the service worker's script location as the base
        // for relative URLs.
        var url = new URL(urlToPrefetch, location.href);
        // Append a cache-bust=TIMESTAMP URL parameter to each URL's query string.
        // This is particularly important when precaching resources that are later used in the
        // fetch handler as responses directly, without consulting the network (i.e. cache-first).
        // If we were to get back a response from the HTTP browser cache for this precaching request
        // then that stale response would be used indefinitely, or at least until the next time
        // the service worker script changes triggering the install flow.
        url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;

        // It's very important to use {mode: 'no-cors'} if there is any chance that
        // the resources being fetched are served off of a server that doesn't support
        // CORS (http://en.wikipedia.org/wiki/Cross-origin_resource_sharing).
        // In this example, www.chromium.org doesn't support CORS, and the fetch()
        // would fail if the default mode of 'cors' was used for the fetch() request.
        // The drawback of hardcoding {mode: 'no-cors'} is that the response from all
        // cross-origin hosts will always be opaque
        // (https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#cross-origin-resources)
        // and it is not possible to determine whether an opaque response represents a success or failure
        // (https://github.com/whatwg/fetch/issues/14).
        var request = new Request(url, {mode: 'cors'});
        return fetch(request).then(function(response) {
          if (response.status >= 400) {
            throw new Error('request for ' + urlToPrefetch +
              ' failed with status ' + response.statusText);
          }

          // Use the original URL without the cache-busting parameter as the key for cache.put().
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
