/**
 * Casting
 *
 * TS 에서 Casting을 하면 JS 에서는 적용이 안된다.
 */

const yeongHun = 'yeong Hun';
const testNumber = 3;

console.log(yeongHun.toUpperCase());
//console.log(testNumber.toUpperCase()); ->오류

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase()); //-> 오류 안남
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // 백날 string 으로 캐스팅해봐야 자바스크립트에서 실행할 때 아무 의미없음

let number = 5;

console.log((number as any).toUpperCase()); // 에러를 내주던 기능을 잃게됨!!
