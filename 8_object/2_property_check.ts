/**
 * Property Check
 *
 * 초과 속성 검사
 */
type TName = {
    name:string
}

type TAge = {
    age: number
}

const iu = {
    name: '아이유',
    age: 30
}

const testName: TName = iu;
const testAge: TAge = iu;

console.log(testName) // { name: '아이유', age: 30 } -> 빌드시 타입만 체크하기 때문에 결국 모든 값이 들어옴

