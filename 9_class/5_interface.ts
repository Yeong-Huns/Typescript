/**
 * Interface
 */
interface Animal{
    name:string;
    age: number;
    jump(): string;
}
class Dog implements Animal{
    name: string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    jump(): string {
        return `${this.name} 이 점프를 합니다.`;
    }
    dance(){}
}
let ori: any = new Dog('오리',3)
function instanceOfAnimal(object: any): object is Animal{
    return 'jump' in object;
}
if(instanceOfAnimal(ori)) ori;

/**
 * 다중 인터페이스 구현

 */
interface Pet{
    legsCount: number;
    bark():void;
}
class Cat implements Animal, Pet{
    //Animal
    name: string;
    age: number;
    //pet
    legsCount: number;
    constructor(name:string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }
    //Animal
    jump(): string {
        return `${this.name}이 점프를 합니다.`
    }
    //Pet
    bark() {
        console.log('야옹')
    }
}

type AnimalAndPet = Animal & Pet;
class Cat2 implements AnimalAndPet{
    //Animal
    name: string;
    age: number;
    //pet
    legsCount: number;
    constructor(name:string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }
    //Animal
    jump(): string {
        return `${this.name}이 점프를 합니다.`
    }
    //Pet
    bark() {
        console.log('야옹')
    }
}

interface WrongInterface1{
    name: string
}
interface WrongInterface2{
    name: number;
}
/*
class Person implements WrongInterface1 , WrongInterface2 {
    // name: string | number; -> name 이 string, number 둘 다 되어야하기 때문에 충동이 생김
}*/

class Idol{
    name: string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor{
    new (name:string, age:number): Idol;
}

function createIdol(constructor: IdolConstructor, name:string, age:number){
    return new constructor(name, age);
    // return new Idol(name, age) -> 사실 이것과 같다 할 수 있다. 
}
const iu = createIdol(Idol, '아이유', 32);
console.log(iu); // Idol { name: '아이유', age: 32 }
// 인터페이스를 통해