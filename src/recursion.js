// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  const arr = [1, 1];
  for (let i = 0; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr[n - 1];
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
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let compare;
  let res = true;
  function check(objr) {
    Object.keys(objr).forEach((key) => {
      if (compare === undefined && typeof key !== 'object') {
        compare = objr[key];
      }
      if (typeof objr[key] === 'object') {
        return check(objr[key]);
      }
      if (objr[key] !== compare) {
        res = false;
      }
    });
  }
  check(obj);
  return res;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
