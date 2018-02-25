// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 3) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // when n = 1 and 2 it returns 1 so thats why you have to put it as an exception first
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n < 2) return 1;
  return n * nFactorial(n - 1);
};
// n < 2 works because both 1! and 0! return 1
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
