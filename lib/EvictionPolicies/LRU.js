class LRU {
    constructor() {
        this.keyQueue = []; // Queue to track the order of key access
    }

    // Update the position of a key in the eviction policy
    update(key) {
        const index = this.keyQueue.indexOf(key);
        if (index !== -1) {
            // Remove the key from its current position and push it to the end
            this.keyQueue.splice(index, 1);
            this.keyQueue.push(key);
        }
    }

    // Evict the least recently used item (the first item in the key queue)
    evict() {
        if (this.keyQueue.length === 0) {
            return null; // No items to evict
        }
        return this.keyQueue.shift(); // Remove and return the first item in the key queue
    }

    // Remove a key from the eviction policy
    remove(key) {
        const index = this.keyQueue.indexOf(key);
        if (index !== -1) {
            this.keyQueue.splice(index, 1);
        }
    }

    // Clear the eviction policy (reset the key queue)
    clear() {
        this.keyQueue = [];
    }
}

module.exports = { LRU };
