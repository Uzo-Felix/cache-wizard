# Cache-wizard Usage Guide

Cache-wizard is a powerful library for caching data in your JavaScript applications. This guide will walk you through the basic concepts and usage of Cache-wizard.

## Installation

You can install Cache-wizard via npm:

```bash
npm install cache-middleware
```

## Basic Usage

To start using Cache-wizard, you first need to import the `CacheMiddleware` class:

```javascript
const { CacheMiddleware } = require('cache-middleware');
```

Then, you can create a Cache-wizard instance:

```javascript
const cache = new CacheMiddleware();
```

Now, you can start caching data by using the provided methods like `set`, `get`, `invalidate`, `remove`, and `clear`.

Here's a basic example:

```javascript
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

## Advanced Usage

Cache-wizard also supports advanced features such as:

- Setting maximum cache size
- Configuring cache coherency strategy
- Using hybrid eviction policies
- Utilizing different eviction policies like FIFO, LRU, and LFU

For more advanced usage and configurations, please refer to the [Advanced Usage](../examples/AdvancedUsage.js) example.

## Eviction Policies

Cache-wizard provides several eviction policies to manage cache eviction:

- FIFO (First-In, First-Out)
- LRU (Least Recently Used)
- LFU (Least Frequently Used)

For detailed usage and examples of eviction policies, please refer to the [Eviction Policies](./EvictionPolicies.md) documentation.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please feel free to submit an issue or a pull request on our [GitHub repository](https://github.com/example/cache-middleware).

## License

Cache-wizard is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.
```

Explanation:

- The usage guide provides instructions for installing the Cache-wizard library and getting started with basic usage.
- It demonstrates basic usage examples using methods like `set`, `get`, `invalidate`, and `clear`.
- Advanced usage options like setting maximum cache size, configuring cache coherency strategy, and using different eviction policies are also covered.
- The guide references the advanced usage example and provides information about the supported eviction policies.
- Contributors are encouraged to contribute to the project, and licensing information is provided at the end.

This usage guide helps users understand the core concepts and functionalities of the Cache-wizard library and empowers them to leverage caching effectively in their JavaScript applications.