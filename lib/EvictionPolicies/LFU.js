// lib/EvictionPolicies/LFU.js

class LFU {
    constructor() {
        this.frequencyMap = new Map(); // Map to track the frequency of key access
    }

    // Update the frequency of a key in the eviction policy
    update(key) {
        if (this.frequencyMap.has(key)) {
            const frequency = this.frequencyMap.get(key);
            this.frequencyMap.set(key, frequency + 1); // Increment the frequency
        } else {
            this.frequencyMap.set(key, 1); // Set frequency to 1 if key is accessed for the first time
        }
    }

    // Evict the least frequently used item (the item with the lowest frequency)
    evict() {
        let minFrequency = Infinity;
        let evictKey = null;

        for (const [key, frequency] of this.frequencyMap.entries()) {
            if (frequency < minFrequency) {
                minFrequency = frequency;
                evictKey = key;
            }
        }

        if (evictKey !== null) {
            this.frequencyMap.delete(evictKey);
            return evictKey;
        }

        return null; // No items to evict
    }

    // Remove a key from the eviction policy
    remove(key) {
        if (this.frequencyMap.has(key)) {
            this.frequencyMap.delete(key);
        }
    }

    // Clear the eviction policy (reset the frequency map)
    clear() {
        this.frequencyMap.clear();
    }
}

module.exports = { LFU };
