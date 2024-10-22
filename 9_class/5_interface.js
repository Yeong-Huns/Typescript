"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    jump() {
        return `${this.name} 이 점프를 합니다.`;
    }
    dance() { }
}
let ori = new Dog('오리', 3);
function instanceOfAnimal(object) {
    return 'jump' in object;
}
if (instanceOfAnimal(ori))
    ori;
class Cat {
    constructor(name, age, legsCount) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }
    //Animal
    jump() {
        return `${this.name}이 점프를 합니다.`;
    }
    //Pet
    bark() {
        console.log('야옹');
    }
}
class Cat2 {
    constructor(name, age, legsCount) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }
    //Animal
    jump() {
        return `${this.name}이 점프를 합니다.`;
    }
    //Pet
    bark() {
        console.log('야옹');
    }
}
/*
class Person implements WrongInterface1 , WrongInterface2 {
    // name: string | number; -> name 이 string, number 둘 다 되어야하기 때문에 충동이 생김
}*/
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function createIdol(constructor, name, age) {
    return new constructor(name, age);
    // return new Idol(name, age) -> 사실 이것과 같다 할 수 있다. 
}
const iu = createIdol(Idol, '아이유', 32);
console.log(iu); // Idol { name: '아이유', age: 32 }
// 인터페이스를 통해
