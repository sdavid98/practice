// Find and return the unique element in an array of numbers
// Example
// [1, 2, 3, 4, 3, 2, 1]
// The unique element is 4.

const getUniqueNumber = (arr) => {}

// Find the median of given array
// Example
// [4, 15, 7, 1, 3]
// Should return 4.

const getMedian = (arr) => {}

// Find mode of array
// Example
// [4, 3, 7, 1, 3, 7, 3, 1, 3]
// Should return 3.

const getMode = (arr) => {}

// Return the letters of a given word in alphabetical order, omitting duplications
// Example
// "Hello World"
// Should return ['d', 'e', 'h', 'l', 'o', 'r', 'w'].

const getUniqueCharsSorted = (str) => {}

// Create an array method that adds up the numbers in the array it was called on
// Example usage
// [1, 4, 5].sum() === 10

// Write a function that can add 2 numbers, but with 2 different syntax
// Example
// add(2, 3) === add(2)(3)

const add = () => {}

// Find out if 2 objects are the same
// Example
// isEqualObjects({a: 1, b: 2}, {b: 2, a: 1}) === true
// isEqualObjects({a: 1, b: 2}, {b: 2, a: 1, c: 0}) === false

const isEqualObjects = (obj1, obj2) => {}

// Below is a list of call history. Group the calls by caller, and sort it by number of calls descending. Calculate the average call duration for each caller.
// Example
// groupCalls(calls) === [{caller: Caller, numberOfCalls: 3, avgCallDuration: 3:00}, ...]

const calls = [{
    "caller": "Huntington",
    "callDuration": "2:22"
  }, {
    "caller": "Laureen",
    "callDuration": "9:05"
  }, {
    "caller": "Jennica",
    "callDuration": "14:10"
  }, {
    "caller": "Leela",
    "callDuration": "6:38"
  }, {
    "caller": "Jennica",
    "callDuration": "6:12"
  }, {
    "caller": "Jennica",
    "callDuration": "4:55"
  }, {
    "caller": "Neila",
    "callDuration": "1:11"
  }, {
    "caller": "Laureen",
    "callDuration": "13:01"
  }, {
    "caller": "Dolly",
    "callDuration": "6:31"
  }, {
    "caller": "Laureen",
    "callDuration": "8:17"
  }]
  
const groupCalls = (calls) => {}

module.exports = {
  getUniqueNumber,
  getMedian,
  getMode,
  getUniqueCharsSorted,
  add,
  isEqualObjects,
  calls,
  groupCalls
}