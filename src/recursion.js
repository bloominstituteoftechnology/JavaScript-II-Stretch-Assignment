// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  
    if(n <= 2) { // this is my base case 
      return n;
    }
    else {
      console.log(n);
      return (nFibonacci(n - 1) + nFibonacci(n - 2));
      
    }
    // return the nth number in the sequence
    return n;

};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`

  // write the above function in a recursive way.
  
  if (n === 0) { // this is my base case
    return 1 
  } 
  else { return n*factorial2(n - 1) 
  }  
   
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
