"use strict";
/**
 * Type Predicate
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isNumber(input) {
    return typeof input === 'number';
}
console.log(isNumber(10));
// 왜 이렇게 해야하지?
function isNumberRetBool(input) {
    return typeof input === 'number';
}
// 이래도 되는거아닌가
let number = 5;
if (isNumberRetBool(number)) {
    number; // let number: any
}
// isNumberRetBool 을 통과하면 number 타입 확정인데, 아직도 any 라고 알고있음
if (isNumber(number))
    number; // -> let number: number
function isDoge(animal) {
    return 'age' in animal;
}
const doge = Math.random() > 0.5 ? {
    name: '도지',
    age: 31,
} : {
    name: '고양이',
    breed: '러시안 블루'
};
if (isDoge(doge))
    doge; // const doge: Doge
else
    doge; // const doge: Cat
