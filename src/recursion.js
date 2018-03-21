// Complete the following functions.

const nFibonacci = (a, b, n) => {
  if (n) return nFibonacci(b, a + b, n - 1);
  return a;
};
nFibonacci(0, 1, 9);
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence

const nFactorial = (n) => {
  if (n < 2) return; // base
  return n * nFactorial(n - 1);
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
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
