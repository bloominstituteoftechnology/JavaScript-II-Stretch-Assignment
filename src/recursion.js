// Complete the following functions.

const nFibonacci = (n) => {
  let fibonacci = 1;
  for (let i = n; i >= 1; i--) {
    fibonacci = (fibonacci += 1) * i;
  } return fibonacci;
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
};
console.log(nFibonacci()); 

if (n <=1 ){
  return n;
}
//gotta finish , check notes


if (n <= 1){
  return n;
}
return nFibonacci(n-1) + nFibonacci(n-2);

const nFactorial = (n) => {
  if (n<=1){
    return n;
  }
  return n * nFactorial(n-1);
 
  /*
  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  } return fact;
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
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
