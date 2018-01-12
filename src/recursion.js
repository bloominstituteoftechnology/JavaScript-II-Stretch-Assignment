// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) {
    return n;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
// factorial example: !5 = 5 * 4 * 3 * 2 * 1
// return the factorial of `n`
  if (n <= 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // make a list of the values in obj
  const values = [];
  const getValues = (object) => {
    Object.values(object).forEach((value) => {
      if (Object(value) === value) {
        getValues(value);
      } else {
        values.push(value);
      }
    });
  };
  getValues(obj);
  return values.every(x => x === values[0]);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
