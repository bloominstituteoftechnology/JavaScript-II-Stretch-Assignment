// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0 || n === 1) return 1;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

nFibonacci(5);

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return n;

  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const check = (objPass) => {
    const arr = [];
    Object.keys(objPass).forEach((key) => {
      if (typeof objPass[key] === 'object') {
        const flatObj = check(objPass[key]);
        Object.keys(flatObj).forEach((secKey) => {
          arr.push(flatObj[secKey]);
        });
      } else {
        arr.push(objPass[key]);
      }
    });
    return arr;
  };
  const arr = check(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && i + 1 !== arr.length) return false;
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
