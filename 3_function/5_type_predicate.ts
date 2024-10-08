/**
 * Type Predicate
 */

function isNumber(input: any):input is number{   //입력값(:any)이 무엇인지 검증하는 함수
    return typeof input === 'number';
}
console.log(isNumber(10));
// 왜 이렇게 해야하지?

function isNumberRetBool(input: any): boolean{
    return typeof input === 'number';
}
// 이래도 되는거아닌가

let number: any = 5;

if(isNumberRetBool(number)){
    number; // let number: any
}
// isNumberRetBool 을 통과하면 number 타입 확정인데, 아직도 any 라고 알고있음

if(isNumber(number)) number; // -> let number: number

// 반면 , any 타입으로 지정을 했음에도 , 이 조건을 통과한다면 이것의 타입은 number 임

interface Doge{
    name: string,
    age: number,
}

interface Cat{
    name: string,
    breed: string,
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat):animal is Doge{
    return 'age' in animal;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 31,
} : {
    name: '고양이',
    breed: '러시안 블루'
};

if(isDoge(doge)) doge; // const doge: Doge
else doge; // const doge: Cat