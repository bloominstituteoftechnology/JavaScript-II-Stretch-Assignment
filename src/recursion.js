// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) {
    return n;
  } else {
    return nFibonacci(n -1) + nFibonacci(n - 2);
  }
};

console.log(nFibonacci(4));

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * nFactorial(n -1);
  }
};

console.log(nFactorial(5));

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
