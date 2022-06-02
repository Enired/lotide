//Assert Functions
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
    return console.log(`✔️Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } 
    return console.log(`❌Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  
};

//Main Code
const letterPositions = function(sentence) {
  const results = {};
  for (let charIndex = 0; charIndex < sentence.length; charIndex++) {
    if (results[sentence[charIndex]]) {
      results[sentence[charIndex]].push(charIndex);
    } else {
      results[sentence[charIndex]] = [charIndex];
    }
  }
  return results;
};

//Testing
const alphaTestString = 'hello';
const alphaExpected = {h:[0],e:[1],l:[2,3],o:[4]};

const result1 = letterPositions(alphaTestString);

assertArraysEqual(result1.e, alphaExpected.e);
assertArraysEqual(result1.l, alphaExpected.l);
assertArraysEqual(result1.o, alphaExpected.o);