const { expect } = require('chai');

const sample = require('./sample');

describe('sample', function() {

  describe('double', function() {
    it('doubles the number', function() {
      expect(sample.double(1)).equal(2);
    });
  });

});
