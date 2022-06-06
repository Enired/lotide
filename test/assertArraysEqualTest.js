const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['Angus', 'Luis', 'Ryan'], ['Angus', 'Luis', 'Ryan']);
assertArraysEqual([1, '2', 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], []);
assertArraysEqual([1, 2, 3], [1, null, 3]);