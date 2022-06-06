////////////////////
// Old Test Cases //
////////////////////

// console.log(`🎈eqArrays.js testing`)
// assertEqual(eqArrays([1, [2], 3], [1, [2], 3]), true);
// assertEqual(eqArrays(['Angus', 'Luis', 'Ryan'], ['Angus', 'Luis', 'Ryan']), true);
// assertEqual(eqArrays([1, '2', 3], [1, 2, 3]), false);
// assertEqual(eqArrays([1, 2, 3], []), false);
// assertEqual(eqArrays([1, 2, 3], [1, null, 3]), false);


const chai = require('chai')
const assert = chai.assert

const eqArrays = require('../eqArrays');
describe('Tests for eqArrays.js. Returns the true if an Array is the same as another, returns false if they are different.', () => {
  it('should return true if arrays have the element types', () => {
    const testArrayOne = [1,2,[3],4,5]
    const testArrayTwo = [1,2,[3],4,5]
    const result = eqArrays(testArrayOne, testArrayTwo)
    const expected = true;
    assert.strictEqual(result, expected);
  })

  it('should return true if all the element types are strings for both arrays', () => {
    const testArrayOne = ['Mirage', 'Bloodhound', 'Octane']
    const testArrayTwo = ['Mirage', 'Bloodhound', 'Octane']
    const result = eqArrays(testArrayOne, testArrayTwo)
    const expected = true;
    assert.strictEqual(result, expected);
  })

  it('should return false if one of the numbers in the array is a string', () => {
    const testArrayOne = [1, '2', 3]
    const testArrayTwo = [1, 2, 3]
    const result = eqArrays(testArrayOne, testArrayTwo)
    const expected = false;
    assert.strictEqual(result, expected)
  })

  it('should return false when one of the arrays for comparison is empty', () => {
    const testArrayOne = [1, 2, 3]
    const testArrayTwo = [];
    const result = eqArrays(testArrayOne, testArrayTwo);
    const expected = false
    assert.strictEqual(result, expected);
  })
})




