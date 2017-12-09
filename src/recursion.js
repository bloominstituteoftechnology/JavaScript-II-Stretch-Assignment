// Complete the following functions.

const nFibonacci = (n) => {
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
/* Stretch Alogorithm */
const checkMatchingLeaves = (obj) => {
  // initialize some value...
  // initialize some flag.. boolean.
  // initialize some helper function and pass obj... leaf checker recursive function
    // check all the keys = this is a hint......for loop of some kind
    // if a key is an object && initial value is undef
      // assign value
    // if a value is an object ==> recurse
    // if a value is found, and it doesn't match our initial value
    // trip our flag to false
    // return;
  // return true/false
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const flatObj = Object.values(obj);
  let i = 0;
  if (i > checker.length) return;     // base case = all props compared
  if // test all props of top level obj, return false if any != (IE prop[i] == prop[i+1])
    // test all props of nested obj, return false if any !=
};
/* 
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  const index = 0;
  const objArray = Object.values(obj);

  const testFunction = (arr, i) => {
    while (i < arr.length - 1) {
      if (arr[i] !== arr[++i]) {
        return false;
      }
      return testFunction(arr, i++);
    }
    return true;
  };

  return testFunction(objArray, index);
};
*/

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
