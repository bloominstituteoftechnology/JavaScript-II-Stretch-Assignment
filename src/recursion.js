// Complete the following functions.
const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let x = 0;
  let y = 1;
  if (n <= 2) return n;
  for (let i = 0; i < n; i++) {
    const tempY = y;
    y = tempY + x;
    x = tempY;
  }
  return y;
};
const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n < 2) return n;
  let s = 1;
  for (let i = 1; i <= n; i++) {
    s *= i;
  }
  return s;
};
/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  const arr = Object.keys(obj);
  const prev = obj[arr[0]];
  let test = false;
  for (let i = 1; i < arr.length; i++) {
    if (typeof obj[arr[i]] === 'object') checkMatchingLeaves(obj[arr[i]]);
    if (obj[arr[i]] === prev) {
      test = true;
    } else {
      return false;
    }
  }
  return test;
  // otherwise return false
};
/* eslint-enable no-unused-lets */
module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
