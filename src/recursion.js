// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  return n < 2 ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  return n <= 1 ? 1 : n * nFactorial(n - 1);
};

/* Extra Credit */
/*
 This function can pass the tests, because first element in the object is not a object and just a regular primitive property.
 So this function will fail if the first property is an object. So basically as long as the first property is a non-object value,
 it will fail.
*/
// const checkMatchingLeaves = (obj, value = undefined) => {
//   // return true if every property on `obj` is the same
//   // otherwise return false
//   const keys = Object.keys(obj);
//   let matches = true;

//   for (let i = 0; i < keys.length; i++) {
//     const currentValue = obj[keys[i]];

//     if (i === 0 && value === undefined) {
//       value = Object.prototype.toString.call(currentValue) === '[object Object]' ? undefined : currentValue;
//     }

//     matches = Object.prototype.toString.call(currentValue) === '[object Object]' ? checkMatchingLeaves(currentValue, value) : value === currentValue;

//     if (!matches) {
//       return false;
//     }
//   }
//   return true;
// };

// declaring this function outside so it does not get recreated each time checkMachingLeaves gets called
const getValues = (o) => {
  const values = Object.keys(o).map(key => o[key]);

  return values.reduce((v, value) => {
    return Object.prototype.toString.call(value) === '[object Object]' ? [...v, ...getValues(value)] : [...v, value];
  }, []);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  return getValues(obj).every((element, i, arr) => {
    return arr[0] === element;
  });
};

// edge case that contains objects as the first property
console.log('edge case', checkMatchingLeaves({
  k: {
    x: 2,
    u: {
      i: 2,
      e: {
        v: 2,
      },
    },
  },
  y: 2,
  z: 2,
}));

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};

// const lightFlatten = arr => [].concat(...arr);
// const heavyFlatten = (object) => {
//   return lightFlatten(Object.values(object).map((element) => {
//     if (typeof element === 'object') {
//       return heavyFlatten(element);
//     }
//     return element;
//   }));
// };
// return new Set(heavyFlatten(obj)).size === 1;
