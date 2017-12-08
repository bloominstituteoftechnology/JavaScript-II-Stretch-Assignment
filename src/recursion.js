// Complete the following functions.

const nFibonacci = (n) => {
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  if (n <= 1) return 1;
  return n * nFactorial(--n);
};

const checkMatchingLeaves = (obj) => {
  // if the Object has only two properties
  // this is the recur 'base case'
  if (Object.values(obj).length === 2) {
    // check if the first property is NOT an Object (check for nested Objects)
    // check if the first property is NOT an Array
    // if both of these are true, this means the first property is a value we can compare
    if (!(typeof Object.values(obj)[0] === 'object') && !Array.isArray(Object.values(obj)[0])) {
      // check if the second property NOT an Object nor an Array
      // if both of these are true, this means the second property is a value we can compare
      if (!(typeof Object.values(obj)[1] === 'object') && !Array.isArray(Object.values(obj)[1])) {
        // return if the first property is equal to the second property
        return Object.values(obj)[0] === Object.values(obj)[1];
      }
      // else the second property is not flattened
      // flatten second property and
      // return the first property and flattened second property in an Object
      // until the second property is neither an Array nor an Object
      const unNestRightObj = {};
      unNestRightObj[Object.keys(obj)[0]] = Object.values(obj)[0];
      unNestRightObj[Object.keys(obj)[1]] = Object.values(Object.values(obj)[1])[0];
      return checkMatchingLeaves(unNestRightObj);
    }
    // else the first property is not flattened
    // flatten first property and
    // return flattened first property and second property in an Object
    // until the first property is neither an Array nor an Object
    const unNestLeftObj = {};
    unNestLeftObj[Object.keys(obj)[0]] = Object.values(Object.values(obj)[0])[0];
    unNestLeftObj[Object.keys(obj)[1]] = Object.values(obj)[1];
    return checkMatchingLeaves(unNestLeftObj);
  }

  // else there are more than two properties in Object
  // create two new Objects for 'left' recur tree and 'right' recur tree
  const objKeys = Object.keys(obj);
  const objVals = Object.values(obj);
  const objKeysLeft = objKeys[0];
  const objValsLeft = objVals[0];
  const objKeysRight = objKeys.slice(1, obj.length);
  const objValsRight = objVals.slice(1, objVals.length);

  const objLeft = {
    objKeysLeft: objValsLeft,
  };

  const objRight = {};
  objKeysRight.forEach((key, i) => objRight[key] = objValsRight[i]);

  // check first property with second property
  // and recursively check remaining properties
  return objValsLeft === objValsRight[0] && checkMatchingLeaves(objRight);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
