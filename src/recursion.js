// Complete the following functions.

const nFibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2); // fibonacci sequence: 1 1 2 3 5 8 13 ...
    // return the nth number in the sequence
};

const nFactorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;// factorial example: !5 = 5 * 4 * 3 * 2 * 1
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
