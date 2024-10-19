/**
 * Loopholes of Any
 */

let number: number;
number = 10;

//number.toUpperCase(); => 에러로 잡아줌

// (number as any).toUpperCase(); => 런타임에 에러가 나버림

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '김영훈'
let args2: any = true;

multiplyTwo(args1, args2); // => 에러가 안나지만, 실행시키면 런타임에러
//multiplyTwo('김영훈', true); // => 컴파일시점에 바로 에러

let iu: any = {name: '아이유', age: 30};
iu;

const callbackRunner = (x: number, y: number, callback: any)=> {
    return callback(x);
}

const callback = (x: number, y: number) => {
    return x * y;
}

console.log(callbackRunner(5,4,callback)); // NaN  이유 : x 와 y 를 곱하는데, y 가 undefined 이기 때문에 Nat a Number 출력