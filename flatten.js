// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne.length === arrayTwo.length) {
//     for (let i = 0; i < arrayOne.length; i++) {
//       if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
//         if (!eqArrays(arrayOne[i],arrayTwo[i])) {
//           return false;
//         }
//       } else {
//         if (arrayOne[i] !== arrayTwo[i]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
//   return false;
// };


// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   if (eqArrays(arrayOne, arrayTwo)) {
//     return console.log(`✔️Assertion passed: ${arrayOne} === ${arrayTwo}`);
//   }
//   return console.log(`❌Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  
// };


// const eqArrays = require('./eqArrays');


const flatten = function(array) {
  let flattenedArray = [];
  if(array && Array.isArray(array)){

    for (let element of array) {
      Array.isArray(element) ? flattenedArray = flattenedArray.concat(element) : flattenedArray.push(element);
    }
    //Recursion to flatten deeper arrays.
    for (let element of flattenedArray) {
      if (Array.isArray(element)) {
        flattenedArray = flatten(flattenedArray);
      }
    }
  }

  return flattenedArray;
};

module.exports = flatten;

