
const tree2 = {
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
          z: 2,
        },
      },
    },
  },
  r: 1,
};
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let val;
  let flag = true;
  const checkLeaves = (tree) => {
    Object.keys(tree).forEach((key) => {
      if(val === undefined && typeof key !== 'object') {
        val = tree[key];
        return undefined;
      }
      if (typeof tree[key] === 'object') return checkLeaves(tree[key]);
      if (tree[key] !== value) {
        flag = false;
        return undefined;
      }
      return undefined;
    });
  }
  checkLeaves(obj);
  return flag;
};

checkMatchingLeaves (tree2);