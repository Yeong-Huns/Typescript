"use strict";
/**
 * Type vs Interface
 * 타입이 먼저 나오고, 그 후 인터페이스가 나왔다.
 * 하지만 완전 대체는 불가 (수행 하는 역할이 다름)
 */
Object.defineProperty(exports, "__esModule", { value: true });
let rectangle = {
    height: 200,
    width: 100
};
/**
 * Type 은 같은 이름으로 중복 선언 자체가 안됨
 *
 * type TRectangle = {
 *     height: number;
 * }
 * type TRectangle = {
 *     width: number;
 * }
 */
/**
 * interface Merging
 */
class Review {
    constructor() {
        // 프로퍼티 -> 인스턴스에 귀속
        this.getY = (x) => x;
    }
    // 메소드(함수) -> 프로토타입에 귀속
    getX(x) {
        return x;
    }
}
const testMethod = {
    getX(x) {
        return x;
    },
    getY(y) {
        return 1;
    }
};
