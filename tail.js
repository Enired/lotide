const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  }
  return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
};


const tail = function(array) {
  let newArray = [];
  if(array && Array.isArray()){
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = tail;

//Test Arrays
// const testArray1 = [1,2,3,4,5];
// const testArray2 = ['Luis', 'Angus', 'Ryan', 'Raymond'];
// const testArray3 = ['Lighthouse Labs'];
// const testArray4 = [];
// //Testing for tail functionality.
// console.log(tail(testArray1));
// console.log(tail(testArray2));
// console.log(tail(testArray3));
// console.log(tail(testArray4));
// //Testing to ensure original array is not modified.
// console.log(testArray1);
// console.log(testArray2);
// //Testing assertEqual with tail.
// const testCase = function(returnedArray, expectedArray) {
//   for (let i = 0; i < returnedArray.length; i++) {
//     assertEqual(returnedArray[i], expectedArray[i]);
//   }
// };
// //Expected tail of Test Arrays
// const testArray1ExpectedTail = [2,3,4,5];
// const testArray2ExpectedTail = ['Angus', 'Ryan', 'Raymond'];
// testCase(tail(testArray1),testArray1ExpectedTail);
// testCase(tail(testArray2), testArray2ExpectedTail);

