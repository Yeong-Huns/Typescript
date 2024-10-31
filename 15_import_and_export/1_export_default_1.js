"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Export
 */
class IdolModel {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// export default 는 파일당 한개만 가능
const number = 12;
/*
export default interface ICat{
    name: string;
    age: number
}*/
exports.default = {
    IdolModel,
    number,
};
