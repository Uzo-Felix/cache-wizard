class CoherencyStrategy {
    constructor() {
        this.strategy = 'default'; // Default coherency strategy
    }

    // Set the cache coherency strategy
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    // Get the current cache coherency strategy
    getStrategy() {
        return this.strategy;
    }
}

module.exports = { CoherencyStrategy };
