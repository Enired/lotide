//Used for Old Tests
//const assertEqual = require('./assertEqual');

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


////////////////////
// Old Test Cases //
////////////////////

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(['Luis','Angus', 'Ryan']), 'Luis');
// assertEqual(head(['Lighthouse Labs']), 'Lighthouse Labs');
// assertEqual(head([]), undefined);