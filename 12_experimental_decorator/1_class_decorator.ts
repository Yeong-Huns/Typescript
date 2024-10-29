/**
 *
 * tsconfig 수정
 * // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators.
   // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files.
 */

/**
 * Class Decorator
 */
function Test(constructor: Function){
    console.log(constructor)
}

//@Test
@Frozen2
@LogTest('prod')
@ChangeClass('아이브')
class Idol {
    name: string;
    age: number;
    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// [class Idol]
// @[function name] 을 사용하면 파라미터로 데코레이팅한 대상 class 를 받아볼 수 있다.

function Frozen(constructor: Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function Frozen2<T extends {new (...args: any[]): {}}>(Class: T){
    Object.freeze(Class);
    Object.freeze(Class.prototype);
}

// 코드를 실행하면 @Frozen 이라는 데코레이터가 실행되며 Frozen 함수를 실행한다.
// constructor 는 Idol class 를 받을 수 있으니 Idol 클래스와 Idol 클래스의 프로토타입이 freeze 된다.

const yuJin = new Idol('안유진', 23);
Object.freeze(Idol);
Object.freeze(Idol.prototype);
console.log(Object.isFrozen(Object.getPrototypeOf(yuJin))); // true
// -> 기본값은 false 인데 , Frozen 데코레이터가 실행되어 동결됨

// decorator factory
function LogTest(env: string){ // 데코레이터 팩토리를 사용하면 파라미터를 받을수도 있다.
    return function(constructor: Function){
        console.log(`[${env}] ${constructor}가 실행됐습니다.`);
    }
}

console.log('--------------------------------')
const wonYoung = new Idol('장원영', 22);
const wonYoung2 = new Idol('장원영2', 22)
console.log(wonYoung)
console.log(wonYoung2)
// 기존에 데코레이터 선언했던 것들이 다시 실행되지 않는다..
// 클래스에 데코레이터를 적용하게 되면, 클래스의 선언이 읽힐때(선언이 될 때) 딱 한번만 실행이 된다. .

function ChangeClass(value: string){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            groupName = value;
            constructor(...params: any[]) {
                super(...params);
                console.log(`constructor init, ${value}`);
            }
        }
    }
}
/*
constructor init
Idol { name: '장원영', age: 22, groupName: '아이브' }

 */

// 이 함수는 생성자가 존재해야 데코레이팅 할 수 있음
// 이 함수는 해당 클래스에 에 groupName = '아이브' 속성을 추가해서 반환함 (덮어쓰기)

