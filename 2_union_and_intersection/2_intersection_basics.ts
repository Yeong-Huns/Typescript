/**
 * Intersection
 *
 * And
 */

interface Human{
    name: string;
    age: number;
}

interface Contacts{
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts; // Human 이면서 Contacts

let humanAndContacts: HumanAndContacts = {
    name: '김영훈',
    age: 31,
    phone: "0101234567",
    address: "대한민국"
} // => Human 과 Contact 모든 property 를 가지고 있어야한다!!

type NumberAndString = number & string; // => number  이면서 string ???
// let numberAndString: never  => never 타입 : 절대 도달할 수 없는 타입 (무한 for문 과 같은 경우)


