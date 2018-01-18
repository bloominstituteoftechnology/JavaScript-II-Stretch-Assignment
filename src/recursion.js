// Complete the following functions.

const nFibonacci = n =>
    n <= 2
      ? 1
      : nFibonacci(n - 1) + nFibonacci(n - 2)

const nFactorial = (n) => {
  if(n === 1) return 1
  return n * nFactorial(n - 1)
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  // Hint? Not sure if this is going to help...
  //Object.prototype.toString.call(obj) === '[object Object]'
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
