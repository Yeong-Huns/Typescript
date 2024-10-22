"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * readonly 프로퍼티
 */
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const yuJin = new Idol('안유진', 23);
yuJin.age = 32;
//yuJin.name = '김영훈'; -> TS2540: Cannot assign to name because it is a read-only property.
