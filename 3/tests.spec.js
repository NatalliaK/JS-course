import { describe, expect, test } from '@jest/globals';

import { checkMultiple, copyObject, findIndex, sortArray, sumListValues } from './tasks.js';

describe('"checkMultiple" function should return correct string value', () => {
  test('should return "multiple of 3 and 2" if a number is a multiple of 3 and 2', () => {
    expect(checkMultiple(6)).toBe('multiple of 3 and 2');
    expect(checkMultiple(12)).toBe('multiple of 3 and 2');
  });

  test('should return "multiple of 3" if a number is a multiple of 3', () => {
    expect(checkMultiple(27)).toBe('multiple of 3');
    expect(checkMultiple(9)).toBe('multiple of 3');
  });

  test('should return "multiple of 2" if a number is a multiple of 2', () => {
    expect(checkMultiple(8)).toBe('multiple of 2');
    expect(checkMultiple(4)).toBe('multiple of 2');
  });
});

describe('"copyObject" function should return a new object with the same values as the original object', () => {
  test('should return a new object with the same values as the original object', () => {
    const obj = {
      a: 1,
      b: { c: 2},
      d: [1, 2, 3],
      e: {
        f: {
          g: 'hello',
          h: { i: null }
        }},
    };

    const result = copyObject(obj);

    expect(copyObject(obj)).not.toBe(result);
    expect(copyObject(obj)).toEqual(result);

    expect(copyObject(obj).b).not.toBe(result.b);
    expect(copyObject(obj).d).not.toBe(result.d);
    expect(copyObject(obj).e.f).not.toBe(result.e.f);
    expect(copyObject(obj).e.f.h).not.toBe(result.e.f.h);
  });
});

describe('"findIndex" function should return the index of the value in the array', () => {
  test('should return the index of the value in the array', () => {
    expect(findIndex([1, 2, 3, 4, 6, 7, 9], 1)).toBe(0);
    expect(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toBe(-1);
    expect(findIndex([1, 2, 10, 44, 105, 166, 207, 408, 900], 10)).toBe(2);
    expect(findIndex([100, 203, 305, 344, 500, 565, 587, 800], 344)).toBe(3);
    expect(findIndex([100, 203, 305, 344, 500, 565, 587, 800], 500)).toBe(4);
    expect(findIndex([100, 203, 305, 344, 500, 565, 587, 800, 900], 500)).toBe(4);
    expect(findIndex([100, 203, 305, 344, 500, 565, 587, 800, 900], 900)).toBe(8);
  });
});

describe('"sortArray" function should sort the array in ascending order', () => {
  test('should sort the array in ascending order', () => {
    expect(sortArray([100, 2, 10, 4, 0, 68, 74, 28, 9])).toEqual([0, 2, 4, 9, 10, 28, 68, 74, 100]);
    expect(sortArray([-9, 80, 7, 6, 50, 4, -3, 20, 0])).toEqual([-9, -3, 0, 4, 6, 7, 20, 50, 80]);
  });
});

describe('"sumListValues" function should return the sum of all values in the list', () => {
  test('should return the sum of all values in the list', () => {
    let list = {
      value: 2,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: {
                value: 8,
                next: {
                  value: 9,
                  next: null
                }
              }
            }
          }
        }
      }
    };

    expect(sumListValues(list)).toBe(41);
  });
});
