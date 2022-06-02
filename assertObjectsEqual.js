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

const assertObjectsEqual = function(objectOne, objectTwo){
  const inspect = require('util').inspect;
  if (eqObjects(objectOne, objectTwo)) {
    return console.log(`✔️Assertion passed: ${inspect(objectOne)} === ${inspect(objectTwo)}`);
  }
   return console.log(`❌Assertion failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`);
}

assertObjectsEqual({hello:1,goodbye:2},{goodbye:2, hello:1})
assertObjectsEqual({hello:1,goodbye:2}, {hello:1,goodbye:2, sayonara: 3})