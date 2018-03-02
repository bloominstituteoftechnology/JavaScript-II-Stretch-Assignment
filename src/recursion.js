// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0) return 0;
  if (n === 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let flag = true;
  let val = 0;

  const valueScimmer = Object.values(obj);

  valueScimmer.forEach((el) => {
    if (val === 0 && typeof el !== 'object') {
      val = el;
      return undefined;
    }
  });

  function checkLeaves(ob) {
    const arrValues = Object.values(ob);

    for (let i = 0; i < arrValues.length; i++) {
      if (typeof arrValues[i] === 'object') {
        checkLeaves(arrValues[i]);
      } else {
        if (arrValues[i] !== val) flag = false;
      }
    }
  }
  
  checkLeaves(obj);
  return flag;
  };

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
