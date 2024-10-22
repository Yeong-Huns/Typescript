/**
 * Class as Type and Value
 */
class Dog{
    name: string;
    constructor(name:string) {
        this.name = name;
    }
    bark(){
        return `${this.name}가 짖습니다.`
    }
}
let ori = new Dog('오리'); // const ori: Dog
console.log(ori.bark());

// ori = '오리' -> Dog 가 아니라서 변경 못함

ori = {
    name: '별이',
    bark(){
        return `${this.name}가 짖습니다.`
    }
}

console.log(ori.bark()); // -> 타입만 같다면, 같은 Dog 로 본다.