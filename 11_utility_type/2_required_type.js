"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exampleDog = {
    name: '모찌',
}; // 이건 에러가 나지 않는다
const requiredDog = {
    name: '모찌',
    age: 7,
    country: '한국'
}; // -> Required 유틸리티 타입을 사용하면 모든 프로퍼티를 선언해야한다.