'use strict';

require('mocha');
var assert = require('assert');
var config = require('./');

describe('common-config', function() {
  describe('API', function() {
    it('should export an object', function() {
      assert(config);
      assert.equal(typeof config, 'object');
    });

    it('should expose a `set` method', function() {
      assert.equal(typeof config.set, 'function');
    });
    it('should expose a `get` method', function() {
      assert.equal(typeof config.get, 'function');
    });
    it('should expose a `has` method', function() {
      assert.equal(typeof config.has, 'function');
    });
    it('should expose a `del` method', function() {
      assert.equal(typeof config.del, 'function');
    });
    it('should expose the store on `global.COMMON_CONFIG`', function() {
      var store = global.COMMON_CONFIG;
      assert(store);
      assert.equal(typeof store.set, 'function');
      assert.equal(typeof store.get, 'function');
      assert.equal(typeof store.has, 'function');
      assert.equal(typeof store.del, 'function');
    });
  });

  describe('methods', function() {
    it('should add a value to the store', function() {
      var key = 'common_config_test_a';
      config.set(key, 'b');
      assert.equal(config.data[key], 'b');
      config.del(key);
    });

    it('should get a value from the store', function() {
      var key = 'common_config_test_a';
      config.set(key, 'b');
      assert.equal(config.get(key), 'b');
      config.del(key);
    });

    it('should delete a value from the store', function() {
      var key = 'common_config_test_a';
      config.set(key, 'b');
      assert.equal(config.get(key), 'b');
      config.del(key);
      assert.equal(typeof config.get(key), 'undefined');
    });
  });
});
