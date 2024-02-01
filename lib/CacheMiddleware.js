const { Cache } = require('./Cache');
const { Invalidation } = require('./Invalidation');
const { CoherencyStrategy } = require('./CoherencyStrategy');

class CacheMiddleware {
    constructor(maxSize = 1000, hybridOptions = {}) {
        this.cache = new Cache(maxSize, hybridOptions);
        this.invalidation = new Invalidation();
        this.coherencyStrategy = new CoherencyStrategy();
    }

    // Set the cache coherency strategy
    setCoherencyStrategy(strategy) {
        this.coherencyStrategy.setStrategy(strategy);
    }

    // Add a key-value pair to the cache
    set(key, value) {
        this.cache.set(key, value);
    }

    // Retrieve a value from the cache given its key
    get(key) {
        if (this.invalidation.isInvalid(key)) {
            return null; // Return null if key is marked as invalid
        }

        return this.cache.get(key);
    }

    // Mark a key as invalid
    invalidate(key) {
        this.invalidation.invalidate(key);
    }

    // Remove a key from the cache and mark it as invalid
    remove(key) {
        this.cache.remove(key);
        this.invalidate(key);
    }

    // Clear the entire cache and invalidate all keys
    clear() {
        this.cache.clear();
        this.invalidation.clearInvalidations();
    }
}

module.exports = { CacheMiddleware };
