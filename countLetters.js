const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  }
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
    if (results[char]) {
      results[char]++;
    } else {
      results[char] = 1;
    }
  }
  console.log(results);
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