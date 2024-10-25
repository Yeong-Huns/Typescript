/**
 * Generic in Inheritance
 */
class BaseCache<T>{
    data: T[] = [];
}

class StringCache extends BaseCache<string>{}

const stringCache = new StringCache();
stringCache.data; // data: string[]

class GenericChild<T, Message> extends BaseCache<T>{
    message?: Message;
    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data; // data: string[]
genericChild.message; // message?: string | undefined

/**
 * Generic inheritance
 */
interface BaseGeneric{
    name: string;
}
class Idol<T extends BaseGeneric>{
    information: T;
    constructor(information: T) {
        this.information = information;
    }
}

/*const yuJIn = new Idol({
    //name: '안유진', -> name 프로퍼티가 존재하지않으면 에러가 발생함 왜냐하면, BaseGeneric 인터페이스의 name 프로퍼티를 가지도록 강제햇기때문
    age: 23,
})*/

const yuJIn = new Idol({
    name: '안유진',
    age: 23,
})

/**
 * keyof 함께 사용하기
 */
const testsObj = {
    a: 1,
    b: 2,
    c: 3
}

const testsObj2 = {
    d: '가',
    e: '나',
    f: '다',
}


function objectParser<O, K extends keyof O>(obj:O, key: K){
    return obj[key];
}

function objectParser2<O, K extends keyof O>(obj:O, key: K){
    return obj[key];
}

function stringParser(str:string, inx:number){
    return str[inx];
}

const val2 = objectParser2(testsObj2, 'd')


const val = objectParser(testsObj, 'a');
//const val = objectParser(testsObj, 'd');






/**
 * Ternary
 * 삼항연산자
 * 1 === 2 ? true : false
 */
class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2{
    type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2{
    type: 'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol(); // const idol2: FemaleIdol