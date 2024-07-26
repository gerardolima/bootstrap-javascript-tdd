import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import * as sample from './sample.js'

describe('sample', function() {

  describe('double', function() {
    it('doubles the number', function() {
      const res = sample.double(1);

      assert.equal(res, 2);
    });
  });

});
