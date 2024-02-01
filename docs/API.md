# Cache-wizard API Documentation

The Cache-wizard library provides a versatile API for caching data with various eviction policies, cache invalidation, and cache coherency strategies.

## `CacheMiddleware` Class

The `CacheMiddleware` class represents the main interface for interacting with the Cache-wizard.

### Constructor

```javascript
const cache = new CacheMiddleware(maxSize, hybridOptions);
```

- `maxSize`: Maximum size of the cache (default is `1000`).
- `hybridOptions`: Options for hybrid eviction policies (default is an empty object).

### Methods

- `set(key, value)`: Set a key-value pair in the cache.
- `get(key)`: Retrieve a value from the cache given its key.
- `invalidate(key)`: Mark a key as invalid.
- `remove(key)`: Remove a key from the cache and mark it as invalid.
- `clear()`: Clear the entire cache.
- `setCoherencyStrategy(strategy)`: Set the cache coherency strategy.

## Eviction Policies

Cache-wizard supports the following eviction policies:

- FIFO (First-In, First-Out)
- LRU (Least Recently Used)
- LFU (Least Frequently Used)

For detailed documentation and usage of eviction policies, please refer to the [Eviction Policies](./EvictionPolicies.md) documentation.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
```

Explanation:

- The API documentation outlines the `CacheMiddleware` class, including its constructor and methods.
- It provides descriptions and usage instructions for each method.
- The documentation also mentions the supported eviction policies and encourages contributions to the project.
- Information about the project's license is included at the end.

This API documentation serves as a comprehensive reference for users and developers who want to understand and utilize the Cache Middleware library effectively.