const mocha = require('mocha');
const assert = mocha.assert;

const tail = require('../tail')
const assertEqual = require('../assertEqual')
//const runTest = assertEqual(this.result,this.expected);

/////////////////////////////////////////////////////////
// Helper Function for testing arrays with assertEqual //
/////////////////////////////////////////////////////////

const testEachItem = function(returnedArray, expectedArray){
  for(let i = 0; i < returnedArray.length; i++){
    assertEqual(returnedArray[i],expectedArray[i]);
  }
}


//////////////////////////
// Main Test Code Block //
//////////////////////////

describe('Tests for tail.js. Returns the all the values after the first item of an array.',() =>{
  it('should return the numbers of an array after the first item of the array', () => {
    const testArray = [1,2,3,4,5];
    const result = tail(testArray)
    const expectedArray = [2,3,4,5];
    testEachItem(result, expectedArray);
  })

  it('should return the strings of an array after the first item of the array', () => {
    const testArray = ['Wraith', 'Bloodhound', 'Pathfinder', 'Mirage', 'Horizon'];
    const result = tail(testArray)
    const expectedArray = ['Bloodhound', 'Pathfinder', 'Mirage', 'Horizon']
    testEachItem(result, expectedArray);
  })

  it('should return an empty array if the array only has one value.', () => {
    const testArray = ['Newcastle'];
    const result = tail(testArray);
    const expectedArray = [];
    testEachItem(result, expectedArray)
  })

  it('should return an empty array if no parameter is passed in', () => {
    const result = tail();
    const expected = [];
    testEachItem(result, expected)
  })
  it('should return an empty array if the parameter is not an array', () => {
    const testString = 'Pathfinder';
    const result = tail(testString);
    const expectedArray = [];
    testEachItem(result, expectedArray);
  })
})