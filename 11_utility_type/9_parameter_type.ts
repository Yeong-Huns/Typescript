/**
 * Parameter Type
 */
function sampleFunction(x: number, y: string, z: boolean){

}

type Params = Parameters<typeof sampleFunction>; // [x: number, y: string, z: boolean]
type Params2 = Parameters<(one:number)=>void>; // [one: number]

/*
    함수의 파라미터들과 타입을 가져옴 
 */