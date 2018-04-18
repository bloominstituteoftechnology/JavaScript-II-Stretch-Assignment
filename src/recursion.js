// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let previous = 0;
  let current = 1;
  let auxiliar = 0;
  let i = 0;
  do {
    auxiliar = previous + current;
    previous = current;
    current = auxiliar;
  } while (++i < n);
  return current;
};
console.log(nFibonacci(0));
console.log(nFibonacci(1));
console.log(nFibonacci(2));
console.log(nFibonacci(3));
console.log(nFibonacci(4));
console.log(nFibonacci(5));
console.log(nFibonacci(6));
console.log(nFibonacci(7));
console.log(nFibonacci(8));


const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  let i = 1;
  let factorial = 1;
  do {
    factorial *= i;
  } while (i++ < n);
  return factorial;
};
console.log(nFactorial(1));
console.log(nFactorial(2));
console.log(nFactorial(3));
console.log(nFactorial(4));
console.log(nFactorial(5));

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
