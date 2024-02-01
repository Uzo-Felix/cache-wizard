class Invalidation {
    constructor() {
        this.invalidKeys = new Set(); // Set to track invalid keys
    }

    // Mark a key as invalid
    invalidate(key) {
        this.invalidKeys.add(key);
    }

    // Check if a key is marked as invalid
    isInvalid(key) {
        return this.invalidKeys.has(key);
    }

    // Clear invalid keys
    clearInvalidations() {
        this.invalidKeys.clear();
    }
}

module.exports = { Invalidation };
