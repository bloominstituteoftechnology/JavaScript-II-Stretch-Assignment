// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

// console.log(nFibonacci(5));

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

// console.log(nFactorial(5));

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  // console.log(obj);
  let val; // store value of property
  let flag = true; // keep track of wether properties are all true
  const checkLeaves = (tree) => {
    Object.keys(tree).forEach((key) => {
      if (val === undefined && typeof key !== 'object') { // property is not an object
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') { // property is an object
        return checkLeaves(tree[key]); //
      }
      if (tree[key] !== val) { //
        flag = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaves(obj); // loop over function before hits return flag line
  return flag;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
