const flatten = function(array) {
  let flattenedArray = [];
  if(array && Array.isArray(array)){

    for (let element of array) {
      Array.isArray(element) ? flattenedArray = flattenedArray.concat(element) : flattenedArray.push(element);
    }
    //Recursion to flatten deeper arrays.
    for (let element of flattenedArray) {
      if (Array.isArray(element)) {
        flattenedArray = flatten(flattenedArray);
      }
    }
  }

  return flattenedArray;
};

module.exports = flatten;

