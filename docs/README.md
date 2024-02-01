```markdown
# Cache-wizard

Cache-wizard is a JavaScript library that provides middleware for caching data with various eviction policies, cache invalidation, and cache coherency strategies.

## Installation

You can install Cache Middleware via npm:

```bash
npm install Cache-wizard
```

## Usage

Here's a basic example of how to use Cache Middleware:

```javascript
const { CacheMiddleware } = require('Cache-wizard');

// Create a cache middleware instance
const cache = new CacheMiddleware();

// Set key-value pairs in the cache
cache.set('key1', 'value1');
cache.set('key2', 'value2');

// Retrieve values from the cache
console.log(cache.get('key1')); // Output: value1
console.log(cache.get('key2')); // Output: value2

// Invalidate a key in the cache
cache.invalidate('key1');

// Retrieve the invalidated key (should return null)
console.log(cache.get('key1')); // Output: null

// Clear the entire cache
cache.clear();
```

For more advanced usage and configurations, please refer to the [Advanced Usage](./examples/AdvancedUsage.js) example.

## API

### CacheMiddleware Class

#### Constructor

```javascript
const cache = new CacheMiddleware(maxSize, hybridOptions);
```

- `maxSize`: Maximum size of the cache (default is `1000`).
- `hybridOptions`: Options for hybrid eviction policies (default is an empty object).

#### Methods

- `set(key, value)`: Set a key-value pair in the cache.
- `get(key)`: Retrieve a value from the cache given its key.
- `invalidate(key)`: Mark a key as invalid.
- `remove(key)`: Remove a key from the cache and mark it as invalid.
- `clear()`: Clear the entire cache.
- `setCoherencyStrategy(strategy)`: Set the cache coherency strategy.

### Eviction Policies

Cache-wizard supports the following eviction policies:

- FIFO (First-In, First-Out)
- LRU (Least Recently Used)
- LFU (Least Frequently Used)

For detailed documentation and usage of eviction policies, please refer to the [Eviction Policies](./docs/EvictionPolicies.md) documentation.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
```

Explanation:

- The README provides an overview of the Cache-wizard library, including installation instructions and basic usage examples.
- It also includes links to advanced usage examples and documentation for eviction policies.
- The API section outlines the methods and functionalities provided by the `CacheMiddleware` class.
- Information about contributing to the project and the license is also included.

This README template provides users with essential information about the Cache-wizard package and guides them on how to use it effectively.