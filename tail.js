const tail = function(array) {
  let newArray = [];
  if(array && Array.isArray(array)){
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = tail;