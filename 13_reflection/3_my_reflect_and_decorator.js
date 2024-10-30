"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const paramValue = Symbol('paramValue');
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(food, num) {
        return `${this.name}는 하루에 ${food}(을)를  ${num}번 먹습니다.`;
    }
}
__decorate([
    ValidateMethod,
    __param(0, RestrictParam(['밥', '츄르'])),
    __param(1, RestrictParam([1, 2, 3])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Cat.prototype, "eat", null);
function RestrictParam(value) {
    return (target, keyName, index) => {
        const defineMeta = Reflect.getOwnMetadata(paramValue, target, keyName) ?? [];
        const paramInfo = {
            index,
            value
        };
        Reflect.defineMetadata(paramValue, [
            ...defineMeta,
            paramInfo
        ], target, keyName);
        console.log(Reflect.getOwnMetadata(paramValue, target, keyName));
    };
}
function ValidateMethod(target, keyName, descriptor) {
    const metaData = Reflect.getOwnMetadata(paramValue, target, keyName) ?? [];
    const prev = descriptor.value;
    descriptor.value = function (...args) {
        const invalidValues = metaData.filter(meta => !meta.value.includes(args[meta.index]));
        if (invalidValues.length > 0)
            throw Error(`잘못된 값입니다. ${invalidValues.map(i => args[i.index]).join(', ')}`);
        return prev.apply(this, args);
    };
}
const myCat = new Cat('깜이', 5);
console.log('---');
console.log(myCat.eat('밥', 3));
console.log(myCat.eat('츄르', 1));
console.log(myCat.eat('생선', 4));
