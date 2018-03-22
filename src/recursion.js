// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) {
    return 1;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const referenceValue = [];
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const ogObjectValues = Object.values(obj);
  referenceValue.push(ogObjectValues[0]);
  const fixedReference = referenceValue[0];

  let result = true;
  const tempValues = Object.values(obj);

  tempValues.forEach((element) => {
    if (element !== fixedReference && typeof element !== 'object') {
      result = false;
    }
    if (typeof element === 'object') {
      const thisValue = checkMatchingLeaves(element);
      if (thisValue === false) {
        result = false;
      }
    }
  });
  return result;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
