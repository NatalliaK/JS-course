import { describe, expect, test } from "@jest/globals";

import {binarySearchIndex, makeCounter, spiralOrder, sumArrElems, sumTo} from "./tasks.js";

describe('"makeCounter" function should return independent counters', () => {
    test('should return independent counters', () => {
        const counter1 = makeCounter();
        const counter2 = makeCounter();
        const counter3 = makeCounter();

        expect(counter1()).toBe(1);
        expect(counter1()).toBe(2);
        expect(counter1()).toBe(3);

        expect(counter2()).toBe(1);
        expect(counter2()).toBe(2);

        expect(counter3()).toBe(1);

        expect(counter1()).toBe(4);
    });
});

describe('"sumTo" function should return the sum of all values from 1 to num', () => {
    test('should return the sum of all values from 1 to num', () => {
        expect(sumTo(1)).toBe(1);
        expect(sumTo(2)).toBe(3);
        expect(sumTo(3)).toBe(6);
        expect(sumTo(4)).toBe(10);
        expect(sumTo(5)).toBe(15);
        expect(sumTo(6)).toBe(21);
        expect(sumTo(7)).toBe(28);
        expect(sumTo(8)).toBe(36);
        expect(sumTo(9)).toBe(45);
        expect(sumTo(10)).toBe(55);
    });
});

describe('"sumArrElems" function should return the sum of all values in the list', () => {
    test('should return the sum of all values in the list', () => {
        expect(sumArrElems([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(45);
        expect(sumArrElems([100, 203, 305, 344, 500, 565, 587, 800, 900])).toBe(4304);
        expect(sumArrElems([100, 203, 305, 344, 500, 565, 587, 800, 900, 1000])).toBe(5304);
    });
});

describe('"binarySearchIndex" function should return the index of the value in the array', () => {
    test('should return the index of the value in the array', () => {
        expect(binarySearchIndex([1, 2, 3, 4, 6, 7, 9], 1)).toBe(0);
        expect(binarySearchIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toBe(-1);
        expect(binarySearchIndex([1, 2, 10, 44, 105, 166, 207, 408, 900], 10)).toBe(2);
        expect(binarySearchIndex([100, 203, 305, 344, 500, 565, 587, 800], 344)).toBe(3);
        expect(binarySearchIndex([100, 203, 305, 344, 500, 565, 587, 800], 500)).toBe(4);
        expect(binarySearchIndex([100, 203, 305, 344, 500, 565, 587, 800, 900], 500)).toBe(4);
        expect(binarySearchIndex([100, 203, 305, 344, 500, 565, 587, 800, 900], 900)).toBe(8);
    });
});

describe('"spiralOrder" function should return all elements of the matrix in spiral order', () => {
    test('should return all elements of the matrix in spiral order', () => {
        expect(spiralOrder([
            [3, 4],
            [8, 9]
        ])).toEqual([3, 4, 9, 8]);

        expect(spiralOrder([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

        expect(spiralOrder([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);

        expect(spiralOrder([
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20]
        ])).toEqual([1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]);
    });
});
