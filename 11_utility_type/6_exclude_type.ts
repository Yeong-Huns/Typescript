/**
 * Exclude Type
 */
type manyType = string | boolean | number

type NoString = Exclude<manyType, string>;  //Initial type: boolean | number

type booleanOnly = Exclude<manyType, string | number>

type NoFunction = Exclude<string | (()=>void), Function> // -> 이건 이제 string 타입임 (함수를 제외했으니)

// 근데 이건 어디다 씀?