// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 0) return 1;
  return (n * nFactorial(n - 1));
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const testCase = obj[Object.keys(obj)[0]];
  const x = (o, tC) => {
    const obKey = Object.keys(o);
    for (let i = 0; i < obKey.length; i++) {
      if (typeof o[obKey[i]] === 'object') return x(o[obKey[i]], tC);
      if (testCase !== o[obKey[i]]) return false;
    }
    return true;
  };
  return x(obj, testCase);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
