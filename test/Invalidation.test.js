const { Invalidation } = require('../lib/Invalidation');
const assert = require('assert');

describe('Cache Invalidation', function() {
    describe('#invalidate()', function() {
        it('should mark a key as invalid', function() {
            const invalidation = new Invalidation();
            invalidation.invalidate('key1');

            assert.ok(invalidation.isInvalid('key1'));
        });
    });

    describe('#isInvalid()', function() {
        it('should return true if a key is marked as invalid', function() {
            const invalidation = new Invalidation();
            invalidation.invalidate('key1');

            assert.strictEqual(invalidation.isInvalid('key1'), true);
        });

        it('should return false if a key is not marked as invalid', function() {
            const invalidation = new Invalidation();
            invalidation.invalidate('key1');

            assert.strictEqual(invalidation.isInvalid('key2'), false);
        });
    });

    describe('#clearInvalidations()', function() {
        it('should clear all invalidations', function() {
            const invalidation = new Invalidation();
            invalidation.invalidate('key1');
            invalidation.clearInvalidations();

            assert.strictEqual(invalidation.isInvalid('key1'), false);
        });
    });
});
