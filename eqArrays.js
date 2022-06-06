////////////////////////
// Used for Old Tests //
////////////////////////
// const assertEqual = require('./assertEqual');

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
        if (!eqArrays(arrayOne[i],arrayTwo[i])) {
          return false;
        }
      } else {
        if (arrayOne[i] !== arrayTwo[i]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

///////////////
// Old Tests //
///////////////

// console.log(`🎈eqArrays.js testing`)
// assertEqual(eqArrays([1, [2], 3], [1, [2], 3]), true);
// assertEqual(eqArrays(['Angus', 'Luis', 'Ryan'], ['Angus', 'Luis', 'Ryan']), true);
// assertEqual(eqArrays([1, '2', 3], [1, 2, 3]), false);
// assertEqual(eqArrays([1, 2, 3], []), false);
// assertEqual(eqArrays([1, 2, 3], [1, null, 3]), false);

module.exports = eqArrays;