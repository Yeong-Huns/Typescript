"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericString = '김영훈';
let state = {
    data: ['123', '234'],
};
console.log(state);
state = {
    requestedAt: new Date()
};
console.log(state);
state = {
    error: 'error'
};
console.log(state);
let state2 = {
    // data: [123, 345] -> State<T = string> 이기 때문에, Default 타입이 string 이라 당연히 에러가 남
    data: ['123', '345']
};
