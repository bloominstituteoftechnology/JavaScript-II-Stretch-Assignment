// Complete the following functions.

const nFibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return nFibonacci(n - 2) + nFibonacci(n - 1);  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
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
  let result = true;
  const leaves = [];
  const recur = (objGiven) => {
    Object.keys(objGiven).forEach((key) => {
      if (typeof objGiven[key] === 'number' || typeof objGiven[key] === 'string') {
        leaves.push(objGiven[key]);
      }
      if (typeof objGiven[key] === 'object') {
        recur(objGiven[key]);
      }
    });
  };
  recur(obj);
  leaves.reduce((memo, i) => {
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
