// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Stretchy Stretch Problem of Stretchiness */
const checkMatchingLeaves = (obj) => {
  let result = true;
  const testArr = [];

  const recur = (objGiven) => {
    Object.keys(objGiven).forEach((key) => {
      if (typeof objGiven[key] === 'number' || typeof objGiven[key] === 'string') {
        testArr.push(objGiven[key]);
      }
      if (typeof objGiven[key] === 'object') {
        recur(objGiven[key]);
      }
    });
  };

  recur(obj);

  testArr.reduce((memo, i) => {
    if (memo !== i) {
      result = false;
    }
    return i;
  });
  return result;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
