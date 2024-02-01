const { CoherencyStrategy } = require('../lib/CoherencyStrategy');
const assert = require('assert');

describe('Cache Coherency Strategy', function() {
    describe('#setStrategy() and #getStrategy()', function() {
        it('should set and retrieve the cache coherency strategy', function() {
            const coherencyStrategy = new CoherencyStrategy();

            coherencyStrategy.setStrategy('write-through');
            assert.strictEqual(coherencyStrategy.getStrategy(), 'write-through');

            coherencyStrategy.setStrategy('write-behind');
            assert.strictEqual(coherencyStrategy.getStrategy(), 'write-behind');
        });
    });
});
