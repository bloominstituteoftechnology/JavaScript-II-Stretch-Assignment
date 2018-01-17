// Complete the following functions.

const nFibonacci = (n) => {
  
 if (n <= 2) return 1;
 return nFibonacci(n - 2) + nFibonacci(n - 1);
};		 
      
const nFactorial = (n) => {		  
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1		    // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`		    // return the factorial of `n`
 if (n === 1) {
  return 1;
  }
    return n * nFactorial(n - 1);
};		  
      
/* Extra Credit */		  /* Extra Credit */
const checkMatchingLeaves = (obj) => {		  
  // return true if every property on `obj` is the same		    // return true if every property on `obj` is the same
  // otherwise return false		    // otherwise return false
  const leaves = [];
  const findLeaves = (object) => {
    Object.values(object).forEach((value) => {
    if (value === Object(value)) {
    findLeaves(value);
    } else {
      leaves.push(value);
    }
  });

 };
  

  findLeaves(obj);
  return leaves.every(x => x === leaves[0]);
};		  

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
