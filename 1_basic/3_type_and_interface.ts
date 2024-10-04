/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS 의 타입에 이름을 지어주는 역할을 한다.
 */

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const StringVar: NewStringType = 'test';

type IdolType = {
    name: string,
    year: number
}

const yuJin: {
    name: string;
    year: number;
} = {
    name: '안유진',
    year: 2002,
}

const yuJin2: IdolType = {
    name: '안유진',
    year: 2002,
}


/**
 * Interface
 *
 * Interface 가 type 보다 늦게 생겼고,
 * type 이 하지못하는 몇가지 문제점을 해결 하기 위해 생김
 * 둘의 기능이 겹치는 부분이 상닿마
 */

interface IdolInterface {
    name: string,
    year: number,
}

const yuJin3 : IdolInterface = {
    name: '안유진',
    year: 2003
}

interface IdolIT{
    name: NewStringType,
    year: NewNumberType
}

const yuJin4: IdolIT = {
    name: '안유진',
    year: 2003
}

interface IdolOptional{
    name: string,
    year?: number, // ? 를 통해 있을수도, 없을수도 있다는 것을 표헌
}

const yuJin5: IdolOptional = {
    name: '안유진',
    //year: 2003, -> 안써도 문제가 없음
}

console.log(yuJin5)