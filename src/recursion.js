// Complete the following functions.
const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // 1 1 2 3 5 8   starting with 1 and 1 then add the previous two numbers to get to the Fn = F(n - 1) + F(n - 2)
  if (n < 3) return 1;
  const results = nFibonacci(n - 1) + nFibonacci(n - 2);
  return results;
};

const nFactorial = (n) => {
  // negative factorials are undefined, So make sure this case is covered
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  // n! = 1* 2 *3 *....*n
  // Base case terminates and prevents and infinite loop
  if (n < 0) return; // implemented this to catch negative numbers 
  if (n < 2) return 1; // termination of the recursive function
  return n * nFactorial(n - 1); // recursive part
};

const tree1 = {
  x: 1,
  y: 1,
  z: 1,
  xa: {
    xx: 1,
    xy: 1,
    xz: 1,
    zz: {
      a: {
        b: {
          z: 1,
        },
      },
    },
  },
};


/* Extra Credit */
const checkMatchingLeaves = (parentObj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // Object.key(obj) = keys   
  let boolFlag = true;
  let value = null; // didn't use 0 because 0 may be a value we could test for 

  const checkNode = (obj) => {
    // console.log(obj);
    const myKeys = Object.keys(obj);
    // console.log(myKeys);
    myKeys.forEach((item) => {
      if (value === null && typeof obj[item] !== 'object'){
        value = obj[item];
        return undefined;
      }
      if (typeof obj[item] === 'object') {
        // console.log(item, 'obj');
        return checkNode(obj[item]);
      } 
      if (value !== obj[item]) {
        boolFlag = false;
        return undefined;
      }
      return undefined;
    });
  }
  checkNode(parentObj); // recursion begins 
  return boolFlag;
};

console.log(checkMatchingLeaves(tree1));

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
