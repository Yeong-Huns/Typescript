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
 * Parameter Decorator
 */
class Cat {
    constructor(name) {
        this.name = name;
    }
    eat(adj, num) {
        console.log(`${this.name}는 하루에 ${adj}를 ${num}번 먹습니다.`);
    }
}
__decorate([
    __param(0, LogParam),
    __param(1, LogParam),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Cat.prototype, "eat", null);
const cat = new Cat('까미');
cat.eat('츄르', 3);
// 까미는 하루에 츄르를 3번 먹습니다.
function LogParam(target, propertyKey, paramIndex) {
    console.log(`${propertyKey} 메서드의 ${paramIndex + 1}번째 파라미터가 정의됐습니다. `);
}
