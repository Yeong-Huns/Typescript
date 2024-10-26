/**
 * Readonly Type
 */
interface Cat {
    name: string;
    age: number;
}
const nyaong: Cat = {
    name: '냐옹이',
    age: 8
}

nyaong.name = '깜이'; // -> 이름 깜이로 변경됨

const bori: Readonly<Cat> = {
    name: '보리',
    age: 7
}

// bori.name = '깜이' -> Readonly 로 만들었기 때문에 , 프로퍼티를 수정할 수 없음

Object.freeze(bori);  // -> 이렇게 해야 자바스크립트에서도 해당 프로퍼티가 수정되지 않도록 할 수있음
// -> 타입스크립트의 Readonly 유틸리티만 사용하면 , 실제 런타임에서 해당 프로퍼티 변경에 대응할 수 없음

