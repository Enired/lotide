const chai = require('chai');
const assert = chai.assert;

const head = require('../head');

//////////////////////////
// Main Test Code Block //
//////////////////////////

describe('Tests for head.js. Returns the value in position 0 of an array.', function() {
  it('should return the first value in an array of numbers.', function() {
    const testArray = [5,6,7];
    const result = head(testArray);
    const expected = 5;
    assert.strictEqual(result, expected);
  });

  it('should return the first value in an array of strings', function() {
    const testArray = ['Mirage', 'Bloodhound', 'Octane'];
    const result = head(testArray);
    const expected = 'Mirage';
    assert.strictEqual(result,expected);
  });

  it('should return undefined when given an empty array.', function() {
    const testArray = [];
    const result = head(testArray);
    const expected = undefined;
    assert.strictEqual(result,expected);
  });

  it('should return the only value in an array with 1 item in it.', function() {
    const testArray = ['Pathfinder'];
    const result = head(testArray);
    const expected = 'Pathfinder';
    assert.strictEqual(result,expected);
  });

  it('should return undefined when not passed a parameter.', function() {
    let testArray;
    const result = head(testArray);
    const expected = undefined;
    assert.strictEqual(result,expected);
  });

  it('should return undefined when a parameter is not passed in.', function() {
    const result = head();
    const expected = undefined;
    assert.strictEqual(result,expected);
  });
});