"use strict";
/**
 * Generic 함수에서 사용하기
 */
Object.defineProperty(exports, "__esModule", { value: true });
function whatValue(value) {
    return value;
}
const value = whatValue('test'); // any type
function genericWhatValue(value) {
    return value;
} // 타입의 변수화
const genericResult1 = genericWhatValue('123'); // string 타입으로 유추
// 이 타입의 선언을 실제 실행할 때로 미룰 수 있다.
const genericResult2 = genericWhatValue(123); // number
let genericResult3 = genericWhatValue('123'); // const genericResult3: "123" / let genericResult3: string
function multipleGenerics(x, y, z) {
    return { x, y, z };
}
const multipleGenericResult = multipleGenerics(123, true, '123');
const multipleGenericResult2 = multipleGenerics(123, true, '123');
function getTuple(val1, val2) {
    return [val1, val2];
}
const tuple = getTuple(true, 100); //const tuple: readonly [boolean, number]
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Car {
    constructor(brand, codeName) {
        this.brand = brand;
        this.codeName = codeName;
    }
}
function classGenerator(constructor, ...args) {
    return new constructor(...args);
}
console.log(classGenerator(People, '영훈', 31));
console.log(classGenerator(Car, 'BMW', 1111));
function instantiator2(cons, ...args) {
    return new cons(...args);
}
//console.log(instantiator2(Car, 'KIA', 1234));
