"use strict";
/**
 * Optional and Undefined Property
 */
Object.defineProperty(exports, "__esModule", { value: true });
const byulE = {
    name: '별이',
    age: 12,
    breed: '미니핀'
};
const ori = {
    name: '오리',
    age: 3,
    //Optional 은 breed 프로퍼티를 선언하지 않아도 괜찮음
};
const nabi = {
    name: '나비',
    age: 7,
    // Optional 이 아니라면 프로퍼티를 무조건 입력해줘야함
    breed: undefined
};
