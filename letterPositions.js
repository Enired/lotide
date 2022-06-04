//Assert Functions
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

const checkIfSpace = (character) => character === ' ' ? true : false;

//Main Code
const letterPositions = function(sentence) {
  const results = {};
  for (let charIndex = 0; charIndex < sentence.length; charIndex++) {
    if (!checkIfSpace(sentence[charIndex])) {
      results[sentence[charIndex]] ? results[sentence[charIndex]].push(charIndex) : results[sentence[charIndex]] = [charIndex];
    }
  }
  return results;
};

module.exports = letterPositions;

//Testing
// console.log('Assert Test 1');
// const alphaTestString = 'hello';
// const alphaExpected = {h:[0],e:[1],l:[2,3],o:[4]};
// const alphaResult = letterPositions(alphaTestString);

// assertArraysEqual(alphaResult.e, alphaExpected.e);
// assertArraysEqual(alphaResult.l, alphaExpected.l);
// assertArraysEqual(alphaResult.o, alphaExpected.o);
// console.log(`-----`);
// console.log('Assert Test 2');
// const betaTestString = 'lighthouse in the house';
// const betaResult = letterPositions(betaTestString);
// const betaExpected = { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12]};
// assertArraysEqual(betaResult.t, betaExpected.t);
// assertArraysEqual(betaResult.e, betaExpected.e);
// assertArraysEqual(betaResult.h, betaExpected.h);

