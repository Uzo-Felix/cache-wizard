class FIFO {
    constructor() {
        this.queue = [];
    }

    // Update the position of a key in the eviction policy
    update(key) {
        // FIFO doesn't require updating positions
    }

    // Evict the least recently used item (the first item in the queue)
    evict() {
        if (this.queue.length === 0) {
            return null; // No items to evict
        }
        return this.queue.shift(); // Remove and return the first item in the queue
    }

    // Remove a key from the eviction policy
    remove(key) {
        const index = this.queue.indexOf(key);
        if (index !== -1) {
            this.queue.splice(index, 1);
        }
    }

    // Clear the eviction policy (reset the queue)
    clear() {
        this.queue = [];
    }
}

module.exports = { FIFO };
