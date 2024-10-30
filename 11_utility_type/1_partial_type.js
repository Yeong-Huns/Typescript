"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yuJin2 = {
    name: '안유진',
    age: 23,
    groupName: '아이브'
};
function updateIdol2(original, updates) {
    return {
        ...original,
        ...updates
    };
}
console.log(updateIdol2(yuJin2, {
    name: '김영훈',
    age: 31,
    groupName: '백수'
}));
const yuJin = {
    name: '안유진',
    age: 23,
    groupName: '아이브'
};
function updateIdol(original, updates) {
    return {
        ...original,
        ...updates,
    };
}
console.log(updateIdol(yuJin, {
    age: 27
})); // { name: '안유진', age: 27, groupName: '아이브' } -> 27 살로 변경
console.log(updateIdol(yuJin, {
    name: '김영훈',
    age: 31,
    groupName: '백수'
}));
/**
 * Partial<> -> 일정부분을 가지고 있게 하고 싶으면 사용
 */ 
