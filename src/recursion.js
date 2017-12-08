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
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let tester;
  let flag = true;
  const checkLeaves = (object) => {
    Object.keys(object).forEach((elem) => {
      if (tester === undefined && typeof elem !== 'object') {
        tester = object[elem];
      }
      if (typeof object[elem] === 'object') {
        return checkLeaves(object[elem]);
      }
      if (object[elem] !== tester) {
        flag = false;
      }
    });
  };
  checkLeaves(obj);
  return flag;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
