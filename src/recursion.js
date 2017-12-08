// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) {
    return 1;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let checkValue;
  let doAllValuesMatch = false;
  function checker() {
    const newArr = Object.values(obj);
    for (let i = 0; i < newArr.length; i++) {
      if (typeof newArr[i] === 'object' && checkValue === undefined) {
        checkValue = newArr[i];
      }
      if (typeof checkValue === 'object') {
        checkMatchingLeaves(checkValue);
      }
      if (newArr[i] !== checkValue) {
        doAllValuesMatch = false;
      } else {
        doAllValuesMatch = true;
      }
    }
    return;
  }
  checker(obj);
  return doAllValuesMatch;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
