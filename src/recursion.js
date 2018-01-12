// Complete the following functions.

const nFibonacci = (n) => {
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
};

const nFactorial = (n) => {
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const array = [];
  const nestedObject = (item) => {
    Object.keys(item).forEach((value) => {
      if (typeof item[value] === 'object') {
        nestedObject(item[value]);
      } array.push(item[value]);
    });
  };
  nestedObject(obj);

  for (let i = 1; i < array.length; i++) {
    const start = array[0];
    if (array[i] !== start) return false;
  } return true;
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
