"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract class
 */
class ModelWithId {
    constructor(id) {
        this.id = id;
    }
}
//const modelWithId = new ModelWithId(123); // TS2511: Cannot create an instance of an abstract class.
class Product extends ModelWithId {
}
const product = new Product(1);
product.id;
class ModelWithAbstractMethod {
}
class Person extends ModelWithAbstractMethod {
    shout(name) {
        return '소리질러~';
    }
}
