// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 1 || n === 2) {
    return 1;
  }

  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) {
    return 1;
  }

  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  obj = Object.assign({}, obj);

  // Work should only be done on leaves, turn the object into only leaves first
  // Any leaves overwritten by nested copies will not cause incorrect return
  const flatten = (object) => {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      if (typeof object[keys[i]] === 'object') {
        object = Object.assign(object, object[keys[i]]);
        delete object[keys[i]];
        return flatten(object);
      }
    }
    return object;
  };

  // Work function, recurses object by pruning a leaf and returning false if
  // the leaf does not match the next to be prune. Returns true if all leaves
  // but the last have been pruned
  const recurse = (object) => {
    const keys = Object.keys(object);
    if (keys.length === 1) {
      return true;
    }
    if (object[keys[0]] !== object[keys[1]]) {
      return false;
    }
    delete object[keys[0]];
    return recurse(object);
  };

  obj = flatten(obj);
  return recurse(obj);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
