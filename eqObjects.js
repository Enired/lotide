//Assert Functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  }
  return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
        if (!eqArrays(arrayOne[i],arrayTwo[i])) {
          return false;
        }
      } else {
        if (arrayOne[i] !== arrayTwo[i]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};



const eqObjects = function(objectOne, objectTwo) {
  //let result = true;
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }
  for (let key in objectOne) {
    
    // if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
    //   return eqArrays(objectOne[key], objectTwo[key]);
    // }
    //NEW CODE
    if (typeof objectOne[key] === 'object' && typeof objectTwo[key] === 'object') {
      if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
        if (!eqArrays(objectOne[key], objectTwo[key])) {
          return false;
        }
      } else {
        if (!eqObjects(objectOne[key], objectTwo[key])) {
          return false;
        }
      }
    } else {
      if (objectOne[key] !== objectTwo[key]) {
        return false;
      }
    }
  }
  return true;

};

//Testing
// console.log('Assert Test Part 1');
// const ab = {a: '1', b: '2'};
// const ba = {b: '2', a: '1'};
// const abc = {a: '1', b: '2', c: '3'};

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// console.log('Assert Test Part 2');
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd,dc), true);
// assertEqual(eqObjects(cd,cd2), false);

//Further Testing for recursion implementation
const apexLegendsAlpha = {
  Wraith: {
    gender: 'female',
    hair: false
  },
  Bloodhound : {
    gender: 'female',
    hair: true
  }
};
const apexLegendsBeta = {
  Wraith: {
    gender: 'female',
    hair: false
  },
  Bloodhound : {
    gender: 'female',
    hair: true
  }
};

const apexLegendsCharlie = {
  Wraith: {
    gender: 'female',
    hair: false
  },
  Bloodhound : {
    gender: 'female',
    hair: {
      helmet: true,
      hat: true
    }
  }
};
const apexLegendsDelta = {
  Wraith: {
    gender: 'female',
    hair: false
  },
  Bloodhound : {
    gender: 'female',
    hair: {
      helmet: true,
      hat: true
    }
  }
};
const apexLegendsEcho = {
  Wraith: {
    gender: 'female',
    hair: false
  },
  Bloodhound : {
    gender: 'female',
    hair: {
      helmet: true,
      hat: {
        metal:true
      }
    }
  }
};

assertEqual(eqObjects(apexLegendsAlpha, apexLegendsBeta), true);
assertEqual(eqObjects(apexLegendsAlpha, apexLegendsCharlie), false);
assertEqual(eqObjects(apexLegendsCharlie, apexLegendsDelta), true);
assertEqual(eqObjects(apexLegendsDelta, apexLegendsEcho), false);
