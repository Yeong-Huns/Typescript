"use strict";
/**
 * Multi Dimension Array
 */
/**
 * (1)
 * [1,2,3]
 *
 * (2)
 * [
 *     [1,2,3],
 *     [1,2,3]
 * ]
 *
 * (3)
 * [
 *     [
 *         [1,2,3]
 *     ]
 * ]
 */
Object.defineProperty(exports, "__esModule", { value: true });
const number2DArr = [
    [1, 2, 3],
    [4, 5, 6]
];
const str2DArr = [
    ['1', '2', '3'],
    ['4', '5', '6']
];
const strAndNumbArr = [
    [1, '2', 3],
    ['4', 5, 6]
];
let strArrOrNumArr = [
    [1, 2, 3],
    [4, 5, 6]
];
strArrOrNumArr = [
    ['1', '2', '3'],
    ['4', '5', '6']
];
for (let arr of number2DArr) {
    for (let item of arr) {
        item; // number
    }
}
