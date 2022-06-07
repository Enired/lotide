const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(objectOne, objectTwo) {
  const inspect = require('util').inspect;
  if (eqObjects(objectOne, objectTwo)) {
    return console.log(`✔️Assertion passed: ${inspect(objectOne)} === ${inspect(objectTwo)}`);
  }
  return console.log(`❌Assertion failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}`);
};

module.exports = assertObjectsEqual;