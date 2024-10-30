"use strict";
/**
 * Method Decorator
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
class Idol {
    constructor(name) {
        this.name = name;
    }
    dance() {
        return `${this.name}가 춤을 춘다.`;
    }
    static staticDance() {
        return `${this.name}가 춤을 춘다`;
    }
}
__decorate([
    TestMethodDecorator
    //@Configurable(false)
    ,
    MethodCallLogger('PROD'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Idol.prototype, "dance", null);
__decorate([
    TestMethodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Idol, "staticDance", null);
function TestMethodDecorator(target, propertyKey, descriptor) {
    console.log('----------');
    console.log('::target::');
    console.log(target);
    console.log('::propertyKey::');
    console.log(`key: ${propertyKey}`);
    console.log('::descriptor::');
    console.log(descriptor);
}
const rose = new Idol('로제');
console.log('==============');
console.log(Idol.staticDance());
console.log('==============');
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
function Configurable(configurable) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = configurable;
    };
}
console.log(Object.getOwnPropertyDescriptors(Idol.prototype));
function MethodCallLogger(env) {
    return function (obj, keyName, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`[${env}] running function : ${keyName}`);
            return originalMethod.apply(this, ...args); // apply -> 원하는 this 컨텍스트로 우리가 원하는 argument 를 전달해서 실행시킬 수 있다.
        };
    };
}
console.log(rose.dance());
console.log(rose.dance());
console.log(rose.dance());
