"use strict";
/**
 * Casting
 *
 * TS 에서 Casting을 하면 JS 에서는 적용이 안된다.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const yeongHun = 'yeong Hun';
const testNumber = 3;
console.log(yeongHun.toUpperCase());
//console.log(testNumber.toUpperCase()); ->오류
let sampleNumber = 5;
// console.log(sampleNumber.toUpperCase()); //-> 오류 안남
let stringVar = sampleNumber;
console.log(typeof sampleNumber); // 백날 string 으로 캐스팅해봐야 자바스크립트에서 실행할 때 아무 의미없음
let number = 5;
console.log(number.toUpperCase()); // 에러를 내주던 기능을 잃게됨!!
