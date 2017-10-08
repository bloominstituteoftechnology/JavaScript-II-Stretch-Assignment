// Complete the following functions.
const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

// nFibonacci(4);

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n == 1) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  
  const objKey = Object.keys(obj);
  const log1 = new Set(Object.keys(obj));
  const log1KeyLen = log1.size; /// ?
  console.log(`
objKey >>> ${objKey}
log1 >>> ${log1}
log1KeyLen >>> ${log1KeyLen}`);
  return (log1KeyLen === objKey.length ? false: true);
}; // not complete

console.log(checkMatchingLeaves(new Object({
  age: 1,
  age: 'foofy' // should be false
})));

/* eslint-enable no-unused-vars */

// module.exports = {
//   nFibonacci,
//   nFactorial,
//   checkMatchingLeaves,
// };
