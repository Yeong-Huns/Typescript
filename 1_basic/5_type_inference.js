"use strict";
/**
 * Type Inference
 *
 * 타입 추론
 */
Object.defineProperty(exports, "__esModule", { value: true });
let stringType = 'string'; // let stringType: string
// Typescript 는 오른쪽에 사용한 value 를 통해 타입을 유추할 수 있다.
let booleanType = true;
let numberType = 30;
booleanType = false;
// booleanType = 'false'; -> TS2322: Type string is not assignable to type
const constStringType = 'const string'; // const constStringType: "const string"
// `const string` 이라는 Type 으로 고정됨 why? const 는 value 변경을 못하기 때문
const constStringType2 = 'const string'; // -> 그래서 이게 오류가 안남
const constBooleanType = true; // -> 얜 타입이 그냥 `true` 임
let yuJin = {
    name: '안유진',
    year: 2003,
};
const yuJin2 = {
    name: '안유진',
    year: 2003,
}; // const yuJin2: { name: string, year: number }
yuJin2.name = '김영훈';
console.log(yuJin2); // { name: '김영훈', year: 2003 }
/**
 * 좀 더 구체화 된 타입으로 사용해보자!
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,
}; // const yuJin3: { name: "안유진", year: 2003 }
// yuJin3.name = '김영훈'; -> 입력조차 못함 (변경불가)
console.log(yuJin3.name); // yuJin3.name: "안유진" -> yuJin3 의 name 타입은 '안유진' 이구나
console.log(yuJin2.name); // yuJin2.name: string  -> yuJin2 의 name 타입은 'string' 이구나
// 좀 더 구체화 된 타입을 알 수 있다.
/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5]; // let numbers: number[]
let numbersAndString = [1, 2, 3, '4', '5']; // let numbersAndString: (string | number)[] -> union 타입 (string 또는 number)
numbers.push(6); // -> 가능
// numbers.push('6'); -> 불가능
const number = numbers[0]; // const number: number
const nos = numbersAndString[0]; // const nos: string | number
const nos2 = numbersAndString[100]; //-> union 타입이지만, 배열의 크기가 over 라서 undefined
console.log(nos2); //-> union(string | number) 타입이지만, 배열의 크기가 over 라서 undefined
// tuple
const twoNumbers = [1, '3']; // const twoNumbers: readonly [1, "3"]
//twoNumbers[0] = 10; -> TS2540: Cannot assign to 0 because it is a read-only property.
//twoNumbers.push(100); -> TS2339: Property push does not exist on type readonly [1, 3]
const first = twoNumbers[0]; // -> 1
const second = twoNumbers[1]; // "3"
//const third = twoNumbers[2];  //TS2493: Tuple type readonly [1, "3"] of length 2 has no element at index 2
