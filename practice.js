let obj = {
  mama: 'tata',
  baba: 'lol'
}

function add () {
  console.log(this.mama);
}

console.log(add());

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let = keys = Object.obj;
  console.log(keys);
};

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
checkMatchingLeaves (tree2);