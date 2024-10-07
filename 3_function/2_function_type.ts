/**
 * Function Type
 */

const runner = () => {
    return ['안유진', '장원영', '레이'].map(
        x=> `아이브 멤버: ${x}`
    )
}
console.log(runner());

type Mapper = (x: string) => string;

const runner2 = (callback: Mapper) => {
    return ['안유진', '장원영', '레이'].map(
        callback
    );
}

console.log(runner2(x=> `아이브 멤버: ${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => x * y;
// 알아서 타입과 반환타입까지 유추 가능

/**
 * Interface 로 함수 타입 선언하기
 */
interface  IMultiplyTwoNumbers{
    (x: number, y: number): number;
}

const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => x * y;
console.log(multiplyTwoNumbers3(10, 10));