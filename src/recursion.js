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
  const tempObj = Object.values(obj);
  for (let i = 1; i < tempObj.length; i++) {
    if (tempObj[i] === tempObj[0]) return true;
  } return false;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
