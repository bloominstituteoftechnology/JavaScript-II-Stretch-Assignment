// Complete the following functions.

const nFibonacci = (n) => {  /* CHECK */
  if (n < 2) {
    return 1;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

// console.log(nFibonacci(8));
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

const nFactorial = (n) => {  /* CHECK */
  if (n === 0) return 1;
  return n *= nFactorial(n - 1);
};
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
// console.log(nFactorial(6));

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
};

// return true if every property on `obj` is the same
  // otherwise return false

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
