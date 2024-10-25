"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generic in Inheritance
 */
class BaseCache {
    constructor() {
        this.data = [];
    }
}
class StringCache extends BaseCache {
}
const stringCache = new StringCache();
stringCache.data; // data: string[]
class GenericChild extends BaseCache {
    constructor(message) {
        super();
        this.message = message;
    }
}
const genericChild = new GenericChild('error');
genericChild.data; // data: string[]
genericChild.message; // message?: string | undefined
class Idol {
    constructor(information) {
        this.information = information;
    }
}
/*const yuJIn = new Idol({
    //name: '안유진', -> name 프로퍼티가 존재하지않으면 에러가 발생함 왜냐하면, BaseGeneric 인터페이스의 name 프로퍼티를 가지도록 강제햇기때문
    age: 23,
})*/
const yuJIn = new Idol({
    name: '안유진',
    age: 23,
});
/**
 * keyof 함께 사용하기
 */
const testsObj = {
    a: 1,
    b: 2,
    c: 3
};
const testsObj2 = {
    d: '가',
    e: '나',
    f: '다',
};
function objectParser(obj, key) {
    return obj[key];
}
function objectParser2(obj, key) {
    return obj[key];
}
function stringParser(str, inx) {
    return str[inx];
}
const val2 = objectParser2(testsObj2, 'd');
const val = objectParser(testsObj, 'a');
//const val = objectParser(testsObj, 'd');
/**
 * Ternary
 * 삼항연산자
 * 1 === 2 ? true : false
 */
class Idol2 {
}
class FemaleIdol extends Idol2 {
    constructor() {
        super(...arguments);
        this.type = 'Female Idol';
    }
}
class MaleIdol extends Idol2 {
    constructor() {
        super(...arguments);
        this.type = 'Male Idol';
    }
}
const idol2 = new FemaleIdol(); // const idol2: FemaleIdol
