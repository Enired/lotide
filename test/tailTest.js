const chai = require('chai');
const assert = chai.assert;

const tail = require('../tail');

//////////////////////////
// Main Test Code Block //
//////////////////////////

describe('Tests for tail.js. Returns the all the values after the first item of an array.',() =>{
  it('should return the numbers of an array after the first item of the array', () => {
    const testArray = [1,2,3,4,5];
    const result = tail(testArray);
    const expectedArray = [2,3,4,5];
    assert.deepEqual(result, expectedArray);
  });

  it('should return the strings of an array after the first item of the array', () => {
    const testArray = ['Wraith', 'Bloodhound', 'Pathfinder', 'Mirage', 'Horizon'];
    const result = tail(testArray);
    const expectedArray = ['Bloodhound', 'Pathfinder', 'Mirage', 'Horizon'];
    assert.deepEqual(result, expectedArray);
  });

  it('should return an empty array if the array only has one value.', () => {
    const testArray = ['Newcastle'];
    const result = tail(testArray);
    const expectedArray = [];
    assert.deepEqual(result, expectedArray);
  });

  it('should return an empty array if no parameter is passed in', () => {
    const result = tail();
    const expected = [];
    assert.deepEqual(result, expected);
  });
  it('should return an empty array if the parameter is not an array', () => {
    const testString = 'Pathfinder';
    const result = tail(testString);
    const expectedArray = [];
    assert.deepEqual(result, expectedArray);
  });
});