// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
//   }
//   return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
// };

const assertEqual = require('./assertEqual');

const head = function(array) {
  if(!array){
    return undefined;  
  }
  return array[0];
};

module.exports = head;

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(['Luis','Angus', 'Ryan']), 'Luis');
// assertEqual(head(['Lighthouse Labs']), 'Lighthouse Labs');
// assertEqual(head([]), undefined);