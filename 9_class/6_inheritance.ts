/**
 * Inheritance
 */
class Parent {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
    dance(){
        console.log(`parent: ${this.name}이 춤을 춥니다.`);
    }
}
class Child extends Parent{
    age: number
    constructor(name:string, age:number) {
        super(name);
        this.age = age;
    }
    sing(){
        console.log(`child: ${this.name}이 노래를 부릅니다.`);
    }
}

const yeongHun = new Parent('김영훈');
const ahri = new Child('아리', 12);

yeongHun.dance();
//yeongHun.sing(); -> 자식의 메서드 사용불가

ahri.dance();
ahri.sing();

let person: Parent;
person = yeongHun;// -> Parent 는 class 이자 부모타입
person = ahri; // -> 상속받은 자식은 Parent 를 상속받앗기 때문에 Parent 가 될 수 있다.   상속받은 자식은 부모타입이 될 수 있다.

let person2: Child;
person2 = ahri;
//person2 = yeongHun;  -> 부모가 자식의 타입이 되는것은 불가능하다

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2{
    name:string;
    constructor(name:string) {
        this.name = name;
    }
}
class Child2 extends Parent2{
    age?: number;
    constructor(name:string, age?:number) {
        super(name);
        this.age = age;
    }
}
const cf2 = new Parent2('김영훈');
const ahri2 = new Child2('아리', 20);

let child: Child2;
child = ahri2;
child = cf2; // -> 원래 자식이 부모가 되는것은 불가능 하지만, age 가 optional 이기 때문에 만약 age 가 없다면, Parent2 와 Child2 가 동일한 타입이 된다.