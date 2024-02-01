const { CacheMiddleware } = require('../lib/CacheMiddleware');

// Create a cache middleware instance with a maximum size of 1000
const cache = new CacheMiddleware(1000);

// Set some key-value pairs in the cache
cache.set('key1', 'value1');
cache.set('key2', 'value2');
cache.set('key3', 'value3');

// Retrieve values from the cache
console.log(cache.get('key1')); // Output: value1
console.log(cache.get('key2')); // Output: value2
console.log(cache.get('key3')); // Output: value3

// Invalidate a key in the cache
cache.invalidate('key1');

// Retrieve the invalidated key (should return null)
console.log(cache.get('key1')); // Output: null

// Set the cache coherency strategy
cache.setCoherencyStrategy('write-through');

// Clear the entire cache
cache.clear();
