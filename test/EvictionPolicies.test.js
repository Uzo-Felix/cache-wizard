const { FIFO } = require('../lib/EvictionPolicies/FIFO');
const { LRU } = require('../lib/EvictionPolicies/LRU');
const { LFU } = require('../lib/EvictionPolicies/LFU');
const assert = require('assert');

describe('Eviction Policies', function() {
    describe('FIFO', function() {
        it('should evict the least recently added item', function() {
            const evictionPolicy = new FIFO();
            
            evictionPolicy.update('key1');
            evictionPolicy.update('key2');
            evictionPolicy.evict();
            
            assert.strictEqual(evictionPolicy.evict(), 'key1');
        });

        it('should remove a key from the eviction policy', function() {
            const evictionPolicy = new FIFO();
            
            evictionPolicy.update('key1');
            evictionPolicy.remove('key1');

            assert.strictEqual(evictionPolicy.evict(), null);
        });
    });

    describe('LRU', function() {
        it('should evict the least recently used item', function() {
            const evictionPolicy = new LRU();
            
            evictionPolicy.update('key1');
            evictionPolicy.update('key2');
            evictionPolicy.evict();
            
            assert.strictEqual(evictionPolicy.evict(), 'key1');
        });

        it('should remove a key from the eviction policy', function() {
            const evictionPolicy = new LRU();
            
            evictionPolicy.update('key1');
            evictionPolicy.remove('key1');

            assert.strictEqual(evictionPolicy.evict(), null);
        });
    });

    describe('LFU', function() {
        it('should evict the least frequently used item', function() {
            const evictionPolicy = new LFU();
            
            evictionPolicy.update('key1');
            evictionPolicy.update('key2');
            evictionPolicy.evict();
            
            assert.strictEqual(evictionPolicy.evict(), 'key1');
        });

        it('should remove a key from the eviction policy', function() {
            const evictionPolicy = new LFU();
            
            evictionPolicy.update('key1');
            evictionPolicy.remove('key1');

            assert.strictEqual(evictionPolicy.evict(), null);
        });
    });
});
