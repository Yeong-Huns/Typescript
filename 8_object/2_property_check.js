"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iu = {
    name: '아이유',
    age: 30
};
const testName = iu;
const testAge = iu;
console.log(testName); // { name: '아이유', age: 30 } -> 빌드시 타입만 체크하기 때문에 결국 모든 값이 들어옴
