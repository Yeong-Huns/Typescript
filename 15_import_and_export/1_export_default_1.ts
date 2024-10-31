/**
 * Export
 */
class IdolModel{
    name: string;
    age: number;
    constructor(name:string, age:number) {
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

export default {
    IdolModel,
    number,
}