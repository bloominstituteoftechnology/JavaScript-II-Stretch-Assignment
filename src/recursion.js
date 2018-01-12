// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const helper = (input) => {
    if (Object(input) !== input) return input; // check if input is object
    const keys = Object.keys(input);  //  create array of input object keys
    const firstValue = input[keys[0]];  //  store first value into variable
    if (Object(firstValue) === firstValue) return helper(firstValue); //  check if Object(firstValue) is equal to firstValue
    return firstValue; // run helper function until first values are not equal and return firstValue
  };
  const keys = Object.keys(obj);  // create array of keys for obj
  const firstValue = obj[keys[0]];  // store first value of obj into variable
  for (let i = 0; i < keys.length; i++) { //  run a for loop to iterate over the array
    const currentValue = obj[keys[i]];  // store current value
    if (Object(currentValue) === currentValue && !checkMatchingLeaves(currentValue)) return false;
    if (helper(currentValue) !== helper(firstValue)) return false;
  }
  return true;
};

// check first object value
// compare first object value with every other object value
// if any are different, return false
// if all are equal, return true;

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
