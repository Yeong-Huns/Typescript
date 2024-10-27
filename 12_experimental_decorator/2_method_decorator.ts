/**
 * Method Decorator
 */

class Idol {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('PROD')
    dance(){
        return `${this.name}가 춤을 춘다.`
    }
    @TestMethodDecorator
    static staticDance(){
        return `${this.name}가 춤을 춘다`
    }
}

function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log('LogCall')
    console.log('---target---');
    console.log(target);
    console.log('---propertyKey---');
    console.log(propertyKey);
    console.log('---descriptor---');
    console.log(descriptor);
}

const rose = new Idol('로제');
/*
LogCall
---target---
{}
---propertyKey---
dance
---descriptor---
{
  value: [Function: dance],
  writable: true,
  enumerable: false,
  configurable: true
}

LogCall
---target---
[class Idol]
---propertyKey---
staticDance
---descriptor---
{
  value: [Function: staticDance],
  writable: true,
  enumerable: false,
  configurable: true
}

target : static method 에 데코레이팅 할 경우 생성자 함수
        : instance method 에 데코레이팅 할 경우 인스턴스의 prototype -> 프로토타입 특성상 빈 객체로 보임(실제 dance 메서드가 프로토타입 내에 존재하지만, 출력하지않음)
propertyKey - 메서드의 이름
descriptor - property description
 */

console.log('---run dance ---');
rose.dance();

function Configurable(configurable: boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.configurable = configurable;
    }
}

console.log(Object.getOwnPropertyDescriptors(Idol.prototype));

function MethodCallLogger(env: string){
    return function (obj: any, keyName: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]){
            console.log(`[${env}] running function : ${keyName}`);
            return originalMethod.apply(this, ...args); // apply -> 원하는 this 컨텍스트로 우리가 원하는 argument 를 전달해서 실행시킬 수 있다.
        }
    }
}

console.log(rose.dance());