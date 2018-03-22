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

  // initialize an array to hold properties only
  const leaves = [];
  const checkBranches = (object) => {
    // test the properties of obj
      // push 'branches' that are not objects {} to leaves
    const keys = Object.keys(object);
    keys.forEach((key) => {
      if (typeof object[key] !== 'object') {
        leaves.push(object[key]);
      }
      if (typeof object[key] === 'object') {
        // recursive case: key is an obj
          // go deeper into the obj to pull keys
        checkBranches(object[key]);
      }
    });
  };
  // adds all non object keys into leaves array
  checkBranches(obj);
  // bool is a switch to let us know if all leaves are equal
  let bool = true;
  // check to see if each key is the same
  leaves.reduce((a, b) => {
    // false case
    if (a !== b) {
      bool = false;
    }
    return a;
  });
  return bool;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
