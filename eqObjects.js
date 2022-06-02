//Assert Functions
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


const eqObjects = function(objectOne, objectTwo) {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }
  for (let key in objectOne) {
    if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
      return eqArrays(objectOne[key], objectTwo[key]);
    }
    if (objectOne[key] !== objectTwo[key]) {
      return false;
    }
  }
  return true;

};

//Testing
console.log('Assert Test Part 1');
const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = {a: '1', b: '2', c: '3'};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

console.log('Assert Test Part 2');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd,dc), true);
assertEqual(eqObjects(cd,cd2), false);