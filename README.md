# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @enired/lotide`

**Require it:**

`const _ = require('@enired/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: assertion message output when comparing two arrays. Uses eqArrays for comparison.
* `assertEqual`: assertion message output when comparing two primitive values. *(I.e: Strings, Numbers, Boolean)*
* `assertObjectsEqual`: assertion message output when comparing two objects. Uses eqObjects for comparison.
* `countLetters`: Determines how many times a specific letter occurs in a given string.
* `countOnly`: Determines how many times a specific item occurs in a given list.
* `eqArray`: Determines if 2 given arrays are equal or not. Returns boolean.
* `eqObjects`: Determines if 2 given objects are equal or not. Returns boolean.
* `findKey`: Returns the *first* key of an object whose value meets the condition given.
* `findKeyByValue`: Returns the *last* key of an object whose value matches the value given.
* `flatten`: Returns a flattened array when given an array with nested arrays.
* `head`: Returns the first value of a given array.
* `letterPositions`: Determines the letters of a given string, and at what positions those letters occur. Returns an object where the letter is a key, and it's positions the value of that key.
* `map`: Returns an array of values after the callback function changes the original values of the array given.
* `middle`: Returns the middle value of an array. If the array is even in length, then the 2 middle values will be returned.
* `tail`: Returns all the values after the first item of an array.
* `takeUntil`: Returns all the items in a given array up until the conditions specified in the callback function are met.
* `without`: Returns an array with items from the original array without the specified item.
