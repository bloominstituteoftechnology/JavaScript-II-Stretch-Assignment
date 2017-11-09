// Complete the following functions.

const nFibonacci = (n) => {
  if (n < 2) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (num = 1) => {
  if (num === 1) { return num; }
  return num * nFactorial(--num);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  const keys = Object.keys(obj);
  if (typeof obj[keys[0]] === 'object') { checkMatchingLeaves(obj[keys[0]]); }
  for (let i = 1; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'object') { checkMatchingLeaves(obj[keys[i]]); }
    if (obj[keys[i]] !== obj[keys[0]] && typeof obj[keys[i]] !== 'object') { return false; }
  } return true;
};

// console.log(checkMatchingLeaves({ a: 10, e:{ c: { d: 10 } }, b: 10 }));

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
