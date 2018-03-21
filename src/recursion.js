// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // base case: n is 1
  if (n <= 1) {
    return n;
  }
  // recursive case
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

// const nFibonacci = (n) => {
//   let fib = [1,1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // base case: n is 1
  if (n === 1) {
    return n;
  }
  // console.log(n);
  // recursive case
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // base case: mismatched keys
  let i = 1;
  const keys = Object.keys(obj);
  const initial = keys[0];
  if (initial !== keys[i]) {
    return false;
  }
  // recursive case
  delete obj.[keys[i]];
  i++;
  return checkMatchingLeaves(obj);
};

// const checkMatchingLeaves = (obj) => {
//   // return true if every property on `obj` is the same
//   // otherwise return false
//   let keys = Object.keys(obj);
//   let initial = keys[0];
  
//   for (let key of keys) {
//     if (initial != key) {
//       return false;  
//     }  
//   }
//   return true;
// };
// // let obj = {a : 1, a : 1, a : 1, a : 1, a : 1};
let obj = {a : 1, b : 1, c: 1, d : 1, e : 1};
console.log(checkMatchingLeaves(obj));

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
