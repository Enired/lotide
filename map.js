//Assert Functions
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

const map = function(arrayToMap, callbackFunction) {
  const newlyMappedArray = [];

  for (let item of arrayToMap) {
    newlyMappedArray.push(callbackFunction(item));
  }
  return newlyMappedArray;
};

//Testing

const apexLegends = ['Wraith', 'Octane', 'Fuse', 'Horizon', 'Mirage', 'Ash', 'Rampart', 'Pathfinder', 'Bloodhound', 'Crypto'];

//Assertequals Testing

console.log(`Assertequals Testing`);
console.log('💡');
console.log(`-----`);

console.log(`Test 1`);
const alphaResults = map(apexLegends, apexLegend => apexLegend[0]);
const alphaExpected = ['W','O','F','H','M','A','R','P','B','C'];
assertArraysEqual(alphaResults, alphaExpected);
console.log(`-----`);

console.log(`Test 2`);
const betaResults = map(apexLegends, apexLegend => apexLegend.length);
const betaExpected = [6, 6, 4, 7, 6, 3, 7, 10, 10, 6];
assertArraysEqual(betaResults, betaExpected);
console.log(`-----`);

console.log('Test 3');
const charlieResults = map(apexLegends, apexLegend => apexLegend.toUpperCase());
const charlieExpected = ['WRAITH', 'OCTANE', 'FUSE', 'HORIZON', 'MIRAGE', 'ASH', 'RAMPART', 'PATHFINDER', 'BLOODHOUND', 'CRYPTO'];
assertArraysEqual(charlieResults, charlieExpected);
