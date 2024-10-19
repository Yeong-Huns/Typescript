/**
 * Unknown Type
 * any 와 비슷하지만 조금 더 덜 관대한 타입
 */
let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

let anyType: any = anyValue; // => 할당됨
let unknownType: unknown = anyValue;
let booleanType: boolean = anyValue;
let arrayType: string[] = anyValue;
let objectType: {} = anyValue;
let nullType: null = anyValue;
let undefinedType: undefined = anyValue;

let anyType2: any = unknownValue;
let unknownType2: unknown = unknownValue;
/*
let booleanType2: boolean = unknownValue;
let arrayType2: string[] = unknownValue;
let objectType2: {} = unknownValue;
let nullType2: null = unknownValue;
let undefinedType2: undefined = unknownValue;

unknown 타입은 any 와 unknown 타입에 할당하는거 아니면 할당할 수 없다.
*/

anyValue.toUpperCase();
anyValue.name;
new anyValue();

/*
unknownValue.toUpperCase();
unknownValue.name;
new unknownValue;
unknown 타입은 실행할 수 있는지 없는지 모르면 에러를 낸다.
*/

function isString(target: unknown): target is string{
    return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)) testVal; // => let testVal: string

// 엥간하면 기존 any 를 사용하던 곳에 unknown 을 사용하는게 좋다 .

/**
 * Union Type
 * any 를 제외하고 무조건 unknown 이 된다.
 */
type uOrString = unknown | string; // unknown
type uOrBoolean = unknown | boolean; // unknown
type uOrNumber = unknown | number; // unknown
type uOrAny = unknown | any; // any
type anyOrU = any | unknown; // any

/**
 * Intersection Type
 * unknown 과 Intersection 하면 무조건 상대타입이 된다.
 */
type uAndString = unknown & string; // string
type uAndBoolean = unknown & boolean; // boolean
type uAndNumber = unknown & number; // number
type uAndAny = unknown & any; // any
type anyAndU = any & unknown; // any

/**
 * Operator 사용
 */
let number: unknown = 10;
let number2: unknown = 20;

/*
number + number2;
number - number2;
number * number2;
number / number2;*/

number === number2;
number == number2;
number !== number2;
number != number2;

// 실질적으로 사용할수 있는 연산자는 값을 비교하는 연산자만 가능하다.