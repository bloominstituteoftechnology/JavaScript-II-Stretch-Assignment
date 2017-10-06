// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  return (n < 3) ? n : nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  return (n === 0) ? 1 : (n * nFactorial(n - 1));
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const array = [];
  const flatten = (obj2) => {
    Object.keys(obj2).forEach((key) => {
      if (typeof obj2[key] === 'object') {
        flatten(obj2[key]);
      } else {
        array.push(obj2[key]);
      }
    });
  };
  flatten(obj);

  for (let i = 1; i < array.length; i++) {
    const memo = array[0];
    if (array[i] !== memo) {
      return false; // return false on very first false
    }
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
