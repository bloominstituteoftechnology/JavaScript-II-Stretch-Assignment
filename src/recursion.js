// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0) return 0;
  if (n === 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj1) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let flag = true;
  let val = 0;
  const checkLeaves = (obj) => {
    const myKeys = Object.keys(obj);
    myKeys.forEach((item) => {
      if (val === 0 && typeof item !== 'object') {
        val = obj[item];
        return undefined;
      }
      if (typeof obj[item] === 'object') {
        return checkLeaves(obj[item]);
      }
      if (obj[item] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
    }); //  end of forEach
  };  // end of checkLeaves()
  checkLeaves(obj1);
  return flag;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
