"use strict";
/**
 * Spread Operator
 */
Object.defineProperty(exports, "__esModule", { value: true });
const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];
const arr1 = [...onlyString]; // string[]
const arr2 = [...onlyNumbers, ...onlyString]; // (string | number)[]
