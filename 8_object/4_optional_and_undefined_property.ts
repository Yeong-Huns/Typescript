/**
 * Optional and Undefined Property
 */

interface Dog {
    name: string;
    age: number;
    //종을 모르면 undefined
    breed?: string;
}

const byulE: Dog = {
    name: '별이',
    age: 12,
    breed: '미니핀'
}

const ori: Dog = {
    name: '오리',
    age: 3,
    //Optional 은 breed 프로퍼티를 선언하지 않아도 괜찮음
}

interface Cat {
    name: string,
    age: number;
    breed: string | undefined;
}

const nabi: Cat = {
    name: '나비',
    age: 7,
    // Optional 이 아니라면 프로퍼티를 무조건 입력해줘야함
    breed: undefined
}
