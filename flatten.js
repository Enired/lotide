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
    console.log(`✔️Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const flatten = function(array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(element);
    } else {
      flattenedArray.push(element);
    }
  }
  //Recursion to flatten deeper arrays.
  for (let element of flattenedArray) {
    if (Array.isArray(element)) {
      flattenedArray = flatten(flattenedArray);
    }
  }

  return flattenedArray;
};

//Test Cases
const test1 = [1, 2, [3, 4], 5, [6]];
const test2 = [1, 2, [3, 4, [5, [6,[7,8]]]]];
const expect1 = [1,2,3,4,5,6];
const expect2 = [1,2,3,4,5,6,7,8];
console.log(flatten(test1));
console.log(flatten(test2));

assertArraysEqual(flatten(test1), expect1);
assertArraysEqual(flatten(test2), expect2);