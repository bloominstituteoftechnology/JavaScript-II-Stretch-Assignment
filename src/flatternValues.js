/* eslint-disable arrow-parens, no-console */
function isObject(value) {
  return Object(value) === value && !Array.isArray(value);
}
// let level = 0;
const flattenValues = obj => {
  let r = [];
  /*
  console.log(
    'obj:',
    obj,
    '   isArray:',
    Array.isArray(obj),
    '  isObject:',
    isObject(obj),
    '   level',
    ++level
  );
  */
  if (Array.isArray(obj)) {
    obj.forEach(ov => {
      // console.log('ov:', ov);
      if (isObject(ov)) {
        // console.log('ov is object');
        r = r.concat(flattenValues(Object.values(ov)));
      } else if (Array.isArray(ov)) {
        // console.log('ov is array');
        r = r.concat(flattenValues(ov));
      } else {
        // console.log('ov not object or array, concat');
        r = r.concat(ov);
      }
    });
  } else if (isObject(obj)) {
    // console.log('not array obj:', obj);
    r = r.concat(flattenValues(Object.values(obj)));
  } else {
    // console.log('not array or object, conct:', obj);
    r = r.concat(obj);
  }
  // console.log('return r:', r, '   level:', level);
  return r;
};
module.exports = { flattenValues };
