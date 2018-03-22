// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // precourse code for reference (loop)
  // make a number variable for the input
  // if number is equal to 0 or 1, return 1
  // otherwise add two previous intergers together to get a new value
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // Factorial is a number that is multiply all numbers below it
  // Check if number is 1 or 0 return as 1
  // Otherwise multiply the number times itself minus 1
  //Keep going until number equals 1 with given value
  {
    if (n === 1) {
      return n;
    }
    return n * nFactorial(n - 1);
  }
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
