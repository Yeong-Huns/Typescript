"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Never Type
 */
//(1) 함수에서 에러를 던질때
function throwError() {
    throw Error();
}
//(2)무한 루프
function infiniteLoop() {
    while (true) {
    }
}
/*
let neverType: StringAndNumber = 10;
let neverType: StringAndNumber = undefined;
let neverType: StringAndNumber = null;*/
/*let neverType: never = 10;
let neverType: never = undefined;
let neverType: never = null;
never 타입은 어떤값도 집어넣을수가 없음
*/
