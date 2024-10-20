"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tuple
 */
let iveTopMembers = ['안유진', '장원영', '레이'];
let numberAndStringTuple = [
    30, '김영훈'
];
numberAndStringTuple.push('아이유');
console.log(numberAndStringTuple); // =>[ 30, '김영훈', '아이유' ]
// 이렇게 push 해버리면 결국에 타입강제에 실패한다.
let unmodifiableTuple = [
    30, '김영훈'
];
//unmodifiableTuple.push('아이유') => readonly 키워드를 사용하면 타입스크립트가 push 를 막아준다.
/**
 * Tuple 유추하기
 */
let actresses = ['김고은', '박소담', '전여빈'];
let actressesTuple = ['김고은', '박소담', '전여빈'];
// 값만 입력하고 튜플로 유추하게 하려면 뒤에 as const 를 사용한다.
const actressesTupleConst = ['김고은', '박소담', '전여빈'];
let stringArray = [
    ...actressesTuple,
    ...actressesTupleConst,
];
/**
 * Named Tuple
 */
const namedTuple = [
    '김영훈', 32
];
/**
 * Assigning Tuple to Tuple
 *
 * Tuple 은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1 = ['아이유', '유애나'];
const tuple2 = [1, 2];
//let tuple3: [boolean, boolean] = tuple1;
//let tuple4: [number, number, number] = tuple2;
let tuple5 = tuple2;
//
/**
 * Tuple 과 Array 의 관계
 */
let ive = [
    '장원영', '안유진'
];
let stringArr = ive; // 튜플 -> string[]  은 가능
// let ive2: [string, string] = stringArr; => string[] -> 튜플 string[] 은 string 이 여러개일수 있기 때문에, 튜플로 할당이 안된다
/**
 * Multi Dimensional Tuple
 */
const tuple2D = [
    ['김영훈', 31],
    ['아이유', 31],
    ['김고은', 30]
];
// -> 튜플로 2차 배열 만드는법
