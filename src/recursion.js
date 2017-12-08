// Complete the following functions.

const nFibonacci = (n) => {
  if (n < 2) {
    return 1;
  }
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
const checkMatchingLeaves = (obj) => {
  let tester;
  let flag = true;
  const checkLeaves = (object) => {
    // console.log(Object.keys(object));
    Object.keys(object).forEach((elem) => {
      if (tester === undefined && typeof elem !== 'object') {
        tester = object[elem];
      }
      if (typeof object[elem] === 'object') {
        return checkLeaves(object[elem]);
      }
      if (object[elem] !== tester) {
        flag = false;
      }
    });
  };
  checkLeaves(obj);
  return flag;
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
checkMatchingLeaves(tree1);

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
