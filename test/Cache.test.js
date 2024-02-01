const { Cache } = require('../lib/Cache');
const assert = require('assert');

describe('Cache', function() {
    describe('#set() and #get()', function() {
        it('should add a key-value pair to the cache and retrieve the value', function() {
            const cache = new Cache(3); // Cache with a maximum size of 3

            cache.set('key1', 'value1');
            cache.set('key2', 'value2');
            cache.set('key3', 'value3');

            assert.equal(cache.get('key1'), 'value1');
            assert.equal(cache.get('key2'), 'value2');
            assert.equal(cache.get('key3'), 'value3');
        });
    });

    describe('#evict()', function() {
        it('should evict the least recently used item when cache is full', function() {
            const cache = new Cache(3); // Cache with a maximum size of 3

            cache.set('key1', 'value1');
            cache.set('key2', 'value2');
            cache.set('key3', 'value3');

            // Access key1 to make it the most recently used
            cache.get('key1');

            cache.set('key4', 'value4'); // Evict key2
            assert.equal(cache.get('key2'), null); // key2 should be evicted
        });
    });

    describe('#remove()', function() {
        it('should remove a key from the cache', function() {
            const cache = new Cache();

            cache.set('key1', 'value1');
            cache.remove('key1');

            assert.equal(cache.get('key1'), null); // key1 should not be present in the cache
        });
    });

    describe('#clear()', function() {
        it('should clear the entire cache', function() {
            const cache = new Cache();

            cache.set('key1', 'value1');
            cache.set('key2', 'value2');
            cache.clear();

            assert.equal(cache.getSize(), 0); // Cache size should be 0 after clearing
        });
    });
});
