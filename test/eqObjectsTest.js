const chai = require('chai')
const assert = chai.assert;
const _ = require('../index');
const eqObjects = _.eqObjects;

describe('Tests for eqObjects.js. Determines if 2 given objects are equal or not. Returns boolean.', () =>{
  it('should return true when 2 objects are equal.', () => {
    const testArrayOne = {
      Wraith: {
        gender: 'female',
        hair: false
      },
      Bloodhound : {
        gender: 'female',
        hair: true
      }
    };
    const testArrayTwo = {
      Wraith: {
        gender: 'female',
        hair: false
      },
      Bloodhound : {
        gender: 'female',
        hair: true
      }
    };
    
    const result = eqObjects(testArrayOne, testArrayTwo);
    const expected = true;
    
    assert.equal(result, expected);
  })
  
  it('should return false when 2 objects are not equal.', () => {
    const testArrayOne = {
      Wraith: {
        gender: 'female',
        hair: false
      },
      Bloodhound : {
        gender: 'female',
        hair: true
      }
    };
    
    const testArrayTwo = {
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

const result = eqObjects(testArrayOne, testArrayTwo)
const expected = false;

assert.equal(result, expected)

  })

  it('should return false if one of the arrays is undefined', () => {
    let testArrayOne;
    const testArrayTwo = {
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
  
    
  const result = eqObjects(testArrayOne, testArrayTwo)
  const expected = false;
  
  assert.equal(result, expected)
    
  })
  it('should return false if one of the arrays is undefined', () => {
    const testArrayOne = {
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

    let testArrayTwo;
  
    
  const result = eqObjects(testArrayOne, testArrayTwo)
  const expected = false;
  
  assert.equal(result, expected)
    
  })

})




// //Further Testing for recursion implementation

// const apexLegendsDelta = {
//   Wraith: {
//     gender: 'female',
//     hair: false
//   },
//   Bloodhound : {
//     gender: 'female',
//     hair: {
//       helmet: true,
//       hat: true
//     }
//   }
// };
// const apexLegendsEcho = {
//   Wraith: {
//     gender: 'female',
//     hair: false
//   },
//   Bloodhound : {
//     gender: 'female',
//     hair: {
//       helmet: true,
//       hat: {
//         metal:true
//       }
//     }
//   }
// };

// assertEqual(eqObjects(apexLegendsAlpha, apexLegendsBeta), true);
// assertEqual(eqObjects(apexLegendsAlpha, apexLegendsCharlie), false);
// assertEqual(eqObjects(apexLegendsCharlie, apexLegendsDelta), true);
// assertEqual(eqObjects(apexLegendsDelta, apexLegendsEcho), false);