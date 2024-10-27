/**
 * Partial Type
 */
interface Idol{
    name: string;
    age: number;
    groupName: string;
}

type Idol2 = {
    name: string;
    age: number;
    groupName: string;
}

const yuJin2: Idol2 = {
    name: '안유진',
    age: 23,
    groupName: '아이브'
}

function updateIdol2(original: Idol2, updates: Partial<Idol2>): Idol2 {
    return {
        ...original,
        ...updates
    }
}

console.log(updateIdol2(yuJin2, {
    name: '김영훈',
    age: 31,
    groupName: '백수'
}));

const yuJin: Idol = {
    name: '안유진',
    age: 23,
    groupName: '아이브'
}

function updateIdol(original: Idol, updates: Partial<Idol>):Idol{
    return {
        ...original,
        ...updates,
    }
}

console.log(updateIdol(yuJin, {
    age: 27
})) // { name: '안유진', age: 27, groupName: '아이브' } -> 27 살로 변경

console.log(updateIdol(yuJin, {
    name: '김영훈',
    age: 31,
    groupName: '백수'
}))

/**
 * Partial<> -> 일정부분을 가지고 있게 하고 싶으면 사용
 */