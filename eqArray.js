const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  } 
    return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['Angus', 'Luis', 'Ryan'], ['Angus', 'Luis', 'Ryan']), true);
assertEqual(eqArrays([1, '2', 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], []), false);
assertEqual(eqArrays([1, 2, 3], [1, null, 3]), false);