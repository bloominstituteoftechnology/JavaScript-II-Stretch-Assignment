// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // const result = (n < 2) ? n : nFibonacci(n - 1) + nFibonacci(n - 2);
  // return result;
};
nFibonacci(10);

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n <= 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};
nFactorial(19);

/* Extra Credit */

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
// * **********************attempt **********************/
//   obj.forEach(leaf, checked) => {
//     if (leaf === obj[checked]) {
//       return true;
//     }
//     return false;
//   });
// };
// ***********************In class solution */
  let tree;
  let val;
  let flag = true;
  const checkLeaves = () => {
    Object.keys(tree).forEach((key) => {
      if (val === undefined && typeof key !== 'object') {
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') return checkLeaves(tree[key]);
      if (tree[key] !== val) {
        flag = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaves(obj);
  return flag;
};
checkMatchingLeaves();

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
