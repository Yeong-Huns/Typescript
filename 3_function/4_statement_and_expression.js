"use strict";
/**
 * Statement and Expression
 */
Object.defineProperty(exports, "__esModule", { value: true });
//statement (문장)
function addTwoNumbers(x, y) {
    return x + y;
}
// expression (표현식)
const addTwoNumbersExp = (x, y) => {
    return x + y;
};
/**
 * 타입스크립트 관점에서 둘의 차이는 뭘까??
 * 만약, 함수의 기능은 다른데 , 같은 시그니쳐를 가진 함수를 정의한다 가정해보자...
 */
//statement 의 경우...
function add(x, y) {
    return x + y;
}
function minus(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
const add2 = (x, y) => x + y;
const minus2 = (x, y) => x - y;
const multiply2 = (x, y) => x * y;
const divide2 = (x, y) => x / y;
// 단 한번의 시그니쳐 정의만 있으면, 반복적으로 사용할 수 있다. 
