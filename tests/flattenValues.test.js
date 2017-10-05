const flattenMethod = require('../src/flatternValues');
/* eslint-disable no-undef */
describe('flatterValues', () => {
  it('should return the flattened object values', () => {
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
              z: 1
            }
          }
        }
      }
    };
    const flattened0 = flattenMethod.flattenValues({ x: 3, y: 4 });
    const flattened1 = flattenMethod.flattenValues([1, 2, { x: 3, y: 4 }]);
    const flattened2 = flattenMethod.flattenValues(tree1);
    expect(flattened0).toEqual([3, 4]);
    expect(flattened1).toEqual([1, 2, 3, 4]);
    expect(flattened2).toEqual([1, 1, 1, 1, 1, 1, 1]);
  });
});
