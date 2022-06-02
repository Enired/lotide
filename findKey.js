//ASSERT FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  }
  return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
};

//MAIN CODE
const findKey = function(anObject, callBackFunction) {
  let foundKey;
  for (let key in anObject) {
    if (callBackFunction(anObject[key])) {
      foundKey = key;
      return foundKey;
    }
  }
  return foundKey;
};
//TESTING
const apexLegendsAlpha = {
  'Wraith': 300,
  'Octane' : 333,
  'Fuse' : 666,
  'Horizon' : 9001,
  'Mirage' : 2,
  'Ash': 13,
  'Rampart' : 732,
  'Pathfinder' : 834,
  'Bloodhound' : 324,
  'Crypto' : 23};


const apexLegendsBeta = {
  'Wraith': {bald : true},
  'Octane' : {bald : true},
  'Fuse' : {bald : false},
  'Horizon' : {bald : false},
  'Mirage' : {bald : true},
  'Ash': {bald : true},
  'Rampart' : {bald : true},
  'Pathfinder' : {bald : true},
  'Bloodhound' : {bald : true},
  'Crypto' : {bald : false}};

const apexLegendsCharlie = {
  'Wraith': {bald : true, 'Hair Color' : null},
  'Octane' : {bald : true, 'Hair Color' : null},
  'Fuse' : {bald : false, 'Hair Color' : 'black'},
  'Horizon' : {bald : false, 'Hair Color' : 'orange'},
  'Mirage' : {bald : true, 'Hair Color' : null},
  'Ash': {bald : true, 'Hair Color' : null},
  'Rampart' : {bald : false, 'Hair Color' : 'brown'},
  'Pathfinder' : {bald : true, 'Hair Color' : null},
  'Bloodhound' : {bald : true, 'Hair Color' : null},
  'Crypto' : {bald : false, 'Hair Color' : 'black'}};

//Assertequals Testing

console.log(`💡Assertequals Testing💡`);
console.log(`-----`);

console.log(`Test 1`);
let alphaResult = findKey(apexLegendsAlpha, legend => legend > 666);
let alphaExpected = 'Horizon';
assertEqual(alphaResult,alphaExpected);
console.log(`-----`);

console.log(`Test 2`);
let betaResult = findKey(apexLegendsBeta, legend => legend.bald === false);
let betaExpected = 'Fuse';
assertEqual(betaResult,betaExpected);
console.log(`-----`);

console.log(`Test 2`);
let charlieResult = findKey(apexLegendsCharlie, legend => legend['Hair Color'] === 'brown');
let charlieExpected = 'Rampart';
assertEqual(charlieResult,charlieExpected);
