//TEST + ASSERTION FUNCTIONS
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

const checkArrayMinLength = function(array) {
  if (array.length < 3) {
    return true;
  }
  return false;
};


const checkIfArrayIsEven = function(array) { //Only need to check for even, because if it's not even it's odd.
  if (array.length % 2 === 0) {
    return true;
  }
  return false;
};

const findIndexOfMiddle = function(array) {
  return Math.floor(array.length / 2);
};

const findMiddle = function(array) {
  let middle = [];
  if(array && Array.isArray(array)){
    if (checkArrayMinLength(array)) {
      return middle;
    }
    if (checkIfArrayIsEven(array)) {
      middle.push(array[findIndexOfMiddle(array) - 1]);
      middle.push(array[findIndexOfMiddle(array)]);
      return middle;
    }
    middle.push(array[findIndexOfMiddle(array)]);
  }
  return middle;
};


module.exports = findMiddle;

// //Test Code
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

