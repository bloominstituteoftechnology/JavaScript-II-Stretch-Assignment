// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 1) return 1;
  return nFibonacci(n - 1) + (n - 2);
};
nFibonacci(8);

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return 1;
  return n * nFactorial(n - 1);
  };

const factorial = nFactorial(10);

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
let val;
let allMatch = true;
const checkLeaves = (object).forEach((key) => {
  if (val === underfined && typeof key !== 'object') {
    return;
  }
  if (typeof object[key] === 'object') return checkLeaves(object[key]);
  if (object[key] !== val) {
    allMatch = false;
    return;
  }
  return;
});
};
checkLeaves(obj);
return allMatch;

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
