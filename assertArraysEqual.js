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


const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return console.log(`✔️Assertion passed: ${arrayOne} === ${arrayTwo}`);
  }
  return console.log(`❌Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['Angus', 'Luis', 'Ryan'], ['Angus', 'Luis', 'Ryan']);
assertArraysEqual([1, '2', 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], []);
assertArraysEqual([1, 2, 3], [1, null, 3]);