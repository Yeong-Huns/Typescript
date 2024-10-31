"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = exports.rose = exports.IdolModel = void 0;
/**
 * Export
 */
class IdolModel {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.IdolModel = IdolModel;
exports.rose = new IdolModel('로제', 28);
exports.number = 999;
exports.default = {
    name: '김영훈',
    age: 31
};
