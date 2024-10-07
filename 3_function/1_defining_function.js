"use strict";
/**
 * Defining Function
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*
function printName(name){
    console.log(name);
}
*/
function printName(name) {
    console.log(name);
}
function returnTwoCouples(person1, person2) {
    return `${person1}과 ${person2}는 사귀고 있습니다.`;
}
console.log(returnTwoCouples('타블로', '강혜정'));
//returnTwoCouples(0 , 1) -> 타입도 체크해준다.
// returnTwoCouples('아이유') -> 파라미터 갯수도 체크해준다.
function multiplyOrReturn(x, y) {
    if (y)
        return x * y;
    else
        return x;
}
console.log(multiplyOrReturn(10, 10)); // 100
console.log(multiplyOrReturn(10)); // 10
function multiplyOrReturn2(x, y = 20) {
    return x * y;
}
console.log(multiplyOrReturn2(10)); // 200
console.log(multiplyOrReturn2(10, 10)); // 100
/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...arg) {
    return arg.map(x => `너무좋아 ${x}`);
}
console.log(getInfiniteParameters('아이유', '레드벨벳', '블랙핑크', '아이브'));
// console.log(getInfiniteParameters(1,2,3)); -> error
/**
 * Return Type
 */
function addTwoNumbers(x, y) {
    return x * y;
}
addTwoNumbers(10, 20);
function randomNumber() {
    return Math.random() > 0.5 ? 10 : '랜덤';
}
randomNumber(); //  function randomNumber(): 10 | "랜덤"
function subtractTwoNumbers(x, y) {
    //return '이게 반환이 될까요?'
    return x - y;
}
const subtractTwoNumbersArrow = (x, y) => x - y;
console.log(subtractTwoNumbersArrow(10, 2));
/**
 * 특수 반환 타입
 *
 * void/ never
 */
function doNotReturn() {
    console.log('저는 반환을 하지 않습니다. ');
}
doNotReturn();
function neverEndingLoop() {
    while (true) {
    }
}
function throwError() {
    throw Error();
}
throwError(); // function throwError(): never
