// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
//   }
//   return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
// };

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  if(allItems && itemsToCount){
    for (const item of allItems) {
      if (itemsToCount[item]) {
        results[item] ? results[item]++ : results[item] = 1;
      }
    }

  }
  return results;
};


module.exports = countOnly;