const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  }
  return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(true, false);
assertEqual('Netflix', 'Netflix');
assertEqual('Disney', "Disney");
assertEqual('light', 'LIGHT');
assertEqual('Dark', 'dark');
assertEqual(4.0, 4);
assertEqual(6,9);
