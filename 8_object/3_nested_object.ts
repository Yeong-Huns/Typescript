/**
 * Nested Object
 */

type NestedPerson = {
    identity:{
        name: string,
        age: number,
    },
    nationality: string;
}

const yeongHun: NestedPerson = {
    identity:{
        name: '김영훈',
        age: 31,
    },
    nationality: '한국인'
}
console.log(yeongHun);

type TPerson = {
    identity:TPersonIdentity,
    nationality: string,
}

type TPersonIdentity = {
    name: string;
    age: number
}; // -> nesting 된 객체를 여러 타입으로 구성하는것이 리팩토링에 유리

const iu: TPerson = {
    identity:{
        name: '아이유',
        age: 31,
    },
    nationality: '한국인'
}
console.log(iu)

interface IPerson{
    identity: IPersonIdentity;
    nationality: string;
}

interface IPersonIdentity{
    name: string;
    age: number;
}

const yuJin:IPerson = {
    identity: {
        name: '안유진',
        age: 22
    },
    nationality: '한국인'
}