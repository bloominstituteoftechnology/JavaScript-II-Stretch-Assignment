// Complete the following functions.

// https://www.sitepoint.com/recursion-functional-javascript/

// see https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // check for base and return
  if (n <= 1) return 1;
  // otherwise we know Fibonacci(n) is made of up Fib(n-2) + Fib(n-1) which is recursive
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
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
