/**
 * Narrowing
 *
 * Narrowing 은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */
/*

let numberOrString: number | string = '김영훈';
console.log(typeof numberOrString); // let numberOrString: string

const decimal = 12.3278;
console.log(decimal.toFixed(2));
*/

// numberOrString.toFixed(); -> 자동완성조차안됨

/**
 * Narrowing 의 종류
 *
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof Narrowing
 * 7) discriminated union Narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// 1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numberOrString: number | string = '아이유';
numberOrString.toString(); // let numberOrString: string (string 타입으로 유추)

// 2) typeof Narrowing
numberOrString = Math.random() > 0.5 ? 1113 : "아이유" // 빌드되는 순간에는 어떤 값이 될 지 알 수 없음
// -> let numberOrString: string | number (유니온 타입 string | number 로 유추)

if (typeof numberOrString === 'string') numberOrString; // let numberOrString: string
else numberOrString; // let numberOrString: number

// 3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

if (nullOrString) nullOrString; // let nullOrString: string[] -> nullOrString 값이 true 이기 때문
else nullOrString // let nullOrString: null

// 4) Equality Narrowing
let numberOrString2: number | string = Math.random() > 0.5 ? 1123 : '아이유';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if (numberOrString2 === stringOrBool2) {
    numberOrString2 // let numberOrString2: string -> '아이유'와 '아이브'가 같지않은데 왜???
    stringOrBool2 // -> 둘이 비교할 수 있는 경우는 둘 다 string 타입일 경우만 가능하기 때문
} else {
    numberOrString2 // let numberOrString2: string | number
    stringOrBool2  // let stringOrBool2: string | true
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number') numberOrStringOrNull // => number
else numberOrStringOrNull // -> null | string

// 5) in operator Narrowing
interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
}

let dog: Dog = {
    name: '깜이',
    type: '요크셔테리어'
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

console.log('name' in human) // true => human 이라는 객체에 name 이라는 key 값이 존재하는지?
console.log('age' in human) // true => human 이라는 객체에 age 이라는 key 값이 존재하는지?

if ('type' in humanOrDog) humanOrDog // =>  let humanOrDog: Dog
else humanOrDog // =>  let humanOrDog: Human

// 6) instanceof Narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '김영훈';
if (dateOrString instanceof Date) dateOrString // let dateOrString: Date
else dateOrString // let dateOrString: string

// 7) discriminated union Narrowing (차별된 유니언 내로잉)
interface Animal {
    type: 'dog' | 'human';
    height?: number;
    // 강아지의 종
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 188,
    } : {
        type: 'dog',
        breed: '요크셔테리어'
    }

if (animal.type === 'human') {
    animal.height; // height?: number | undefined
} else {
    animal.breed; // breed?: string | undefined
    animal.height; // height?: number | undefined -> Optional 이기 때문
}

interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog';
    breed: string;
}

type HumanOrDog = Human2 | Dog2;

let humanOrDog2: HumanOrDog = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 188,
    } : {
        type: 'dog',
        breed: '요크셔테리어'
    }

if (humanOrDog2.type === 'human') {
    humanOrDog2.height; // height: number
} else {
    humanOrDog2.breed; // breed: string
    // 타입을 잘 유추하기 위해선, 처음 인터페이스를 생성할 때 , 타입을 확실하게 분리하여 생성하고, 그 뒤에 묶는것이 유리하다.
}

// 8) exhaustiveness checking
switch (humanOrDog2.type) {
    case 'human':
        humanOrDog2; // let humanOrDog2: Human2
        break;
    case 'dog':
        humanOrDog2; // let humanOrDog2: Dog2
        break;
    default:
        humanOrDog2 // let humanOrDog2: never -> 무조건 Human2 아니면 Dog2 기 때문에, 도달할 수가 없어서 never
        const _check: never = humanOrDog2 // -> 이런 값을 추가하여 , 추후 HumanOrDog 타입이 확장될 경우, 오류를 발생시켜 코드를 수정할 수 있도록 한다.
        break;
}
