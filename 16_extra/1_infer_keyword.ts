/**
 * Infer Keyword
 *
 * 유추하다
 *
 * 타입을 추가로 유추하게 해주는 키워드
 * (Inferring Type in Conditional Type)
 *
 * Infer Keyword 는 Conditional Type 에서만 사용 가능한 키워드
 * 그러니 extends 키워드를 사용했을때 extend 한 대상에서 타입을 한번 더 추론하는 역할을 한다.
 */

// 1) 가장 많이 사용하는 예제
// Flattening -> Array 벗겨낼떼
// string[] -> string
// string[][] -> string[]
type Flatten<Type> = Type extends Array<string> ? string : Type;

type StringArray = Flatten<string[]>; // string
type NumberArray = Flatten<number[]>; // number[]

type Flatten2<Type, ElementType> = Type extends Array<ElementType> ? ElementType : Type;

type StringArray2 = Flatten2<string[], string>; // string
type NumberArray2 = Flatten2<number[], number>; // number

type Flatten3<Type> = Type extends Array<infer ElementType> ? ElementType : Type;

type StringArray3 = Flatten3<string[]>; // string
type NumberArray3 = Flatten3<number[]>; // number

type Flatten4<Type> = Type extends (infer ElementType)[] ? ElementType : Type;
type StringArray4 = Flatten4<string[]>; // string
type NumberArray4 = Flatten4<number[]>; // number

// 2) Return Type 추론
type InferReturnType<Type> = Type extends (...args:any[]) => string ? string : Type;
type NumberArray5 = InferReturnType<number[]>; // number[]
type StringFunc = InferReturnType<()=>string>;  // string;
type NumberFunc = InferReturnType<()=> number>; // () => number;

type InferReturnType2<Type> = Type extends (...args:any[]) => infer ReturnType ? ReturnType : Type;
type StringFunc2 = InferReturnType2<()=>string>;  // string;
type NumberFunc2 = InferReturnType2<()=> number>; // number;