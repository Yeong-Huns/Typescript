"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PropertyTestParent_jsPrivateProperty;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Visibility Keyword
 *
 * 1) public (기본값) - 어디든 접근이 가능하다.
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class PropertyTestParent {
    constructor() {
        this.publicProperty = 'public property';
        this.protectedProperty = 'protected property';
        this.privateProperty = 'private property';
        _PropertyTestParent_jsPrivateProperty.set(this, 'js private property'); // -> 실제 자바스크립트에 존재함
    }
    test() {
        this.publicProperty;
        this.privateProperty;
        this.protectedProperty;
        __classPrivateFieldGet(this, _PropertyTestParent_jsPrivateProperty, "f");
    }
}
_PropertyTestParent_jsPrivateProperty = new WeakMap();
class PropertyTestChild extends PropertyTestParent {
    test() {
        this.publicProperty;
        this.protectedProperty; // -> 이 내부에서만 사용가능
        //this.protectedProperty;
        //this.#jsPrivateProperty;
    }
}
const instance = new PropertyTestChild();
instance.publicProperty;
// instance.protectedProperty -> 불가능
