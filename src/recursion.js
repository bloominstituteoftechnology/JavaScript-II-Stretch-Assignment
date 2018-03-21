// Complete the following functions
const nFibonacci = (n) => {
  if (n <= 2) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  const o = n - 1;
  if (n === 1) {
    return n;
  }
  return n * nFactorial(o);
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
