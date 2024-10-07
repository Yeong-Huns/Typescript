"use strict";
/**
 * Function Type
 */
Object.defineProperty(exports, "__esModule", { value: true });
const runner = () => {
    return ['안유진', '장원영', '레이'].map(x => `아이브 멤버: ${x}`);
};
console.log(runner());
const runner2 = (callback) => {
    return ['안유진', '장원영', '레이'].map(callback);
};
console.log(runner2(x => `아이브 멤버: ${x}`));
const multiplyTwoNumbers = (x, y) => x * y;
const multiplyTwoNumbers3 = (x, y) => x * y;
console.log(multiplyTwoNumbers3(10, 10));
