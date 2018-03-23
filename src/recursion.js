// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  if (n <= 1) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return n;
  return n * nFactorial(--n);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  const keys = Object.keys(obj);
  const key1 = keys.pop();
  const value1 = obj[key1];

  if (typeof value1 === 'object') return checkMatchingLeaves(value1);

  const key2 = keys.pop();
  const value2 = obj[key2];
  delete obj[key1];

  if (Object.keys(obj).length === 0) return true;

  return checkMatchingLeaves(obj) && value1 === value2;
};

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
