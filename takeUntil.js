//ASSERT FUNCTIONS
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

//MAIN CODE
const takeUntil = function(anArray, callBackFunction) {
  let slicedArray = [];
  for (let element of anArray) {
    if (callBackFunction(element)) {
      return slicedArray;
    }
    slicedArray.push(element);
  }
  return anArray; //Returns the same array since nothing needed to be sliced out.
};

module.exports = takeUntil;

//TESTING
// console.log('TEST 1');
// console.log(`-----`);
// const apexLegends = ['Wraith', 'Octane', 'Fuse', 'Horizon', 'Mirage', 'Ash', 'Rampart', 'Pathfinder', 'Bloodhound', 'Crypto'];

// const alphaResult = takeUntil(apexLegends, legend => legend === 'Ash');
// const alphaExpected = ['Wraith', 'Octane', 'Fuse', 'Horizon', 'Mirage'];
// assertArraysEqual(alphaResult,alphaExpected);
// console.log(`-----`);
// console.log();
// console.log(`TEST 2`);
// console.log(`-----`);
// const betaResult = takeUntil(apexLegends, legend => legend.length > 7);
// const betaExpected = ['Wraith', 'Octane', 'Fuse', 'Horizon', 'Mirage', 'Ash', 'Rampart'];
// assertArraysEqual(betaResult,betaExpected);
// console.log(`-----`);
// console.log();
// console.log(`TEST 3`);
// console.log(`-----`);
// const charlieResult = takeUntil(apexLegends,legend => legend.includes('B'));
// const charlieExpected = ['Wraith', 'Octane', 'Fuse', 'Horizon', 'Mirage', 'Ash', 'Rampart', 'Pathfinder'];
// assertArraysEqual(charlieResult, charlieExpected);
// console.log(`-----`);
// console.log();
// console.log(`TEST 4`);
// console.log(`-----`);
// const deltaResult = takeUntil(apexLegends,legend => legend.includes('X'));
// const deltaExpected = ['Wraith', 'Octane', 'Fuse', 'Horizon', 'Mirage', 'Ash', 'Rampart', 'Pathfinder', 'Bloodhound', 'Crypto'];
// assertArraysEqual(deltaResult, deltaExpected);