const chai = require('chai');
const assert = chai.assert
const _ = require('../index');

describe('Tests for flatten.js. Returns a flattened array from a given array that includes nested arrays.', () => {
  it('should return a flattened array from an array that contains nested arrays (2 levels deep)', () => {
    const testArray = [1, 2, [3, 4], 5, [6]]
    const result = _.flatten(testArray);
    const expected = [1,2,3,4,5,6];

    assert.deepEqual(result, expected)
  })

  it('should return a flattend array from an array that contains nested arrays (> 2 levels deep)', () => {
    const testArray = [1, [2, [3,[[4]], [5]], [6]]]
    const result = _.flatten(testArray);
    const expected = [1,2,3,4,5,6];

    assert.deepEqual(result, expected)
  })

  it('should return the same array if the array provided does not have nested arrays as one of it\'s elements.', () => {
    const testArray = ['Wraith', 'Bloodhound', 'Pathfinder', 'Octane']
    const result = _.flatten(testArray);
    const expected = ['Wraith', 'Bloodhound', 'Pathfinder', 'Octane']
    assert.deepEqual(result, expected)
  })

  it('should return an empty array if the parameter passed in is not an array', () => {
    const testArray = 'Hello'
    const result = _.flatten(testArray);
    const expected = [];

    assert.deepEqual(result, expected)
  })

  it('should return an empty array if no parameter is passed to the function', ()=>{
    const result = _.flatten();
    const expected = [];
    assert.deepEqual(result, expected)    
  })

})