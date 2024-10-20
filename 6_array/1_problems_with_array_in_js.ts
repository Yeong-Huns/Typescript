/**
 * Problems with Array in JS
 */

const number = [1,'2',3,'4',5];
// => 바닐라 자바스크립트에선 전혀 문제가 없음

let strings: string[] = ['1','2','3'];

//strings.push(1);

let stringOrNumbersArray: (string|number)[] = [1, '2', 3, '4', 5];

let stringArrNumberArr: string[] | number[] = [1,2,3,4,5];

stringArrNumberArr = ['1','2','3'];

let stringOrNumberArr: string | number[] = [1,2,3];

stringOrNumberArr = '3';

let boolsArr = [true, false, true];

boolsArr.push(false);

//boolsArr.push(1);

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for(let i =0; i< onlyString.length; i++) {
    let item = onlyString[i];
}

for(let i = 0; i< onlyNumbers.length; i++){
    let item = onlyNumbers[i];
}

let number3 = onlyNumbers[0];

let number4 = onlyNumbers[9999]; // => 사실은 undefined 지만 , 타입스크립트는 number 로 유추를 해버린다.
// 이렇게 버그가 날 수 있는 부분을 인지해야한다. 