//Assert Function
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
//   }
//   return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
// };

const findKeyByValue = function(givenObj,givenVal) {
  let foundKey;
  for (let key in givenObj) {
    if (givenObj[key] === givenVal) {
      foundKey = key;
    }
  }
  return foundKey;
};

module.exports = findKeyByValue;

//Testing
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');

// const allMyFriendsAge = {
//   ryan : 27,
//   angus : 30,
//   luis : 31,
// };

// assertEqual(findKeyByValue(allMyFriendsAge, 30), 'angus');
// assertEqual(findKeyByValue(allMyFriendsAge, 27), 'ryan');