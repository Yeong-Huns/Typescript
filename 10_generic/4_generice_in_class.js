"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class 에서 Generic 사용
 */
class Pagination {
    constructor() {
        this.data = [];
    }
}
const pgData = new Pagination();
pgData.data; // data: number[]
pgData.message; // message?: string | undefined
pgData.lastFetchedAt; // lastFetchedAt?: Date | undefined
class Pagination2 {
    constructor(data, message, lastFetchedAt) {
        this.data = [];
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}
const pagination2 = new Pagination2([123, 456]);
pagination2.data; // data: number[]
pagination2.message; // message: unknown
pagination2.lastFetchedAt; // lastFetchedAt?: Date | undefined
class DefaultGeneric {
    constructor() {
        this.data = [];
    }
}
const defaultGeneric = new DefaultGeneric();
defaultGeneric.data; // const defaultGeneric: DefaultGeneric<boolean>
