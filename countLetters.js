const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  }
  return console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  
};

const eliminateSpaces = function(sentence) {
  let sentenceWhitespacesRemoved = sentence;
  while (sentenceWhitespacesRemoved.includes(' ')) {
    sentenceWhitespacesRemoved = sentenceWhitespacesRemoved.replace(' ', '');
  }
  return sentenceWhitespacesRemoved;
};

const countLetters = function(sentence) {
  let results = {};
  let newSentence = eliminateSpaces(sentence);
  for (let char of newSentence) {
    results[char] ? results[char]++ : results[char] = 1;
  }
  return results;
};

let alphaTestString = 'derine is here';
let betaTestString = 'what am i doing';
let charlieTestString = 'imposter syndrome';

const alphaResult = countLetters(alphaTestString);
const betaResult = countLetters(betaTestString);
const charlieResult = countLetters(charlieTestString);

assertEqual(alphaResult.i, 2);
assertEqual(betaResult.a, 2);
assertEqual(charlieResult.s, 2);