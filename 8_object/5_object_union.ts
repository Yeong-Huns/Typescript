/**
 * Object Union
 */

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
    }
dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

/**
 * 현재 타입을 보면,
 * const dogOrCat:
 * {     name: string     age: number     breed?: undefined } |
 * {     name: string     breed: string     age?: undefined }
 * 같은 식으로 breed 나 age 가 Optional 로 들어가는것 처럼 추론을 하고 있는데,
 * 우리가 원하는것은 이것이 아니라 , Cat 이면 아예 age 가 존재하지 않고,
 * Dog면 breed 가 존재하지 않는것이다.
 * 이런 때는 따로 type 을 선언해줘야 한다.
 */

interface Dog{
    name: string,
    age: number
}
interface Cat{
    name: string,
    breed: string
}
type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    //강아지
    {
        name: '별이',
        age: 12,
    } :
    {
        name: '오리',
        breed: '코숏',
    }
dogOrCat2.name; // -> string
//dogOrCat2.age; // -> TS2339: Property age does not exist on type DogOrCat Property age does not exist on type Cat -> 이것이 Cat 일 수가 있기 때문에
//dogOrCat2.breed; // -> TS2339: Property breed does not exist on type DogOrCat Property breed does not exist on type Dog -> 이것이 Dog 일 수가 있기 때문에

if('age' in dogOrCat2){
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