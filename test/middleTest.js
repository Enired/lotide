const chai = require('chai');
const findMiddle = require('../middle');
const assert = chai.assert;

const middle = require('../middle');


// const testCaseNum1 = findMiddle([0,1,2,3,4,5]);
// const testCaseNum2 = findMiddle([0,1,2,3,4,5,6]);

// console.log(testCaseNum1);
// console.log(testCaseNum2);
// const testCaseString1 = findMiddle(['Ryan','Luis','Angus','Raymond']);
// const testCaseString2 = findMiddle(['Ryan','Luis','Angus','Raymond','Tommy']);
// console.log(testCaseString1);
// console.log(testCaseString2);

// assertArraysEqual(testCaseNum1, [2,3]);
// assertArraysEqual(testCaseNum2, [3]);

// assertArraysEqual(testCaseString1, ['Luis', 'Angus']);
// assertArraysEqual(testCaseString2, ['Angus']);

describe('Tests for middle.js. Returns the all the middle value of an array. If the array is even in length, then the 2 middle values will be returned.', () => {
  it('should return the 2 middle values of an array that is even in length', () => {
    const testArray = [0,1,2,3,4,5]
    const result = findMiddle(testArray);
    const expected = [2,3];
    assert.deepEqual(result, expected)
  })

  it('should return the middle value of an array that is odd in length', () => {
    const testArray = [0,1,2,3,4,5,6];
    const result = findMiddle(testArray);
    const expected = [3];
    assert.deepEqual(result, expected);
  })

  it('should return an empty array if the array is empty', () => {
    const testArray = [];
    const result = findMiddle(testArray);
    const expected = [];
    assert.deepEqual(result, expected)
  })

  it('should return an empty array if no parameter is passed', () => {
    const result = findMiddle();
    const expected = [];
    assert.deepEqual(result, expected)
  })

  it('should return an empty array if the parameter passed is not an array', () => {
    const testString = 'Pathfinder';
    const result = findMiddle(testString)
    const expected = [];
    assert.deepEqual(result, expected)
  })
})