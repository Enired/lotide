///////////////
// Main Code //
///////////////

const head = function(array) {
  if(!array){
    return undefined;  
  }
  return array[0];
};

module.exports = head;