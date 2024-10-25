/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any){
    return value;
}
const value = whatValue('test'); // any type

function genericWhatValue<T>(value: T){
    return value;
} // 타입의 변수화

const genericResult1 = genericWhatValue<string>('123'); // string 타입으로 유추
// 이 타입의 선언을 실제 실행할 때로 미룰 수 있다.
const genericResult2 = genericWhatValue<number>(123); // number

let genericResult3 = genericWhatValue('123') // const genericResult3: "123" / let genericResult3: string

function multipleGenerics<X, Y, Z>(x: X, y:Y, z: Z){
    return {x,y,z}
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(123, true, '123');

const multipleGenericResult2 = multipleGenerics(123, true, '123');

function getTuple<X, Y>(val1: X, val2: Y){
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);  //const tuple: readonly [boolean, number]

class Idol {
    name: string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

class Car{
    brand: string;
    codeName: string;
    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

function instantiator<T extends {new (...args: any[]) : {}}>(constructor: T, ...args:any[]){
    return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));

function instantiator2<T extends { new (...args: any[]) : {} }>(cons: T, ...args:any[]){
    return new cons(...args);
}

console.log(instantiator2(Car, 'KIA', 1234));


