const mocha = require('mocha');
const assert = mocha.assert;

const head = require('../head');
const assertEqual = require('../assertEqual');

//////////////////////////
// Main Test Code Block //
//////////////////////////

describe('Tests for head.js. Returns the value in position 0 of an array.', function(){
  it('should return the first value in an array of numbers.', function(){
    testArray = [5,6,7];
    result = head(testArray);
    expected = 5;
    assertEqual(result,expected);
  })

  it('should return the first value in an array of strings', function(){
    testArray = ['Mirage', 'Bloodhound', 'Octane'];
    result = head(testArray);
    expected = 'Mirage'
    assertEqual(result,expected);
  })

  it('should return undefined when given an empty array.', function(){
    testArray = [];
    result = head(testArray);
    expected = undefined;
    assertEqual(result,expected);
  })

  it('should return the only value in an array with 1 item in it.', function(){
    testArray = ['Pathfinder']
    result = head(testArray);
    expected = 'Pathfinder'
    assertEqual(result,expected);
  })

  it('should return undefined when not passed a parameter.', function(){
    let testArray;
    const result = head(testArray);
    expected = undefined;
    assertEqual(result,expected);
  })

  it('should return undefined when a parameter is not passed in.', function(){
    const result = head();
    expected = undefined;
    assertEqual(result,expected);
  })
})