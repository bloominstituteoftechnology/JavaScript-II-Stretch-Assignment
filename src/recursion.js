// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n === 0 || n === 1) return 1;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return n;

  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  /*
  const lightFlatten = arr => [].concat(...arr);

  const heavyFlatten = (object) => {
    return lightFlatten(Object.values(object).map((element) => {
      if (typeof element === 'object') {
        return heavyFlatten(element);
      }
      return element;
    }));
  };
  return new Set(heavyFlatten(obj)).size === 1;

  -------------------
  function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
  */
  // let test = nObj => Array.from(new Set(Object.values(nObj)));

  // return Array.from(new Set(Object.values(obj)));
  /* const smallfix = (newObj) => {
    return Array.from(new Set(Object.values(newObj))).reduce((memo, toFlat) => {
      return memo.concat(typeof toFlat === 'object' && toFlat !== null && !Array.isArray(obj)
        ? smallfix(toFlat)
        : toFlat);
    }, []);
  };
  return new Set(smallfix(obj)).size === 1; */
  return new Set(JSON.stringify(obj).replace((/,|{|}|"[^"]+":/g), '')).size === 1;
};
 /* const tree1 = {x: 1, y: 1, z: 1, xa: { xx: 1, xy: 1, xz: 1, zz: { a: { b: { z: 1, }, }, }, }, x: 2, y: 1, z: 1, xa: { xx: 1, xy: 1, xz: 1,
 zz: { a: { b: { z: 1, }, }, }, }, r: 1, };
 console.log(new Set(JSON.stringify(tree1).replace((/,|{|}|"[^"]+":/g), '')).size === 1); */

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
