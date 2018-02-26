// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0 || n === 1) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};


const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
  // return true if every property on `obj` is the same
  // otherwise return false
  // values in one object are the same
  // compare the value
  // find the same values and return true or false
  // how do I get to the value on the property of the object???
// const checkMatchingLeaves = (obj) => {

const checkMatchingLeaves = (obj) => {
  let flag = true;
  let value;
  const compare = (object) => {
    Object.keys(object).forEach((key) => {
      if (value === undefined && typeof object[key] !== 'object') {
        value = object[key];
        return;
      }
      if (typeof object[key] === 'object') return compare(object[key]);
      if (object[key] !== value) {
        flag = false;
        return;
      }
      return;
    });
  };
  compare(obj);
  return flag;
};

const objectCompare = { notSame: 2, stillDifferent: 3 };

// const checkMatchingLeaves = (obj) => {
//   let value;
//   let allMatch = true;

//   const checkLeaves = (object) => {
//     Object.keys(object).forEach((key) => {
//       if (value === undefined && typeof object[key] !== 'object') { // will only ever run once
//         value = object[key];
//         return; // breaks out of forEach
//       }
//       if (typeof object[key] === 'object') return checkLeaves(object[key]);
//       if (object[key] !== value) {
//         allMatch = false;
//         return; // breaks out of forEach
//       }
//       return; // breaks out of forEach
//     });
//   };
//   checkLeaves(obj);
//   return allMatch;
// };

// const objectCompare = { notSame: 2, stillDifferent: 3 };
// console.log(checkMatchingLeaves(1));

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
