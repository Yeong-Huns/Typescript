/**
 * Statement and Expression
 */

//statement (문장)
function addTwoNumbers(x: number, y: number): number {
    return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}

/**
 * 타입스크립트 관점에서 둘의 차이는 뭘까??
 * 만약, 함수의 기능은 다른데 , 같은 시그니쳐를 가진 함수를 정의한다 가정해보자...
 */
//statement 의 경우...
function add(x: number, y: number): number {
    return x + y;
}

function minus(x: number, y: number): number {
    return x - y;
}

function multiply(x: number, y: number): number {
    return x * y;
}

function divide(x: number, y: number): number {
    return x / y;
}

// 모든 시그니쳐를 전부 다 입력을 해줘야 한다!!!

// Expression 의 경우...

type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = (x, y) => x + y;
const minus2: CalculationType = (x, y) => x - y;
const multiply2: CalculationType = (x, y) => x * y;
const divide2: CalculationType = (x, y) => x / y;

// 단 한번의 시그니쳐 정의만 있으면, 반복적으로 사용할 수 있다. 
