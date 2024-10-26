/**
 * Exclude Type
 */
type NoString = Exclude<string|boolean|number, string>;  //Initial type: boolean | number

type NoFunction = Exclude<string | (()=>void), Function> // -> 이건 이제 string 타입임 (함수를 제외했으니)

// 근데 이건 어디다 씀?