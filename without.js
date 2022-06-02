const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return console.log(`✔️Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } 
    return console.log(`❌Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  
};

const without = function(source, itemsToRemove) {
  let trimmed = source.filter(element => !itemsToRemove.includes(element));
  return trimmed;
};

//Own Test Cases
let testSource = [1,2,3,4,5,6];
let testRemove = [2,3,5];
let testExpected = [1,4,6];
console.log(without(testSource, testRemove));
assertArraysEqual(without(testSource, testRemove), testExpected);
console.log(testSource);

testSource = ['Luis', 'Angus', 'Ryan', 'Raymond'];
testRemove = ['Raymond'];
testExpected = ['Luis', 'Angus', 'Ryan'];

console.log(without(testSource, testRemove));
assertArraysEqual(without(testSource, testRemove), testExpected);
console.log(testSource);

testSource = [1, '2', '3', '5'];
testRemove = [2];
testExpected = [1, '2', '3', '5'];

console.log(without(testSource, testRemove));
assertArraysEqual(without(testSource, testRemove), testExpected);
console.log(testSource);

//Test Case provided by Lighthouse.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);