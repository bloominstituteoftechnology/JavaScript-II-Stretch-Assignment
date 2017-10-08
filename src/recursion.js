// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  // Basically reused flattenedArr from previous work.
  const flatten = (elements) => {
    const flattenedArr = Object.values(elements).reduce((memo, item) => {
      if (typeof item === 'object') return memo.concat(flatten(item));
      return memo.concat(item);
    }, []);
    return flattenedArr;
  };

  // Attempted solution w/o use of flatten(obj) but wasn't able to test
  // flattened array and return a boolean w/o extra function.
  const flatArr = flatten(obj);
  if (!flatArr.every(element => element === flatArr[0])) {
    return false;
  }
  return true;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
