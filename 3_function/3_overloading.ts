/**
 * Overloading
 *
 * 파라미터를
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수
 */


/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) '안유진 , 장원영, 레이'
 *
 * 만약에 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) '안유진' , '장원영', '레이'
 */
function stringOrString(members:string): string;
function stringOrString(member1:string, member2:string, member3:string): string;
// function stringOrString(): string; -> 첫번째 파라미터는 무조건 존재해야함 (옵셔널이 아니기때문)
// function stringOrString(member: string, number: number):number -> 반환 타입이 유니온이면 에러안남
// 오버로딩은 되도록이면 사용하지 말자 -> 자바스크립트엔 없는 문법이고, 헷갈릴수 있다. 

// -> 하나, 또는 3개의 파라미터만 사용가능하다.


function stringOrString(memberOrMembers: string, member2?: string, member3?: string){
    if(member2 && member3) return `아이브: ${memberOrMembers}, ${member2}, ${member3}`
    else return `아이브: ${memberOrMembers}`;
}

console.log(stringOrString('안유진, 장원영, 레이'));
console.log(stringOrString('안유진', '장원영', '레이'));
//console.log(stringOrString('안유진', '장원영')); // -> 이런 동작을 막고 싶음

