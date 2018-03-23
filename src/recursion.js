// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if(n <= 1) return 1;
  return nFibonacci(n-1) + nFibonacci(n-2); 
};
/*
                                                                   [5+3]fib(5) ---> 8
                                              [3+2]fib(4)                    +                              [2+1]fib(3)
                                   [3]fib(3)       +            [2]fib(2)                           [2]fib(2)   +     [1] fib(1) [base]
                             [2]fib(2) + [1]fib(1)[base]     fib(1) + fib(0) [base]             fib(1) + fib(0) [base]             
                           fib(1) + fib(0)[base]
returns: (from bottom to up) showing in []
*/

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if(n === 1) {
    return 1; 
  }
  return n * nFactorial(n-1); 
};
/*
nFact(5) ---> 120
5 * nFact(4)// 5 * 24
4 * nFact(3)// 4 * 6
3 * nFact(2)// 3 * 2
2 * nFact(1)[base]

*/

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  /*
  //we take a empty array where we will store all the values form the inner objects. 
  // we invoke an Immidiately Invoked Functional Expression(IIFE), with the object passed as parameter. 
    // we get all the keys of the params and loop through and check if any key is an object or not
      // if we find any inner object, we call the rec, recursively with the found key(inner object).
      // if its not an object we populate the empty array with its corresponding value.
    //after the foreach is finished, we exit the IIFE. 
    // check if the values array contains all same item or not , if yes return true, else return false.  
  */
  var values = [];

  (function rec(param) {
    Object.keys(param).forEach(function(key) {
      if (typeof param[key] === 'object') return rec(param[key]);
      values.push(param[key])
    })  
  })(obj);

  return values.every( x => values[0] === x);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
