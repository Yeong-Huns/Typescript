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
/**
 * Reflection and Decorator
 */
require("reflect-metadata");
const singValueKey = Symbol('singValue');
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // style 에는 '신나게' | '열정적으로'
    sing(style, rank) {
        //if(style !== '신나게' && style !== '열정적으로') throw Error('안됨');
        return `${this.name}이 ${style} 노래를 부릅니다.`;
    }
}
__decorate([
    ValidateMethod
    // style 에는 '신나게' | '열정적으로'
    ,
    __param(0, RestrictParamValue(['신나게', '열정적으로'])),
    __param(1, RestrictParamValue([1, 2, 3])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Idol.prototype, "sing", null);
function RestrictParamValue(value) {
    return (target, keyName, index) => {
        const prevMeta = Reflect.getOwnMetadata(singValueKey, target, keyName) ?? [];
        console.log('--prev--');
        console.log(prevMeta);
        console.log('-----');
        console.log();
        const info = {
            index,
            value,
        };
        Reflect.defineMetadata(singValueKey, [
            ...prevMeta,
            info
        ], target, keyName);
        console.log('--starts---');
        console.log(Reflect.getOwnMetadata(singValueKey, target, keyName));
        console.log();
    };
}
function ValidateMethod(target, keyName, descriptor) {
    const metas = Reflect.getOwnMetadata(singValueKey, target, keyName) ?? [];
    const original = descriptor.value;
    descriptor.value = function (...args) {
        const invalids = metas.filter(i => !i.value.includes(args[i.index]));
        if (invalids.length > 0)
            throw Error(`잘못된 값입니다. ${invalids.map(x => args[x.index]).join(', ')}`);
        return original.apply(this, args);
    };
}
const yuJin = new Idol('안유진', 23);
console.log('---sing---');
console.log(yuJin.sing('신나게', 1));
//console.log(yuJin.sing('열정적으로',2))
//console.log(yuJin.sing('힘없이',4))
