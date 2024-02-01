// lib/Cache.js

const { FIFO } = require('./EvictionPolicies/FIFO');
const { LRU } = require('./EvictionPolicies/LRU');
const { LFU } = require('./EvictionPolicies/LFU');
const { Invalidation } = require('./Invalidation');
const { CoherencyStrategy } = require('./CoherencyStrategy');

class Cache {
    constructor(maxSize = 1000, hybridOptions = {}) {
        this.maxSize = maxSize;
        this.size = 0;
        this.cache = new Map();
        this.hybridOptions = hybridOptions;

        // Initialize hybrid eviction policies
        this.evictionPolicies = {
            FIFO: new FIFO(),
            LRU: new LRU(),
            LFU: new LFU()
        };

        // Initialize cache invalidation and coherency strategy
        this.invalidation = new Invalidation();
        this.coherencyStrategy = new CoherencyStrategy();
    }

    set(key, value) {
        // Check if key already exists, update value
        if (this.cache.has(key)) {
            this.cache.set(key, value);
            this.updateEvictionPolicies(key);
            return;
        }

        // If cache is full, evict the least recently used item
        if (this.size >= this.maxSize) {
            this.evict();
        }

        // Add new key-value pair to the cache
        this.cache.set(key, value);
        this.updateEvictionPolicies(key);
        this.size++;
    }

    get(key) {
        if (this.cache.has(key)) {
            this.updateEvictionPolicies(key);
            return this.cache.get(key);
        }
        return null;
    }

    evict() {
        let evictKey;
        switch (this.hybridOptions.strategy) {
            case 'FIFO':
                evictKey = this.evictionPolicies.FIFO.evict();
                break;
            case 'LRU':
                evictKey = this.evictionPolicies.LRU.evict();
                break;
            case 'LFU':
                evictKey = this.evictionPolicies.LFU.evict();
                break;
            default:
                // Default to FIFO
                evictKey = this.evictionPolicies.FIFO.evict();
        }

        if (evictKey) {
            this.cache.delete(evictKey);
            this.size--;
        }
    }

    updateEvictionPolicies(key) {
        switch (this.hybridOptions.strategy) {
            case 'FIFO':
                this.evictionPolicies.FIFO.update(key);
                break;
            case 'LRU':
                this.evictionPolicies.LRU.update(key);
                break;
            case 'LFU':
                this.evictionPolicies.LFU.update(key);
                break;
            default:
                // Default to FIFO
                this.evictionPolicies.FIFO.update(key);
        }
    }

    invalidate(key) {
        this.cache.delete(key);
        this.size--;
        // Also remove from eviction policies
        this.evictionPolicies.FIFO.remove(key);
        this.evictionPolicies.LRU.remove(key);
        this.evictionPolicies.LFU.remove(key);
    }

    setCoherencyStrategy(strategy) {
        this.coherencyStrategy.setStrategy(strategy);
    }

    clear() {
        this.cache.clear();
        this.size = 0;
        // Clear all eviction policies
        this.evictionPolicies.FIFO.clear();
        this.evictionPolicies.LRU.clear();
        this.evictionPolicies.LFU.clear();
    }

    getSize() {
        return this.size;
    }

    getMaxSize() {
        return this.maxSize;
    }
}

module.exports = { Cache };
