const chai = require('chai');
const assert = chai.assert;
const _ = require('../index');
const takeUntil = require('../takeUntil');

const countOnly = _.countOnly;

describe('Tests for countOnly.js. Determines how many times a specific item occurs in a given list.', () => {
  it('should return an object that determines how many times a name appears if being searched for. (Strings)', () => {
    const testObject = ['Octane', 'Pathfinder', 'Wraith', 'Pathfinder', 'Pathdfinder']
    const searchObject = {'Pathfinder': true, 'Octane': false}
    const result = countOnly(testObject, searchObject);
    const expected = {'Pathfinder' : 2}
    assert.deepEqual(result, expected)
  })
  

  
  it('should return an object that determines how many times a name appears if being searched for. (Numbers)', () => {
    const testObject = [1, 13, 21, 69, 13]
    const searchObject = { 13 : true,  21 : false, 69:true}
    const result = countOnly(testObject, searchObject);
    const expected = {13 : 2, 69: 1}
    assert.deepEqual(result, expected)
  })

  it('should return an empty object when an empty array is passed', () => {
    const testObject = []
    const searchObject = { 13 : true,  21 : false, 69:true}
    const result = countOnly(testObject, searchObject);
    const expected = {}
    assert.deepEqual(result, expected)
  })

  it('should return an empty object if an empty object is passed', () => {
    const testObject = [1, 13, 21, 69, 13]
    const searchObject = {}
    const result = countOnly(testObject, searchObject);
    const expected = {}
    assert.deepEqual(result, expected)
  })
  
  it('should return an empty object if an undefined array object is passed', () => {
  let testObject;
  const searchObject = { 13 : true,  21 : false, 69:true}
    const result = countOnly(testObject,searchObject);
    const expected = {}
    assert.deepEqual(result, expected)

  })

  it('should return an empty object if an undefined search object is passed', () => {
  const testObject = [1, 13, 21, 69, 13]
  let searchObject
    const result = countOnly(testObject,searchObject);
    const expected = {}
    assert.deepEqual(result, expected)

  })
  
  
  
})