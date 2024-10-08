"use strict";
/**
 * Overloading
 *
 * 파라미터를
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수
 */
Object.defineProperty(exports, "__esModule", { value: true });
// function stringOrString(): string; -> 첫번째 파라미터는 무조건 존재해야함 (옵셔널이 아니기때문)
// function stringOrString(member: string, number: number):number -> 반환 타입이 유니온이면 에러안남
// 오버로딩은 되도록이면 사용하지 말자 -> 자바스크립트엔 없는 문법이고, 헷갈릴수 있다. 
// -> 하나, 또는 3개의 파라미터만 사용가능하다.
function stringOrString(memberOrMembers, member2, member3) {
    if (member2 && member3)
        return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
    else
        return `아이브: ${memberOrMembers}`;
}
console.log(stringOrString('안유진, 장원영, 레이'));
console.log(stringOrString('안유진', '장원영', '레이'));
//console.log(stringOrString('안유진', '장원영')); // -> 이런 동작을 막고 싶음
