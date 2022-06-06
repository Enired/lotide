const checkArrayMinLength = function(array) {
  if (array.length < 3) {
    return true;
  }
  return false;
};


const checkIfArrayIsEven = function(array) { //Only need to check for even, because if it's not even it's odd.
  if (array.length % 2 === 0) {
    return true;
  }
  return false;
};

const findIndexOfMiddle = function(array) {
  return Math.floor(array.length / 2);
};

const findMiddle = function(array) {
  let middle = [];
  if(array && Array.isArray(array)){
    if (checkArrayMinLength(array)) {
      return middle;
    }
    if (checkIfArrayIsEven(array)) {
      middle.push(array[findIndexOfMiddle(array) - 1]);
      middle.push(array[findIndexOfMiddle(array)]);
      return middle;
    }
    middle.push(array[findIndexOfMiddle(array)]);
  }
  return middle;
};

module.exports = findMiddle;
