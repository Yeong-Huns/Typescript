"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Unknown Type
 * any 와 비슷하지만 조금 더 덜 관대한 타입
 */
let anyValue;
anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;
let unknownValue;
unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;
let anyType = anyValue; // => 할당됨
let unknownType = anyValue;
let booleanType = anyValue;
let arrayType = anyValue;
let objectType = anyValue;
let nullType = anyValue;
let undefinedType = anyValue;
let anyType2 = unknownValue;
let unknownType2 = unknownValue;
/*
let booleanType2: boolean = unknownValue;
let arrayType2: string[] = unknownValue;
let objectType2: {} = unknownValue;
let nullType2: null = unknownValue;
let undefinedType2: undefined = unknownValue;

unknown 타입은 any 와 unknown 타입에 할당하는거 아니면 할당할 수 없다.
*/
anyValue.toUpperCase();
anyValue.name;
new anyValue();
/*
unknownValue.toUpperCase();
unknownValue.name;
new unknownValue;
unknown 타입은 실행할 수 있는지 없는지 모르면 에러를 낸다.
*/
function isString(target) {
    return typeof target === 'string';
}
let testVal;
if (isString(testVal))
    testVal; // => let testVal: string
/**
 * Operator 사용
 */
let number = 10;
let number2 = 20;
/*
number + number2;
number - number2;
number * number2;
number / number2;*/
number === number2;
number == number2;
number !== number2;
number != number2;
// 실질적으로 사용할수 있는 연산자는 값을 비교하는 연산자만 가능하다.
