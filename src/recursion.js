// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let arr = [1, 1, 2];
  for (i = 2; arr.length < (n + 2); i + arr[i++]) {
   i = arr[arr.length - 1] + arr[arr.length - 2];
   arr.push(i);
  }
  return arr[n];
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n != 1) {
    return n * nFactorial(n-1); 
  }
  else return 1;
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
