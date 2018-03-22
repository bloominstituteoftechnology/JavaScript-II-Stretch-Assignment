// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
//   if (n === 0) {
//     return 1;
//   } else if (n === 1) {
//     return 1;
//   }
//   return nFibonacci(n - 1) + nFibonacci(n - 2);
// };
// nFibonacci(3);
if (n <= 1 ) return n;
return nFibonacci(n - 1) + nFibonacci(n - 2);
};
nFibonacci(5);

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // Factorial is a number that is multiply all numbers below it
  // Check if number is 1 or 0 return as 1
  // Otherwise multiply the number times itself minus 1
    //Keep going until number equals 1 with given value
  if (n === 1) {
    return n;
  }
  return n * nFactorial(n - 1);
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
