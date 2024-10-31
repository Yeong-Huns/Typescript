/**
 * Import
 */
import Example from "./1_export_default_1";

const iu = new Example.IdolModel('아이유', 23);
console.log(iu) // IdolModel { name: '아이유', age: 23 } or number

const number = Example.number;