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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Rectangle_height, _Rectangle_width;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Accessor Decorator
 */
class Rectangle {
    constructor(height, width) {
        _Rectangle_height.set(this, void 0);
        _Rectangle_width.set(this, void 0);
        __classPrivateFieldSet(this, _Rectangle_height, height, "f");
        __classPrivateFieldSet(this, _Rectangle_width, width, "f");
    }
    get height() {
        return __classPrivateFieldGet(this, _Rectangle_height, "f");
    }
    get width() {
        return __classPrivateFieldGet(this, _Rectangle_width, "f");
    }
}
_Rectangle_height = new WeakMap(), _Rectangle_width = new WeakMap();
__decorate([
    Configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Rectangle.prototype, "height", null);
__decorate([
    Configurable(true),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Rectangle.prototype, "width", null);
function Configurable(configurable) {
    return function (target, keyName, descriptor) {
        descriptor.configurable = configurable;
    };
}
const rectangle = new Rectangle(100, 300);
console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
