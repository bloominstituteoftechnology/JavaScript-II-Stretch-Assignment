// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (num) => {
  if (num === 0) return 1;
  return num * nFactorial(num - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj, result = false) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const checker = Object.values(obj)[0];
  result = true;
  const a = Object.keys(obj);

  a.forEach((el) => {
    if (obj[el] !== checker && Object.values(obj[el]).length < 1) {
      result = false;
    } else if (Object.values(obj[el]).length > 0) {
      result = checkMatchingLeaves(obj[el], checker, result);
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
