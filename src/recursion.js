// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
<<<<<<< HEAD
  if (n === 1 || n === 0) return n;
  const numLimit = n;
  let numSequence = 2;
  let curFib = 1;
  let prevFib = 1;
  const nextNumber = () => {
    if (numSequence === numLimit) return curFib;
    numSequence++;
    curFib += prevFib;
    prevFib = curFib - prevFib;
    return nextNumber(numSequence);
  };
  return nextNumber(numLimit);
=======
  if (n <= 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
>>>>>>> 566b3ad1ec17f86faad64d11921a7bce101d56dd
};

// function fibonacci(num) {
//   if (num <= 1) return 1;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
// console.log(fibonacci(5))

const nFactorial = (n) => {
<<<<<<< HEAD
    // factorial example: !5 = 5 * 4 * 3 * 2 * 1
    // return the factorial of `n`
  let count = n;
  const nextFactorial = (n1) => {
    count--;
    if (count > 0) return nextFactorial((n1 *= count));
    return n1;
  };
  return nextFactorial(n);
=======
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
>>>>>>> 566b3ad1ec17f86faad64d11921a7bce101d56dd
};

// console.log(nFactorial(5));

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let value;
  let allLeavesSame = true;
  const checkLeaves = (object) => {
    Object.keys(object).forEach((key) => {
      if (value === undefined && typeof key !== 'object') {
        value = object[key];
        return;
      }
      if (typeof object[key] === 'object') return checkLeaves(object[key]);
      if (value !== object[key]) {
        allLeavesSame = false;
      }
    });
    return;
  };
  checkLeaves(obj);
  return allLeavesSame;
};
// const tree1 = {
//   x: 1,
//   y: 1,
//   z: 1,
//   xa: {
//     xx: 1,
//     xy: 1,
//     xz: 1,
//     zz: {
//       a: {
//         b: {
//           z: 1,
//         },
//       },
//     },
//   },
// };
// const tree2 = {
//   x: 1,
//   y: 1,
//   z: 1,
//   xa: {
//     xx: 1,
//     xy: 1,
//     xz: 1,
//     zz: {
//       a: {
//         b: {
//           z: 2,
//         },
//       },
//     },
//   },
//   r: 1,
// };
// console.log(checkMatchingLeaves(tree1));
// console.log(checkMatchingLeaves(tree2));

// const tree1 = {
//   x: 1,
//   y: 1,
//   z: 1,
// };
// const tree2 = {
//   x: 1,
//   y: 1,
//   z: 2,
// };


/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
