/**
 * Type vs Interface
 * 타입이 먼저 나오고, 그 후 인터페이스가 나왔다.
 * 하지만 완전 대체는 불가 (수행 하는 역할이 다름)
 */

interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function 을 선언할때
interface IFunction {
    (x: number, y: number) : number;
}

type TFunction  = (x: number, y: number) => number;

/**
 * Type 에서는 할 수 있지만,
 * interface 에서는 할 수 없는 것들
 */


//(1) primitive 타입 선언하기
type Name = string;

//(2) Union 타입 선언하기
type UnionType = string | number;

//(3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * interface는 할 수 있고
 * Type 은 못하는 것
 */

// (1) interface merging (인터페이스 합병)
interface IRectangle{
    height: number;
}
interface IRectangle{
    width: number;
}

let rectangle: IRectangle = {
    height: 200,
    width: 100
}

/**
 * Type 은 같은 이름으로 중복 선언 자체가 안됨
 *
 * type TRectangle = {
 *     height: number;
 * }
 * type TRectangle = {
 *     width: number;
 * }
 */

/**
 * interface Merging
 */
class Review {
    // 프로퍼티 -> 인스턴스에 귀속
    getY = (x: number)=> x;
    // 메소드(함수) -> 프로토타입에 귀속
    getX(x: number){
        return x;
    }
}

interface GetXnY {
    getX: (x:number) => number;
    getY: (y:number) => number;
}

interface GetXnY {
    getX: (x:number) => number;
    //getY: (y:string) => number; => 프로퍼티는 오버로딩이 안됨!!
}

interface GetXnY2 {
    getX(x:number): number;
    getY(y:number): number;
}

interface GetXnY2 {
    getX(x:number): number;
    getY(y:string): number;
}

const testMethod: GetXnY2 = {
    getX(x){
        return x;
    },
    getY(y){
        return 1;
    }
}