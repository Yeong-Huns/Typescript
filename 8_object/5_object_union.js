"use strict";
/**
 * Object Union
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ?
    //강아지
    {
        name: '별이',
        age: 12,
    } :
    {
        name: '오리',
        breed: '코숏',
    };
dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;
const dogOrCat2 = Math.random() > 0.5 ?
    //강아지
    {
        name: '별이',
        age: 12,
    } :
    {
        name: '오리',
        breed: '코숏',
    };
dogOrCat2.name; // -> string
//dogOrCat2.age; // -> TS2339: Property age does not exist on type DogOrCat Property age does not exist on type Cat -> 이것이 Cat 일 수가 있기 때문에
//dogOrCat2.breed; // -> TS2339: Property breed does not exist on type DogOrCat Property breed does not exist on type Dog -> 이것이 Dog 일 수가 있기 때문에
if ('age' in dogOrCat2) {
    dogOrCat2;
    dogOrCat2.name;
    dogOrCat2.age;
    //dogOrCat2.breed; -> Dog 에는 breed 가 없기 떄문
}
else {
    dogOrCat2;
    dogOrCat2.name;
    dogOrCat2.breed;
    //dogOrCat2.age -> Cat 에는 age 가 없기때문
}
