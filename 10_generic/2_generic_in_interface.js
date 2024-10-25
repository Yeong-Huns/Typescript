"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache1 = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
};
// value 에 따른 자동유추는 안된다 . (number) 를 지정해줘야함
const cache2 = {
    data: [123, 456],
    lastUpdate: new Date(),
};
const cache3 = {
    //data:[123,456] Default 타입이 string 이기때문에 이건안됨
    data: ['123', '456']
};
const cache4 = {
    data: [123, 234]
};
console.log(cache4);
