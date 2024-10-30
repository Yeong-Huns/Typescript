"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Reflection Metadata
 *
 * npm install --save-dev reflect-metadata
 * --save: 이 package 를 사용했다는 것을 package.json 에 포함해라
 * -dev: 이 요소를 개발 환경에서만 사용하겠다.
 */
require("reflect-metadata");
const iu = {
    name: '아이유',
    age: 32,
    nationality: 'korean'
};
console.log(iu);
/**
 * 파라미터의 정의
 * 1) 메타데이터의 키  (key)
 * 2) 메타데이터 키에 저장할 값 (value)
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티 (필수가 아님)
 *
 * 4번은 필수가 아니다.
 * 객체자체에 저장할수도, 객체의 프로퍼티에다가도 저장할 수있다.
 *
 * 메타데이터가 무엇인가? - 데이터에 대한 데이터
 */
Reflect.defineMetadata('test-meta', '츄르를 좋아함', iu); // key : 'test-meta' value : 123, 저장할 객체 : iu
console.log(iu);
console.log(Reflect.getMetadata('test-meta', iu)); // 123
Reflect.defineMetadata('test-meta', 456, iu);
console.log(Reflect.getMetadata('test-meta', iu)); // 456
Reflect.defineMetadata('meta2', { name: '김영훈' }, iu);
console.log(Reflect.getMetadata('meta2', iu));
/**
 * 프로퍼티에 저장하기
 */
Reflect.defineMetadata('meta123', '으아악', Object.getPrototypeOf(iu));
Reflect.defineMetadata('starts', '으아악', iu, 'name');
console.log('---');
console.log(Reflect.getMetadata('meta123', iu));
console.log(Reflect.getMetadataKeys(iu));
console.log('---');
console.log(iu);
console.log(Reflect.getMetadata('object-meta', iu, 'name'));
Reflect.deleteMetadata('object-meta', iu, 'name'); // iu 의 name 프로퍼티의 메타데이터를 삭제
console.log(Reflect.getMetadata('object-meta', iu, 'name')); // undefined
console.log(Reflect.hasMetadata('object-meta', iu, 'name')); // 메타데이터가 있는지 확인하는 함수 -> false
console.log(Reflect.getMetadataKeys(iu)); // iu 객체안에 존재하는 모든 메타데이터 키를 가져와라 // [ 'test-meta', 'meta2' ]
console.log(Reflect.getMetadataKeys(iu, 'name')); // []
Reflect.defineMetadata('prototype-data', '프로토타입 메타', Object.getPrototypeOf(iu));
console.log('-----');
console.log(Reflect.getMetadata('prototype-data', iu));
console.log(Reflect.getMetadataKeys(iu)); // [ 'test-meta', 'meta2', 'prototype-data' ]
// -> getMetadataKeys 는 현재 객체뿐아니라 프로토타입까지 검사해서 가져온다.
console.log(Reflect.getOwnMetadataKeys(iu)); // [ 'test-meta', 'meta2' ]
// -> 프로토타입 객체의 prototype-data 는 나오지 않는다. 
