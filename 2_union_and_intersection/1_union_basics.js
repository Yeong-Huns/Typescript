"use strict";
/**
 * Union Basics
 *
 * 유니온은 TS에서 타입을 병할 할 수 있는 수많은 방법중 하나.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let stringOrBooleanType = '아이브';
stringOrBooleanType = true;
let state = 'DONE';
state = 'LOADING';
let strListOrBooleanList = [
    '아이유',
    '김고은',
    '박소담'
];
strListOrBooleanList = [
    true,
    false,
    false,
    true
];
let stringOrNumberList = [
    1, 2, "아이유"
];
let animalOrHuman = {
    name: '김영훈',
    age: 31,
    address: '한국'
};
console.log(animalOrHuman); // let animalOrHuman: Human
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);
animalOrHuman = {
    name: '오리',
    age: 9
};
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
//console.log(animalOrHuman.address) -> 오류(이미 animal 타입으로 인지하는중)
//console.log((animalOrHuman as Human).address) -> 당장 보이는 오류는 사라지지만 실행하면 오류
let animalOrHuman2 = {
    name: '김영훈',
    age: 31,
    address: '한국'
};
console.log(animalOrHuman2.address);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.name);
animalOrHuman2 = {
    name: '오리',
    age: 10
};
//console.log(animalOrHuman2.address);-> TS2339: Property address does not exist on type { name: string; age: number; }
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.name);
const personOrCat = {
    name: '김영훈',
    age: 31
};
const personOrCat2 = {
    breed: 'Yorkshire Terrier',
    country: '영국'
};
const personOrCat3 = {
    name: '김영훈',
    age: 31,
    breed: 'Yorkshire Terrier',
    country: '영국'
};
const personOrCat4 = {
    name: '김영훈',
    age: 31,
    breed: 'Yorkshire Terrier'
};
console.log(personOrCat4); //{ name: '김영훈', age: 31, breed: 'Yorkshire Terrier' }
// -> Union 타입은 합집합이구나
// -> but 두가지 타입 모두 충족이 안되는 상황 ( ex: Person 과 Cat 각각 한가지의 프로퍼티씩 누락)
// -> 어떤 타입도 될 수 없기 때문에 에러
