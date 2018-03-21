// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 2) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

// flatten object
// TODO
// var flattenObject = function(ob) {
//   return Object.keys(ob).reduce(function(toReturn, k) {
//     if (Object.prototype.toString.call(ob[k]) === '[object Date]') {
//       toReturn[k] = ob[k].toString();
//     } else if (typeof ob[k] === 'object' && ob[k]) {
//       var flatObject = flattenObject(ob[k]);
//       Object.keys(flatObject).forEach(function(k2) {
//         toReturn[k + '.' + k2] = flatObject[k2];
//       });
//     } else {
//       toReturn[k] = ob[k];
//     }

//     return toReturn;
//   }, {});
// };
// var now = new Date();
// var o = {
//   a: 4,
//   b: 'string b',
//   c: {
//     d: null,
//     e: 3,
//     f: {
//       g: 'string g',
//       h: ['in', 'an', 'array', { i: 'sneaky string in object of array' }],
//       i: undefined,
//     },
//     j: now,
//   },
// };
// console.log(flattenObject(o));
const flattenObject = nestedObject => nestedObject;

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  // flatten object
  flattenObject(Object.assign({}, obj));

  // obj needs to be flattened
  const t = new Set(Object.values(obj));

  if (t.size === 1) return true;
  return false;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
