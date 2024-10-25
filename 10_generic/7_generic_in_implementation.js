"use strict";
/**
 * Generic in Implementation
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Idol {
    constructor(name) {
        this.name = name;
    }
    sing(year) {
        console.log(`[${year}] ${this.name}이 노래를 부릅니다.`);
    }
}
const yuJin = new Idol('안유진');
yuJin.sing(2003);
class Idol2 {
    constructor(name) {
        this.name = name;
    }
    sing(year) {
        console.log(`[${year}] ${this.name}이 노래를 부릅니다.`);
    }
}
const wonYoung = new Idol2('장원영');
wonYoung.sing(2003);
